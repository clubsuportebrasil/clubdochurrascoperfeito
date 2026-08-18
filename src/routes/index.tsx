import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroArt from "@/assets/hero-churrasqueiro.jpeg.asset.json";
import produtoArt from "@/assets/guia-produto.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clube do Churrasco Perfeito™ — Sistema prático de churrasco" },
      {
        name: "description",
        content:
          "Calcule a carne, escolha os cortes, controle o fogo e acerte o ponto. Um sistema para consultar no celular antes e durante o churrasco, por R$ 17,90.",
      },
      { property: "og:title", content: "Pare de torcer para o churrasco dar certo." },
      {
        property: "og:description",
        content:
          "Calculadora de carne, guia de cortes, controle do fogo, pontos e checklists — no celular, na hora que você precisa decidir.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const duvidas = [
  "Quanto de carne comprar?",
  "Será que vai faltar?",
  "Qual corte vale mais a pena?",
  "Quanto tempo no fogo?",
  "Esse fogo está forte demais?",
  "Já chegou no ponto?",
  "Será que esqueci alguma coisa?",
];

const shifts = [
  {
    from: "Improviso",
    to: "Consulta",
    d: "Em vez de decidir na pressa, você abre a referência certa e segue em frente.",
  },
  {
    from: "Dúvida",
    to: "Orientação",
    d: "Fogo, tempo e ponto deixam de ser tentativa e viram critério claro.",
  },
  {
    from: "Chute",
    to: "Cálculo",
    d: "A quantidade de carne por pessoa sai de conta, não de palpite.",
  },
];

const recursos = [
  {
    icon: "#ic-calc",
    t: "Calculadora de carne",
    b: "Saiba quanto comprar antes de chegar ao mercado",
    d: "Quantidade por pessoa considerando homens, mulheres e crianças, mais bebida e acompanhamentos.",
  },
  {
    icon: "#ic-cut",
    t: "Guia de cortes",
    b: "Tenha uma referência rápida para escolher melhor",
    d: "O que esperar de cada corte, quando ele compensa e como não pagar caro por escolha errada.",
  },
  {
    icon: "#ic-flame",
    t: "Controle do fogo",
    b: "Entenda como controlar o calor",
    d: "Carvão, acendimento, fogo alto, médio e baixo, distância da grelha e o jeito gaúcho do fogo lento.",
  },
  {
    icon: "#ic-temp",
    t: "Ponto da carne",
    b: "Saiba o que observar para servir no ponto desejado",
    d: "Malpassado, ao ponto e bem passado: sinais, tempo e descanso, sem ficar cortando a peça toda hora.",
  },
  {
    icon: "#ic-list",
    t: "Roteiros por tamanho",
    b: "Tenha uma referência para diferentes tamanhos de churrasco",
    d: "Econômico, para casal, para 5, para 10 e para 20 pessoas — com o que comprar e a ordem de assar.",
  },
  {
    icon: "#ic-check",
    t: "Checklists",
    b: "Não dependa da memória",
    d: "Lista do mercado, lista da churrasqueira e o checklist do que precisa estar pronto antes de todo mundo chegar.",
  },
];

const fluxo = [
  { n: "01", t: "Compra", d: "Quanto levar de carne, bebida e acompanhamento." },
  { n: "02", t: "Preparo", d: "Sal, tempero e o que deixar pronto antes." },
  { n: "03", t: "Fogo", d: "Acender, esperar a brasa e ajustar o calor." },
  { n: "04", t: "Carne", d: "Ordem de assar e tempo de cada corte." },
  { n: "05", t: "Ponto", d: "O que observar antes de tirar da grelha." },
  { n: "06", t: "Serviço", d: "Descanso, corte e mesa com os acompanhamentos." },
];

const semClube = [
  "Compra no chute e torce para dar certo",
  "Decide tudo na hora, com gente chegando",
  "Fica inseguro com a força do fogo",
  "Corta a carne toda hora para conferir",
  "Esquece alguma coisa no mercado",
  "Improvisa a ordem do que vai à grelha",
];

