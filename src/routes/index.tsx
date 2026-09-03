 
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import heroArtUrl from "@/assets/hero-churrasqueiro.jpeg";
import produtoArtUrl from "@/assets/guia-produto.jpeg";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'cakto-upsell-buttons': any;
      'cakto-upsell-accept': any;
      'cakto-upsell-reject': any;
    }
  }
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clube do Churrasco Perfeito™ — O Sistema Prático para Churrasqueiros" },
      {
        name: "description",
        content:
          "Pare de improvisar. Domine o cálculo de carnes, escolha os melhores cortes e controle a brasa com o sistema prático do Clube do Churrasco Perfeito. Acesso vitalício por R$ 17,90.",
      },
      { property: "og:title", content: "Clube do Churrasco Perfeito™ — Chega de Improvisar no Churrasco" },
      {
        property: "og:description",
        content:
          "Domine o fogo, calcule a carne e surpreenda seus convidados. O sistema completo para churrasqueiros, agora por apenas R$ 17,90.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://clubdochurrascoperfeito.lovable.app/assets/hero-churrasqueiro.jpeg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Clube do Churrasco Perfeito™" },
      { name: "twitter:description", content: "O sistema prático para churrasqueiros que não querem errar no próximo evento." },
      { name: "twitter:image", content: "https://clubdochurrascoperfeito.lovable.app/assets/hero-churrasqueiro.jpeg" },
    ],
    scripts: [
      {
        children: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','2120179718904391');
fbq('track','PageView');`
      },
      {
        children: `!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
  ttq.load('DA5NG63C77U8NT7JF0J0');
  ttq.page();
}(window, document, 'ttq');`
      },

      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Clube do Churrasco Perfeito™",
          "image": "https://clubdochurrascoperfeito.lovable.app/assets/hero-churrasqueiro.jpeg",
          "description": "O sistema definitivo para planejar e executar seu churrasco sem erros. Inclui calculadora de carnes, guia de cortes, manual do fogo e roteiros práticos.",
          "brand": {
            "@type": "Brand",
            "name": "Clube do Churrasco Perfeito"
          },
          "offers": {
            "@type": "Offer",
            "url": "https://clubdochurrascoperfeito.lovable.app",
            "priceCurrency": "BRL",
            "price": "17.90",
            "availability": "https://schema.org/InStock"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "3"
          }
        })
      },
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "É para iniciantes?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. É uma referência de consulta rápida, com linguagem simples, feita para quem quer parar de improvisar no churrasco."
              }
            },
            {
              "@type": "Question",
              "name": "Como funciona o acesso? Precisa instalar alguma coisa?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Não instala nada. Após o pagamento você recebe um link por e-mail e acessa diretamente pelo navegador do celular ou computador. Acesso vitalício."
              }
            },
            {
              "@type": "Question",
              "name": "E se eu não gostar?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Você tem 7 dias de garantia total, sem burocracia. Se não gostar, devolvemos 100% do valor."
              }
            }
          ]
        })
      }
    ]
  }),
  component: Index,
});

const CHECKOUT_URL = "https://pay.cakto.com.br/rfzix5k_1049718";

const PRODUCT = {
  content_type: "product",
  content_id: "clube-churrasco-perfeito",
  content_name: "Clube do Churrasco Perfeito™",
  value: 17.9,
  currency: "BRL",
};

const newEventId = () =>
  `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

// Envia o mesmo evento para a API de Conversões da Meta (server-side),
// usando o mesmo event_id do pixel para deduplicação.
const getCookie = (name: string): string | undefined => {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return match ? decodeURIComponent(match[1]!) : undefined;
};

const sendCapi = (eventName: string, eventId: string) => {
  if (typeof window === "undefined") return;
  try {
    // fbc a partir do parâmetro de clique do anúncio, se existir
    const fbclid = new URLSearchParams(window.location.search).get("fbclid");
    const fbc =
      getCookie("_fbc") ??
      (fbclid ? `fb.1.${Date.now()}.${fbclid}` : undefined);
    const payload = JSON.stringify({
      event_name: eventName,
      event_id: eventId,
      event_source_url: window.location.href,
      fbp: getCookie("_fbp"),
      fbc,
      value: PRODUCT.value,
      currency: PRODUCT.currency,
      content_id: PRODUCT.content_id,
      content_name: PRODUCT.content_name,
    });
    const url = "/api/public/meta-capi";
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, new Blob([payload], { type: "application/json" }));
    } else {
      void fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
        keepalive: true,
      });
    }
  } catch {
    /* tracking nunca deve quebrar a navegação */
  }
};

