import { createFileRoute } from "@tanstack/react-router";

type BlogPost = {
  id: string;
  title: string;
  url: string;
  published: string;
  snippet: string;
  image: string | null;
};

const FEED_URL =
  "https://passianiadvogado.blogspot.com/feeds/posts/default?alt=json&max-results=3";

function stripHtml(html: string): string {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function firstImage(html: string): string | null {
  const m = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return m ? m[1] : null;
}

export const Route = createFileRoute("/api/public/blog")({
  server: {
    handlers: {
      GET: async () => {
        try {
          const res = await fetch(FEED_URL, {
            headers: { Accept: "application/json" },
          });
          if (!res.ok) {
            return Response.json(
              { posts: [], error: `Feed error ${res.status}` },
              { status: 200, headers: { "Cache-Control": "public, max-age=600" } },
            );
          }
          const data = (await res.json()) as {
            feed?: {
              entry?: Array<{
                id?: { $t?: string };
                published?: { $t?: string };
                title?: { $t?: string };
                content?: { $t?: string };
                summary?: { $t?: string };
                link?: Array<{ rel?: string; type?: string; href?: string }>;
              }>;
            };
          };

          const entries = data.feed?.entry ?? [];
          const posts: BlogPost[] = entries.slice(0, 3).map((e) => {
            const html = e.content?.$t ?? e.summary?.$t ?? "";
            const alt = e.link?.find((l) => l.rel === "alternate")?.href ?? "#";
            return {
              id: e.id?.$t ?? alt,
              title: e.title?.$t ?? "Sem título",
              url: alt,
              published: e.published?.$t ?? "",
              snippet: stripHtml(html).slice(0, 220),
              image: firstImage(html),
            };
          });

          return Response.json(
            { posts },
            {
              status: 200,
              headers: {
                "Cache-Control": "public, max-age=600, s-maxage=600",
              },
            },
          );
        } catch (err) {
          return Response.json(
            { posts: [], error: (err as Error).message },
            { status: 200 },
          );
        }
      },
    },
  },
});
