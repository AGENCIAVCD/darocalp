import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import {
  ArrowUpRight,
  Clock3,
  CookingPot,
  HeartHandshake,
  Leaf,
  MapPinned,
  PartyPopper,
  Sparkles,
  Users,
} from "lucide-react";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiMapPin2Fill,
  RiWhatsappFill,
} from "react-icons/ri";

import { AnimatedSection } from "@/components/animated-section";
import { HeroBackground } from "@/components/hero-background";
import { PlateCarousel } from "@/components/plate-carousel";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export const metadata: Metadata = {
  title: "Da Roça Gastronomia | Sabor da roça, feito com amor e tradição",
  description:
    "Gastronomia brasileira de raiz em Jundiaí, com comida caseira, ambiente acolhedor, pratos da casa, espaço kids, reservas para grupos e eventos.",
};

const restaurant = {
  name: "Da Roça Gastronomia",
  subtitle: "Sabor da roça, feito com amor e tradição",
  description:
    "Uma gastronomia brasileira de raiz, com comida caseira feita com carinho, ingredientes selecionados e o tipo de acolhimento que faz cada almoço parecer domingo em família.",
  address: "R. Ignez Thomasi Bardi, 97 - Caxambu, Jundiaí - SP",
  mapsUrl:
    "https://www.google.com/maps?daddr=R.+Ignez+Thomasi+Bardi,+97+-+Caxambu,+Jundia%C3%AD+-+SP,+13216-702",
  instagram: "https://www.instagram.com/darocagastronomia/",
  facebook:
    "https://www.facebook.com/people/Da-Ro%C3%A7a-Gastronomia/100092472042770/",
  menuUrl: "https://darocagastronomia.com.br/cardapio/",
  logoUrl: "/images/logo-daroca.jpg",
  heroImages: [
    "https://darocagastronomia.com.br/wp-content/uploads/2025/02/Da-Roca_Jul2024_23-scaled.jpg",
    "https://darocagastronomia.com.br/wp-content/uploads/2025/02/Z5A7474-scaled.jpg",
    "https://darocagastronomia.com.br/wp-content/uploads/2025/02/Da-Roca_Jul2024_18-scaled.jpg",
    "https://darocagastronomia.com.br/wp-content/uploads/2025/02/Z5A7413-scaled.jpg",
  ],
  storyImage:
    "https://darocagastronomia.com.br/wp-content/uploads/2025/02/Z5A7440-scaled.jpg",
  atmosphereImage:
    "https://darocagastronomia.com.br/wp-content/uploads/2025/02/Z5A7419-scaled.jpg",
  locationImage:
    "https://darocagastronomia.com.br/wp-content/uploads/2025/02/Z5A7390-scaled.jpg",
};

const whatsappBase =
  "https://api.whatsapp.com/message/44AOXKCNVNHGL1?autoload=1&app_absent=0";

const whatsappLink = (text: string) =>
  `${whatsappBase}&text=${encodeURIComponent(text)}`;

const dishStories = [
  {
    title: "Feijoada da casa",
    description:
      "Receitas brasileiras afetivas servidas com fartura, técnica e aquele calor de comida feita para reunir.",
  },
  {
    title: "Grelhados especiais",
    description:
      "Carnes suculentas, acompanhamentos caprichados e apresentação que valoriza o sabor da roça.",
  },
  {
    title: "Mesa para compartilhar",
    description:
      "Combinações generosas para famílias, grupos e almoços que pedem tempo, conversa e segunda rodada de memórias.",
  },
];