const trackEvent = (metaEvent: string, tiktokEvent: string) => {
  if (typeof window === "undefined") return;
  const eventId = newEventId();
  const w = window as any;
  if (w.fbq) {
    w.fbq(
      "track",
      metaEvent,
      {
        content_type: PRODUCT.content_type,
        content_ids: [PRODUCT.content_id],
        content_name: PRODUCT.content_name,
        value: PRODUCT.value,
        currency: PRODUCT.currency,
      },
      { eventID: eventId },
    );
  }
  if (w.ttq) {
    w.ttq.track(tiktokEvent, {
      content_type: PRODUCT.content_type,
      content_id: PRODUCT.content_id,
      content_name: PRODUCT.content_name,
      value: PRODUCT.value,
      currency: PRODUCT.currency,
      event_id: eventId,
    });
  }
  sendCapi(metaEvent, eventId);
};

const trackInitiateCheckout = () => {
  trackEvent("InitiateCheckout", "InitiateCheckout");
  // O checkout é externo (Cakto): registramos também AddPaymentInfo aqui,
  // pois é o último passo rastreável antes do pagamento.
  trackEvent("AddPaymentInfo", "AddPaymentInfo");
};

const trackAddToCart = () => {
  trackEvent("AddToCart", "AddToCart");
};


// STACK DE VALOR
const stackItens = [
  { icon: "ic-meat", title: "Calculadora de Carne", desc: "Descubra exatamente quanto comprar por perfil de convidado." },
  { icon: "ic-knife", title: "Guia de Cortes", desc: "Escolha melhor no açougue. Saiba o que esperar de cada peça." },
  { icon: "ic-flame", title: "Manual da Brasa", desc: "Controle fogo e calor com a técnica dos segundos na mão." },
  { icon: "ic-thermo", title: "Guia de Pontos", desc: "Acerte o ponto sem precisar cortar a peça toda hora." },
  { icon: "ic-cart", title: "Checklists do Anfitrião", desc: "Não esqueça carvão, gelo, sal ou nada essencial." },
  { icon: "ic-clipboard", title: "Roteiros de Churrasco", desc: "Estruturas prontas para Casal, 5, 10 e 20 pessoas." },
  { icon: "ic-beer", title: "Acompanhamentos", desc: "Farofa, vinagrete, pão de alho e harmonização." },
  { icon: "ic-gift", title: "BÔNUS — O Churrasco Gaúcho", desc: "Livro digital ilustrado com história e técnica da tradição sulista." },
];

// SCREENSHOTS DO PRODUTO (mockup visual)
const screenCards = [
  { emoji: "🥩", title: "Calculadora", label: "10 pessoas → 3.5 kg bovina", sub: "1.5 kg linguiça • 1.0 kg frango", color: "#ff5a1f" },
  { emoji: "🔪", title: "Guia de Cortes", label: "Picanha ★★★★★", sub: "Fraldinha ★★★★☆ • Contrafilé ★★★☆☆", color: "#f59e0b" },
  { emoji: "🔥", title: "Manual do Fogo", label: "Calor Alto → 3 a 5 seg", sub: "Calor Médio → 6 a 8 seg na mão", color: "#ef4444" },
  { emoji: "🌡️", title: "Pontos da Carne", label: "Ao Ponto → Cede levemente", sub: "Malpassado → Mole • Bem passado → Duro", color: "#10b981" },
  { emoji: "🛒", title: "Checklist", label: "☑ Carne e carvão", sub: "☑ Sal grosso • ☐ Tábua e faca", color: "#6366f1" },
  { emoji: "📋", title: "Roteiro", label: "Para 10 pessoas", sub: "Entrada 18h • Grelha 19h • Mesa 20h", color: "#8b5cf6" },
  { emoji: "🍺", title: "Acompanhamentos", label: "Farofa de bacon crocante", sub: "Vinagrete • Pão de alho • Queijo", color: "#f59e0b" },
];

