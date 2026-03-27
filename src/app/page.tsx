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

const restaurant = {
  name: "Da Roça Gastronomia",
  slogan: "Sabor da roça, feito com amor e tradição",
  description:
    "Uma gastronomia brasileira de raiz, com comida caseira feita com carinho, ingredientes selecionados e aquele acolhimento que faz cada almoço parecer domingo em família.",
  address: "R. Ignez Thomasi Bardi, 97 - Caxambu, Jundiaí - SP",
  mapsUrl:
    "https://www.google.com/maps?daddr=R.+Ignez+Thomasi+Bardi,+97+-+Caxambu,+Jundia%C3%AD+-+SP,+13216-702",
  instagram: "https://www.instagram.com/darocagastronomia/",
  facebook:
    "https://www.facebook.com/people/Da-Ro%C3%A7a-Gastronomia/100092472042770/",
  menuUrl: "https://darocagastronomia.com.br/cardapio/",
  logoUrl: "/images/logo-daroca.jpg",
  heroImage:
    "https://darocagastronomia.com.br/wp-content/uploads/2025/02/Da-Roca_Jul2024_23-scaled.jpg",
  heroImages: [
    "https://darocagastronomia.com.br/wp-content/uploads/2025/02/Da-Roca_Jul2024_23-scaled.jpg",
    "https://darocagastronomia.com.br/wp-content/uploads/2025/02/Z5A7474-scaled.jpg",
    "https://darocagastronomia.com.br/wp-content/uploads/2025/02/Da-Roca_Jul2024_18-scaled.jpg",
    "https://darocagastronomia.com.br/wp-content/uploads/2025/02/Z5A7413-scaled.jpg",
  ],
  aboutImage:
    "https://darocagastronomia.com.br/wp-content/uploads/2025/02/Z5A7440-scaled.jpg",
  experienceImage:
    "https://darocagastronomia.com.br/wp-content/uploads/2025/02/Z5A7419-scaled.jpg",
  locationImage:
    "https://darocagastronomia.com.br/wp-content/uploads/2025/02/Z5A7390-scaled.jpg",
};

const whatsappBase =
  "https://api.whatsapp.com/message/44AOXKCNVNHGL1?autoload=1&app_absent=0";

const whatsappLink = (text: string) =>
  `${whatsappBase}&text=${encodeURIComponent(text)}`;

const menuItems = [
  {
    name: "Feijoada Da Roça",
    description:
      "Clássico brasileiro servido com acompanhamentos caprichados, sabor intenso e apresentação acolhedora.",
    price: "Consulte no cardápio",
    image:
      "https://darocagastronomia.com.br/wp-content/uploads/2025/02/Da-Roca_Jul2024_15-scaled.jpg",
  },
  {
    name: "Cortes e grelhados especiais",
    description:
      "Carnes suculentas com finalização cuidadosa, ideais para um almoço de fazenda com toque gourmet.",
    price: "Consulte no cardápio",
    image:
      "https://darocagastronomia.com.br/wp-content/uploads/2025/02/Z5A7387-scaled.jpg",
  },
  {
    name: "Mesa farta de sabores",
    description:
      "Pratos generosos, cores vibrantes e combinações que celebram a cozinha brasileira afetiva.",
    price: "Consulte no cardápio",
    image:
      "https://darocagastronomia.com.br/wp-content/uploads/2025/02/Z5A7474-scaled.jpg",
  },
  {
    name: "Sobremesas e detalhes da casa",
    description:
      "Finalizações delicadas para prolongar a experiência com aconchego e memória afetiva.",
    price: "Consulte no cardápio",
    image:
      "https://darocagastronomia.com.br/wp-content/uploads/2025/02/Da-Roca_Jul2024_56-scaled.jpg",
  },
];

const galleryImages = [
  {
    src: "/images/gallery/prato-1.png",
    alt: "Prato com massa, filé grelhado, batatas fritas, salada e suco",
  },
  {
    src: "/images/gallery/prato-2.png",
    alt: "Prato brasileiro com arroz, ovo, linguiça, feijão e carne grelhada",
  },
  {
    src: "/images/gallery/prato-3.png",
    alt: "Prato com arroz, batatas fritas e acompanhamentos da Da Roça",
  },
  {
    src: "/images/gallery/prato-4.png",
    alt: "Massa com carne grelhada, salada e bebida servida na Da Roça",
  },
  {
    src: "/images/gallery/prato-5.png",
    alt: "Prato com arroz, frango crocante e batatas fritas",
  },
  {
    src: "/images/gallery/prato-6.png",
    alt: "Prato com arroz, carne grelhada e batatas fritas",
  },
  {
    src: "/images/gallery/prato-7.png",
    alt: "Prato com arroz, filé de frango grelhado e suco natural",
  },
  {
    src: "/images/gallery/prato-8.png",
    alt: "Prato com arroz, porções crocantes, batatas fritas e feijão",
  },
];

