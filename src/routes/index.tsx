import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroArt from "@/assets/hero-churrasqueiro.jpeg.asset.json";
import produtoArt from "@/assets/guia-produto.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clube do Churrasco Perfeito™ — Método Gaúcho por R$ 17,90" },
      {
        name: "description",
        content:
          "Guia prático de churrasco: quanto comprar, como acender o fogo e acertar o ponto da carne. Acesso imediato por R$ 17,90.",
      },
      { property: "og:title", content: "Clube do Churrasco Perfeito™" },
      {
        property: "og:description",
        content:
          "Compra certa, fogo certo, carne no ponto. O método gaúcho de churrasco por R$ 17,90, com acesso imediato.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const painPoints = [
  "Comprou carne demais — ou de menos — e não sabia calcular certo",
  "A carne ficou seca, dura ou sem graça depois de todo aquele trabalho",
  "Gastou uma nota alta e ainda faltou comida na churrasqueira",
  "Fogo forte demais: queimou por fora e ficou cru por dentro",
  "Ficou correndo atrás de tudo com os convidados já batendo na porta",
];

const phoneItems = [
  "Calculadora de carne",
  "Guia dos cortes",
  "Temperos",
  "Pontos da carne",
  "Tempo de grelha",
  "Acompanhamentos",
  "Checklist do churrasco",
];

const modules = [
  {
    n: "01",
    t: "Compra",
    d: "Quanto comprar por pessoa, como escolher os cortes certos, calcular bebida e acompanhamentos e uma lista de compras pronta pra levar ao mercado.",
  },
  {
    n: "02",
    t: "Fogo",
    d: "Carvão, acendimento, controle de temperatura, distância ideal da grelha e uma seção bônus sobre fogo de chão.",
  },
  {
    n: "03",
    t: "Carne",
    d: "Sal, cortes, tempo, ponto e descanso — e como evitar que a carne resseque, incluindo a costela no jeito gaúcho, fogo baixo e devagar.",
  },
  {
    n: "04",
    t: "Acompanhamentos",
    d: "Farofa, vinagrete, pão de alho, molhos e saladas pra completar a mesa.",
  },
  {
    n: "05",
    t: "Churrascos por orçamento",
    d: "Roteiros prontos: econômico, para casal, para 5, para 10 e para 20 pessoas.",
  },
  {
    n: "06",
    t: "Checklists",
    d: "Lista do mercado, lista da churrasqueira e o checklist de antes dos convidados chegarem.",
  },
];

const forWho: { icon: string; text: string }[] = [
  { icon: "#ic-cart", text: "Quem organiza o churrasco da família e cansou de chutar a quantidade de carne" },
  { icon: "#ic-flame", text: "Quem tá começando a assar e quer parar de errar o ponto" },
  { icon: "#ic-skewer", text: "Casais planejando o primeiro churrasco a dois" },
  { icon: "#ic-coin", text: "Quem quer economizar no mercado sem cortar qualidade" },
  { icon: "#ic-hat", text: "Quem tem orgulho da tradição gaúcha e quer fazer jus a ela" },
];