const comClube = [
  "Calcula a quantidade antes de sair de casa",
  "Consulta a referência quando bate a dúvida",
  "Planeja a compra e o preparo com antecedência",
  "Executa seguindo uma ordem que faz sentido",
  "Confere o checklist antes dos convidados chegarem",
  "Serve no ponto que você quis servir",
];

const bundle = [
  { t: "Sistema de planejamento", d: "Do mercado até a hora de servir, na ordem em que você usa." },
  { t: "Calculadora de carne", d: "Quantidade por pessoa, bebida e acompanhamentos." },
  { t: "Guia de cortes", d: "Referência rápida para escolher melhor no açougue." },
  { t: "Orientação de fogo", d: "Carvão, brasa, calor alto, médio e baixo." },
  { t: "Pontos da carne", d: "O que observar em cada ponto, com tempo e descanso." },
  { t: "Roteiros prontos", d: "Para casal, 5, 10 e 20 pessoas, e a versão econômica." },
  { t: "Checklists", d: "Mercado, churrasqueira e antes dos convidados chegarem." },
  { t: "Bônus incluído", d: "O livro ilustrado O Churrasco Gaúcho, junto no mesmo acesso." },
];

const faqs = [
  {
    q: "Isso é para quem não entende muito de churrasco?",
    a: "Sim. Tudo é escrito em linguagem direta, sem termo técnico. Se você nunca calculou carne nem controlou brasa, o material te dá o passo a passo. Quem já assa usa como referência rápida.",
  },
  {
    q: "Funciona para churrascos pequenos?",
    a: "Funciona. Existem roteiros para casal e para grupos pequenos, além das versões para 5, 10 e 20 pessoas. A calculadora ajusta a quantidade para o número de gente que você tem.",
  },
  {
    q: "Como acesso depois da compra?",
    a: "Assim que o pagamento é confirmado, o acesso chega no seu e-mail. É só abrir e usar.",
  },
  {
    q: "Posso usar pelo celular?",
    a: "Sim, foi pensado para isso: abrir no celular durante o churrasco, achar a informação e voltar para a grelha.",
  },
  {
    q: "Preciso baixar alguma coisa?",
    a: "Não precisa instalar nada. Você acessa pelo navegador do celular ou do computador, e pode salvar ou imprimir as listas se quiser.",
  },
  {
    q: "Por quanto tempo tenho acesso?",
    a: "Acesso vitalício, com as atualizações do conteúdo incluídas. Dá para consultar antes de cada churrasco.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 7 dias de garantia. Se não fizer sentido para você, é só pedir o reembolso dentro do prazo e devolvemos o valor.",
  },
  {
    q: "Quais são as formas de pagamento?",
    a: "Cartão de crédito, Pix ou boleto, em pagamento único de R$ 17,90.",
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
          id="ic-list"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="9" y1="7" x2="20" y2="7" />
          <line x1="9" y1="12" x2="20" y2="12" />
          <line x1="9" y1="17" x2="20" y2="17" />
          <circle cx="5" cy="7" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="5" cy="12" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="5" cy="17" r="1.2" fill="currentColor" stroke="none" />
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
          id="ic-lock"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="5" y="10.5" width="14" height="9.5" rx="2" />
          <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
        </symbol>
      </defs>
    </svg>
  );
}