const experienceItems = [
  {
    icon: Sparkles,
    title: "Ambiente",
    text: "Um espaço charmoso e acolhedor, com clima de fazenda chique para viver bons encontros sem pressa.",
  },
  {
    icon: Leaf,
    title: "Ingredientes frescos",
    text: "Seleção cuidadosa de insumos para valorizar a comida brasileira com qualidade, cor e sabor.",
  },
  {
    icon: HeartHandshake,
    title: "Feito com amor",
    text: "Receitas que respeitam a tradição da roça, servidas com afeto e atenção em cada detalhe.",
  },
  {
    icon: Users,
    title: "Famílias e grupos",
    text: "Perfeito para almoços de domingo, comemorações especiais e encontros de quem gosta de mesa cheia.",
  },
];

const hours = [
  ["Segunda a Quinta", "Fechado"],
  ["Sexta, Sábado, Domingo e Feriados", "11:30h às 16:00h"],
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <HeroSection />
      <AboutSection />
      <MenuHighlightsSection />
      <GallerySection />
      <ExperienceSection />
      <KidsSection />
      <HoursSection />
      <LocationSection />
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
    <section className="relative isolate min-h-screen overflow-hidden">
      <HeroBackground images={restaurant.heroImages} />
      <div className="hero-overlay absolute inset-0" />
      <div className="section-shell relative flex min-h-screen flex-col">
        <header className="flex items-center justify-between py-5 text-white">
          <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/8 px-3 py-2 backdrop-blur-sm">
            <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/20 bg-white/10">
              <Image
                src={restaurant.logoUrl}
                alt="Logo da Da Roça Gastronomia"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-serif text-lg">Da Roça</p>
              <p className="text-xs uppercase tracking-[0.24em] text-white/72">
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/16"
            >
              <RiInstagramFill className="h-5 w-5" />
            </a>
            <a
              href={restaurant.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/16"
            >
              <RiInstagramFill className="h-4 w-4" />
              Siga no Instagram
            </a>
          </div>
        </header>

        <div className="flex flex-1 items-center py-20 lg:py-28">
          <AnimatedSection className="max-w-5xl text-white">
            <span className="eyebrow border-white/20 bg-white/10 text-white">
              Gastronomia brasileira de raiz
            </span>
            <h1 className="mt-7 max-w-4xl font-serif text-5xl leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-7xl xl:text-[5.8rem]">
              {restaurant.name}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 sm:text-lg lg:text-xl">
              {restaurant.slogan}. Um almoço com afeto, ingredientes de
              qualidade e aquela atmosfera quente que convida a ficar mais um
              pouco.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <WhatsAppButton
                href={whatsappLink("Olá, gostaria de ver o cardápio da Da Roça.")}
                className="sm:min-w-52"
              >
                Ver Cardápio
              </WhatsAppButton>
              <WhatsAppButton
                href={whatsappLink(
                  "Olá, gostaria de fazer uma reserva para um grupo acima de 8 pessoas.",
                )}
                variant="secondary"
                className="sm:min-w-52"
              >
                Fazer Reserva
              </WhatsAppButton>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <a
                href={restaurant.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-white backdrop-blur-sm transition hover:bg-white/16"
              >
                <RiInstagramFill className="h-4 w-4" />
                Instagram
              </a>
              <a
                href={whatsappLink(
                  "Olá, gostaria de fazer uma reserva na Da Roça Gastronomia.",
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-white backdrop-blur-sm transition hover:bg-white/16"
              >
                <RiWhatsappFill className="h-4 w-4" />
                Reserva rápida
              </a>
              <a
                href={restaurant.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-white backdrop-blur-sm transition hover:bg-white/16"
              >
                <RiMapPin2Fill className="h-4 w-4" />
                Como chegar
              </a>
            </div>
          </AnimatedSection>
        </div>

        <div className="pb-8">
          <a
            href="#sobre"
            className="inline-flex items-center gap-3 rounded-full border border-white/18 bg-black/20 px-4 py-2 text-sm font-medium uppercase tracking-[0.26em] !text-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm transition hover:bg-black/30"
            style={{ color: "#ffffff", textShadow: "0 1px 10px rgba(0,0,0,0.35)" }}
          >
            <span className="h-px w-16 bg-white" />
            Role para descobrir
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="sobre" className="section-padding">
      <div className="section-shell section-card grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
        <AnimatedSection className="relative">
          <div className="glass-card p-3">
            <div className="relative min-h-[360px] overflow-hidden rounded-[1.5rem] lg:min-h-[620px]">
              <Image
                src={restaurant.aboutImage}
                alt="Ambiente interno acolhedor da Da Roça Gastronomia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="grid h-full content-between gap-8">
          <div className="content-stack">
            <span className="eyebrow">Sobre nós</span>
            <h2 className="section-title ornament max-w-[11ch]">
              Comida brasileira de raiz servida com cuidado, tempo e memória.
            </h2>
            <p className="section-copy max-w-[56ch]">{restaurant.description}</p>
            <p className="section-copy max-w-[56ch]">
              Na Da Roça, a experiência vai além do prato. O ambiente familiar,
              o carinho no atendimento e a apresentação impecável criam uma
              pausa gostosa para celebrar a brasilidade com elegância e
              simplicidade.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="glass-card p-5">
              <p className="text-sm uppercase tracking-[0.22em] text-secondary">
                Essência
              </p>
              <p className="mt-3 text-lg font-medium text-foreground">
                Sabor caseiro com toque gourmet rústico-chique.
              </p>
            </div>
            <div className="glass-card p-5">
              <p className="text-sm uppercase tracking-[0.22em] text-secondary">
                Experiência
              </p>
              <p className="mt-3 text-lg font-medium text-foreground">
                Aconchego de fazenda para famílias, amigos e celebrações.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function MenuHighlightsSection() {
  return (
    <section className="section-padding">
      <div className="section-shell section-card">
        <AnimatedSection className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Destaques do cardápio</span>
            <h2 className="section-title mt-6 max-w-[11ch]">
              Pratos que abrem o apetite antes mesmo da primeira garfada.
            </h2>
          </div>
          <a
            href={restaurant.menuUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-5 py-3 text-sm font-semibold transition hover:bg-white"
          >
            Ver Cardápio Completo
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {menuItems.map((item, index) => (
            <AnimatedSection key={item.name} delay={index * 0.06}>
              <article className="glass-card group h-full overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-[1.9rem] leading-tight text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    {item.price}
                  </p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="section-padding">
      <div className="section-shell section-card grid items-start gap-8 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:gap-12">
        <AnimatedSection>
          <div className="glass-card overflow-hidden p-3">
            <div className="relative min-h-[360px] overflow-hidden rounded-[1.5rem] lg:min-h-[620px]">
              <Image
                src={restaurant.experienceImage}
                alt="Detalhe de prato servido na Da Roça Gastronomia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="grid h-full content-between gap-8">
          <div className="content-stack">
            <span className="eyebrow">Experiência Da Roça</span>
            <h2 className="section-title max-w-[12ch]">
              Um lugar para comer bem, reunir pessoas queridas e criar
              lembranças.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {experienceItems.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="glass-card p-6">
                  <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-serif text-[1.9rem] leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="section-padding">
      <div className="section-shell section-card">
        <AnimatedSection className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Galeria de pratos</span>
            <h2 className="section-title mt-6 max-w-[12ch]">
              Uma seleção de pratos que traduzem a fartura e o carinho da casa.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted">
            Sabores da roça, apresentação caprichada e aquele clima de almoço
            especial para compartilhar em volta da mesa.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="mt-12">
          <PlateCarousel images={galleryImages} />
        </AnimatedSection>
      </div>
    </section>
  );
}

function KidsSection() {
  return (
    <section className="section-padding">
      <div className="section-shell section-card grid items-start gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-12">
        <AnimatedSection>
          <span className="eyebrow">Espaço kids</span>
          <h2 className="section-title mt-6 max-w-[12ch]">
            Um cantinho especial para as crianças aproveitarem enquanto a
            família vive a experiência Da Roça.
          </h2>
          <p className="section-copy mt-8 max-w-[56ch]">
            Para quem quer almoçar com calma e curtir o ambiente, o espaço kids
            traz ainda mais conforto para famílias com crianças.
          </p>
          <a
            href="https://www.instagram.com/reel/DWJij3IBF5U/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-5 py-3 text-sm font-semibold transition hover:bg-white"
          >
            <RiInstagramFill className="h-4 w-4 text-[#d94877]" />
            Ver no Instagram
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <div className="glass-card p-3">
            <div className="overflow-hidden rounded-[1.6rem] bg-white p-3">
              <blockquote
                className="instagram-media !m-0 !w-full !max-w-none !min-w-0"
                data-instgrm-permalink="https://www.instagram.com/reel/DWJij3IBF5U/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
              >
                <div style={{ padding: "16px" }}>
                  <a
                    href="https://www.instagram.com/reel/DWJij3IBF5U/?utm_source=ig_embed&amp;utm_campaign=loading"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      background: "#FFFFFF",
                      lineHeight: 0,
                      padding: "0 0",
                      textAlign: "center",
                      textDecoration: "none",
                      width: "100%",
                    }}
                  >
                    Ver esse vídeo no Instagram
                  </a>
                </div>
              </blockquote>
            </div>
          </div>
        </AnimatedSection>
      </div>
      <Script async src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
    </section>
  );
}

function HoursSection() {
  return (
    <section className="section-padding">
      <div className="section-shell section-card">
        <AnimatedSection className="glass-card overflow-hidden">
          <div className="grid items-start gap-8 p-8 sm:p-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:p-12">
            <div className="content-stack">
              <span className="eyebrow">Horários</span>
              <h2 className="section-title max-w-[10ch]">
                Programe seu almoço e venha sem pressa.
              </h2>
              <p className="section-copy max-w-[25rem]">
                A casa abre para os dias mais especiais da semana, com serviço
                pensado para tornar o almoço ainda mais prazeroso.
              </p>
            </div>
            <div className="space-y-4">
              {hours.map(([day, value]) => (
                <div
                  key={day}
                  className="flex flex-col gap-3 rounded-[1.6rem] border border-border bg-white/65 p-6 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Clock3 className="h-5 w-5 text-primary" />
                    <span className="text-lg font-medium text-foreground">
                      {day}
                    </span>
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
                    {value}
                  </span>
                </div>
              ))}
              <div className="grid gap-4 rounded-[1.8rem] border border-border bg-[linear-gradient(135deg,rgba(143,79,45,0.07),rgba(68,84,61,0.08))] p-6 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-secondary">
                    Planeje sua visita
                  </p>
                  <p className="mt-3 text-base leading-7 text-muted">
                    Cardápio, reservas para grupos acima de 8 pessoas e eventos
                    são atendidos diretamente pelo WhatsApp.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:items-end">
                  <WhatsAppButton
                    href={whatsappLink(
                      "Olá, gostaria de ver o cardápio da Da Roça.",
                    )}
                    className="w-full sm:w-auto"
                  >
                    Ver Cardápio
                  </WhatsAppButton>
                  <a
                    href="#reservas"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white/70 px-5 py-3 text-sm font-semibold transition hover:bg-white"
                  >
                    Reservas & Eventos
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section id="localizacao" className="section-padding">
      <div className="section-shell section-card grid items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
        <AnimatedSection className="space-y-6">
          <div className="glass-card p-8 sm:p-10">
            <span className="eyebrow">Localização</span>
            <h2 className="section-title mt-6 max-w-[12ch]">
              Jundiaí, natureza ao redor e um almoço que vale o caminho.
            </h2>
            <p className="section-copy mt-6 max-w-[56ch]">{restaurant.address}</p>
            <p className="mt-4 max-w-[56ch] text-sm leading-7 text-muted">
              Um destino acolhedor para reunir a família, celebrar datas
              especiais e viver a experiência Da Roça com calma.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={restaurant.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-110"
              >
                <MapPinned className="h-4 w-4" />
                Como Chegar
              </a>
              <WhatsAppButton
                href={whatsappLink(
                  "Olá, gostaria de informações sobre localização e acesso.",
                )}
                variant="ghost"
              >
                Tirar Dúvidas
              </WhatsAppButton>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-border bg-white/70 p-2 soft-shadow">
            <iframe
              title="Mapa da Da Roça Gastronomia"
              src="https://www.google.com/maps?q=R.%20Ignez%20Thomasi%20Bardi,%2097%20-%20Caxambu,%20Jundia%C3%AD%20-%20SP&z=15&output=embed"
              className="h-[320px] w-full rounded-[1.5rem] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex justify-start">
            <a
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold transition hover:bg-[#f8f1e8]"
            >
              <MapPinned className="h-4 w-4" />
              Abrir Rotas no Google Maps
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="grid gap-6">
          <div className="glass-card p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
              <Image
                src={restaurant.locationImage}
                alt="Ambiente da Da Roça Gastronomia em Jundiaí"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="glass-card p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-secondary">
                Fácil de encontrar
              </p>
              <p className="mt-3 text-base leading-7 text-muted">
                Localização prática em Jundiaí para um almoço especial no fim de
                semana e feriados.
              </p>
            </div>
            <div className="glass-card p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-secondary">
                Ideal para encontros
              </p>
              <p className="mt-3 text-base leading-7 text-muted">
                Um cenário charmoso para reunir pessoas queridas em torno da
                mesa.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function ReservationsSection() {
  return (
    <section id="reservas" className="section-padding">
      <div className="section-shell section-card">
        <AnimatedSection className="glass-card overflow-hidden bg-[linear-gradient(135deg,rgba(143,79,45,0.08),rgba(68,84,61,0.08))] p-8 sm:p-10 lg:p-14">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-12">
            <div className="content-stack">
              <span className="eyebrow">Reservas & eventos</span>
              <h2 className="section-title max-w-[11ch]">
                Para grupos, comemorações e encontros que merecem uma mesa
                especial.
              </h2>
              <p className="section-copy max-w-[56ch]">
                Reservas são feitas via WhatsApp para grupos acima de 8 pessoas.
                Se a ideia for celebrar com mais calma, a Da Roça também oferece
                o espaço para festas, confraternizações e eventos sob medida.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-[1.8rem] border border-border bg-white/70 p-6">
                <div className="flex items-center gap-3">
                  <CookingPot className="h-5 w-5 text-primary" />
                  <h3 className="font-serif text-2xl">Reservas para grupos</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Ideal para aniversários, encontros em família e grupos acima
                  de 8 pessoas.
                </p>
              </div>
              <div className="rounded-[1.8rem] border border-border bg-white/70 p-6">
                <div className="flex items-center gap-3">
                  <PartyPopper className="h-5 w-5 text-primary" />
                  <h3 className="font-serif text-2xl">Eventos especiais</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Converse com a equipe para festas, confraternizações e locação
                  do espaço com o clima acolhedor da casa.
                </p>
              </div>
              <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
                <WhatsAppButton
                  href={whatsappLink(
                    "Olá, quero fazer uma reserva para um grupo acima de 8 pessoas.",
                  )}
                  className="self-start px-5 py-3 sm:w-auto"
                >
                  Reservar pelo WhatsApp
                </WhatsAppButton>
                <WhatsAppButton
                  href={whatsappLink(
                    "Olá, gostaria de informações sobre eventos na Da Roça Gastronomia.",
                  )}
                  variant="ghost"
                  className="self-start px-5 py-3 sm:w-auto"
                >
                  Solicitar Evento
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/80 bg-[#2a1f18] py-12 text-white">
      <div className="section-shell flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/15">
            <Image
              src={restaurant.logoUrl}
              alt="Logo da Da Roça Gastronomia"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-serif text-2xl">{restaurant.name}</p>
            <p className="text-sm text-white/68">{restaurant.slogan}</p>
          </div>
        </div>
        <div className="space-y-2 text-sm text-white/76">
          <p>{restaurant.address}</p>
          <p>WhatsApp para cardápio, reservas acima de 8 pessoas e eventos.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <a
            href={restaurant.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 transition hover:bg-white/8"
          >
            <RiInstagramFill className="h-4 w-4 text-[#ff72a6]" />
            Instagram
          </a>
          <a
            href={restaurant.facebook}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 transition hover:bg-white/8"
          >
            <RiFacebookFill className="h-4 w-4 text-[#7db0ff]" />
            Facebook
          </a>
          <a
            href={whatsappLink(
              "Olá, gostaria de fazer uma reserva na Da Roça Gastronomia.",
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 transition hover:bg-white/8"
          >
            <RiWhatsappFill className="h-4 w-4 text-[#65d88a]" />
            WhatsApp
          </a>
          <a
            href={restaurant.menuUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 transition hover:bg-white/8"
          >
            <CookingPot className="h-4 w-4 text-[#e6b66f]" />
            Cardápio
          </a>
        </div>
      </div>
      <div className="section-shell mt-8 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.18em] text-white/45">
        © 2026 Da Roça Gastronomia Brasil. Todos os direitos reservados.
      </div>
    </footer>
  );
}
