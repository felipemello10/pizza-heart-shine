import { createFileRoute } from "@tanstack/react-router";
import heroPizza from "@/assets/hero-pizza.jpg";
import pizzaPera from "@/assets/pizza-pera.jpg";
import pizzaFriarielli from "@/assets/pizza-friarielli.jpg";
import pizzaMargherita from "@/assets/pizza-margherita.jpg";
import ambiente from "@/assets/ambiente.jpg";
import { Star, MapPin, Phone, Clock, Heart, Instagram } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pizza Mercutio — Pizzaria artesanal em Perdizes, São Paulo" },
      {
        name: "description",
        content:
          "Pizza Mercutio: pizzas estilo italiano com recheios brasileiros no coração de Perdizes. 4,8 estrelas no Google. Delivery, salão e balcão.",
      },
      { property: "og:title", content: "Pizza Mercutio — Perdizes, SP" },
      { property: "og:description", content: "Pizza estilo italiano, ambiente acolhedor e atendimento de bairro." },
      { property: "og:type", content: "restaurant" },
    ],
  }),
  component: Index,
});

const pizzas = [
  {
    name: "Pêra & Gorgonzola",
    desc: "Massa fina, gorgonzola DOP, pêras assadas em mel e nozes tostadas.",
    price: "R$ 78",
    img: pizzaPera,
    tag: "assinatura",
  },
  {
    name: "Friarielli",
    desc: "Friarielli refogado no alho, linguiça artesanal e fior di latte.",
    price: "R$ 82",
    img: pizzaFriarielli,
    tag: "do chef",
  },
  {
    name: "Margherita",
    desc: "San Marzano, mozzarella di bufala, manjericão fresco e azeite.",
    price: "R$ 64",
    img: pizzaMargherita,
    tag: "clássica",
  },
];