function DeviceMock() {
  return (
    <div className="device-stage">
      <div className="float-card float-a">
        <b>Qual corte escolher?</b>
        Referência rápida no açougue
      </div>
      <div className="device">
        <div className="device-screen">
          <div className="device-bar">
            <strong>Clube do Churrasco</strong>
            <span>Celular</span>
          </div>
          <div className="device-body">
            <div className="dcard">
              <span className="k">Calculadora de carne</span>
              <div className="v">
                10 pessoas
                <small>quantidade recomendada por tipo de corte</small>
              </div>
            </div>
            <div className="dcard">
              <span className="k">Controle do fogo</span>
              <div className="dcard-heat">
                <div className="v" style={{ fontSize: "1.05rem" }}>
                  Médio
                </div>
                <div className="heat">
                  <i className="on" />
                  <i className="on" />
                  <i />
                </div>
              </div>
            </div>
            <div className="dcard row">
              <span className="lbl">Ponto da carne</span>
              <span className="val">Ao ponto →</span>
            </div>
            <div className="dcard">
              <span className="k">Checklist</span>
              <div style={{ marginTop: 8 }}>
                <span className="checkline">
                  <b>✓</b> Carne comprada
                </span>
                <span className="checkline">
                  <b>✓</b> Carvão e fogo pronto
                </span>
                <span className="checkline off">
                  <b> </b> Bebidas geladas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="float-card float-b">
        <b>Tudo pronto?</b>
        Confira antes dos convidados chegarem
      </div>
    </div>
  );
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showSticky, setShowSticky] = useState(false);

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
        { threshold: 0.12 },
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

      <header>
        <div className="header-inner">
          <div className="brand">
            <svg className="icon">
              <use href="#ic-flame" />
            </svg>
            Clube do <em>Churrasco</em> Perfeito
          </div>
          <div className="header-price mono">R$ 17,90</div>
        </div>
      </header>

      {/* 1 — HERO */}
      <section className="hero grate-bg" id="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="tag">
              <svg className="icon-sm">
                <use href="#ic-flame" />
              </svg>
              Sistema prático de churrasco
            </span>
            <h1 className="headline">
              Pare de torcer para o churrasco
              <em>dar certo.</em>
            </h1>
            <p className="sub">
              Tenha no celular um sistema prático para calcular a quantidade de carne, escolher os cortes, controlar o
              fogo e acertar o ponto — antes e durante o churrasco.
            </p>
            <a href="#comprar" className="cta-btn">
              Quero acertar meu próximo churrasco
              <span className="cta-sub">R$ 17,90 · pagamento único</span>
            </a>
            <p className="micro">
              <svg className="icon-sm">
                <use href="#ic-lock" />
              </svg>
              Acesso imediato • Pagamento único • 7 dias de garantia
            </p>
          </div>
          <DeviceMock />
        </div>
      </section>
      <div className="divider" />

      {/* 2 — O PROBLEMA */}
      <section className="pain">
        <div className="wrap reveal">
          <span className="eyebrow">O que realmente atrapalha</span>
          <h2>
            O problema não é fazer churrasco. É ter que decidir tudo no improviso.
          </h2>
          <div className="q-grid">
            {duvidas.map((d) => (
              <div className="q-card" key={d}>
                “{d}”
              </div>
            ))}
          </div>
          <p className="bridge">É justamente para isso que o Clube existe.</p>
        </div>
      </section>

      {/* 3 — MUDANÇA DE PERCEPÇÃO */}
      <section className="grate-bg">
        <div className="wrap reveal">
          <span className="eyebrow">Como funciona na prática</span>
          <h2 className="statement">
            Não é para você ler.
            <em>É para você usar.</em>
          </h2>
          <p className="lede">
            O Clube foi pensado para ficar à mão quando você precisar tomar uma decisão no churrasco.
          </p>
          <div className="shift-grid">
            {shifts.map((s) => (
              <div className="shift" key={s.from}>
                <div className="from">{s.from}</div>
                <div className="to">{s.to}</div>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — O PRODUTO EM FUNCIONAMENTO */}
      <section className="modules">
        <div className="wrap reveal">
          <span className="eyebrow">O sistema por dentro</span>
          <h2>Seu churrasco com menos dúvida e mais controle.</h2>
          <p className="lede">
            Cada parte resolve uma decisão específica — na ordem em que essas decisões aparecem no seu dia.
          </p>
          <div className="sys-grid">
            {recursos.map((r) => (
              <div className="sys-card" key={r.t}>
                <span className="sys-ico">
                  <svg className="icon">
                    <use href={r.icon} />
                  </svg>
                </span>
                <h3>{r.t}</h3>
                <p className="benefit">{r.b}</p>
                <p>{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — UTILIDADE / FLUXO */}
      <section className="grate-bg">
        <div className="wrap reveal">
          <span className="eyebrow">Durante o churrasco</span>
          <h2 style={{ fontSize: "clamp(1.55rem,4.2vw,2.2rem)", maxWidth: 700 }}>
            Imagine ter isso aberto no celular enquanto o churrasco acontece.
          </h2>
          <div className="flow">
            {fluxo.map((f) => (
              <div className="flow-step" key={f.n}>
                <span className="n mono">{f.n}</span>
                <h4>{f.t}</h4>
                <p>{f.d}</p>
              </div>
            ))}
          </div>
          <p className="flow-note">
            Você não precisa decorar tudo. Você só precisa saber onde consultar.
          </p>
        </div>
      </section>

      {/* 6 — CALCULADORA */}
      <section className="pain">
        <div className="wrap calc-grid reveal">
          <div>
            <span className="eyebrow">A conta que todo mundo erra</span>
            <h2 style={{ fontSize: "clamp(1.55rem,4.2vw,2.2rem)" }}>
              Uma das decisões mais simples — e mais fáceis de errar.
            </h2>
            <p className="slogan">Quanto comprar?</p>
            <p className="lede">
              Pouco demais, alguém fica sem. Demais, você paga e sobra. E essa decisão é tomada no mercado, com pressa,
              antes de qualquer coisa acontecer.
            </p>
            <div className="cost-pair">
              <div className="cost">
                <b>Faltou</b>
                <p>Churrasco termina cedo e alguém sai com fome.</p>
              </div>
              <div className="cost">
                <b>Sobrou</b>
                <p>Você pagou por carne que vai voltar para a geladeira.</p>
              </div>
            </div>
          </div>

          <div className="calc-panel">
            <div className="calc-head">
              <span>Calculadora de carne</span>
              <span>Clube</span>
            </div>
            <div className="calc-people">
              <span className="num">10</span>
              <span className="lb">pessoas · adultos e crianças</span>
            </div>
            <div className="calc-rows">
              <div className="calc-row">
                <span className="item">Carne bovina</span>
                <span className="qty">quantidade recomendada</span>
              </div>
              <div className="calc-row">
                <span className="item">Linguiça</span>
                <span className="qty">quantidade recomendada</span>
              </div>
              <div className="calc-row">
                <span className="item">Frango</span>
                <span className="qty">quantidade recomendada</span>
              </div>
              <div className="calc-row">
                <span className="item">Bebidas e acompanhamentos</span>
                <span className="qty">na mesma conta</span>
              </div>
            </div>
            <p className="calc-foot">
              As quantidades se ajustam ao número de homens, mulheres e crianças — e viram lista de compras.
            </p>
          </div>
        </div>
      </section>

      {/* 7 — TRANSFORMAÇÃO */}
      <section className="grate-bg">
        <div className="wrap reveal">
          <span className="eyebrow">A diferença no dia</span>
          <h2 style={{ fontSize: "clamp(1.55rem,4.2vw,2.15rem)" }}>O mesmo churrasco, feito de outro jeito</h2>
          <div className="compare">
            <div className="col">
              <h3>Sem o Clube</h3>
              <ul>
                {semClube.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div className="col good">
              <h3>Com o Clube</h3>
              <ul>
                {comClube.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="compare-note">
            Não é informação a mais. É uma forma melhor de fazer o que você já faz.
          </p>
        </div>
      </section>

      {/* 8 — CONTEÚDO COMO PRODUTO */}
      <section className="modules">
        <div className="wrap reveal">
          <span className="eyebrow">O que está dentro do Clube</span>
          <h2>Componentes de um sistema, não capítulos de um curso</h2>
          <div className="promise" style={{ marginTop: 38 }}>
            <div>
              <div className="bundle" style={{ marginTop: 0 }}>
                {bundle.slice(0, 4).map((b) => (
                  <div className="bundle-item" key={b.t}>
                    <span className="ck">✓</span>
                    <span>
                      <b>{b.t}</b>
                      <span className="d">{b.d}</span>
                    </span>
                  </div>
                ))}
              </div>
              <div className="bundle">
                {bundle.slice(4).map((b) => (
                  <div className="bundle-item" key={b.t}>
                    <span className="ck">✓</span>
                    <span>
                      <b>{b.t}</b>
                      <span className="d">{b.d}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="product-wrap">
              <div className="product-shot">
                <img
                  src={produtoArt.url}
                  alt="Guia do churrasqueiro aberto no checklist do anfitrião e na calculadora de cortes"
                />
              </div>
              <span className="book-ribbon">Bônus incluído</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9 — PRODUTO DESEJÁVEL */}
      <section className="grate-bg">
        <div className="wrap promise reveal">
          <div>
            <span className="eyebrow">No seu bolso</span>
            <h2>Feito para abrir com a mão suja de carvão</h2>
            <p>
              Telas curtas, informação separada por decisão e nada de rolagem infinita. Você abre, acha o que precisa e
              volta para a grelha.
            </p>
            <p>
              É o tipo de coisa que fica salva no celular e volta a ser usada em todo churrasco — do almoço de domingo
              ao aniversário com vinte pessoas.
            </p>
            <p className="slogan">"Abra. Consulte. Volte para o fogo."</p>
          </div>
          <div className="hero-art" style={{ margin: 0 }}>
            <img
              src={heroArt.url}
              alt="Churrasqueiro ao lado da churrasqueira consultando o guia digital no tablet"
            />
          </div>
        </div>
      </section>

      {/* 10 — OFERTA */}
      <section className="pricing" id="comprar">
        <div className="wrap reveal">
          <span className="eyebrow">Acesso completo</span>
          <h2 style={{ color: "var(--papel)", fontSize: "clamp(1.55rem,4.2vw,2.15rem)" }}>
            Tudo o que você recebe em um só acesso
          </h2>

          <div className="bundle">
            {bundle.map((b) => (
              <div className="bundle-item" key={b.t}>
                <span className="ck">✓</span>
                <span>
                  <b>{b.t}</b>
                  <span className="d">{b.d}</span>
                </span>
              </div>
            ))}
          </div>

          <div className="price-showcase">
            <div className="product-wrap">
              <div className="product-shot">
                <img
                  src={produtoArt.url}
                  alt="Capa do guia do churrasqueiro com checklist do anfitrião e calculadora de cortes"
                />
              </div>
            </div>

            <div className="price-card">
              <span className="price-kicker">Pagamento único</span>
              <div className="price-tag-wrap">
                <div className="price-tag">
                  <div className="old mono">de R$ 47,00</div>
                  <div className="new">
                    R$17<sup>,90</sup>
                  </div>
                </div>
              </div>
              <ul className="price-list">
                <li>Acesso imediato após a confirmação do pagamento</li>
                <li>Uso no celular, sem instalar nada</li>
                <li>Acesso vitalício, com atualizações incluídas</li>
                <li>7 dias de garantia</li>
              </ul>
              <a href="#" className="cta-btn">
                Quero acertar meu próximo churrasco
                <span className="cta-sub">pagamento único · R$ 17,90</span>
              </a>
              <p className="trust-row">
                <svg className="icon-sm">
                  <use href="#ic-lock" />
                </svg>
                Compra 100% segura
              </p>
              <div className="pay-badges">
                <span className="pay-badge">Pix</span>
                <span className="pay-badge">Cartão</span>
                <span className="pay-badge">Boleto</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11 — NÃO É SÓ UM EBOOK */}
      <section>
        <div className="wrap reveal">
          <span className="eyebrow">A dúvida honesta</span>
          <h2 className="statement" style={{ fontSize: "clamp(1.5rem,4.4vw,2.4rem)" }}>
            Por que o Clube não é só mais um ebook?
          </h2>
          <p className="lede">
            Porque você não precisa sentar para ler 200 páginas para usar. Você consulta a informação certa quando
            precisa dela.
          </p>
          <div className="q-grid">
            <div className="q-card">Antes de comprar, para saber a quantidade certa.</div>
            <div className="q-card">Durante o preparo, para não esquecer nada.</div>
            <div className="q-card">Na hora do fogo, para ajustar o calor.</div>
            <div className="q-card">Na hora de decidir o ponto da carne.</div>
          </div>
        </div>
      </section>

      {/* 12 — TRANSPARÊNCIA */}
      <section className="grate-bg">
        <div className="wrap reveal">
          <span className="eyebrow">Transparência</span>
          <h2 style={{ fontSize: "clamp(1.45rem,4vw,2rem)" }}>O que você recebe, sem letra miúda</h2>
          <div className="shift-grid">
            <div className="shift">
              <div className="to" style={{ marginTop: 0 }}>
                Conteúdo digital
              </div>
              <p>Material de consulta acessado pelo navegador do celular ou do computador. Não é aula ao vivo.</p>
            </div>
            <div className="shift">
              <div className="to" style={{ marginTop: 0 }}>
                Entrega por e-mail
              </div>
              <p>O acesso chega no e-mail da compra assim que o pagamento é confirmado.</p>
            </div>
            <div className="shift">
              <div className="to" style={{ marginTop: 0 }}>
                Garantia de 7 dias
              </div>
              <p>Se não servir para você, o reembolso é feito dentro do prazo, sem burocracia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 13 — GARANTIA */}
      <section>
        <div className="wrap reveal">
          <div className="guarantee-block guarantee">
            <div className="stamp">
              <span className="n">7</span>
              <span className="t">
                DIAS DE
                <br />
                GARANTIA
              </span>
            </div>
            <div className="guarantee-text">
              <h3>Você pode conhecer por dentro sem assumir o risco.</h3>
              <p>
                Entre, use no seu próximo churrasco e veja se ajuda de verdade. Se não fizer sentido, peça o reembolso
                dentro de 7 dias e devolvemos 100% do valor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 14 — FAQ */}
      <section className="faq grate-bg">
        <div className="wrap reveal">
          <span className="eyebrow">Dúvidas</span>
          <h2>Perguntas frequentes</h2>
          {faqs.map((f, i) => (
            <div className={`faq-item${openFaq === i ? " open" : ""}`} key={f.q}>
              <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {f.q}
                <span className="plus">+</span>
              </button>
              <div className="faq-a">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 15 — CTA FINAL */}
      <section className="final">
        <div className="wrap reveal">
          <h2>Seu próximo churrasco não precisa depender do improviso.</h2>
          <p className="sub" style={{ marginLeft: "auto", marginRight: "auto" }}>
            Tenha o Clube à mão e consulte quando precisar.
          </p>
          <a href="#comprar" className="cta-btn">
            Quero acertar meu próximo churrasco
            <span className="cta-sub">R$ 17,90 · acesso imediato</span>
          </a>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <p>
            Clube do Churrasco Perfeito™ — uma criação Chubinho do Churras Gaúcho Brasileiro
            <br />
            Feito com fogo, tempero e um bom chimarrão.
            <br />
            Este site é um produto digital independente e não possui vínculo com Instagram, Facebook ou Meta.
            <br />
            <a href="#">Termos de uso</a> · <a href="#">Política de privacidade</a>
          </p>
        </div>
      </footer>

      <div className={`sticky-cta${showSticky ? " show" : ""}`} id="sticky-cta">
        <span className="p">R$ 17,90</span>
        <a href="#comprar">Quero acertar meu churrasco</a>
      </div>
    </div>
  );
}