const galleryImages = [
  {
    src: "/images/gallery/prato-1.png",
    alt: "Prato com massa, filé grelhado, batatas fritas, salada e suco",
    title: "Filé com massa fresca",
  },
  {
    src: "/images/gallery/prato-2.png",
    alt: "Prato brasileiro com arroz, ovo, linguiça, feijão e carne grelhada",
    title: "Brasilidade no prato",
  },
  {
    src: "/images/gallery/prato-3.png",
    alt: "Prato com arroz, batatas fritas e acompanhamentos da Da Roça",
    title: "Clássico da casa",
  },
  {
    src: "/images/gallery/prato-4.png",
    alt: "Massa com carne grelhada, salada e bebida servida na Da Roça",
    title: "Grelhado com fettuccine",
  },
  {
    src: "/images/gallery/prato-5.png",
    alt: "Prato com arroz, frango crocante e batatas fritas",
    title: "Frango crocante da roça",
  },
  {
    src: "/images/gallery/prato-6.png",
    alt: "Prato com arroz, carne grelhada e batatas fritas",
    title: "Corte grelhado especial",
  },
  {
    src: "/images/gallery/prato-7.png",
    alt: "Prato com arroz, filé de frango grelhado e suco natural",
    title: "Frango grelhado com suco",
  },
  {
    src: "/images/gallery/prato-8.png",
    alt: "Prato com arroz, porções crocantes, batatas fritas e feijão",
    title: "Porção dourada da casa",
  },
];

const experiencePoints = [
  {
    icon: Sparkles,
    title: "Atmosfera acolhedora",
    text: "Ambiente charmoso, confortável e com ritmo de almoço para ficar mais do que o planejado.",
  },
  {
    icon: Leaf,
    title: "Ingredientes selecionados",
    text: "Cozinha brasileira feita com insumos bem escolhidos, frescor e apresentação cuidadosa.",
  },
  {
    icon: HeartHandshake,
    title: "Afeto no serviço",
    text: "Uma casa que recebe famílias e grupos com atenção verdadeira, sem parecer apressada ou impessoal.",
  },
  {
    icon: Users,
    title: "Experiência para reunir",
    text: "Ideal para domingos, feriados, comemorações em família e encontros em volta da mesa.",
  },
];