const reviews = [
  {
    text: "Uma das melhores pizzas que comi em São Paulo!! A nota reflete a realidade.",
    name: "Camyla Serpa",
    meta: "Local Guide · 127 avaliações",
  },
  {
    text: "Vibe super de bairro, aconchegante e intimista. Dá vontade de voltar sempre.",
    name: "Isabella Gouveia",
    meta: "6 avaliações",
  },
  {
    text: "Atendimento especial, dono sempre presente e simpático. Comida saborosa.",
    name: "Bento Dröttning",
    meta: "Local Guide · 34 avaliações",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-2 text-cream">
            <span className="font-display text-2xl tracking-wide">Mercutio</span>
            <span className="font-script text-accent text-lg">·dal 2014</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-cream/90">
            <a href="#cardapio" className="hover:text-accent transition">Cardápio</a>
            <a href="#historia" className="hover:text-accent transition">História</a>
            <a href="#avaliacoes" className="hover:text-accent transition">Avaliações</a>
            <a href="#visite" className="hover:text-accent transition">Visite</a>
          </nav>
          <a
            href="https://pizzamercutio.saipos.com"
            target="_blank" rel="noreferrer"
            className="hidden md:inline-flex items-center rounded-full border border-cream/40 px-5 py-2 text-sm text-cream hover:bg-cream hover:text-ink transition"
          >
            Pedir online
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-[100svh] overflow-hidden bg-ink text-cream grain">
        <img
          src={heroPizza}
          alt="Pizza artesanal Mercutio"
          width={1536} height={1536}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink/90" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24 min-h-[100svh] flex flex-col justify-end">
          <span className="divider-flourish mb-6">Perdizes · São Paulo</span>
          <h1 className="font-display text-[clamp(3rem,10vw,9rem)] leading-[0.9] text-balance">
            Pizza <em className="text-accent">come</em>
            <br /> a Napoli.<span className="text-accent">.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-cream/80 font-light">
            Massa de longa fermentação, ingredientes selecionados e o calor de uma
            pizzaria de bairro. Há mais de uma década na Rua Diana.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#cardapio"
              className="inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-ink font-medium hover:bg-accent/90 transition shadow-lg shadow-accent/20"
            >
              Ver cardápio
            </a>
            <a
              href="tel:+5511910271967"
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3.5 text-cream hover:bg-cream/10 transition"
            >
              <Phone className="size-4" /> (11) 91027-1967
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-8 text-sm text-cream/70">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-accent text-accent" />
                ))}
              </div>
              <span><strong className="text-cream">4,8</strong> · 365 avaliações no Google</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="bg-secondary text-secondary-foreground py-6 overflow-hidden">
        <div className="flex animate-[float-slow_8s_ease-in-out_infinite] items-center justify-around gap-12 text-center font-display text-2xl italic whitespace-nowrap px-6">
          <span>Massa de fermentação natural</span>
          <span className="text-accent">✦</span>
          <span>Mozzarella di bufala</span>
          <span className="text-accent">✦</span>
          <span>Forno a lenha</span>
          <span className="text-accent">✦</span>
          <span>Desde 2014</span>
        </div>
      </section>

      {/* CARDÁPIO */}
      <section id="cardapio" className="mx-auto max-w-7xl px-6 py-28">
        <div className="text-center mb-20">
          <span className="divider-flourish">Il Menu</span>
          <h2 className="mt-4 text-5xl md:text-7xl text-balance">
            Receitas que contam <em>histórias</em>.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
            Pizza no estilo italiano com toques brasileiros. Mais de 30 sabores no
            cardápio completo — abaixo, três paixões da casa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {pizzas.map((p) => (
            <article key={p.name} className="group">
              <div className="relative overflow-hidden rounded-sm bg-muted aspect-square">
                <img
                  src={p.img} alt={p.name}
                  width={1024} height={1024} loading="lazy"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-cream/95 backdrop-blur px-3 py-1 text-xs uppercase tracking-widest text-ink">
                  {p.tag}
                </span>
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-3xl">{p.name}</h3>
                <span className="font-display text-2xl text-primary">{p.price}</span>
              </div>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://pizzamercutio.saipos.com" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 text-primary font-display text-2xl italic underline-offset-4 hover:underline"
          >
            Ver cardápio completo →
          </a>
        </div>
      </section>

      {/* HISTÓRIA — split */}
      <section id="historia" className="bg-ink text-cream py-28 grain">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={ambiente} alt="Salão da Pizzaria Mercutio"
              width={1536} height={1024} loading="lazy"
              className="w-full rounded-sm object-cover aspect-[4/5]"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent text-ink p-6 rounded-sm max-w-[200px] hidden md:block">
              <div className="font-display text-4xl leading-none">10+</div>
              <div className="text-xs uppercase tracking-widest mt-2">anos em Perdizes</div>
            </div>
          </div>
          <div>
            <span className="divider-flourish">La Nostra Storia</span>
            <h2 className="mt-4 text-5xl md:text-6xl text-balance">
              Pequena de tamanho,<br /><em className="text-accent">imensa</em> de alma.
            </h2>
            <p className="mt-8 text-cream/75 leading-relaxed text-lg">
              A Mercutio nasceu do desejo de Luiz Fernando de servir uma pizza honesta — feita
              com tempo, com massa de longa fermentação e ingredientes que falam por si. Poucas
              mesas, um balcão para conversar, e a sensação de estar na cozinha de um amigo.
            </p>
            <p className="mt-4 text-cream/75 leading-relaxed text-lg">
              Aqui todo mundo é bem-vindo — sempre foi.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-cream/15 pt-8">
              <div>
                <div className="font-display text-3xl text-accent">4,8</div>
                <div className="text-xs uppercase tracking-widest text-cream/60 mt-1">Google</div>
              </div>
              <div>
                <div className="font-display text-3xl text-accent">365+</div>
                <div className="text-xs uppercase tracking-widest text-cream/60 mt-1">Avaliações</div>
              </div>
              <div>
                <div className="font-display text-3xl text-accent">2014</div>
                <div className="text-xs uppercase tracking-widest text-cream/60 mt-1">Desde</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VOZES */}
      <section id="vozes" className="mx-auto max-w-7xl px-6 py-28">
        <div className="text-center mb-16">
          <span className="divider-flourish">Le Voci</span>
          <h2 className="mt-4 text-5xl md:text-6xl">O que dizem por aí.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="bg-card border border-border p-8 rounded-sm relative"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="size-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="font-display text-xl italic leading-snug text-balance">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="font-medium">{r.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{r.meta}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* VISITE */}
      <section id="visite" className="bg-primary text-primary-foreground py-28 grain">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16">
          <div>
            <span className="divider-flourish text-cream/80">Vieni a trovarci</span>
            <h2 className="mt-4 text-5xl md:text-7xl text-balance">
              Te esperamos<br /><em className="font-script text-accent">stasera</em>.
            </h2>
            <p className="mt-6 text-cream/85 text-lg max-w-md">
              Reserve uma mesa, peça pelo balcão ou receba em casa. A pizza chega quentinha
              de qualquer jeito.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="https://pizzamercutio.saipos.com" target="_blank" rel="noreferrer"
                className="bg-accent text-ink rounded-full px-7 py-3.5 font-medium hover:bg-accent/90 transition">
                Pedir delivery
              </a>
              <a href="tel:+5511910271967"
                className="border border-cream/40 rounded-full px-7 py-3.5 hover:bg-cream/10 transition">
                Ligar agora
              </a>
            </div>
          </div>

          <div className="space-y-6 text-cream/90">
            <div className="flex gap-4">
              <MapPin className="size-5 text-accent shrink-0 mt-1" />
              <div>
                <div className="font-display text-xl text-cream">R. Diana, 613</div>
                <div className="text-sm">Perdizes, São Paulo — SP · 05019-000</div>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="size-5 text-accent shrink-0 mt-1" />
              <div>
                <div className="font-display text-xl text-cream">Terça a domingo</div>
                <div className="text-sm">Abre às 18h30 · fechado às segundas</div>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="size-5 text-accent shrink-0 mt-1" />
              <div>
                <div className="font-display text-xl text-cream">(11) 91027-1967</div>
                <div className="text-sm">WhatsApp e ligação</div>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/BP3YtaxY3nY3YN8V7"
              target="_blank"
              rel="noreferrer"
              className="block mt-4 overflow-hidden rounded-sm border border-cream/15 aspect-[4/3] group"
              aria-label="Abrir Pizza Mercutio no Google Maps"
            >
              <iframe
                title="Mapa Pizza Mercutio"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.9633607484197!2d-46.68412802467073!3d-23.533820178818658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5717ab4d0fef%3A0xa36510d03bb826d1!2sPizza%20Mercutio!5e0!3m2!1spt-BR!2sbr!4v1778460899213!5m2!1spt-BR!2sbr"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0 grayscale contrast-110 transition duration-500 group-hover:grayscale-0 pointer-events-none"
              />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-cream/70 py-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl text-cream">Mercutio</span>
            <span className="font-script text-accent">·dal 2014</span>
          </div>
          <div className="text-xs">© {new Date().getFullYear()} Pizza Mercutio · Feito com massa, fogo e afeto.</div>
          <a href="#" className="flex items-center gap-2 text-sm hover:text-accent transition">
            <Instagram className="size-4" /> @pizzamercutio
          </a>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}
