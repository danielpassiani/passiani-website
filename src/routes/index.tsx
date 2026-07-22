import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Shield, FileSignature, Users, AlertTriangle, Landmark, Scale,
  Star, MapPin, Phone, Mail, Instagram, Youtube, Mic, MessageCircle,
  ArrowRight, Clock, ChevronDown, Quote, Facebook, PlayCircle,
  BookOpen, GraduationCap, Award, Sparkles,
} from "lucide-react";
import headerAsset from "@/assets/passiani-header.png.asset.json";
import footerAsset from "@/assets/passiani-footer.png.asset.json";
import logoAsset from "@/assets/passiani-logo.jpg.asset.json";
import portrait from "@/assets/passiani-portrait.jpg.asset.json";
import working from "@/assets/passiani-working.jpg.asset.json";
import escritorioAsset from "@/assets/passiani-escritorio.png.asset.json";
import penseBemCover from "@/assets/pense-bem-cover.png.asset.json";
import certBacharel from "@/assets/cert-bacharel.jpg.asset.json";
import certOab from "@/assets/cert-oab.jpg.asset.json";
import certHonra from "@/assets/cert-honra.jpg.asset.json";
import certCivil from "@/assets/cert-civil.jpg.asset.json";
import certPenal from "@/assets/cert-penal.jpg.asset.json";
import certMestre from "@/assets/cert-mestre.jpg.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Passiani Advogados — A defesa começa no contrato" },
      { name: "description", content: "Advocacia empresarial há 25 anos. Blindagem jurídica, contratos, trabalhista e tributário para pequenas e médias empresas." },
      { property: "og:title", content: "Passiani Advogados — A defesa começa no contrato" },
      { property: "og:description", content: "Menos processo, mais lucro. Advocacia empresarial full service para proteção do empreendedor." },
    ],
  }),
  component: Home,
});

const WHATSAPP = "https://wa.me/551122190510?text=Olá,%20gostaria%20de%20agendar%20uma%20conversa%20com%20a%20Passiani%20Advogados.";

const YOUTUBE_CHANNEL = "https://www.youtube.com/@podissopassiani";
const INSTAGRAM = "https://instagram.com/passianiadvogados";
const FACEBOOK = "https://web.facebook.com/profile.php?id=61589470156729";
const GOOGLE_MAPS = "https://maps.app.goo.gl/2MQjUMUksJyG5FfV7";
const MASTERCLASS = "https://hotmart.com/pt-br/marketplace/produtos/masterclass-metodo-contratacao-blindada/O101373502C";
const AMAZON_BOOK = "https://www.amazon.com.br/Pense-Bem-Marcelo-Passiani/dp/8590632105";

const certificates = [
  { img: certBacharel.url, title: "Bacharel em Direito", org: "Centro Universitário Estácio Radial de São Paulo", year: "2005" },
  { img: certOab.url, title: "Certificado de Compromisso OAB/SP", org: "Ordem dos Advogados do Brasil — Secção SP", year: "2005" },
  { img: certHonra.url, title: "Diploma Honra ao Mérito", org: "OAB-SP · Assistência Judiciária", year: "2006" },
  { img: certCivil.url, title: "Especialista em Direito Civil", org: "Escola Paulista de Direito — EPD", year: "2007" },
  { img: certPenal.url, title: "Especialista em Direito Penal e Processual Penal", org: "Faculdade Escola Paulista de Direito — EPD", year: "2018" },
  { img: certMestre.url, title: "Mestre em Função Social do Direito", org: "Faculdade Autônoma de Direito — FADISP", year: "2017" },
];

const areas = [
  { icon: Shield, title: "Blindagem Patrimonial", desc: "Holdings, reorganização societária e proteção de bens pessoais contra riscos empresariais." },
  { icon: FileSignature, title: "Contratos Empresariais", desc: "Contratos societários, comerciais e de prestação de serviços feitos para prevenir litígios." },
  { icon: Users, title: "Trabalhista Empresarial", desc: "CLT, PJ, demissões seguras e mapeamento de riscos antes que o processo chegue." },
  { icon: AlertTriangle, title: "Prevenção de Processos", desc: "Gestão de riscos jurídicos: auditoria, compliance e políticas internas." },
  { icon: Landmark, title: "Tributário para PMEs", desc: "Planejamento tributário legal para reduzir carga e manter a empresa em conformidade." },
  { icon: Scale, title: "Consultoria Estratégica", desc: "Assessoria mensal — o advogado ao lado do empresário em cada decisão relevante." },
];