const visitingInfo = [
  {
    title: "Horários",
    icon: Clock3,
    lines: [
      "Segunda a Quinta: Fechado",
      "Sexta, Sábado, Domingo e Feriados: 11:30h às 16:00h",
    ],
  },
  {
    title: "Endereço",
    icon: MapPinned,
    lines: [restaurant.address, "Caxambu, Jundiaí - SP"],
  },
  {
    title: "Reservas & eventos",
    icon: PartyPopper,
    lines: [
      "Reservas para grupos acima de 8 pessoas via WhatsApp.",
      "Eventos, confraternizações e locação do espaço sob consulta.",
    ],
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <HeroSection />
      <StorySection />
      <DishesSection />
      <ExperienceSection />
      <KidsSection />
      <VisitSection />
      <ReservationsSection />
      <Footer />
      <StickyWhatsApp
        href={whatsappLink("Olá, gostaria de falar com a Da Roça Gastronomia.")}
      />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <HeroBackground images={restaurant.heroImages} />
      <div className="hero-overlay absolute inset-0" />

      <div className="section-shell relative flex min-h-[100svh] flex-col justify-between">
        <header className="flex items-center justify-between py-5 text-white sm:py-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md">
            <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/18">
              <Image
                src={restaurant.logoUrl}
                alt="Logo da Da Roça Gastronomia"
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-serif text-lg leading-none text-white">Da Roça</p>
              <p className="mt-1 text-[0.64rem] uppercase tracking-[0.26em] text-white/72">
                Gastronomia Brasil
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <a
              href={restaurant.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram da Da Roça Gastronomia"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/18 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/16"
            >
              <RiInstagramFill className="h-5 w-5" />
            </a>
            <WhatsAppButton
              href={whatsappLink(
                "Olá, gostaria de fazer uma reserva na Da Roça Gastronomia.",
              )}
              variant="secondary"
            >
              Faça sua reserva
            </WhatsAppButton>
          </div>
        </header>

        <AnimatedSection className="py-12 sm:py-14 lg:py-20">
          <div className="max-w-[52rem]">
            <span className="eyebrow border-white/20 bg-white/10 text-white">
              Gastronomia brasileira de raiz
            </span>

            <h1 className="mt-6 font-serif text-[clamp(3.35rem,14vw,7rem)] leading-[0.88] tracking-[-0.06em] text-white">
              <span className="block">Da Roça</span>
              <span className="block">Gastronomia</span>
            </h1>

            <p className="mt-6 max-w-[34rem] text-[1rem] leading-8 text-white/84 sm:text-[1.08rem]">
              {restaurant.subtitle}. Um restaurante com comida caseira feita com
              carinho, clima de fazenda chique e pratos que convidam a sentar sem
              pressa.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsAppButton
                href={whatsappLink(
                  "Olá, gostaria de ver o cardápio da Da Roça.",
                )}
              >
                Ver Cardápio
              </WhatsAppButton>
              <WhatsAppButton
                href={whatsappLink(
                  "Olá, gostaria de fazer uma reserva para um grupo acima de 8 pessoas.",
                )}
                variant="secondary"
              >
                Fazer Reserva
              </WhatsAppButton>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-white/86">
              <a
                href={restaurant.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/8 px-4 py-2 backdrop-blur-sm transition hover:bg-white/14"
              >
                <RiInstagramFill className="h-4 w-4" />
                Siga no Instagram
              </a>
              <a
                href={restaurant.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/8 px-4 py-2 backdrop-blur-sm transition hover:bg-white/14"
              >
                <RiMapPin2Fill className="h-4 w-4" />
                Jundiaí · SP
              </a>
            </div>
          </div>
        </AnimatedSection>

        <div className="hidden pb-7 sm:block sm:pb-8">
          <a
            href="#sobre"
            className="inline-flex items-center gap-3 rounded-full border border-white/18 bg-black/16 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-white backdrop-blur-md transition hover:bg-black/26"
          >
            <span className="h-px w-12 bg-white" />
            Role para descobrir
          </a>
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section id="sobre" className="section">
      <div className="section-shell">
        <AnimatedSection className="section-stack mb-8 lg:mb-10">
          <span className="eyebrow">Sobre nós</span>
          <h2 className="section-title">
            Comida brasileira servida com cuidado, tempo e memória.
          </h2>
          <p className="section-copy">
            {restaurant.description}
          </p>
        </AnimatedSection>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-start lg:gap-14">
          <AnimatedSection>
            <div className="media-frame">
              <div className="media-image media-image--tall">
                <Image
                  src={restaurant.storyImage}
                  alt="Ambiente interno acolhedor da Da Roça Gastronomia"
                  fill
                  sizes="(max-width: 1023px) calc(100vw - 40px), 50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 rounded-full border border-white/18 bg-black/28 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                  Fazenda chique, mesa afetiva
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.06} className="section-stack">
            <p className="section-copy">
              Na Da Roça, o ambiente acolhedor, a apresentação caprichada e a
              sensação de comida feita para reunir transformam o almoço em uma
              experiência quente, elegante e genuinamente brasileira.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="note-card">
                <p className="text-xs uppercase tracking-[0.26em] text-secondary">
                  Essência
                </p>
                <p className="mt-3 text-lg leading-8 text-foreground">
                  Sabor caseiro com toque gourmet, sem perder a alma da roça.
                </p>
              </div>
              <div className="note-card">
                <p className="text-xs uppercase tracking-[0.26em] text-secondary">
                  Experiência
                </p>
                <p className="mt-3 text-lg leading-8 text-foreground">
                  Um lugar para famílias, grupos e encontros que merecem mesa
                  bonita e boa comida.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function DishesSection() {
  return (
    <section id="cardapio" className="section">
      <div className="section-shell">
        <AnimatedSection className="section-stack">
          <span className="eyebrow">Pratos da casa</span>
          <h2 className="section-title">
            A cozinha da casa aparece em pratos fartos, bonitos e cheios de
            desejo.
          </h2>
          <p className="section-copy">
            Os pratos agora entram como uma seção de verdade: texto enxuto,
            narrativa clara e um carrossel para navegar sem aquela sensação de
            imagens jogadas.
          </p>
          <a
            href={restaurant.menuUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white/78 px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-white"
          >
            Ver Cardápio Completo
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </AnimatedSection>

        <div className="section-surface mt-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:gap-10">
            <AnimatedSection className="grid gap-5">
              {dishStories.map((item) => (
                <article key={item.title} className="border-t border-border pt-5 first:border-t-0 first:pt-0">
                  <div className="inline-flex rounded-full bg-primary/10 p-3 text-primary">
                    <CookingPot className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-serif text-[1.9rem] leading-[1.02] tracking-[-0.03em] text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.98rem] leading-7 text-muted">
                    {item.description}
                  </p>
                </article>
              ))}
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <PlateCarousel images={galleryImages} />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experiencia" className="section">
      <div className="section-shell">
        <AnimatedSection className="section-stack mb-8 lg:mb-10">
          <span className="eyebrow">Experiência Da Roça</span>
          <h2 className="section-title">
            Um almoço pensado para reunir, acolher e criar lembranças.
          </h2>
          <p className="section-copy">
            O valor da experiência não está só no prato. Está no ambiente
            charmoso, no cuidado com a mesa, no clima de fazenda elegante e na
            sensação de que a casa foi feita para receber bem.
          </p>
        </AnimatedSection>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:items-center lg:gap-14">
          <AnimatedSection className="section-stack">

            <div className="grid gap-4 sm:grid-cols-2">
              {experiencePoints.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="detail-card">
                    <div className="inline-flex rounded-full bg-primary/10 p-3 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-serif text-[1.55rem] leading-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[0.96rem] leading-7 text-muted">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.06}>
            <div className="media-frame">
              <div className="media-image media-image--tall">
                <Image
                  src={restaurant.atmosphereImage}
                  alt="Detalhe do ambiente da Da Roça Gastronomia"
                  fill
                  sizes="(max-width: 1023px) calc(100vw - 40px), 52vw"
                  className="object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function KidsSection() {
  return (
    <section id="kids" className="section">
      <div className="section-shell">
        <div className="section-surface">
          <AnimatedSection className="section-stack mb-8 lg:mb-10">
            <span className="eyebrow">Espaço kids</span>
            <h2 className="section-title">
              Um cantinho pensado para as crianças aproveitarem enquanto a
              família relaxa de verdade.
            </h2>
            <p className="section-copy">
              O espaço kids reforça uma das maiores qualidades da casa:
              receber famílias com conforto. Assim o almoço fica gostoso para
              quem quer sentar, conversar e curtir o ambiente com calma.
            </p>
          </AnimatedSection>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] lg:items-stretch lg:gap-12">
            <AnimatedSection className="flex h-full flex-col gap-5">
              <div className="rounded-[1.6rem] border border-border bg-white/72 p-5">
                <p className="text-sm leading-7 text-muted">
                  Se a proposta é comer bem e permanecer mais tempo à mesa, esse
                  pedaço da experiência faz diferença de verdade.
                </p>
              </div>

              <div className="rounded-[1.6rem] border border-border bg-white/64 p-5 shadow-[0_16px_34px_rgba(64,38,17,0.04)]">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                  Por que funciona
                </p>
                <div className="mt-4 grid gap-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary/70" />
                    <p className="text-sm leading-7 text-muted">
                      As crianças têm um espaço próprio enquanto a mesa segue
                      tranquila para adultos, famílias e grupos.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-secondary/80" />
                    <p className="text-sm leading-7 text-muted">
                      A experiência fica mais leve, mais confortável e mais
                      compatível com almoços longos de domingo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-2">
                <a
                  href="https://www.instagram.com/reel/DWJij3IBF5U/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-[#fbf4ea]"
                >
                  <RiInstagramFill className="h-4 w-4 text-[#d94877]" />
                  Ver vídeo do espaço kids
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <div className="embed-frame">
                <blockquote
                  className="instagram-media !m-0 !w-full !max-w-none !min-w-0"
                  data-instgrm-permalink="https://www.instagram.com/reel/DWJij3IBF5U/?utm_source=ig_embed&amp;utm_campaign=loading"
                  data-instgrm-version="14"
                >
                  <a
                    href="https://www.instagram.com/reel/DWJij3IBF5U/?utm_source=ig_embed&amp;utm_campaign=loading"
                    target="_blank"
                    rel="noreferrer"
                    className="block px-6 py-10 text-center text-sm font-medium text-muted"
                  >
                    Ver vídeo do espaço kids no Instagram
                  </a>
                </blockquote>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <Script
        async
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
      />
    </section>
  );
}

function VisitSection() {
  return (
    <section id="visita" className="section">
      <div className="section-shell">
        <AnimatedSection className="section-stack">
          <span className="eyebrow">Planeje sua visita</span>
          <h2 className="section-title">
            Horários, localização e tudo o que você precisa para chegar bem.
          </h2>
          <p className="section-copy">
            A visita precisa ser simples de entender: quando a casa abre, onde
            ela está e como falar com a equipe para grupos, reservas e eventos.
          </p>
        </AnimatedSection>

        <div className="section-surface mt-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-10">
            <AnimatedSection className="grid gap-5">
              {visitingInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="detail-row">
                    <div className="detail-row__icon">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-[1.55rem] leading-tight text-foreground">
                        {item.title}
                      </h3>
                      <div className="mt-3 space-y-1.5 text-[0.98rem] leading-7 text-muted">
                        {item.lines.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={restaurant.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="fancy-button fancy-button--olive"
                >
                  <span className="fancy-button__content">
                    <RiMapPin2Fill className="h-4 w-4 text-white" />
                    <span className="text-white">Abrir Rotas</span>
                  </span>
                </a>
                <WhatsAppButton
                  href={whatsappLink(
                    "Olá, gostaria de informações sobre localização, reservas e eventos na Da Roça Gastronomia.",
                  )}
                >
                  Falar com a equipe
                </WhatsAppButton>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.08} className="grid gap-4">
              <div className="media-frame">
                <div className="media-image min-h-[320px] sm:min-h-[380px]">
                  <Image
                    src={restaurant.locationImage}
                    alt="Ambiente da Da Roça Gastronomia em Jundiaí"
                    fill
                    sizes="(max-width: 1023px) calc(100vw - 40px), 58vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="embed-frame p-2">
                <iframe
                  title="Mapa da Da Roça Gastronomia"
                  src="https://www.google.com/maps?q=R.%20Ignez%20Thomasi%20Bardi,%2097%20-%20Caxambu,%20Jundia%C3%AD%20-%20SP&z=15&output=embed"
                  className="h-[320px] w-full rounded-[1.35rem] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReservationsSection() {
  return (
    <section id="reservas" className="section">
      <div className="section-shell">
        <div className="rounded-[2.15rem] border border-[rgba(107,79,53,0.18)] bg-[linear-gradient(135deg,rgba(143,79,45,0.16),rgba(68,84,61,0.08),rgba(255,250,244,0.72))] p-6 shadow-[0_24px_70px_rgba(64,38,17,0.08)] sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] lg:items-start lg:gap-12">
            <AnimatedSection className="section-stack">
              <span className="eyebrow">Reservas & eventos</span>
              <h2 className="section-title lg:text-[clamp(3rem,5vw,4.8rem)]">
                Para grupos, comemorações e encontros que pedem uma mesa
                especial.
              </h2>
              <p className="section-copy max-w-[60ch]">
                Reservas são feitas pelo WhatsApp para grupos acima de 8 pessoas.
                A casa também recebe eventos, confraternizações e locação do
                espaço com atendimento alinhado à experiência da Da Roça.
              </p>

              <div className="rounded-[1.6rem] border border-border bg-white/68 p-5 shadow-[0_16px_34px_rgba(64,38,17,0.05)]">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
                  Atendimento da casa
                </p>
                <p className="mt-3 text-[0.98rem] leading-7 text-muted">
                  Ideal para aniversários, almoços em família, confraternizações
                  e encontros que pedem uma experiência acolhedora do começo ao
                  fim.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.08} className="grid gap-4 lg:pt-10">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <article className="detail-card">
                  <div className="inline-flex rounded-full bg-primary/10 p-3 text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-serif text-[1.55rem] leading-tight text-foreground">
                    Reservas para grupos
                  </h3>
                  <p className="mt-3 text-[0.96rem] leading-7 text-muted">
                    Perfeito para aniversários, almoços em família e encontros
                    acima de 8 pessoas.
                  </p>
                </article>

                <article className="detail-card">
                  <div className="inline-flex rounded-full bg-primary/10 p-3 text-primary">
                    <PartyPopper className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-serif text-[1.55rem] leading-tight text-foreground">
                    Eventos especiais
                  </h3>
                  <p className="mt-3 text-[0.96rem] leading-7 text-muted">
                    Solicite informações para confraternizações, festas e uso do
                    espaço com clima acolhedor.
                  </p>
                </article>
              </div>

              <div className="grid gap-3 pt-1 sm:grid-cols-2">
                <a
                  href={whatsappLink(
                    "Olá, quero fazer uma reserva para um grupo acima de 8 pessoas.",
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex min-h-[3.9rem] w-full items-center justify-center overflow-hidden rounded-full border border-white/18 bg-[linear-gradient(135deg,#bc733e_0%,#9d5a31_46%,#7f4524_100%)] px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(73,43,21,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(73,43,21,0.28)]"
                >
                  <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute -left-1/3 top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent transition duration-700 group-hover:left-[120%]" />
                  </span>
                  <span className="relative z-10 inline-flex items-center justify-center gap-3">
                    <RiWhatsappFill className="h-4 w-4 text-white" />
                    <span className="text-white">Fazer Reserva</span>
                  </span>
                </a>
                <a
                  href={whatsappLink(
                    "Olá, gostaria de informações sobre eventos na Da Roça Gastronomia.",
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex min-h-[3.9rem] w-full items-center justify-center overflow-hidden rounded-full border border-[rgba(107,79,53,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(249,242,232,0.94))] px-6 py-4 text-sm font-semibold text-foreground shadow-[0_14px_28px_rgba(73,43,21,0.08)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(73,43,21,0.12)]"
                >
                  <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute -left-1/3 top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/55 to-transparent transition duration-700 group-hover:left-[120%]" />
                  </span>
                  <span className="relative z-10 inline-flex items-center justify-center gap-3">
                    <RiWhatsappFill className="h-4 w-4 text-foreground" />
                    <span className="text-foreground">Solicitar Evento</span>
                  </span>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-6 border-t border-white/8 bg-[#271c16] py-10 text-white">
      <div className="section-shell grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
        <div className="flex items-center gap-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/15">
            <Image
              src={restaurant.logoUrl}
              alt="Logo da Da Roça Gastronomia"
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-serif text-2xl">Da Roça Gastronomia</p>
            <p className="text-sm text-white/62">{restaurant.subtitle}</p>
          </div>
        </div>

        <div className="text-sm leading-7 text-white/72">
          <p>{restaurant.address}</p>
          <p>WhatsApp para cardápio, reservas acima de 8 pessoas e eventos.</p>
        </div>

        <div className="flex flex-wrap gap-3 text-sm">
          <a
            href={restaurant.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 transition hover:bg-white/8"
          >
            <RiInstagramFill className="h-4 w-4 text-[#ff72a6]" />
            Instagram
          </a>
          <a
            href={restaurant.facebook}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 transition hover:bg-white/8"
          >
            <RiFacebookFill className="h-4 w-4 text-[#8bb3ff]" />
            Facebook
          </a>
          <a
            href={whatsappLink(
              "Olá, gostaria de fazer uma reserva na Da Roça Gastronomia.",
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 transition hover:bg-white/8"
          >
            <RiWhatsappFill className="h-4 w-4 text-[#69d78d]" />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="section-shell mt-8 border-t border-white/8 pt-5 text-xs uppercase tracking-[0.18em] text-white/38">
        © 2026 Da Roça Gastronomia Brasil. Todos os direitos reservados.
      </div>
    </footer>
  );
}
