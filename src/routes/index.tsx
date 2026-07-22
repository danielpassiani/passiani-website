import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Shield, FileSignature, Users, AlertTriangle, Landmark, Scale,
  Star, MapPin, Phone, Mail, Instagram, Youtube, Mic, MessageCircle,
  ArrowRight, Clock, ChevronDown, Quote,
} from "lucide-react";
import headerAsset from "@/assets/passiani-header.png.asset.json";
import footerAsset from "@/assets/passiani-footer.png.asset.json";
import portrait from "@/assets/passiani-portrait.jpg.asset.json";
import working from "@/assets/passiani-working.jpg.asset.json";


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

const WHATSAPP = "https://wa.me/5511973771473?text=Olá,%20gostaria%20de%20agendar%20uma%20conversa%20com%20a%20Passiani%20Advogados.";

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

const episodes = [
  { n: "01", title: "18 contratos que toda empresa deve ter com cada funcionário", tag: "Contratos" },
  { n: "02", title: "5 documentos para proteger o seu patrimônio", tag: "Blindagem" },
  { n: "03", title: "Ele não quis CLT… mas te processou depois", tag: "Trabalhista" },
  { n: "04", title: "Contrato mal feito hoje, processo certo amanhã", tag: "Contratos" },
  { n: "05", title: "Os 4 impostos que empresas de serviço pagam a mais todo mês", tag: "Tributário" },
  { n: "06", title: "PJ com hora fixa não é PJ", tag: "Trabalhista" },
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
      <Areas />
      <Content />
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
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span className="font-display text-xl font-bold tracking-widest text-gold sm:text-2xl">PASSIANI</span>
          <span className="hidden text-[0.65rem] uppercase tracking-[0.35em] text-muted-foreground sm:inline">Advogados</span>
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
          <span className="eyebrow"><span className="gold-rule" /> Advocacia Empresarial · Desde 2000</span>
          <h1 className="headline mt-6 text-5xl text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            A defesa <span className="gold-gradient">começa</span> no contrato.
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Há 25 anos protegendo pequenos e médios empresários com advocacia full service.
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
              <p className="mt-1 text-sm text-muted-foreground">OAB · Advogado responsável</p>
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
            25 anos <br /><span className="gold-gradient">protegendo</span> empresários.
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
            <Stat n="25" label="anos de atuação" />
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
          <div className="flex gap-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn-ghost-gold">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="btn-ghost-gold">
              <Youtube className="h-4 w-4" /> YouTube
            </a>
          </div>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {episodes.map((ep) => (
            <article key={ep.n} className="group relative flex aspect-[4/5] flex-col justify-between overflow-hidden border border-border/60 bg-gradient-to-br from-card to-background p-6 transition-transform hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <span className="font-display text-6xl font-black text-gold/20 group-hover:text-gold/40 transition-colors">{ep.n}</span>
                <Mic className="h-5 w-5 text-gold" />
              </div>
              <div>
                <span className="inline-block border border-gold/50 px-2 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-gold">{ep.tag}</span>
                <h3 className="mt-4 font-display text-2xl uppercase leading-tight text-foreground">{ep.title}</h3>
                <p className="mt-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-gold transition-colors">
                  Assistir episódio <ArrowRight className="h-3 w-3" />
                </p>
              </div>
            </article>
          ))}
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
            <Info icon={MapPin} label="Endereço">R. Américo Samarone, 248b · Vila Moinho Velho, São Paulo — SP · 04284-000</Info>
            <Info icon={Phone} label="Telefone">(11) 2219-0510 · WhatsApp (11) 9 7377-1473</Info>
            <Info icon={Mail} label="E-mail">suporte@passiani.com.br</Info>
            <Info icon={Clock} label="Horário">Segunda a sexta · 09h às 18h</Info>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-gold">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a href="tel:+551122190510" className="btn-ghost-gold">Ligar agora</a>
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
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold"><Instagram className="h-4 w-4" /> Instagram</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold"><Youtube className="h-4 w-4" /> YouTube · Pod Isso Passiani</a></li>
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