// SITUAÇÕES (para quem é — compacto)
const situacoes = [
  { s: "Vai ao mercado amanhã", t: "Calculadora + Guia de Cortes" },
  { s: "Vai receber 10+ pessoas", t: "Roteiro de Grupo + Checklist" },
  { s: "Tem medo de queimar a carne", t: "Manual do Fogo + Pontos" },
  { s: "Quer economizar na compra", t: "Calculadora + Comparativo de Cortes" },
  { s: "Está aprendendo a churrasquear", t: "Todos os Guias Juntos" },
  { s: "Faz churrasco toda semana", t: "Ferramentas Rápidas de Consulta" },
];

// DEPOIMENTOS (PLACEHOLDERS — substitua por depoimentos reais dos seus clientes)
const depoimentos = [
  {
    stars: 5,
    text: "Finalmente não precisei ficar perguntando no grupo da família quanto de carne comprar. Coloquei o número de pessoas e já saiu a lista.",
    author: "Marcelo R.",
    tag: "Comprador do Clube",
  },
  {
    stars: 5,
    text: "Fiz o churrasco de aniversário do meu filho sem estresse. Consultei o guia de fogo na hora e a carne ficou no ponto certo.",
    author: "Fernanda T.",
    tag: "Compradora do Clube",
  },
  {
    stars: 5,
    text: "Só a calculadora já valeu os R$17,90. Comprei a quantidade exata, não sobrou quase nada e não faltou para ninguém.",
    author: "Rafael S.",
    tag: "Comprador do Clube",
  },
];

// FAQ — apenas as objeções que importam
const faqs = [
  {
    q: "É para iniciantes?",
    a: "Sim. A linguagem é simples e direta. Você abre, encontra a informação que precisa em segundos e volta para a grelha.",
  },
  {
    q: "Funciona no celular?",
    a: "Sim. É feito para ser consultado pelo navegador do celular, sem instalar nada.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Depois da confirmação do pagamento você recebe o link de acesso por e-mail.",
  },
  {
    q: "É pagamento único?",
    a: "Sim. Você paga R$ 17,90 uma única vez e o acesso é vitalício. Sem mensalidade.",
  },
  {
    q: "Tenho garantia?",
    a: "Você tem 7 dias para avaliar o material. Se não fizer sentido para você, pode solicitar o reembolso conforme as condições da garantia.",
  },
  {
    q: "O que eu recebo?",
    a: "Calculadora de carnes, guia de cortes, manual da brasa, guia de pontos e tempos, temperos, checklists, roteiros de churrasco e acompanhamentos — mais o bônus O Churrasco Gaúcho.",
  },
];

function Icons() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <symbol id="ic-flame" viewBox="0 0 24 24">
          <path d="M12 2C10 5 6 8 6 12.5A6 6 0 0 0 12 18.5A6 6 0 0 0 18 12.5C18 10.3 16.8 8.7 15.7 7.7C16 10 14.3 11.3 13 10.2C14 7.7 12 5 12 2Z" fill="currentColor" />
        </symbol>
        <symbol id="ic-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </symbol>
        <symbol id="ic-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </symbol>
        <symbol id="ic-star" viewBox="0 0 24 24">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="currentColor" />
        </symbol>
        <symbol id="ic-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="m6 6 12 12M18 6 6 18" />
        </symbol>
        <symbol id="ic-meat" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 8.5c1.8-3.2 6.1-4 9.4-2.1l4.3 2.5c2.1 1.2 2.7 4 .9 5.8l-2.8 2.8c-1.8 1.8-4.6 1.2-5.8-.9L8 12.3c-1.9-3.3-3.1-2-3.5-3.8Z" />
          <circle cx="16.5" cy="11" r="1.2" />
        </symbol>
        <symbol id="ic-knife" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="m4 20 8.7-8.7M4 20l4.5-1.1L20 7.4a2.1 2.1 0 0 0-3-3L5.1 16.4 4 20Z" />
        </symbol>
        <symbol id="ic-thermo" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
          <path d="M10 14.5V5a2 2 0 1 1 4 0v9.5a4 4 0 1 1-4 0Z" /><path d="M12 12v5" />
        </symbol>
        <symbol id="ic-cart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.4a2 2 0 0 0 1.9-1.4L20 8H6" /><circle cx="10" cy="20" r="1" /><circle cx="17" cy="20" r="1" />
        </symbol>
        <symbol id="ic-clipboard" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4.5V3h6v1.5M9 10h6M9 14h6M9 18h3" />
        </symbol>
        <symbol id="ic-beer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 6h10v13H7zM17 9h2a2 2 0 0 1 0 4h-2M10 3v3M14 3v3" />
        </symbol>
        <symbol id="ic-gift" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="9" width="18" height="12" rx="1" /><path d="M12 9v12M3 13h18M12 9H8.5a2.5 2.5 0 1 1 2.5-2.5V9ZM12 9h3.5a2.5 2.5 0 1 0-2.5-2.5V9Z" />
        </symbol>
        <symbol id="ic-lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </symbol>
        <symbol id="ic-bolt" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" />
        </symbol>
      </defs>
    </svg>
  );
}