const impact = [
  "A empresa não é sua casa.",
  "Empresa blindada dorme tranquilo.",
  "O tempo do jeitinho acabou.",
  "A defesa começa no contrato.",
];

// Cortes do Pod Isso Passiani: cada card aponta para o vídeo original (YouTube ou Instagram).
// Para adicionar um novo corte, copie o link completo do post/vídeo em `url` e defina `platform`.
// - YouTube Shorts: https://www.youtube.com/shorts/ID  → platform: "youtube", youtubeId: "ID"
// - Instagram Reel/Post: https://www.instagram.com/p/ID/  → platform: "instagram" (não precisa youtubeId)
type Episode = {
  n: string;
  title: string;
  tag: string;
  platform: "youtube" | "instagram";
  url: string;
  youtubeId?: string;
};
const episodes: Episode[] = [
  { n: "01", title: "18 contratos que toda empresa deve ter com cada funcionário", tag: "Contratos", platform: "youtube", url: "https://www.youtube.com/shorts/U8J5tfjMq9c", youtubeId: "U8J5tfjMq9c" },
  { n: "02", title: "5 documentos para proteger o seu patrimônio", tag: "Blindagem", platform: "instagram", url: "https://www.instagram.com/p/DajDYtHPlpn/" },
  { n: "03", title: "Ele não quis CLT… mas te processou depois", tag: "Trabalhista", platform: "instagram", url: "https://www.instagram.com/p/DayYg9IMtw2/" },
  { n: "04", title: "Contrato mal feito hoje, processo certo amanhã", tag: "Contratos", platform: "instagram", url: "https://www.instagram.com/p/Da1GI51vaCC/" },
  { n: "05", title: "Segurança no trabalho: o que você ignora hoje pode custar caro amanhã", tag: "Prevenção", platform: "instagram", url: "https://www.instagram.com/p/DbGrX0Ys2Lc/" },
  { n: "06", title: "Sócio de trabalho: parceria ou dor de cabeça?", tag: "Societário", platform: "instagram", url: "https://www.instagram.com/p/DaNxvWoOXDu/" },
];


const testimonials = [
  { q: "Não confio em outro escritório para cuidar da minha empresa que não seja o Passiani. Atendimento próximo, técnico e sempre um passo à frente.", a: "Cliente empresarial há 8 anos" },
  { q: "Excelente profissional. Sempre muito atencioso, competente e comprometido com cada detalhe. Recomendo sem hesitar.", a: "Sócio de indústria de médio porte" },
  { q: "Reestruturamos toda a parte contratual e societária. A tranquilidade que temos hoje não tem preço.", a: "CEO, empresa de tecnologia" },
];

