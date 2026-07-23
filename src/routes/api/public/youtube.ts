import { createFileRoute } from "@tanstack/react-router";

type Video = {
  id: string;
  title: string;
  url: string;
  published: string;
  thumb: string;
};

const CHANNELS: Record<string, string> = {
  podcast: "UCppmk6MXUIpPRxuAg6petXQ",
  advocacia: "UCdHXDACg-92oEYyT4gSAcSQ",
};

function pick(xml: string, tag: string, from = 0): { value: string; end: number } | null {
  const openIdx = xml.indexOf(`<${tag}`, from);
  if (openIdx === -1) return null;
  const gt = xml.indexOf(">", openIdx);
  const close = xml.indexOf(`</${tag}>`, gt);
  if (gt === -1 || close === -1) return null;
  return { value: xml.slice(gt + 1, close).trim(), end: close };
}

function attr(xml: string, tag: string, name: string, from = 0): string | null {
  const openIdx = xml.indexOf(`<${tag}`, from);
  if (openIdx === -1) return null;
  const gt = xml.indexOf(">", openIdx);
  const chunk = xml.slice(openIdx, gt);
  const m = chunk.match(new RegExp(`${name}="([^"]+)"`));
  return m ? m[1] : null;
}

export const Route = createFileRoute("/api/public/youtube")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const key = url.searchParams.get("channel") ?? "podcast";
        const limit = Math.min(12, Math.max(1, Number(url.searchParams.get("limit") ?? "6")));
        const channelId = CHANNELS[key];
        if (!channelId) {
          return Response.json({ videos: [], error: "unknown channel" }, { status: 200 });
        }
        try {
          const res = await fetch(
            `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
            { headers: { Accept: "application/atom+xml" } },
          );
          if (!res.ok) {
            return Response.json(
              { videos: [], error: `Feed error ${res.status}` },
              { status: 200, headers: { "Cache-Control": "public, max-age=600" } },
            );
          }
          const xml = await res.text();
          const videos: Video[] = [];
          let cursor = 0;
          while (videos.length < limit) {
            const entryStart = xml.indexOf("<entry", cursor);
            if (entryStart === -1) break;
            const entryEnd = xml.indexOf("</entry>", entryStart);
            if (entryEnd === -1) break;
            const entry = xml.slice(entryStart, entryEnd);
            const id = pick(entry, "yt:videoId")?.value ?? "";
            const title = pick(entry, "title")?.value ?? "";
            const published = pick(entry, "published")?.value ?? "";
            const link = attr(entry, "link", "href") ?? `https://www.youtube.com/watch?v=${id}`;
            if (id) {
              videos.push({
                id,
                title: title.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'"),
                url: link,
                published,
                thumb: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
              });
            }
            cursor = entryEnd + 8;
          }
          return Response.json(
            { videos },
            {
              status: 200,
              headers: { "Cache-Control": "public, max-age=600, s-maxage=600" },
            },
          );
        } catch (err) {
          return Response.json(
            { videos: [], error: (err as Error).message },
            { status: 200 },
          );
        }
      },
    },
  },
});