const faqs = [
  {
    q: "Funciona pra churrasqueira a carvão e a gás?",
    a: "Sim. O método ensina a controlar calor e tempo em qualquer tipo de churrasqueira — carvão, gás ou elétrica.",
  },
  {
    q: "Preciso ter experiência com churrasco?",
    a: "Não. O conteúdo foi pensado pra quem tá começando e também pra quem já assa, mas quer parar de errar o ponto e economizar na compra.",
  },
  {
    q: "Como eu recebo o acesso?",
    a: "Assim que a compra é confirmada, você recebe o acesso por e-mail e pode consultar tudo direto pelo celular.",
  },
  {
    q: "Por quanto tempo tenho acesso ao conteúdo?",
    a: "Acesso vitalício. Você pode voltar antes de qualquer churrasco pra revisar a lista de compras e os checklists.",
  },
  {
    q: "Isso é confiável?",
    a: "Sim. O pagamento é processado em ambiente seguro, o acesso chega por e-mail assim que a compra é aprovada, e você ainda conta com 7 dias de garantia.",
  },
  {
    q: "Quais as formas de pagamento?",
    a: "Cartão de crédito, Pix ou boleto, com pagamento único de R$ 17,90.",
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
          id="ic-cart"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 4h2l2.2 11.4a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L20.5 8H6.2" />
          <circle cx="9.5" cy="20" r="1.3" fill="currentColor" stroke="none" />
          <circle cx="17" cy="20" r="1.3" fill="currentColor" stroke="none" />
        </symbol>
        <symbol
          id="ic-skewer"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" y1="20" x2="20" y2="4" />
          <rect x="7.5" y="10.5" width="6" height="4" rx="1.4" fill="currentColor" stroke="none" transform="rotate(45 10.5 12.5)" />
          <rect x="12.5" y="5.5" width="6" height="4" rx="1.4" fill="currentColor" stroke="none" transform="rotate(45 15.5 7.5)" />
        </symbol>
        <symbol
          id="ic-coin"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="8.5" />
          <path d="M9.3 15c0 1.3 1.4 1.9 2.7 1.9s2.7-.6 2.7-1.8-1.4-1.6-2.7-1.9-2.7-.6-2.7-1.9 1.4-1.8 2.7-1.8 2.4.5 2.6 1.6" />
          <line x1="12" y1="6.3" x2="12" y2="7.5" />
          <line x1="12" y1="16.5" x2="12" y2="17.7" />
        </symbol>
        <symbol
          id="ic-hat"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="16" rx="8.5" ry="2.2" />
          <path d="M8.3 14.3C8 10.5 9.6 7 12 7s4 3.5 3.7 7.3" />
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

      <section className="hero grate-bg" id="hero">
        <div className="wrap">
          <span className="tag">
            <svg className="icon-sm">
              <use href="#ic-flame" />
            </svg>
            Clube do Churrasco Perfeito™
          </span>
          <h1 className="headline">
            Seu churrasco tá saindo caro e a carne tá seca.
            <em>A tradição gaúcha resolve isso.</em>
          </h1>
          <div className="hero-art">
            <img
              src={heroArt.url}
              alt="Mestre churrasqueiro sorrindo ao lado da churrasqueira, segurando o guia digital do churrasco"
            />
          </div>
          <p className="sub">
            O método de churrasco que vem lá do Rio Grande do Sul, direto ao ponto: comprar certo, acender o fogo certo e
            assar sem errar — do mercado até a grelha, em qualquer canto do Brasil.
          </p>
          <a href="#comprar" className="cta-btn">
            Quero acertar no churrasco<span className="cta-sub">R$ 17,90 · acesso imediato</span>
          </a>
          <p className="micro">
            <svg className="icon-sm">
              <use href="#ic-lock" />
            </svg>
            Acesso imediato e seguro, direto no celular
          </p>
        </div>
      </section>
      <div className="divider" />

      <section className="pain">
        <div className="wrap reveal">
          <span className="eyebrow">Isso é familiar?</span>
          <h2>Já aconteceu no seu último churrasco</h2>
          <div className="pain-grid">
            {painPoints.map((p) => (
              <div className="pain-item" key={p}>
                <span className="x">✕</span>
                <p>{p}</p>
              </div>
            ))}
          </div>
          <p className="bridge">
            Churrasco perfeito não depende de sorte, nem de churrasqueira cara. Depende de método — o mesmo que os
            gaúchos usam há gerações pra reunir todo mundo ao redor do fogo.
          </p>
        </div>
      </section>

      <section className="grate-bg">
        <div className="wrap promise reveal">
          <div>
            <span className="eyebrow">O que é o clube</span>
            <h2>Um manual de consulta. Não mais um curso pra assistir.</h2>
            <p>
              Nada de vídeo-aula de duas horas ou ebook de 200 páginas. O Clube foi feito pra você abrir no celular,
              achar a resposta e voltar pra churrasqueira em segundos.
            </p>
            <p>
              Quanto comprar. Que corte escolher. Quanto tempo na grelha. Tudo organizado pra consulta rápida, antes e
              durante o churrasco — com a tradição gaúcha do fogo lento como base, adaptada pra qualquer churrasqueira do
              Brasil.
            </p>
            <p>
              Não é curso de chef, nem promessa milagrosa. É um método direto, pensado por quem também já perdeu a mão no
              fogo — e não quer que isso se repita no seu.
            </p>
            <p className="slogan">"Abra. Escolha. Prepare. Acerte."</p>
          </div>
          <div className="phone">
            <div className="phone-head">
              <svg className="icon">
                <use href="#ic-flame" />
              </svg>
              CLUBE DO CHURRASCO
            </div>
            {phoneItems.map((item) => (
              <div className="phone-item" key={item}>
                {item} <span className="arrow">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="modules">
        <div className="wrap reveal">
          <span className="eyebrow">O que tem dentro</span>
          <h2>6 módulos. Do mercado até o último espetinho.</h2>
          <p className="sub-lead">
            Organizado na ordem em que você realmente vai usar: primeiro a compra, depois o fogo, a carne, os
            acompanhamentos e os checklists pra não esquecer nada.
          </p>
          <div className="menu">
            {modules.map((m) => (
              <div className="menu-row" key={m.n}>
                <span className="menu-num">{m.n}</span>
                <div className="menu-body">
                  <h3>{m.t}</h3>
                  <p>{m.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="forwho grate-bg">
        <div className="wrap reveal">
          <span className="eyebrow">Pra quem é</span>
          <h2>Feito pra quem põe a mão na grelha</h2>
          <div className="fw-list">
            {forWho.map((f) => (
              <div className="fw-item" key={f.icon}>
                <span className="fw-icon">
                  <svg className="icon">
                    <use href={f.icon} />
                  </svg>
                </span>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing" id="comprar">
        <div className="wrap reveal">
          <span className="eyebrow">Acesso completo</span>
          <h2 style={{ color: "var(--papel)", fontSize: "clamp(1.55rem,4.2vw,2.15rem)" }}>
            Tudo isso pelo preço de um espetinho
          </h2>

          <div className="price-showcase">
            <div className="product-wrap">
              <div className="product-shot">
                <img
                  src={produtoArt.url}
                  alt="Capa do Grande Guia do Churrasqueiro com o checklist do anfitrião e a calculadora de cortes"
                />
              </div>
              <span className="book-ribbon">Bônus grátis</span>
            </div>

            <div className="price-card">
              <span className="price-kicker">Oferta de lançamento</span>
              <div className="price-tag-wrap">
                <div className="price-tag">
                  <div className="old mono">de R$ 47,00</div>
                  <div className="new">
                    R$17<sup>,90</sup>
                  </div>
                </div>
              </div>
              <ul className="price-list">
                <li>Os 6 módulos completos do Clube do Churrasco Perfeito</li>
                <li>Calculadora de quantidade de carne por pessoa</li>
                <li>Checklists prontas pra usar no celular ou imprimir</li>
                <li>Bônus: o livro ilustrado O Churrasco Gaúcho</li>
                <li>Acesso imediato após a confirmação da compra</li>
                <li>Atualizações do conteúdo incluídas, sem custo extra</li>
              </ul>
              <a href="#" className="cta-btn">
                Quero o meu acesso agora<span className="cta-sub">pagamento único · R$ 17,90</span>
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

      <section>
        <div className="wrap guarantee reveal">
          <div className="stamp">
            <span className="n">7</span>
            <span className="t">
              DIAS DE
              <br />
              GARANTIA
            </span>
          </div>
          <div className="guarantee-text">
            <h3>Risco zero pra testar</h3>
            <p>
              Se o Clube não for pra você, é só pedir reembolso dentro de 7 dias e devolvemos 100% do valor, sem
              burocracia.
            </p>
          </div>
        </div>
      </section>

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

      <section className="final">
        <div className="wrap reveal">
          <h2>Da próxima vez, o churrasco sai certo</h2>
          <p className="sub" style={{ marginLeft: "auto", marginRight: "auto" }}>
            Compra certa, fogo certo, carne no ponto. R$ 17,90, acesso na hora.
          </p>
          <a href="#comprar" className="cta-btn">
            Quero acertar no churrasco
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
        <a href="#comprar">Quero o meu acesso</a>
      </div>
    </div>
  );
}