function SymbolIcon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <svg className={`ui-icon ${className}`} aria-hidden="true" focusable="false">
      <use href={`#${name}`} />
    </svg>
  );
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showSticky, setShowSticky] = useState(false);
  const [demoPessoas, setDemoPessoas] = useState(10);
  const heroRef = useRef<HTMLElement>(null);

  const totalBov = (demoPessoas * 0.35).toFixed(1);
  const totalLing = (demoPessoas * 0.15).toFixed(1);
  const totalFrango = (demoPessoas * 0.10).toFixed(1);
  const totalCarvao = Math.max(3, Math.ceil(demoPessoas * 0.6));

  useEffect(() => {
    // ViewContent (Meta + TikTok) no carregamento da página
    trackEvent("ViewContent", "ViewContent");


    const hero = document.getElementById("hero");
    const onScroll = () => {
      if (!hero) return;
      setShowSticky(hero.getBoundingClientRect().bottom < 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = document.querySelectorAll(".reveal");
    let obs: IntersectionObserver | undefined;
    if (!prefersReduced && "IntersectionObserver" in window) {
      obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              obs?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08 },
      );
      reveals.forEach((el) => obs?.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add("in-view"));
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      obs?.disconnect();
    };
  }, []);

  return (
    <div>
      <Icons />

      {/* HEADER */}
      <header>
        <div className="header-inner">
          <div className="brand">
            <svg className="icon"><use href="#ic-flame" /></svg>
            Clube do <em>Churrasco</em> Perfeito
          </div>
          <div className="header-right">
            <div className="header-price mono">R$ 17,90</div>
            <a href={CHECKOUT_URL} className="header-btn" onClick={trackAddToCart}>Quero Acessar</a>
          </div>
        </div>
      </header>

      {/* ============ 01 — HERO ============ */}
      <section className="hero grate-bg" id="hero" ref={heroRef}>
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="hero-eyetag"><SymbolIcon name="ic-flame" /> VAI TER CHURRASCO?</div>

            <h1 className="hero-mega-headline">
              ANTES DE COMPRAR A CARNE, APRENDA A PLANEJAR E PREPARAR SEU CHURRASCO.
            </h1>

            <p className="hero-sub">
              Descubra como calcular melhor a quantidade de carne, entender cortes, fogo, tempos,
              temperos e preparo — com um guia prático que você pode consultar direto pelo celular.
            </p>

            <div className="offer-price-block">
              <span className="offer-price-value">R$ 17,90</span>
              <span className="offer-price-terms">Pagamento único • Acesso vitalício • Garantia de 7 dias</span>
            </div>

            <div className="hero-cta-stack">
              <a href={CHECKOUT_URL} className="cta-fire-btn" onClick={trackInitiateCheckout}>
                <SymbolIcon name="ic-flame" /> QUERO MEU ACESSO POR R$ 17,90
              </a>

              <div className="trust-microcopy">
                <span><SymbolIcon name="ic-lock" /> Pagamento seguro</span>
                <span><SymbolIcon name="ic-bolt" /> Acesso digital</span>
                <span><SymbolIcon name="ic-shield" /> Garantia de 7 dias</span>
              </div>
            </div>
          </div>

          <div className="hero-visual-col">
            <div className="hero-mockup-wrap">
              <img
                src={heroArtUrl}
                width={720}
                height={720}
                alt="Churrasqueiro consultando o Clube do Churrasco no celular durante o churrasco"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ 02 — DOR ============ */}
      <section className="bg-darker">
        <div className="wrap reveal">
          <div className="section-header center">
            <span className="eyebrow">O Problema Real</span>
            <h2>Já aconteceu de o churrasco não sair como você esperava?</h2>
          </div>

          <ul className="pain-bullets">
            <li><SymbolIcon name="ic-x" /> Carne demais</li>
            <li><SymbolIcon name="ic-x" /> Carne de menos</li>
            <li><SymbolIcon name="ic-x" /> Ponto errado</li>
            <li><SymbolIcon name="ic-x" /> Carne seca</li>
            <li><SymbolIcon name="ic-x" /> Sal fora do ponto</li>
            <li><SymbolIcon name="ic-x" /> Fogo difícil de controlar</li>
            <li><SymbolIcon name="ic-x" /> Dúvida sobre qual corte escolher</li>
          </ul>

          <div className="pain-close">
            <p>O problema nem sempre é a carne.</p>
            <p><strong>Muitas vezes, é simplesmente não saber o que fazer em cada etapa.</strong></p>
          </div>
        </div>
      </section>

      {/* ============ 03 — CALCULADORA (DEMONSTRAÇÃO) ============ */}
      <section className="calc-bait-section bg-darkest">
        <div className="wrap reveal">
          <div className="calc-bait-box">
            <div className="calc-bait-head">
              <span className="eyebrow">Demonstração</span>
              <h2><SymbolIcon name="ic-meat" /> QUANTO DE CARNE VOCÊ PRECISA?</h2>
              <p>
                Pare de comprar carne no chute. Informe seus convidados e tenha uma referência para
                planejar melhor seu churrasco.
              </p>
            </div>

            <div className="calc-bait-control">
              <div className="calc-bait-counter">
                <button
                  type="button"
                  aria-label="Diminuir número de pessoas"
                  className="calc-bait-btn-count"
                  onClick={() => setDemoPessoas(Math.max(2, demoPessoas - 1))}
                >−</button>
                <span className="calc-bait-num">{demoPessoas} <small>pessoas</small></span>
                <button
                  type="button"
                  aria-label="Aumentar número de pessoas"
                  className="calc-bait-btn-count"
                  onClick={() => setDemoPessoas(Math.min(50, demoPessoas + 1))}
                >+</button>
              </div>
              <input
                type="range"
                min="2"
                max="50"
                aria-label="Número de pessoas no churrasco"
                value={demoPessoas}
                onChange={(e) => setDemoPessoas(parseInt(e.target.value) || 2)}
                className="calc-bait-slider"
              />
            </div>

            <div className="calc-bait-result">
              <div className="calc-bait-item">
                <SymbolIcon name="ic-meat" className="calc-item-emoji" />
                <div>
                  <span className="calc-item-val">{totalBov} kg</span>
                  <span className="calc-item-label">carne bovina</span>
                </div>
              </div>
              <div className="calc-bait-item">
                <SymbolIcon name="ic-meat" className="calc-item-emoji" />
                <div>
                  <span className="calc-item-val">{totalLing} kg</span>
                  <span className="calc-item-label">linguiça</span>
                </div>
              </div>
              <div className="calc-bait-item">
                <SymbolIcon name="ic-meat" className="calc-item-emoji" />
                <div>
                  <span className="calc-item-val">{totalFrango} kg</span>
                  <span className="calc-item-label">frango</span>
                </div>
              </div>
              <div className="calc-bait-item">
                <SymbolIcon name="ic-flame" className="calc-item-emoji" />
                <div>
                  <span className="calc-item-val">~{totalCarvao} kg</span>
                  <span className="calc-item-label">carvão</span>
                </div>
              </div>
            </div>

            <div className="calc-bait-upsell">
              <p className="calc-bait-upsell-sub">
                Essa é apenas uma das ferramentas que você encontra dentro do Clube.
              </p>
              <a href={CHECKOUT_URL} className="cta-fire-btn" onClick={trackInitiateCheckout}>
                <SymbolIcon name="ic-flame" /> QUERO MEU ACESSO POR R$ 17,90
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 04 — SOLUÇÃO ============ */}
      <section className="grate-bg">
        <div className="wrap reveal">
          <div className="section-header center">
            <span className="eyebrow">A Solução</span>
            <h2>Foi para acabar com o “achismo” que criamos o Clube do Churrasco Perfeito.</h2>
          </div>

          <div className="solution-box">
            <p>
              Um guia prático para ajudar você a planejar e preparar melhor seus churrascos, mesmo
              que você não seja um churrasqueiro profissional.
            </p>
            <p>Tudo organizado em um único lugar para você consultar quando precisar.</p>
            <p className="solution-beats">
              <span>No celular.</span>
              <span>Na churrasqueira.</span>
              <span>No seu ritmo.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ============ 05 — O QUE VOCÊ RECEBE ============ */}
      <section className="bg-darker">
        <div className="wrap reveal">
          <div className="section-header center">
            <span className="eyebrow">O Que Você Recebe</span>
            <h2>Tudo isso no seu celular</h2>
          </div>

          <div className="stack-grid">
            {stackItens.map((item, i) => (
              <div className={`stack-item ${i === stackItens.length - 1 ? "stack-bonus" : ""}`} key={item.title}>
                <SymbolIcon name={item.icon} className="stack-emoji" />
                <div className="stack-content">
                  <b>{item.title}</b>
                  <span>{item.desc}</span>
                </div>
                <SymbolIcon name="ic-check" className="stack-check" />
              </div>
            ))}
          </div>

          <div className="section-cta">
            <a href={CHECKOUT_URL} className="cta-fire-btn" onClick={trackInitiateCheckout}>
              🔥 QUERO MEU ACESSO POR R$ 17,90
            </a>
          </div>
        </div>
      </section>

      {/* ============ 06 — BENEFÍCIO EMOCIONAL ============ */}
      <section className="grate-bg">
        <div className="wrap reveal">
          <div className="section-header center">
            <span className="eyebrow">O Próximo Churrasco</span>
            <h2>Imagine o seu próximo churrasco...</h2>
          </div>

          <div className="imagine-box">
            <p>Você sabe quanto comprar.</p>
            <p>Sabe qual corte escolher.</p>
            <p>Entende melhor o fogo.</p>
            <p>Sabe o que observar durante o preparo.</p>
            <p>E chega na hora de servir com muito mais confiança.</p>
          </div>

          <div className="imagine-close">
            MENOS ACHISMO.<br />MAIS PREPARO.<br />MAIS CONFIANÇA.
          </div>
        </div>
      </section>

      {/* ============ 07 — OFERTA ============ */}
      <section className="offer-section" id="comprar">
        <div className="wrap reveal">
          <div className="section-header center">
            <span className="eyebrow">A Oferta</span>
            <h2>Tenha o Clube do Churrasco Perfeito no seu celular</h2>
          </div>

          <div className="offer-box">
            <div className="offer-layout">
              <div className="offer-visual-col">
                <div className="offer-product-image">
                  <img
                    src={produtoArtUrl}
                    loading="lazy"
                    width={800}
                    height={800}
                    alt="Kit digital Clube do Churrasco — calculadora de carnes, guia de cortes e checklists"
                  />
                </div>
                <div className="offer-items-grid">
                  {stackItens.map((item) => (
                    <div className="offer-item" key={item.title}>
                      <SymbolIcon name={item.icon} className="ck" />
                      <b>{item.title}</b>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pricing-checkout-card">
                <div className="price-display-box">
                  <div className="price-main-val">R$ 17<sup>,90</sup></div>
                  <span className="price-tag-sub">Pagamento único • Acesso vitalício</span>
                </div>

                <ul className="price-benefits-list">
                  <li><SymbolIcon name="ic-check" className="benefit-check" /><span>Pagamento único de R$ 17,90</span></li>
                  <li><SymbolIcon name="ic-check" className="benefit-check" /><span>Acesso vitalício</span></li>
                  <li><SymbolIcon name="ic-check" className="benefit-check" /><span>Garantia de 7 dias</span></li>
                  <li><SymbolIcon name="ic-check" className="benefit-check" /><span>Uso direto no celular, sem instalar nada</span></li>
                </ul>

                <a href={CHECKOUT_URL} className="checkout-cta-button" onClick={trackInitiateCheckout}>
                  <span>🔥 QUERO MEU ACESSO POR R$ 17,90</span>
                </a>

                <div className="trust-microcopy">
                  <span><SymbolIcon name="ic-lock" /> Pagamento seguro</span>
                  <span><SymbolIcon name="ic-bolt" /> Acesso digital</span>
                  <span><SymbolIcon name="ic-shield" /> Garantia de 7 dias</span>
                </div>

                <div className="pay-badges-row">
                  <span className="pay-pill">Pix</span>
                  <span className="pay-pill">Cartão de Crédito</span>
                  <span className="pay-pill">Boleto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 08 — PROVA SOCIAL ============ */}
      <section className="grate-bg">
        <div className="wrap reveal">
          <div className="section-header center">
            <span className="eyebrow">O que dizem os compradores</span>
            <h2>Quem usou e não quer mais depender do improviso</h2>
          </div>
          <div className="testimonials-grid">
            {depoimentos.map((d) => (
              <div className="testimonial-card" key={d.author}>
                <div className="testi-stars">
                  {Array.from({ length: d.stars }).map((_, i) => (
                    <svg key={i} className="star-icon"><use href="#ic-star" /></svg>
                  ))}
                </div>
                <p className="testi-text">"{d.text}"</p>
                <div className="testi-author">
                  <b>{d.author}</b>
                  <span>{d.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 09 — GARANTIA ============ */}
      <section className="bg-darker">
        <div className="wrap reveal">
          <div className="guarantee-box">
            <SymbolIcon name="ic-shield" className="guarantee-shield" />
            <h2>Garantia de 7 dias</h2>
            <p>
              Você tem 7 dias para conhecer o material e avaliar se ele faz sentido para você.
            </p>
            <p>
              Se não ficar satisfeito, poderá solicitar o reembolso conforme as condições da garantia.
            </p>
            <a href={CHECKOUT_URL} className="cta-fire-btn" onClick={trackInitiateCheckout}>
              QUERO CONHECER O CLUBE
            </a>
          </div>
        </div>
      </section>

      {/* ============ 10 — FAQ ============ */}
      <section className="bg-darkest">
        <div className="wrap reveal">
          <div className="section-header center">
            <span className="eyebrow">Dúvidas</span>
            <h2>Perguntas Frequentes</h2>
          </div>
          <div className="faq-wrap">
            {faqs.map((f, i) => (
              <div className={`faq-card ${openFaq === i ? "open" : ""}`} key={f.q}>
                <button
                  type="button"
                  className="faq-btn"
                  aria-expanded={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{f.q}</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 11 — CTA FINAL ============ */}
      <section className="final-section grate-bg">
        <div className="wrap reveal">
          <SymbolIcon name="ic-flame" className="final-flame" />
          <h2>Seu próximo churrasco pode começar a ser preparado hoje.</h2>
          <p className="sub">
            Tenha um guia prático para consultar quando precisar e pare de depender somente do improviso.
          </p>

          <div className="offer-price-block center">
            <span className="offer-price-value">R$ 17,90</span>
            <span className="offer-price-terms">Pagamento único • Acesso vitalício • Garantia de 7 dias</span>
          </div>

          <a href={CHECKOUT_URL} className="cta-fire-btn" onClick={trackInitiateCheckout}>
            🔥 QUERO MEU ACESSO POR R$ 17,90
          </a>

          <div className="trust-microcopy">
            <span><SymbolIcon name="ic-lock" /> Pagamento seguro</span>
            <span><SymbolIcon name="ic-bolt" /> Acesso digital</span>
            <span><SymbolIcon name="ic-shield" /> Garantia de 7 dias</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <p>
            Clube do Churrasco Perfeito™ — Central Prática de Consulta &amp; Organização
            <br />
            Feito para quem valoriza a boa mesa e o respeito pelo churrasco.
            <br />
            Este site e produto digital são independentes e não possuem vínculo institucional com Meta, Facebook, Instagram ou TikTok.
            <br />
            <a href="#">Termos de Uso</a> · <a href="#">Política de Privacidade</a>
          </p>
        </div>
      </footer>

      {/* STICKY CTA MOBILE */}
      <div className={`sticky-cta ${showSticky ? "show" : ""}`}>
        <div className="sticky-left">
          <span className="sticky-price">R$ 17,90</span>
          <span className="sticky-brand">Pagamento único</span>
        </div>
        <a href={CHECKOUT_URL} className="sticky-btn" onClick={trackAddToCart}>QUERO MEU ACESSO</a>
      </div>
    </div>
  );
}