const faqs = [
  { q: "O que é blindagem patrimonial?", a: "É a organização legal e preventiva do seu patrimônio pessoal e empresarial para reduzir a exposição a riscos: dívidas, processos, sucessão e sociedade. Feita com contratos, holding e governança — nunca com fraude." },
  { q: "Só posso contratar se já tiver um processo?", a: "Não. Aliás, o momento certo é antes. Nosso trabalho é justamente evitar que o processo aconteça. Quem chega antes paga menos e dorme melhor." },
  { q: "Vocês atendem empresas de qualquer porte?", a: "Somos especializados em pequenas e médias empresas. É onde nossa metodologia entrega o maior retorno em proteção e economia." },
  { q: "Como funciona a consultoria mensal?", a: "Você tem um advogado à disposição para revisar contratos, orientar decisões, apoiar RH e prevenir conflitos. Um custo fixo previsível no lugar de honorários emergenciais." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground bg-noise">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Credentials />
      <Areas />
      <Content />
      <Masterclass />
      <Book />
      <Escritorio />
      <Testimonials />
      <SocialProof />
      <Faq />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#atuacao", label: "Áreas" },
    { href: "#conteudo", label: "Conteúdo" },
    { href: "#masterclass", label: "Masterclass" },
    { href: "#livro", label: "Livro" },
    { href: "#escritorio", label: "Escritório" },
    { href: "#contato", label: "Contato" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Passiani Advogados — Início">
          <img
            src={logoAsset.url}
            alt="Passiani Advogados"
            width={220}
            height={64}
            className="h-9 w-auto object-contain sm:h-10"
          />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-gold">
              {l.label}
            </a>
          ))}
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-gold">Fale conosco</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-gold" aria-label="Menu">
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-4 bg-current ml-auto" />
          </div>
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-gold">
                {l.label}
              </a>
            ))}
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-gold mt-2">Fale conosco</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.15fr_1fr] md:gap-14 md:py-24 lg:px-8 lg:py-32">
        <div className="relative z-10 flex flex-col justify-center">
          <span className="eyebrow"><span className="gold-rule" /> Advocacia Empresarial · Desde 2004</span>
          <h1 className="headline mt-6 text-5xl text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            A defesa <span className="gold-gradient">começa</span> no contrato.
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Há mais de 20 anos protegendo pequenos e médios empresários com advocacia full service.
            <strong className="text-foreground"> Menos processo, mais lucro.</strong>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Agendar uma conversa <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#atuacao" className="btn-ghost-gold">Ver áreas</a>
          </div>
          <div className="mt-10 flex items-center gap-4 border-t border-border/60 pt-6">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">4,9</strong> no Google · 45 avaliações reais
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-sm bg-[radial-gradient(circle_at_50%_50%,oklch(0.78_0.13_82/0.18),transparent_70%)]" />
          <div className="relative overflow-hidden border border-border/60">
            <img
              src={portrait.url}
              alt="Dr. Marcelo Passiani — Advogado responsável pela Passiani Advogados"
              width={1920}
              height={1280}
              className="aspect-[4/5] h-full w-full object-cover object-top grayscale contrast-110"

            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent p-6">
              <p className="font-display text-xs uppercase tracking-[0.3em] text-gold">Dr. Marcelo Passiani</p>
              <p className="mt-1 text-sm text-muted-foreground">OAB/SP 237.206 · Advogado responsável</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <div className="border-y border-border/50 bg-ink py-5 overflow-hidden">
      <div className="flex animate-[scroll_40s_linear_infinite] gap-12 whitespace-nowrap">
        {[...impact, ...impact, ...impact].map((t, i) => (
          <span key={i} className="font-display text-2xl uppercase tracking-wide text-muted-foreground sm:text-3xl">
            {t} <span className="mx-6 text-gold">◆</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { from{transform:translateX(0)} to{transform:translateX(-33.333%)} }`}</style>
    </div>
  );
}

function About() {
  return (
    <section id="sobre" className="relative border-b border-border/50">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28 lg:px-8">
        <div>
          <span className="eyebrow"><span className="gold-rule" /> Sobre o escritório</span>
          <h2 className="headline mt-5 text-4xl sm:text-5xl md:text-6xl">
            Mais de 20 anos <br /><span className="gold-gradient">protegendo</span> empresários.
          </h2>
          <div className="mt-8 space-y-5 text-muted-foreground">
            <p className="text-lg">
              A Passiani Advogados nasceu de uma convicção simples: <strong className="text-foreground">o melhor processo é o que nunca acontece</strong>.
              Somos um escritório full service voltado à proteção jurídica de pequenas e médias empresas.
            </p>
            <p>
              Trabalhamos ao lado do empresário para blindar patrimônio, estruturar contratos que não deixam brechas, organizar a operação e evitar
              conflitos antes que virem prejuízo. Falamos a verdade dura que o dono do negócio precisa ouvir — mesmo quando não é a resposta mais confortável.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
            <Stat n="22+" label="anos de atuação" />
            <Stat n="500+" label="empresas atendidas" />
            <Stat n="4,9" label="★ no Google" />
          </div>
        </div>
        <div className="relative">
          <div className="relative mb-8 overflow-hidden border border-border/60">
            <img
              src={working.url}
              alt="Dr. Marcelo Passiani no escritório"
              width={1920}
              height={1280}
              loading="lazy"
              className="aspect-[5/4] w-full object-cover"
            />
          </div>
          <div className="border-l-2 border-gold pl-6">
            <Quote className="h-8 w-8 text-gold" />
            <p className="mt-4 font-serif text-2xl leading-snug text-foreground sm:text-3xl">
              "O empresário brasileiro perde mais dinheiro por falta de contrato do que por crise. A nossa missão é fechar essas portas antes
              que o inimigo entre."
            </p>
            <p className="mt-6 font-display text-sm uppercase tracking-[0.3em] text-gold">— Dr. Marcelo Passiani</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <Card label="Metodologia" title="Diagnóstico → Blindagem → Manutenção" />
            <Card label="Atuação" title="Advocacia preventiva e contenciosa" />
          </div>
        </div>

      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <p className="font-display text-4xl font-bold text-gold sm:text-5xl">{n}</p>
      <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
    </div>
  );
}

function Card({ label, title }: { label: string; title: string }) {
  return (
    <div className="border border-border/60 bg-card/40 p-5">
      <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gold">{label}</p>
      <p className="mt-2 font-display text-lg leading-tight text-foreground">{title}</p>
    </div>
  );
}

function Areas() {
  return (
    <section id="atuacao" className="border-b border-border/50 bg-ink">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="max-w-2xl">
          <span className="eyebrow"><span className="gold-rule" /> Áreas de atuação</span>
          <h2 className="headline mt-5 text-4xl sm:text-5xl md:text-6xl">
            Onde <span className="gold-gradient">blindamos</span> o seu negócio.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Um escritório, todas as frentes que uma empresa precisa. Prevenção primeiro, litígio quando é inevitável.
          </p>
        </div>
        <div className="mt-14 grid gap-px bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative bg-background p-8 transition-colors hover:bg-card">
              <Icon className="h-8 w-8 text-gold" strokeWidth={1.5} />
              <h3 className="mt-6 font-display text-2xl uppercase text-foreground">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{desc}</p>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Content() {
  return (
    <section id="conteudo" className="border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <span className="eyebrow"><span className="gold-rule" /> Autoridade digital</span>
            <h2 className="headline mt-5 text-4xl sm:text-5xl md:text-6xl">
              Pod Isso <span className="gold-gradient">Passiani</span>
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Todo empresário precisa entender de direito antes de precisar de um advogado. Nosso podcast e nossos canais quebram o juridiquês
              e mostram, na prática, o que sua empresa precisa fazer hoje.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="btn-ghost-gold">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <a href={YOUTUBE_CHANNEL} target="_blank" rel="noopener noreferrer" className="btn-ghost-gold">
              <Youtube className="h-4 w-4" /> YouTube
            </a>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="btn-ghost-gold">
              <Facebook className="h-4 w-4" /> Facebook
            </a>
          </div>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {episodes.map((ep) => {
            const isYouTube = ep.platform === "youtube";
            const PlatformIcon = isYouTube ? Youtube : Instagram;
            const platformLabel = isYouTube ? "Assistir no YouTube" : "Ver no Instagram";
            return (
              <a
                key={ep.n}
                href={ep.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col overflow-hidden border border-border/60 bg-gradient-to-br from-card to-background transition-transform hover:-translate-y-1"
              >
                {isYouTube && ep.youtubeId ? (
                  <div className="relative aspect-video w-full overflow-hidden bg-ink">
                    <img
                      src={`https://i.ytimg.com/vi/${ep.youtubeId}/hqdefault.jpg`}
                      alt={ep.title}
                      loading="lazy"
                      className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 grid place-items-center bg-black/20">
                      <PlayCircle className="h-14 w-14 text-gold drop-shadow-lg" strokeWidth={1.5} />
                    </div>
                    <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 border border-gold/60 bg-background/80 px-2 py-1 text-[0.6rem] uppercase tracking-[0.25em] text-gold backdrop-blur">
                      <Youtube className="h-3 w-3" /> YouTube
                    </div>
                  </div>
                ) : (
                  <div className="relative flex aspect-video items-center justify-between bg-ink px-6">
                    <span className="font-display text-6xl font-black text-gold/25">{ep.n}</span>
                    <PlatformIcon className="h-8 w-8 text-gold" />
                    <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 border border-gold/60 bg-background/80 px-2 py-1 text-[0.6rem] uppercase tracking-[0.25em] text-gold backdrop-blur">
                      <Instagram className="h-3 w-3" /> Instagram
                    </div>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-block self-start border border-gold/50 px-2 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-gold">{ep.tag}</span>
                  <h3 className="mt-4 font-display text-xl uppercase leading-tight text-foreground">{ep.title}</h3>
                  <p className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-gold transition-colors">
                    {platformLabel} <ArrowRight className="h-3 w-3" />
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Escritorio() {
  return (
    <section id="escritorio" className="border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="max-w-2xl">
          <span className="eyebrow"><span className="gold-rule" /> Nosso escritório</span>
          <h2 className="headline mt-5 text-4xl sm:text-5xl md:text-6xl">
            Onde a sua empresa <span className="gold-gradient">é recebida</span>.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Estrutura própria em São Paulo. Ambiente reservado, técnico e pensado para atender o empresário com a discrição que a matéria exige.
          </p>
        </div>
        <div className="mt-12 overflow-hidden border border-border/60">
          <img
            src={escritorioAsset.url}
            alt="Fachada da sede Passiani Advogados em São Paulo"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover sm:aspect-[16/10] md:aspect-[21/9]"
          />
        </div>
        <div className="mt-6">
          <a href={GOOGLE_MAPS} target="_blank" rel="noopener noreferrer" className="btn-ghost-gold">
            <MapPin className="h-4 w-4" /> Ver no Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="depoimentos" className="border-b border-border/50 bg-ink">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="max-w-2xl">
          <span className="eyebrow"><span className="gold-rule" /> Quem já é cliente</span>
          <h2 className="headline mt-5 text-4xl sm:text-5xl md:text-6xl">
            Empresários que <span className="gold-gradient">dormem</span> tranquilos.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="flex flex-col border border-border/60 bg-background p-8">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-6 flex-1 font-serif text-lg leading-relaxed text-foreground">"{t.q}"</p>
              <footer className="mt-6 border-t border-border/60 pt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {t.a}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="border-b border-border/50">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-16 sm:px-6 md:flex-row md:justify-between lg:px-8">
        <div className="flex items-center gap-6">
          <div className="grid h-20 w-20 shrink-0 place-items-center rounded-full border-2 border-gold">
            <span className="font-display text-3xl font-bold text-gold">4,9</span>
          </div>
          <div>
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
            </div>
            <p className="mt-2 font-display text-xl uppercase text-foreground">Avaliação Google</p>
            <p className="text-sm text-muted-foreground">45 avaliações reais de clientes verificados</p>
          </div>
        </div>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-gold">
          Quero fazer parte <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-b border-border/50">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 md:grid-cols-[1fr_1.4fr] md:py-28 lg:px-8">
        <div>
          <span className="eyebrow"><span className="gold-rule" /> Perguntas frequentes</span>
          <h2 className="headline mt-5 text-4xl sm:text-5xl md:text-6xl">
            O que todo <br /><span className="gold-gradient">empresário</span> pergunta.
          </h2>
        </div>
        <div className="divide-y divide-border/60 border-y border-border/60">
          {faqs.map((f, i) => (
            <button key={i} onClick={() => setOpen(open === i ? null : i)} className="w-full py-6 text-left">
              <div className="flex items-center justify-between gap-4">
                <span className="font-display text-lg uppercase text-foreground sm:text-xl">{f.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-gold transition-transform ${open === i ? "rotate-180" : ""}`} />
              </div>
              {open === i && <p className="mt-4 text-muted-foreground">{f.a}</p>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="relative border-b border-border/50 bg-ink">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28 lg:px-8">
        <div>
          <span className="eyebrow"><span className="gold-rule" /> Fale com o escritório</span>
          <h2 className="headline mt-5 text-4xl sm:text-5xl md:text-6xl">
            A conversa que muda o <span className="gold-gradient">seu negócio</span>.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Agende uma conversa inicial. Vamos entender onde sua empresa está exposta e o que pode ser feito ainda esta semana.
          </p>
          <div className="mt-10 space-y-5">
            <Info icon={MapPin} label="Endereço">
              <a href={GOOGLE_MAPS} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                R. Américo Samarone, 248b · Vila Moinho Velho, São Paulo — SP · 04284-000
              </a>
            </Info>
            <Info icon={Phone} label="Telefone / WhatsApp">(11) 2219-0510 — atendimento por ligação e WhatsApp</Info>
            <Info icon={Mail} label="E-mail">suporte@passiani.com.br</Info>
            <Info icon={Clock} label="Horário">Segunda a sexta · 09h às 18h</Info>
            <Info icon={Scale} label="Registro profissional">Dr. Marcelo Passiani · OAB/SP 237.206 · Advogando desde 2004</Info>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-gold">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a href="tel:+551122190510" className="btn-ghost-gold">Ligar agora</a>
            <a href={GOOGLE_MAPS} target="_blank" rel="noopener noreferrer" className="btn-ghost-gold">
              <MapPin className="h-4 w-4" /> Como chegar
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function Info({ icon: Icon, label, children }: { icon: any; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center border border-gold/50">
        <Icon className="h-5 w-5 text-gold" />
      </div>
      <div className="min-w-0">
        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-gold">{label}</p>
        <p className="mt-1 text-sm text-foreground">{children}</p>
      </div>
    </div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="border border-border/60 bg-background p-6 sm:p-8"
    >
      <p className="font-display text-xl uppercase text-foreground">Solicite um contato</p>
      <p className="mt-1 text-sm text-muted-foreground">Retornamos em até 1 dia útil.</p>
      <div className="mt-6 space-y-4">
        <Field label="Nome" name="nome" required maxLength={100} />
        <Field label="E-mail" name="email" type="email" required maxLength={200} />
        <Field label="Empresa" name="empresa" maxLength={120} />
        <Field label="Telefone / WhatsApp" name="telefone" maxLength={30} />
        <div>
          <label className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">Como podemos ajudar</label>
          <textarea
            name="mensagem"
            required
            maxLength={1000}
            rows={4}
            className="mt-2 w-full border border-border bg-transparent px-3 py-3 text-sm text-foreground outline-none transition-colors focus:border-gold"
          />
        </div>
        <button type="submit" className="btn-gold w-full">
          {sent ? "Recebemos sua mensagem" : "Enviar mensagem"} <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}

function Field(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, ...rest } = props;
  return (
    <div>
      <label className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">{label}</label>
      <input
        {...rest}
        className="mt-2 w-full border border-border bg-transparent px-3 py-3 text-sm text-foreground outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl font-bold tracking-widest text-gold">PASSIANI</p>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">Advogados</p>
            <p className="mt-6 max-w-sm text-sm text-muted-foreground">
              Advocacia empresarial full service. A defesa começa no contrato.
            </p>
          </div>
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">Navegue</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#sobre" className="hover:text-gold">Sobre</a></li>
              <li><a href="#atuacao" className="hover:text-gold">Áreas de atuação</a></li>
              <li><a href="#conteudo" className="hover:text-gold">Conteúdo</a></li>
              <li><a href="#contato" className="hover:text-gold">Contato</a></li>
              <li><a href="#" className="hover:text-gold">Política de privacidade</a></li>
            </ul>
          </div>
          <div>
            <p className="font-display text-sm uppercase tracking-[0.3em] text-gold">Siga</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold"><Instagram className="h-4 w-4" /> Instagram</a></li>
              <li><a href={YOUTUBE_CHANNEL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold"><Youtube className="h-4 w-4" /> YouTube · Pod Isso Passiani</a></li>
              <li><a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold"><Facebook className="h-4 w-4" /> Facebook</a></li>
              <li><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold"><MessageCircle className="h-4 w-4" /> WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Passiani Advogados. Todos os direitos reservados.</p>
          <p>R. Américo Samarone, 248b · São Paulo — SP</p>
        </div>
      </div>
      {/* Preserve uploaded brand banners as hidden references so build sees them */}
      <img src={headerAsset.url} alt="" hidden />
      <img src={footerAsset.url} alt="" hidden />
    </footer>
  );
}

function Credentials() {
  return (
    <section id="credenciais" className="border-b border-border/50 bg-ink">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow"><span className="gold-rule" /> Formação & titulação</span>
            <h2 className="headline mt-5 text-4xl sm:text-5xl md:text-6xl">
              Autoridade que se <span className="gold-gradient">comprova</span>.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Bacharel, especialista e <strong className="text-foreground">Mestre em Função Social do Direito</strong>. Quase duas décadas de formação continuada
              a serviço do empresário brasileiro.
            </p>
          </div>
          <div className="flex items-center gap-3 text-gold">
            <GraduationCap className="h-6 w-6" />
            <Award className="h-6 w-6" />
            <Sparkles className="h-6 w-6" />
          </div>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c) => (
            <figure key={c.title} className="group flex flex-col border border-border/60 bg-background transition-transform hover:-translate-y-1">
              <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                <img
                  src={c.img}
                  alt={`Certificado — ${c.title}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute right-3 top-3 border border-gold/60 bg-background/80 px-2 py-1 font-display text-[0.65rem] uppercase tracking-[0.25em] text-gold backdrop-blur">
                  {c.year}
                </div>
              </div>
              <figcaption className="flex flex-1 flex-col p-6">
                <p className="font-display text-lg uppercase leading-tight text-foreground">{c.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{c.org}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Masterclass() {
  return (
    <section id="masterclass" className="relative overflow-hidden border-b border-border/50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,oklch(0.82_0.12_84/0.12),transparent_55%),radial-gradient(circle_at_85%_80%,oklch(0.82_0.12_84/0.10),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1.1fr_1fr] md:items-center md:py-28 lg:px-8">
        <div>
          <span className="eyebrow"><span className="gold-rule" /> Masterclass oficial</span>
          <h2 className="headline mt-5 text-4xl sm:text-5xl md:text-6xl">
            Método <span className="gold-gradient">Contratação Blindada</span>.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            O passo a passo que já protegeu centenas de empresários contra passivos trabalhistas.
            Aprenda como contratar CLT ou PJ sem abrir brechas para processos futuros — direto com Dr. Marcelo Passiani.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-foreground">
            {[
              "Aulas objetivas com aplicação prática imediata",
              "Modelos de contratos e checklists de contratação",
              "Baseado em 20+ anos defendendo empresas na Justiça do Trabalho",
              "Acesso pela plataforma oficial Hotmart",
            ].map((li) => (
              <li key={li} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                {li}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={MASTERCLASS} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Acessar a Masterclass <ArrowRight className="h-4 w-4" />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-ghost-gold">
              Tirar dúvidas
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="border border-gold/40 bg-card/60 p-8 shadow-[0_20px_60px_-20px_oklch(0.82_0.12_84/0.35)]">
            <p className="font-display text-[0.65rem] uppercase tracking-[0.35em] text-gold">Curso online</p>
            <p className="mt-4 font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              "Menos processo trabalhista. Mais previsibilidade no seu negócio."
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border/60 pt-6 text-center">
              <div>
                <p className="font-display text-3xl font-bold text-gold">100%</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-widest text-muted-foreground">Online</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-gold">Hotmart</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-widest text-muted-foreground">Plataforma</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-gold">Prático</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-widest text-muted-foreground">Formato</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Book() {
  return (
    <section id="livro" className="border-b border-border/50 bg-ink">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 md:grid-cols-[auto_1fr] md:items-center md:py-28 lg:px-8">
        <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
          <div className="pointer-events-none absolute -inset-6 -z-10 bg-[radial-gradient(circle_at_50%_50%,oklch(0.82_0.12_84/0.25),transparent_70%)]" />
          <div className="overflow-hidden border border-gold/40 shadow-[0_30px_80px_-20px_oklch(0_0_0/0.7)]">
            <img
              src={penseBemCover.url}
              alt="Capa do livro Pense Bem, de Marcelo Passiani"
              loading="lazy"
              className="aspect-[2/3] w-full object-cover"
            />
          </div>
        </div>
        <div>
          <span className="eyebrow"><span className="gold-rule" /> Livro do autor</span>
          <h2 className="headline mt-5 text-4xl sm:text-5xl md:text-6xl">
            <span className="gold-gradient">Pense Bem</span>
          </h2>
          <p className="mt-3 font-serif text-lg italic text-muted-foreground">por Marcelo Passiani</p>
          <p className="mt-6 text-muted-foreground">
            Marcelo Passiani reúne neste livro pensamentos que foram inspiradores para o autoconhecimento de suas próprias emoções.
            Uma leitura que provoca uma reação para que se possa interpretar a vida não como ela é, mas como <em>deve ser</em>.
          </p>
          <p className="mt-4 text-muted-foreground">
            São relatos hoje vivenciados de forma positiva, mas que por muito tempo foram considerados negativos —
            situações que acontecem na vida de inúmeras pessoas e que ajudam a compreender os motivos e os porquês da própria existência.
            O autor demonstra que viver lamentando as próprias imperfeições é viver sem se conhecer, e que o ser humano que se conhece descobre o brilho
            que sempre teve.
          </p>
          <blockquote className="mt-8 border-l-2 border-gold pl-6 font-serif text-xl leading-snug text-foreground">
            "Quando for o momento para a decisão da virada, <span className="text-gold">pense bem</span>."
          </blockquote>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={AMAZON_BOOK} target="_blank" rel="noopener noreferrer" className="btn-gold">
              <BookOpen className="h-4 w-4" /> Comprar na Amazon
            </a>
            <a href={AMAZON_BOOK} target="_blank" rel="noopener noreferrer" className="btn-ghost-gold">
              Ler mais sobre o livro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.72_0.17_150)] text-white shadow-[0_10px_30px_-5px_oklch(0.72_0.17_150/0.5)] transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
