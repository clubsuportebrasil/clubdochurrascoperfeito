import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import heroArtUrl from "@/assets/hero-churrasqueiro.jpeg";
import produtoArtUrl from "@/assets/guia-produto.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clube do Churrasco Perfeito™ — O Sistema Definitivo para Churrasco" },
      {
        name: "description",
        content:
          "Pare de improvisar. Saiba exatamente quanto comprar, escolha as melhores carnes e domine o fogo com ferramentas práticas no seu celular. R$ 17,90 vitalício.",
      },
      { property: "og:title", content: "Clube do Churrasco Perfeito™ — Domine a Grelha" },
      {
        property: "og:description",
        content:
          "Calculadora de carne, guia de cortes e manual da brasa. Tudo que você precisa para o churrasco perfeito no seu celular.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://clubdochurrascoperfeito.lovable.app/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Clube do Churrasco Perfeito™" },
      { name: "twitter:description", content: "O sistema prático para churrasqueiros que não querem errar." },
    ],
  }),
  component: Index,
});

const CHECKOUT_URL = "https://pay.cakto.com.br/rfzix5k_1049718";

// STACK DE VALOR
const stackItens = [
  { emoji: "🥩", title: "Calculadora de Carne", desc: "Descubra exatamente quanto comprar por perfil de convidado." },
  { emoji: "🔪", title: "Guia de Cortes", desc: "Escolha melhor no açougue. Saiba o que esperar de cada peça." },
  { emoji: "🔥", title: "Manual da Brasa", desc: "Controle fogo e calor com a técnica dos segundos na mão." },
  { emoji: "🌡️", title: "Guia de Pontos", desc: "Acerte o ponto sem precisar cortar a peça toda hora." },
  { emoji: "🛒", title: "Checklists do Anfitrião", desc: "Não esqueça carvão, gelo, sal ou nada essencial." },
  { emoji: "📋", title: "Roteiros de Churrasco", desc: "Estruturas prontas para Casal, 5, 10 e 20 pessoas." },
  { emoji: "🍺", title: "Acompanhamentos", desc: "Farofa, vinagrete, pão de alho e harmonização." },
  { emoji: "🎁", title: "BÔNUS — O Churrasco Gaúcho", desc: "Livro digital ilustrado com história e técnica da tradição sulista." },
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
    q: "Funciona para churrasqueira a gás ou elétrica também?",
    a: "Sim. O cálculo de quantidade, a escolha de cortes e o ponto da carne funcionam igual. O manual de fogo traz orientações específicas para controle de calor em cada tipo.",
  },
  {
    q: "Preciso ter experiência para usar?",
    a: "Nenhuma. É uma referência de consulta rápida, sem termos complicados. Você abre, vê a informação que precisa em 10 segundos e volta para a grelha.",
  },
  {
    q: "Como funciona o acesso? Precisa instalar alguma coisa?",
    a: "Não instala nada. Após o pagamento você recebe um link por e-mail e acessa diretamente pelo navegador do celular ou computador. Acesso vitalício desde o primeiro pagamento.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia total, sem burocracia. Acesse, use as ferramentas e, se achar que não valeu, é só solicitar o reembolso dentro do prazo — 100% devolvido.",
  },
  {
    q: "Qual o prazo de acesso?",
    a: "Vitalício. Você paga uma única vez e usa para sempre, incluindo todas as atualizações futuras do conteúdo.",
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
      </defs>
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
            <a href={CHECKOUT_URL} className="header-btn">Quero Acessar</a>
          </div>
        </div>
      </header>

      {/* ========================================================
          01 — HERO: HEADLINE AGRESSIVA + CTA FORTE + PREÇO VISÍVEL
          ======================================================== */}
      <section className="hero grate-bg" id="hero" ref={heroRef}>
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="hero-eyetag">🔥 Churrasco que não depende de sorte</div>

            <h1 className="hero-mega-headline">
              VAI TER CHURRASCO?
              <span className="hero-mega-sub">NÃO COMPRE NEM ACENDA A CHURRASQUEIRA ANTES DE VER ISSO.</span>
            </h1>

            <p className="hero-sub">
              Saiba exatamente <strong>quanto comprar</strong>, quais cortes escolher e como controlar a brasa — tudo no celular, durante o churrasco.
            </p>

            <div className="hero-price-line">
              <span className="hero-price-old">R$ 47,00</span>
              <span className="hero-price-now">R$ 17,90</span>
              <span className="hero-price-note">pagamento único · acesso vitalício</span>
            </div>

            <div className="hero-cta-stack">
              <a href={CHECKOUT_URL} className="cta-fire-btn">
                🔥 QUERO DEIXAR MEU PRÓXIMO CHURRASCO NO JEITO
                <span className="cta-fire-sub">Acesso imediato após pagamento</span>
              </a>

              <div className="hero-trust-row">
                <span>
                  <svg className="icon-sm" style={{ color: "#10b981" }}><use href="#ic-shield" /></svg>
                  &nbsp;Risco zero por 7 dias
                </span>
                <span>✅ Pix · Cartão · Boleto</span>
                <span>📱 Funciona no celular</span>
              </div>
            </div>
          </div>

          <div className="hero-visual-col">
            <div className="hero-mockup-wrap">
              <img src={heroArtUrl} alt="Churrasqueiro consultando o Clube do Churrasco no celular durante o churrasco" />
            </div>
            <div className="hero-float-chip chip-a">
              <span className="chip-num">{totalBov} kg</span>
              <span className="chip-label">carne bovina</span>
            </div>
            <div className="hero-float-chip chip-b">
              <span className="chip-num">🔥</span>
              <span className="chip-label">Fogo controlado</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          02 — CALCULADORA COMO ISCA (ANTES DE QUALQUER EXPLICAÇÃO)
          ======================================================== */}
      <section className="calc-bait-section bg-darkest">
        <div className="wrap reveal">
          <div className="calc-bait-box">
            <div className="calc-bait-head">
              <span className="eyebrow">Teste Grátis Agora</span>
              <h2>CALCULE A CARNE DO SEU PRÓXIMO CHURRASCO</h2>
              <p>Quantas pessoas vão participar?</p>
            </div>

            <div className="calc-bait-control">
              <div className="calc-bait-counter">
                <button
                  className="calc-bait-btn-count"
                  onClick={() => setDemoPessoas(Math.max(2, demoPessoas - 1))}
                >−</button>
                <span className="calc-bait-num">{demoPessoas} <small>pessoas</small></span>
                <button
                  className="calc-bait-btn-count"
                  onClick={() => setDemoPessoas(Math.min(50, demoPessoas + 1))}
                >+</button>
              </div>
              <input
                type="range"
                min="2"
                max="50"
                value={demoPessoas}
                onChange={(e) => setDemoPessoas(parseInt(e.target.value) || 2)}
                className="calc-bait-slider"
              />
            </div>

            <div className="calc-bait-result">
              <div className="calc-bait-item">
                <span className="calc-item-emoji">🥩</span>
                <div>
                  <span className="calc-item-val">{totalBov} kg</span>
                  <span className="calc-item-label">carne bovina</span>
                </div>
              </div>
              <div className="calc-bait-item">
                <span className="calc-item-emoji">🌭</span>
                <div>
                  <span className="calc-item-val">{totalLing} kg</span>
                  <span className="calc-item-label">linguiça</span>
                </div>
              </div>
              <div className="calc-bait-item">
                <span className="calc-item-emoji">🍗</span>
                <div>
                  <span className="calc-item-val">{totalFrango} kg</span>
                  <span className="calc-item-label">frango</span>
                </div>
              </div>
              <div className="calc-bait-item">
                <span className="calc-item-emoji">🔥</span>
                <div>
                  <span className="calc-item-val">~{totalCarvao} kg</span>
                  <span className="calc-item-label">carvão</span>
                </div>
              </div>
            </div>

            <div className="calc-bait-upsell">
              <p>Quer saber <strong>quais cortes comprar</strong>, como preparar a brasa e não esquecer nada?</p>
              <p className="calc-bait-upsell-sub">Isso é só 1 das ferramentas do Clube.</p>
              <a href={CHECKOUT_URL} className="cta-fire-btn" style={{ marginTop: "10px" }}>
                🔥 LIBERAR TODAS AS FERRAMENTAS POR R$ 17,90
                <span className="cta-fire-sub">Uma vez · Acesso vitalício</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          03 — DOR EMOCIONAL: AS 3 PERGUNTAS QUE TODO CHURRASQUEIRO CONHECE
          ======================================================== */}
      <section className="grate-bg">
        <div className="wrap reveal">
          <div className="section-header center">
            <span className="eyebrow">O Problema Real</span>
            <h2>Você já ficou parado na frente da churrasqueira pensando:</h2>
          </div>

          <div className="pain-grid">
            <div className="pain-card">
              <span className="pain-emoji">😰</span>
              <p className="pain-quote">"Será que essa carne vai dar para todo mundo?"</p>
              <p className="pain-context">Você calculou no chute e agora está torendo para não faltar.</p>
            </div>
            <div className="pain-card">
              <span className="pain-emoji">🔥</span>
              <p className="pain-quote">"Esse fogo está forte demais ou vai apagar?"</p>
              <p className="pain-context">A brasa mudou e você não tem certeza se a carne vai queimar ou apagar.</p>
            </div>
            <div className="pain-card">
              <span className="pain-emoji">🥩</span>
              <p className="pain-quote">"Já está na hora de virar? Cortei e ficou cru no meio."</p>
              <p className="pain-context">Sem referência de tempo e temperatura, cada churrasco vira uma aposta.</p>
            </div>
          </div>

          <div className="pain-answer reveal">
            <div className="pain-answer-inner">
              <h3>O Clube do Churrasco coloca essas respostas no seu bolso.</h3>
              <p>Antes do mercado. No açougue. Durante o fogo. Na hora de servir.</p>
              <a href={CHECKOUT_URL} className="cta-fire-btn cta-inline">
                🔥 QUERO AS RESPOSTAS NO MEU CELULAR
                <span className="cta-fire-sub">R$ 17,90 · uma vez · vitalício</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          05 — SCREENSHOTS: "OLHA O QUE VOCÊ VAI TER NO CELULAR"
          ======================================================== */}
      <section className="bg-darker">
        <div className="wrap reveal">
          <div className="section-header center">
            <span className="eyebrow">Produto Real</span>
            <h2>OLHA O QUE VOCÊ VAI TER NO CELULAR</h2>
            <p className="lede">7 ferramentas de consulta rápida. Você abre, usa e fecha em segundos:</p>
          </div>

          <div className="screenshots-grid">
            {screenCards.map((sc) => (
              <div className="screen-card" key={sc.title}>
                <div className="screen-card-header" style={{ borderColor: sc.color }}>
                  <span className="screen-emoji">{sc.emoji}</span>
                  <span className="screen-title">{sc.title}</span>
                </div>
                <div className="screen-card-body">
                  <div className="screen-row primary">{sc.label}</div>
                  <div className="screen-row secondary">{sc.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          06 — STACK DE VALOR
          ======================================================== */}
      <section className="grate-bg">
        <div className="wrap reveal">
          <div className="section-header center">
            <span className="eyebrow">O Que Você Recebe</span>
            <h2>🔥 VOCÊ RECEBE HOJE:</h2>
          </div>

          <div className="stack-grid">
            {stackItens.map((item, i) => (
              <div className={`stack-item ${i === stackItens.length - 1 ? "stack-bonus" : ""}`} key={item.title}>
                <span className="stack-emoji">{item.emoji}</span>
                <div className="stack-content">
                  <b>{item.title}</b>
                  <span>{item.desc}</span>
                </div>
                <span className="stack-check">✓</span>
              </div>
            ))}
          </div>

          <div className="stack-total-line">
            <span>Tudo isso por</span>
            <span className="stack-price">R$ 17,90</span>
            <span>Uma única vez.</span>
          </div>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <a href={CHECKOUT_URL} className="cta-fire-btn" style={{ maxWidth: "400px", margin: "0 auto" }}>
              🔥 QUERO MEU ACESSO AGORA
              <span className="cta-fire-sub">Acesso imediato · Pagamento único</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          07 — PARA QUEM É (COMPACTO)
          ======================================================== */}
      <section className="bg-darker">
        <div className="wrap reveal">
          <div className="section-header center">
            <span className="eyebrow">Para Quem É</span>
            <h2>O Clube é para você se…</h2>
          </div>
          <div className="situations-grid">
            {situacoes.map((s) => (
              <div className="situation-item" key={s.s}>
                <span className="situation-ico">🎯</span>
                <div>
                  <b>{s.s}</b>
                  <span className="situation-tool">{s.t}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          08 — PROVA SOCIAL (DEPOIMENTOS)
          ATENÇÃO: SUBSTITUA PELOS DEPOIMENTOS REAIS DOS SEUS CLIENTES
          ======================================================== */}
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

      {/* ========================================================
          09 — OFERTA COM IMAGEM DO PRODUTO + CUSTO DE OPORTUNIDADE
          ======================================================== */}
      <section className="offer-section" id="comprar">
        <div className="wrap reveal">

          {/* Custo de Oportunidade */}
          <div className="opportunity-bar">
            <span>💡</span>
            <p>Comprar 2 kg de carne a mais no improviso pode custar mais do que o Clube inteiro. Você paga uma vez R$ 17,90 e usa em todos os churrascos.</p>
          </div>

          <div className="offer-box">
            <div className="offer-layout">
              {/* Coluna Esquerda: Produto */}
              <div className="offer-visual-col">
                <span className="eyebrow" style={{ marginBottom: "8px" }}>Visão Geral do Kit</span>
                <h2 style={{ fontSize: "clamp(1.55rem,3.6vw,2.2rem)", marginBottom: "14px", color: "#ffffff" }}>
                  Tudo que você recebe
                </h2>
                <div className="offer-product-image">
                  <img src={produtoArtUrl} alt="Kit Digital Clube do Churrasco — Calculadora de Carnes, Checklists e Guia de Cortes" />
                </div>
                <div className="offer-items-grid">
                  {stackItens.map((item) => (
                    <div className="offer-item" key={item.title}>
                      <span className="ck">{item.emoji}</span>
                      <b>{item.title}</b>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coluna Direita: Checkout */}
              <div className="pricing-checkout-card">
                <div className="pricing-kicker-badge">
                  <svg className="icon-sm" style={{ width: 14, height: 14 }}><use href="#ic-flame" /></svg>
                  <span>Pagamento Único • Acesso Vitalício</span>
                </div>

                <div className="price-display-box">
                  <div className="price-old-val">de R$ 47,00</div>
                  <div className="price-main-val">R$ 17<sup>,90</sup></div>
                  <span className="price-tag-sub">Sem mensalidades • Acesso Imediato</span>
                </div>

                {/* Garantia PRÓXIMA ao CTA — reduz objeção */}
                <div className="guarantee-inline-box">
                  <svg className="icon-sm"><use href="#ic-shield" /></svg>
                  <div>
                    <b>RISCO ZERO por 7 dias</b>
                    <span>Acesse, use as ferramentas. Se não valeu, devolvemos 100%.</span>
                  </div>
                </div>

                <ul className="price-benefits-list">
                  <li><span className="benefit-check">✓</span><span>Acesso imediato no e-mail após a confirmação</span></li>
                  <li><span className="benefit-check">✓</span><span>Uso direto no celular — sem downloads ou instalação</span></li>
                  <li><span className="benefit-check">✓</span><span>Acesso vitalício com todas as futuras atualizações</span></li>
                </ul>

                <a href={CHECKOUT_URL} className="checkout-cta-button">
                  <span>🔥 QUERO MEU ACESSO AGORA</span>
                  <span className="cta-micro-sub">Apenas R$ 17,90 · Pagamento 100% seguro</span>
                </a>

                <div className="pay-security-row">
                  <svg><use href="#ic-shield" /></svg>
                  <span>Ambiente criptografado e seguro</span>
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

      {/* ========================================================
          11 — FAQ REDUZIDO (5 objeções reais)
          ======================================================== */}
      <section className="bg-darker">
        <div className="wrap reveal">
          <div className="section-header center">
            <span className="eyebrow">Dúvidas</span>
            <h2>Perguntas Frequentes</h2>
          </div>
          <div className="faq-wrap">
            {faqs.map((f, i) => (
              <div className={`faq-card ${openFaq === i ? "open" : ""}`} key={f.q}>
                <button className="faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
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

      {/* ========================================================
          12 — CTA FINAL EMOCIONAL
          ======================================================== */}
      <section className="final-section bg-darkest">
        <div className="wrap reveal">
          <div className="final-flame">🔥</div>
          <h2>Chega de torcer.<br />Chegue preparado no próximo churrasco.</h2>
          <p className="sub">
            Na próxima vez que alguém pedir um churrasco, você não vai precisar adivinhar, calcular no chute ou depender de improviso.
          </p>
          <a href={CHECKOUT_URL} className="cta-fire-btn" style={{ margin: "0 auto" }}>
            🔥 QUERO DEIXAR MEU PRÓXIMO CHURRASCO NO JEITO
            <span className="cta-fire-sub">R$ 17,90 · Pagamento Único · Acesso Vitalício</span>
          </a>
          <div className="final-trust">
            <span>🛡️ 7 dias de garantia total</span>
            <span>·</span>
            <span>✅ Acesso imediato</span>
            <span>·</span>
            <span>📱 No celular sem instalar nada</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <p>
            Clube do Churrasco Perfeito™ — Central Prática de Consulta & Organização
            <br />
            Feito para quem valoriza a boa mesa e o respeito pelo churrasco.
            <br />
            Este site e produto digital são independentes e não possuem vínculo institucional com Meta, Facebook, Instagram ou TikTok.
            <br />
            <a href="#">Termos de Uso</a> · <a href="#">Política de Privacidade</a>
          </p>
        </div>
      </footer>

      {/* STICKY CTA MOBILE — AGORA COM TEXTO DE CONVERSÃO FORTE */}
      <div className={`sticky-cta ${showSticky ? "show" : ""}`}>
        <div className="sticky-left">
          <span className="sticky-brand">🔥 Clube do Churrasco</span>
          <span className="sticky-price">R$ 17,90 · Vitalício</span>
        </div>
        <a href={CHECKOUT_URL} className="sticky-btn">QUERO ACESSAR</a>
      </div>
    </div>
  );
}
