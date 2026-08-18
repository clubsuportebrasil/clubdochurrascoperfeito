import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroArt from "@/assets/hero-churrasqueiro.jpeg.asset.json";
import produtoArt from "@/assets/guia-produto.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clube do Churrasco Perfeito™ — Sua Referência Prática no Celular" },
      {
        name: "description",
        content:
          "Pare de torcer para o churrasco dar certo. Tenha no celular um kit digital de consulta para calcular carnes, escolher cortes, controlar o fogo e consultar listas por R$ 17,90.",
      },
      { property: "og:title", content: "Clube do Churrasco Perfeito™ — Sua Referência Prática no Celular" },
      {
        name: "og:description",
        content:
          "Seu churrasco. Suas decisões. Uma referência à mão antes e durante o churrasco.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CHECKOUT_URL = "https://pay.cakto.com.br/rfzix5k_1049718";

// 4 & 5 — "O QUE TEM DENTRO?" (Prateleira Digital)
const prateleiraDigital = [
  {
    tag: "Calculadora",
    title: "Quanto Comprar?",
    desc: "Cálculo exato de quilos de carne bovina, linguiça, frango e carvão com base nos convidados.",
    type: "calc",
    sampleText: "10 pessoas → 3.6 kg bovina • 1.5 kg linguiça",
  },
  {
    tag: "Guia de Cortes",
    title: "Qual Corte Escolher?",
    desc: "Referência no açougue para escolher cortes macios de acordo com o custo-benefício e ocasião.",
    type: "badges",
    sampleBadges: ["Picanha", "Fraldinha", "Contrafilé", "Costela"],
  },
  {
    tag: "Manual do Fogo",
    title: "Como Controlar o Fogo?",
    desc: "Formação de brasa viva, controle de labaredas e teste dos segundos na mão para cada altura.",
    type: "badges",
    sampleBadges: ["Fogo Forte (3s)", "Fogo Médio (6s)", "Fogo Baixo (9s)"],
  },
  {
    tag: "Pontos da Carne",
    title: "Quando Está no Ponto?",
    desc: "Critérios táteis e visuais para servir malpassado, ao ponto e bem passado sem cortar a peça toda hora.",
    type: "badges",
    sampleBadges: ["Malpassado", "Ao Ponto", "Bem Passado"],
  },
  {
    tag: "Checklists",
    title: "O Que Falta no Mercado?",
    desc: "Listas prontas de mercado, carvão, gelo, temperos e itens essenciais do anfitrião.",
    type: "check",
    sampleChecks: ["Carne e carvão comprados", "Sal grosso e temperos", "Bebidas no gelo"],
  },
  {
    tag: "Roteiros por Tamanho",
    title: "Como se Organizar?",
    desc: "Estruturas passo a passo para casal, 5, 10, 20 pessoas e versão econômica.",
    type: "badges",
    sampleBadges: ["Casal", "5 pessoas", "10 pessoas", "20 pessoas", "Econômico"],
  },
  {
    tag: "Acompanhamentos",
    title: "O Que Servir Junto?",
    desc: "Farofas, pão de alho, vinagrete e acompanhamentos tradicionais que harmonizam com o assado.",
    type: "badges",
    sampleBadges: ["Farofa", "Pão de Alho", "Vinagrete", "Queijo"],
  },
  {
    tag: "Bônus",
    title: "O Churrasco Gaúcho",
    desc: "Livro ilustrado completo com a história, técnicas e fundamentos da tradição do assado gaúcho.",
    type: "badges",
    sampleBadges: ["Livro Ilustrado", "Acesso Incluso"],
  },
];

// 6 — "ABRA QUANDO PRECISAR" (Timeline do Improviso à Mesa)
const timelineMoments = [
  {
    time: "Antes de Sair",
    title: "Quanto Comprar?",
    quote: "“Quantos quilos de carne e sacos de carvão eu levo?”",
    desc: "Abre a calculadora no celular e sai com a lista de quilos exata por perfil de convidado.",
  },
  {
    time: "No Mercado / Açougue",
    title: "Qual Corte Escolher?",
    quote: "“Qual peça compensa mais pelo preço de hoje?”",
    desc: "Consulta o guia de cortes para saber o que esperar de cada peça e economizar na escolha.",
  },
  {
    time: "Em Casa (Pré-Preparo)",
    title: "O Que Ainda Falta?",
    quote: "“Será que esqueci algum item essencial?”",
    desc: "Passa pelo checklist do anfitrião e confere carvão, sal, gelo e acompanhamentos.",
  },
  {
    time: "No Fogo",
    title: "O Que Observar?",
    quote: "“Esse fogo tá forte demais ou vai apagar?”",
    desc: "Verifica a técnica do teste da mão para ajustar a altura da grelha e a intensidade da brasa.",
  },
  {
    time: "Na Grelha",
    title: "Quanto Tempo?",
    quote: "“Qual a ordem certa de colocar os cortes?”",
    desc: "Segue a ordem recomendada de selagem e cozimento para cada tipo de carne.",
  },
  {
    time: "No Ponto & Descanso",
    title: "Já Está Pronto?",
    quote: "“Quando tirar da grelha e como fatiar?”",
    desc: "Confere os sinais do ponto e respeita o tempo de descanso para manter a suculência.",
  },
];

// 9 — "DO MERCADO À GRELHA" (Jornada Visual de 6 Etapas)
const jornadaEtapas = [
  {
    step: "01",
    title: "Comprar",
    desc: "Quantidades exatas por pessoa.",
    tool: "Calculadora de Carne",
  },
  {
    step: "02",
    title: "Organizar",
    desc: "Lista de compras e utensílios.",
    tool: "Checklist do Mercado",
  },
  {
    step: "03",
    title: "Preparar",
    desc: "Sal, temperos e guarnições.",
    tool: "Guia de Temperos",
  },
  {
    step: "04",
    title: "Acender",
    desc: "Formação de brasa sem fumaça.",
    tool: "Manual do Fogo",
  },
  {
    step: "05",
    title: "Grelhar",
    desc: "Tempo e altura certa da peça.",
    tool: "Tabela de Pontos",
  },
  {
    step: "06",
    title: "Servir",
    desc: "Descanso, corte contra a fibra e mesa.",
    tool: "Roteiro de Serviço",
  },
];

// 10 — OS 6 MÓDULOS REESTRUTURADOS
const seisPartes = [
  {
    num: "Parte 01",
    title: "Compra & Planejamento",
    desc: "Calculadora de quantidade de carne, carvão, bebidas e guarnições para grupos de qualquer tamanho.",
    specs: [
      { label: "O que é", val: "Calculadora dinâmica e comparativo de mercado" },
      { label: "Para que serve", val: "Comprar sem sobras exageradas ou falta de carne" },
      { label: "O que você encontra", val: "Métricas por homem, mulher, criança e listas de compras" },
    ],
  },
  {
    num: "Parte 02",
    title: "Controle do Fogo & Brasa",
    desc: "Guia completo de acendimento, teste dos segundos na mão e ajuste das alturas de grelha.",
    specs: [
      { label: "O que é", val: "Manual de controle térmico do carvão" },
      { label: "Para que serve", val: "Dominar o calor radiante e evitar queimar a carne" },
      { label: "O que você encontra", val: "Temperaturas alta, média e baixa e técnicas de brasa" },
    ],
  },
  {
    num: "Parte 03",
    title: "Cortes, Pontos & Descanso",
    desc: "Tabela visual para identificar malpassado, ao ponto e bem passado, além da regra de ouro do descanso.",
    specs: [
      { label: "O que é", val: "Guia visual de cortes bovinos, suínos e aves" },
      { label: "Para que serve", val: "Acertar a textura, suculência e ponto exato desejado" },
      { label: "O que você encontra", val: "Instruções de selagem, espessura e corte contra a fibra" },
    ],
  },
  {
    num: "Parte 04",
    title: "Acompanhamentos & Guarnições",
    desc: "Receitas práticas de farofas, vinagretes, pão de alho crocante e molhos clássicos de churrascaria.",
    specs: [
      { label: "O que é", val: "Guia de guarnições e montagem de mesa" },
      { label: "Para que serve", val: "Equilibrar o cardápio e agradar a todos os convidados" },
      { label: "O que você encontra", val: "Preparo prévio de saladas, queijos e farofas crocantes" },
    ],
  },
  {
    num: "Parte 05",
    title: "Roteiros por Cenário & Orçamento",
    desc: "Estruturas já montadas para diferentes tamanhos de encontro e cardápios econômicos.",
    specs: [
      { label: "O que é", val: "Roteiros organizados por porte de evento" },
      { label: "Para que serve", val: "Ter um roteiro pronto sem precisar quebrar a cabeça" },
      { label: "O que você encontra", val: "Cenários para Casal, 5, 10, 20 pessoas e Econômico" },
    ],
  },
  {
    num: "Parte 06",
    title: "Checklists do Anfitrião",
    desc: "Listas interativas de checagem para não esquecer carvão, fósforo, gelo ou tábua na hora H.",
    specs: [
      { label: "O que é", val: "Checklists operacionais de bolso" },
      { label: "Para que serve", val: "Garantir que tudo esteja pronto antes dos convidados chegarem" },
      { label: "O que você encontra", val: "Checklist do mercado, da bancada e da churrasqueira" },
    ],
  },
];

// 14 — Cenários de Orçamento
const cenarios = [
  { title: "Casal", desc: "Churrasco rápido a dois com cortes nobres e preparo em 30 minutos." },
  { title: "5 Pessoas", desc: "Encontro íntimo entre amigos ou família pequena com variedade equilibrada." },
  { title: "10 Pessoas", desc: "O clássico churrasco de fim de semana com timing de entradas e pratos principais." },
  { title: "20 Pessoas", desc: "Churrasco para comemorações com fluxo constante de grelha sem gargalos." },
  { title: "Econômico", desc: "Como montar um churrasco saboroso e suculento priorizando cortes de ótimo custo." },
];

// 15 — PARA QUEM É? (Universal)
const paraQuemUniversal = [
  {
    tag: "Situação 01",
    title: "Vai organizar um churrasco",
    desc: "Quer ter certeza dos itens e da ordem de servir para não passar aperto na frente das pessoas.",
    tool: "Checklists + Roteiros Prontos",
  },
  {
    tag: "Situação 02",
    title: "Vai fazer as compras",
    desc: "Precisa saber as quantidades em quilos e não quer gastar dinheiro com compras erradas.",
    tool: "Calculadora de Carne + Guia de Cortes",
  },
  {
    tag: "Situação 03",
    title: "Vai receber amigos ou família",
    desc: "Quer que todos sejam bem servidos no tempo certo com bebidas geladas e acompanhamentos prontos.",
    tool: "Roteiro do Anfitrião",
  },
  {
    tag: "Situação 04",
    title: "Está aprendendo",
    desc: "Quer uma referência confiável e objetiva para consultar sem precisar decorar termos difíceis.",
    tool: "Manual do Fogo & Ponto da Carne",
  },
  {
    tag: "Situação 05",
    title: "Já faz churrasco",
    desc: "Quer ferramentas rápidas para agilizar o cálculo e padronizar o ponto das suas carnes.",
    tool: "Roteiros por Tamanho de Grupo",
  },
  {
    tag: "Situação 06",
    title: "Quer uma referência à mão",
    desc: "Prefere consultar no celular do que ficar adivinhando tudo no improviso.",
    tool: "Kit Digital Completo",
  },
];

// 20 — Itens do Bundle
const bundleOferta = [
  { t: "Central Digital do Clube", d: "Acesso no celular pelo navegador, sem precisar instalar nada." },
  { t: "Calculadora Dinâmica", d: "Cálculo automático de carne bovina, linguiça, frango, carvão e bebidas." },
  { t: "Guia Prático de Cortes", d: "Referência no açougue para escolher carnes macias com melhor custo-benefício." },
  { t: "Manual do Fogo & Brasas", d: "Técnica dos segundos na mão para fogo alto, médio e brasa lenta." },
  { t: "Guia Visual de Pontos", d: "Critérios táteis e visuais para selar e servir no ponto certo sem cortar antes da hora." },
  { t: "Roteiros por Tamanho", d: "Cenários prontos para Casal, 5, 10, 20 pessoas e modo Econômico." },
  { t: "Checklists do Anfitrião", d: "Listas de checagem do mercado, da bancada e da churrasqueira." },
  { t: "Bônus: O Churrasco Gaúcho", d: "Livro digital ilustrado com os fundamentos e história da tradição sulista." },
];

const faqs = [
  {
    q: "Funciona para churrasqueira a carvão, gás ou elétrica?",
    a: "Sim. Os princípios de cálculo de quantidade, escolha de cortes, salivação/tempero, tempo de descanso e ponto da carne funcionam exatamente da mesma forma em churrasqueiras a carvão, a gás ou elétricas. O manual de fogo traz orientações específicas para o controle térmico de cada uma.",
  },
  {
    q: "Preciso ter experiência prévia para conseguir usar?",
    a: "Não precisa de nenhuma experiência. O Clube foi desenvolvido com linguagem direta, sem termos técnicos complicados. Ele serve como uma 'cola' rápida para você consultar exatamente o que precisa em 10 segundos.",
  },
  {
    q: "Como e quando recebo o acesso?",
    a: "Assim que o pagamento for confirmado (instantâneo no Pix e Cartão de Crédito), você recebe um e-mail com o link de acesso direto. Você entra pelo navegador do seu celular ou computador imediatamente.",
  },
  {
    q: "Por quanto tempo terei acesso ao Clube?",
    a: "Seu acesso é vitalício. Você pode consultar no celular no churrasco deste fim de semana, do próximo mês e sempre que for acender a churrasqueira, com todas as atualizações futuras incluídas.",
  },
  {
    q: "Quais são as formas de pagamento disponíveis?",
    a: "Pagamento único de R$ 17,90 via Pix (liberação imediata), Cartão de Crédito ou Boleto bancário, processado com segurança pela plataforma oficial.",
  },
  {
    q: "Existe garantia se eu não gostar?",
    a: "Sim! Você conta com 7 dias de garantia incondicional. Se você acessar e achar que as ferramentas e guias não foram úteis para organizar seu churrasco, basta solicitar o reembolso dentro do prazo para receber 100% do seu dinheiro de volta.",
  },
];

function Icons() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <symbol id="ic-flame" viewBox="0 0 24 24">
          <path
            d="M12 2C10 5 6 8 6 12.5A6 6 0 0 0 12 18.5A6 6 0 0 0 18 12.5C18 10.3 16.8 8.7 15.7 7.7C16 10 14.3 11.3 13 10.2C14 7.7 12 5 12 2Z"
            fill="currentColor"
          />
        </symbol>
        <symbol
          id="ic-calc"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4.5" y="3" width="15" height="18" rx="2.5" />
          <rect x="7.5" y="6" width="9" height="3.5" rx="1" />
          <circle cx="8.5" cy="13" r="1" fill="currentColor" stroke="none" />
          <circle cx="12" cy="13" r="1" fill="currentColor" stroke="none" />
          <circle cx="15.5" cy="13" r="1" fill="currentColor" stroke="none" />
          <circle cx="8.5" cy="17" r="1" fill="currentColor" stroke="none" />
          <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
          <circle cx="15.5" cy="17" r="1" fill="currentColor" stroke="none" />
        </symbol>
        <symbol
          id="ic-cut"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 16.5c1.5-5 5-8.5 10.5-9.5 3-.5 5 1 5 3.5s-2.5 4-5 4.5c-4 .8-7.5 1.5-10.5 1.5Z" />
          <path d="M4 19.5h16" />
        </symbol>
        <symbol
          id="ic-temp"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 14V5.5a2 2 0 1 1 4 0V14a4 4 0 1 1-4 0Z" />
          <line x1="12" y1="9" x2="12" y2="16" />
        </symbol>
        <symbol
          id="ic-check"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="3.5" width="16" height="17" rx="2.5" />
          <path d="M8.5 12.2l2.4 2.3 4.6-5" />
        </symbol>
        <symbol
          id="ic-shield"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </symbol>
      </defs>
    </svg>
  );
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showSticky, setShowSticky] = useState(false);

  // Live interactive controls for demonstration
  const [demoPessoas, setDemoPessoas] = useState(10);
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
        { threshold: 0.1 },
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

      {/* Header Fixo com Identidade Visual */}
      <header>
        <div className="header-inner">
          <div className="brand">
            <svg className="icon">
              <use href="#ic-flame" />
            </svg>
            Clube do <em>Churrasco</em> Perfeito
          </div>
          <div className="header-right">
            <div className="header-price mono">R$ 17,90</div>
            <a href={CHECKOUT_URL} className="header-btn">
              Quero Acessar
            </a>
          </div>
        </div>
      </header>

      {/* 1 & 2 & 3 — HERO COM O KIT DIGITAL NO CELULAR */}
      <section className="hero grate-bg" id="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="hero-tag">
              <svg className="icon-sm"><use href="#ic-flame" /></svg>
              <span>Kit Digital de Consulta no Celular</span>
            </div>
            <h1 className="headline">
              Pare de torcer para o churrasco <em>dar certo.</em>
            </h1>
            <p className="hero-sub">
              Tenha no celular uma referência prática para calcular a quantidade de carne, escolher os cortes, organizar o preparo, controlar o fogo e consultar o que precisar antes e durante o churrasco.
            </p>
            <div className="hero-cta-box">
              <a href={CHECKOUT_URL} className="cta-btn-main">
                Quero Acertar Meu Próximo Churrasco
                <span className="cta-subtext">R$ 17,90 · Pagamento único · Acesso imediato</span>
              </a>
              <div className="hero-micro">
                <svg className="icon-sm"><use href="#ic-shield" /></svg>
                <span>Acesso imediato • Pagamento único • 7 dias de garantia</span>
              </div>
            </div>
          </div>

          {/* Composição Visual do Celular com a Calculadora */}
          <div className="kit-composition">
            <div className="kit-device-wrap">
              <img
                src={heroArt.url}
                alt="Churrasqueiro com a mão na calculadora do Clube do Churrasco no celular"
              />
            </div>

            <div className="kit-chip kit-chip-1">
              <svg className="icon-sm"><use href="#ic-calc" /></svg>
              <div>
                <b>Calculadora</b>
                <span>Qtd. por pessoa</span>
              </div>
            </div>

            <div className="kit-chip kit-chip-2">
              <svg className="icon-sm"><use href="#ic-check" /></svg>
              <div>
                <b>Checklists</b>
                <span>Mercado e grelha</span>
              </div>
            </div>

            <div className="kit-chip kit-chip-3">
              <svg className="icon-sm"><use href="#ic-cut" /></svg>
              <div>
                <b>Guia de Cortes</b>
                <span>No açougue</span>
              </div>
            </div>

            <div className="kit-chip kit-chip-4">
              <svg className="icon-sm"><use href="#ic-flame" /></svg>
              <div>
                <b>Manual do Fogo</b>
                <span>Controle de calor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* 4 & 5 — "O QUE TEM DENTRO?" (Prateleira Digital) */}
      <section className="bg-darker">
        <div className="wrap reveal">
          <div className="section-header center">
            <span className="eyebrow">Prateleira Digital</span>
            <h2>O que você encontra dentro do Clube</h2>
            <p className="lede">
              Cada componente foi desenhado para resolver uma dúvida prática com visual direto no celular:
            </p>
          </div>

          <div className="prateleira-grid">
            {prateleiraDigital.map((item) => (
              <div className="prat-card" key={item.title}>
                <div>
                  <div className="prat-header">
                    <span className="prat-tag">{item.tag}</span>
                    <span className="prat-icon">
                      <svg className="icon-sm"><use href="#ic-flame" /></svg>
                    </span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>

                <div className="prat-ui-sample">
                  {item.type === "calc" && (
                    <div className="prat-calc-sample">
                      <span>{item.sampleText}</span>
                    </div>
                  )}
                  {item.type === "badges" && (
                    <div className="prat-badge-sample">
                      {item.sampleBadges?.map((b) => (
                        <span key={b}>{b}</span>
                      ))}
                    </div>
                  )}
                  {item.type === "check" && (
                    <div className="prat-check-sample">
                      {item.sampleChecks?.map((c, idx) => (
                        <span key={c} className={idx < 2 ? "done" : ""}>
                          {idx < 2 ? "☑" : "☐"} {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — "ABRA QUANDO PRECISAR" (Timeline Visual da Jornada) */}
      <section className="grate-bg">
        <div className="wrap reveal">
          <div className="section-header">
            <span className="eyebrow">Abra Conforme a Necessidade</span>
            <h2>Não é para você sentar e ler tudo. É para abrir quando surgir a dúvida.</h2>
            <p className="lede">
              O Clube acompanha cada momento do seu evento, eliminando as dúvidas na ordem exata em que elas surgem:
            </p>
          </div>

          <div className="timeline-moments">
            {timelineMoments.map((m) => (
              <div className="moment-card" key={m.time}>
                <span className="moment-time">{m.time}</span>
                <h4>{m.title}</h4>
                <span className="moment-quote">{m.quote}</span>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — "PRODUTO EM AÇÃO" (3 GRANDES DEMONSTRAÇÕES) */}
      <section className="bg-darker">
        <div className="wrap reveal">
          <div className="section-header center">
            <span className="eyebrow">Demonstração Visual</span>
            <h2>Veja o Clube sendo usado na prática</h2>
            <p className="lede">
              Em vez de promessas teóricas, veja as ferramentas reais que você terá à mão:
            </p>
          </div>

          <div className="demo-showcase-grid">
            {/* DEMONSTRAÇÃO 1: CALCULADORA */}
            <div className="demo-large-card">
              <div>
                <div className="demo-card-head">
                  <span className="demo-num">Demonstração 01</span>
                  <h3>Quanto Comprar?</h3>
                  <p>Ajuste o número de convidados e veja o cálculo automático de carnes e carvão:</p>
                </div>

                <div className="interactive-demo-box">
                  <div className="demo-calc-control">
                    <div className="demo-calc-header">
                      <span>Convidados</span>
                      <span style={{ color: "var(--mostarda)", fontWeight: "bold" }}>{demoPessoas} pessoas</span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="30"
                      value={demoPessoas}
                      onChange={(e) => setDemoPessoas(parseInt(e.target.value) || 2)}
                      className="demo-slider"
                    />
                  </div>

                  <div className="demo-calc-output">
                    <div className="demo-calc-row">
                      <span>🥩 Carne Bovina:</span>
                      <span className="val">{totalBov} kg</span>
                    </div>
                    <div className="demo-calc-row">
                      <span>🌭 Linguiça:</span>
                      <span className="val">{totalLing} kg</span>
                    </div>
                    <div className="demo-calc-row">
                      <span>🍗 Frango / Tulipa:</span>
                      <span className="val">{totalFrango} kg</span>
                    </div>
                    <div className="demo-calc-row">
                      <span>🔥 Carvão:</span>
                      <span className="val">~{totalCarvao} kg</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DEMONSTRAÇÃO 2: CHECKLIST */}
            <div className="demo-large-card">
              <div>
                <div className="demo-card-head">
                  <span className="demo-num">Demonstração 02</span>
                  <h3>Como Organizar?</h3>
                  <p>Checklist pronto para marcar no celular antes de sair de casa ou ir para a grelha:</p>
                </div>

                <div className="interactive-demo-box">
                  <div style={{ display: "grid", gap: "8px", fontSize: "0.86rem" }}>
                    <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <input type="checkbox" defaultChecked style={{ accentColor: "var(--brasa)" }} />
                      <span>Carne e carvão calculados</span>
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <input type="checkbox" defaultChecked style={{ accentColor: "var(--brasa)" }} />
                      <span>Sal de parrilla ou grosso</span>
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <input type="checkbox" defaultChecked style={{ accentColor: "var(--brasa)" }} />
                      <span>Pão de alho e guarnições</span>
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <input type="checkbox" style={{ accentColor: "var(--brasa)" }} />
                      <span>Bebidas no gelo com antecedência</span>
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <input type="checkbox" style={{ accentColor: "var(--brasa)" }} />
                      <span>Tábua e faca afiada na bancada</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* DEMONSTRAÇÃO 3: GUIA & CONTROLE */}
            <div className="demo-large-card">
              <div>
                <div className="demo-card-head">
                  <span className="demo-num">Demonstração 03</span>
                  <h3>O Que Consultar?</h3>
                  <p>Guia de pontos e controle de temperatura pela regra dos segundos na mão:</p>
                </div>

                <div className="interactive-demo-box">
                  <div style={{ display: "grid", gap: "10px", fontSize: "0.82rem" }}>
                    <div style={{ borderLeft: "3px solid var(--brasa)", paddingLeft: "8px" }}>
                      <b style={{ color: "var(--papel)" }}>Calor Alto (3 a 5 seg):</b>
                      <span style={{ display: "block", color: "var(--papel-dim)" }}>Selagem rápida de picanha e cortes finos.</span>
                    </div>
                    <div style={{ borderLeft: "3px solid var(--mostarda)", paddingLeft: "8px" }}>
                      <b style={{ color: "var(--papel)" }}>Calor Médio (6 a 8 seg):</b>
                      <span style={{ display: "block", color: "var(--papel-dim)" }}>Assar linguiça, fraldinha e legumes.</span>
                    </div>
                    <div style={{ borderLeft: "3px solid var(--verde)", paddingLeft: "8px" }}>
                      <b style={{ color: "var(--papel)" }}>Descanso (3 a 5 min):</b>
                      <span style={{ display: "block", color: "var(--papel-dim)" }}>Redistribuir os sucos antes de fatiar.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9 — NOVA SEÇÃO: "DO MERCADO À GRELHA" */}
      <section className="grate-bg">
        <div className="wrap reveal">
          <div className="section-header center">
            <span className="eyebrow">Jornada Completa</span>
            <h2>Do mercado à grelha, sem pular etapas</h2>
            <p className="lede">
              O Clube acompanha cada fase para você não depender de palpites ou correrias de última hora:
            </p>
          </div>

          <div className="journey-ribbon">
            {jornadaEtapas.map((j) => (
              <div className="journey-step" key={j.step}>
                <span className="step-idx">{j.step}</span>
                <h4>{j.title}</h4>
                <p>{j.desc}</p>
                <span className="journey-tool">{j.tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10, 11, 12, 13 — 6 PARTES QUE TRABALHAM JUNTAS */}
      <section className="bg-darker">
        <div className="wrap reveal">
          <div className="section-header">
            <span className="eyebrow">Arquitetura de Apoio</span>
            <h2>6 partes que trabalham juntas</h2>
            <p className="lede">
              Estruturado como componentes de consulta para o seu celular:
            </p>
          </div>

          <div className="modules-grid">
            {seisPartes.map((p) => (
              <div className="module-item" key={p.title}>
                <div className="module-top">
                  <span className="module-label">{p.num}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>

                <div className="module-specs">
                  {p.specs.map((s) => (
                    <div className="spec-row" key={s.label}>
                      <b>{s.label}:</b>
                      <span>{s.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 14 — Cenários de Orçamento */}
          <div style={{ marginTop: "44px" }}>
            <span className="eyebrow">Escolha o seu Cenário</span>
            <div className="scenarios-grid">
              {cenarios.map((c) => (
                <div className="scenario-card" key={c.title}>
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 15 — "PARA QUEM É?" (OFERTA UNIVERSAL AMPLA) */}
      <section className="grate-bg">
        <div className="wrap reveal">
          <div className="section-header center">
            <span className="eyebrow">Oferta Universal</span>
            <h2>Não importa se você faz churrasco toda semana ou só quando surge uma ocasião</h2>
            <p className="lede">
              O Clube foi feito para qualquer pessoa encarregada de planejar, comprar ou colocar a carne no fogo:
            </p>
          </div>

          <div className="forwho-grid">
            {paraQuemUniversal.map((p) => (
              <div className="forwho-card" key={p.title}>
                <div className="forwho-top">
                  <span className="forwho-situation">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
                <div className="forwho-tool">
                  <span>→ Ferramenta:</span>
                  <b>{p.tool}</b>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 17 — POR QUE ISSO É DIFERENTE DE UM EBOOK? */}
      <section className="bg-darker">
        <div className="wrap reveal">
          <div className="section-header center">
            <span className="eyebrow">Diferença de Uso</span>
            <h2>Por que isso é diferente de simplesmente comprar um ebook?</h2>
            <p className="lede">
              A proposta aqui não é fazer você ler 200 páginas de teoria, mas ter a resposta certa na hora exata:
            </p>
          </div>

          <div className="diff-compare-grid">
            <div className="diff-col">
              <div className="diff-col-head">
                <h3>Ebook Tradicional</h3>
              </div>
              <ul className="diff-list">
                <li>
                  <b>Você precisa ler:</b>
                  <span>Centenas de páginas antes de conseguir fazer qualquer coisa.</span>
                </li>
                <li>
                  <b>Informação espalhada:</b>
                  <span>Dicas soltas no meio de parágrafos longos e teóricos.</span>
                </li>
                <li>
                  <b>Você precisa lembrar:</b>
                  <span>Tem que confiar na memória na hora que está na frente do fogo.</span>
                </li>
              </ul>
            </div>

            <div className="diff-col highlight">
              <div className="diff-col-head">
                <h3>Clube do Churrasco</h3>
              </div>
              <ul className="diff-list">
                <li>
                  <b>Você apenas consulta:</b>
                  <span>Abre a tela certa em 5 segundos, vê a resposta e volta para a grelha.</span>
                </li>
                <li>
                  <b>Informação por situação:</b>
                  <span>Organizada por momento: compra, fogo, cortes, ponto e serviço.</span>
                </li>
                <li>
                  <b>Você volta e confere:</b>
                  <span>Fica salvo no celular para consultar sempre que bater uma dúvida.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 18, 41, 42 — FRASES DE POSICIONAMENTO E MARCA */}
          <div className="brand-callout">
            <h2>“Você não precisa decorar. <em>Você precisa encontrar.”</em></h2>
            <p>
              Seu churrasco. Suas decisões. Uma referência à mão para tirar o improviso do caminho.
            </p>
            <div className="brand-pills">
              <span className="brand-pill">Abra</span>
              <span className="brand-pill">Consulte</span>
              <span className="brand-pill">Prepare</span>
            </div>
          </div>
        </div>
      </section>

      {/* 20 & 21 — SEÇÃO DA OFERTA REESTRUTURADA COM ALTA CONVERSÃO */}
      <section className="offer-section" id="comprar">
        <div className="wrap reveal">
          <div className="offer-box">
            <div className="offer-layout">
              {/* Coluna Esquerda: Imagem do Produto e Recursos Inclusos */}
              <div className="offer-visual-col">
                <span className="eyebrow" style={{ marginBottom: "6px" }}>Visão Geral do Kit</span>
                <h2 style={{ fontSize: "clamp(1.65rem,3.8vw,2.3rem)", marginBottom: "14px", color: "#ffffff" }}>
                  Tudo o que você recebe
                </h2>

                <div className="offer-product-image">
                  <img
                    src={produtoArt.url}
                    alt="Kit Digital Clube do Churrasco com Guia do Churrasqueiro, Checklists e Calculadora de Cortes"
                  />
                </div>

                <div className="offer-items-grid">
                  {bundleOferta.map((item) => (
                    <div className="offer-item" key={item.t}>
                      <span className="ck">✓</span>
                      <div>
                        <b>{item.t}</b>
                        <span className="d">{item.d}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coluna Direita: Card de Checkout Premium Reestruturado */}
              <div className="pricing-checkout-card">
                <div className="pricing-kicker-badge">
                  <svg className="icon-sm" style={{ width: 14, height: 14 }}><use href="#ic-flame" /></svg>
                  <span>Pagamento Único • Acesso Vitalício</span>
                </div>

                <div className="price-display-box">
                  <div className="price-old-val">de R$ 47,00</div>
                  <div className="price-main-val">
                    R$ 17<sup>,90</sup>
                  </div>
                  <span className="price-tag-sub">Sem mensalidades • Acesso Imediato</span>
                </div>

                <ul className="price-benefits-list">
                  <li>
                    <span className="benefit-check">✓</span>
                    <span>Acesso imediato no e-mail após a confirmação</span>
                  </li>
                  <li>
                    <span className="benefit-check">✓</span>
                    <span>Uso direto no celular ou computador, sem downloads</span>
                  </li>
                  <li>
                    <span className="benefit-check">✓</span>
                    <span>Acesso vitalício com todas as futuras atualizações</span>
                  </li>
                  <li>
                    <span className="benefit-check">✓</span>
                    <span>Garantia incondicional de 7 dias ou seu dinheiro de volta</span>
                  </li>
                </ul>

                <a href={CHECKOUT_URL} className="checkout-cta-button">
                  <span>Quero o Meu Acesso Agora</span>
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

      {/* 22 — GARANTIA TRANSPARENTE */}
      <section className="bg-darker">
        <div className="wrap reveal">
          <div className="guarantee-card">
            <div className="guarantee-stamp">
              <span className="num">7</span>
              <span className="txt">Dias de Garantia</span>
            </div>
            <div className="guarantee-text">
              <h3>Você pode conhecer o Clube por 7 dias.</h3>
              <p>
                Acesse o material, consulte a calculadora, use os checklists e guias de fogo. Se por qualquer motivo você achar que o Clube não facilitou a organização do seu churrasco, basta solicitar o reembolso em até 7 dias e devolveremos 100% do seu dinheiro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 23 — FAQ ACCORDION PREMIUM */}
      <section className="grate-bg">
        <div className="wrap reveal">
          <div className="section-header center">
            <span className="eyebrow">Dúvidas Frequentes</span>
            <h2>Perguntas Frequentes</h2>
            <p className="lede">
              Respostas diretas sobre o funcionamento e acesso ao Clube:
            </p>
          </div>

          <div className="faq-wrap">
            {faqs.map((f, i) => (
              <div className={`faq-card ${openFaq === i ? "open" : ""}`} key={f.q}>
                <button
                  className="faq-btn"
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

      {/* 24 — FINAL DA PÁGINA */}
      <section className="final-section bg-darkest">
        <div className="wrap reveal">
          <h2>Da próxima vez, você não precisa começar no improviso.</h2>
          <p className="sub">
            Tenha as informações do Clube à mão e consulte quando precisar.
          </p>
          <a href={CHECKOUT_URL} className="cta-btn-main" style={{ margin: "0 auto" }}>
            Quero Acessar o Clube
            <span className="cta-subtext">R$ 17,90 · Pagamento Único · Acesso Vitalício</span>
          </a>
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

      {/* 33 — MOBILE STICKY CTA */}
      <div className={`sticky-cta ${showSticky ? "show" : ""}`}>
        <div className="sticky-left">
          <span className="sticky-brand">Clube do Churrasco</span>
          <span className="sticky-price">R$ 17,90 · Vitalício</span>
        </div>
        <a href={CHECKOUT_URL} className="sticky-btn">
          Quero Acessar
        </a>
      </div>
    </div>
  );
}
