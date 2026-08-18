import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroArt from "@/assets/hero-churrasqueiro.jpeg.asset.json";
import produtoArt from "@/assets/guia-produto.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clube do Churrasco Perfeito™ — Central Prática de Consulta" },
      {
        name: "description",
        content:
          "Central prática de consulta e organização para o seu churrasco: calculadora dinâmica, guias de cortes, controle do fogo, ponto da carne e checklists por R$ 17,90.",
      },
      { property: "og:title", content: "Clube do Churrasco Perfeito™ — Central Prática de Consulta" },
      {
        name: "og:description",
        content:
          "Do improviso à mesa: tudo o que você precisa consultar para planejar, comprar, preparar e assar sem depender de palpites.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CHECKOUT_URL = "https://pay.cakto.com.br/rfzix5k_1049718";

// 4 — Para Quem É
const paraQuem = [
  {
    tag: "Situação 01",
    title: "Vou fazer um churrasco",
    desc: "Preciso organizar quantidades, itens e a ordem do que vai para a grelha sem esquecer nada importante.",
    tool: "Calculadora + Checklists Prontos",
  },
  {
    tag: "Situação 02",
    title: "Fui encarregado das compras",
    desc: "Preciso saber exatamente quantos quilos levar e quais cortes escolher para não gastar à toa.",
    tool: "Guia de Cortes + Calculadora",
  },
  {
    tag: "Situação 03",
    title: "Vou receber pessoas em casa",
    desc: "Quero que tudo saia no tempo certo, com bebidas geladas, acompanhamentos e carnes no ponto.",
    tool: "Roteiro do Anfitrião",
  },
  {
    tag: "Situação 04",
    title: "Não sou especialista",
    desc: "Quero uma referência clara e direta para consultar quando bater qualquer dúvida na churrasqueira.",
    tool: "Guia de Fogo e Ponto da Carne",
  },
  {
    tag: "Situação 05",
    title: "Já faço churrasco",
    desc: "Quero ter ferramentas práticas e rápidas à mão para agilizar o planejamento e padronizar o preparo.",
    tool: "Roteiros por Tamanho de Grupo",
  },
  {
    tag: "Situação 06",
    title: "Quero parar com o chute",
    desc: "Chega de sobrar quilos de carne ou faltar no meio do evento. Quero previsibilidade e organização.",
    tool: "Sistema Completo de Apoio",
  },
];

// 6 — Workflow
const workflow = [
  { step: "01", title: "Consultar", desc: "Abre no celular a dúvida específica." },
  { step: "02", title: "Decidir", desc: "Define quantidades, cortes e tempo." },
  { step: "03", title: "Preparar", desc: "Organiza ingredientes, brasa e grelha." },
  { step: "04", title: "Executar", desc: "Controla o fogo e o ponto com segurança." },
  { step: "05", title: "Servir", desc: "Respeita o descanso e leva à mesa." },
];

// 8 — Timeline
const timelineMoments = [
  {
    time: "Antes do churrasco",
    title: "Vou planejar",
    quote: "“Quantas pessoas vêm? O que preciso providenciar?”",
    desc: "Definição rápida de cardápio, acompanhamentos e lista de mercado sem dor de cabeça.",
  },
  {
    time: "No mercado e açougue",
    title: "Vou comprar",
    quote: "“Quanto levar de cada corte? Qual carne compensa?”",
    desc: "Calculadora de quilos por pessoa e guia comparativo de cortes direto no bolso.",
  },
  {
    time: "Na preparação",
    title: "Vou organizar",
    quote: "“Salga antes ou depois? O que deixar pré-pronto?”",
    desc: "Checklist de bancada, utensílios e ordem correta de temperos para cada peça.",
  },
  {
    time: "No fogo e grelha",
    title: "Vou controlar",
    quote: "“Qual altura da grelha? Quando virar a carne?”",
    desc: "Referência visual de brasas (alta, média, baixa) e tempos por espessura.",
  },
  {
    time: "Na hora de servir",
    title: "Vou finalizar",
    quote: "“Descanso de quantos minutos? Como fatiar contra a fibra?”",
    desc: "Instruções para preservar o suco da carne e servir no ponto perfeito.",
  },
];

// 9 — Modos de Uso
const modosDeUso = [
  {
    num: "01",
    title: "Modo Planejamento",
    question: "O que preciso considerar?",
    desc: "Calculadora de porções por perfil de convidados (homens, mulheres, crianças) e roteiros por porte de evento.",
  },
  {
    num: "02",
    title: "Modo Compra",
    question: "O que comprar no açougue?",
    desc: "Guia de cortes bovinos, suínos e aves, com orientações de rendimento e custo-benefício.",
  },
  {
    num: "03",
    title: "Modo Preparação",
    question: "Como me organizar antes?",
    desc: "Checklists de mercado, bebidas geladas, acompanhamentos essenciais e tempos prévios.",
  },
  {
    num: "04",
    title: "Modo Fogo",
    question: "O que devo observar na brasa?",
    desc: "Técnica de acendimento sem estresse, controle de calor radiante e distância ideal da grelha.",
  },
  {
    num: "05",
    title: "Modo Carne & Ponto",
    question: "O que consultar na grelha?",
    desc: "Critérios táteis e visuais para selar, assar e atingir malpassado, ao ponto e bem passado.",
  },
  {
    num: "06",
    title: "Modo Serviço",
    question: "Como organizar a etapa final?",
    desc: "Tempo de descanso para redistribuição dos sucos, tábuas de corte e apresentação à mesa.",
  },
];

// 10 — Dashboard de Conteúdo Real
const dashboardCategorias = [
  {
    tag: "Ferramenta 01",
    title: "Calculadora Dinâmica",
    desc: "Ajuste de quantidade por número de pessoas, perfil de consumo e duração do churrasco.",
    pill: "Prático no celular",
  },
  {
    tag: "Guia 02",
    title: "Guia de Cortes & Carnes",
    desc: "Picanha, fraldinha, costela, maminha, cupim, linguiças e aves explicados de forma objetiva.",
    pill: "No açougue",
  },
  {
    tag: "Técnica 03",
    title: "Manual do Fogo & Brasa",
    desc: "Formação de brasa viva, teste dos segundos na mão, controle de labaredas e temperatura.",
    pill: "Na churrasqueira",
  },
  {
    tag: "Referência 04",
    title: "Tabela de Pontos da Carne",
    desc: "Indicadores visuais de ponto sem precisar furar ou cortar a peça inteira repetidamente.",
    pill: "Na grelha",
  },
  {
    tag: "Roteiros 05",
    title: "Roteiros por Tamanho",
    desc: "Estruturas prontas para casal, grupos de 5, 10 e 20 pessoas, além do modo econômico.",
    pill: "Planejamento",
  },
  {
    tag: "Listas 06",
    title: "Checklists do Anfitrião",
    desc: "Listas completas de mercado, carvão, gelo, acompanhamentos e utensílios indispensáveis.",
    pill: "Sem esquecimentos",
  },
  {
    tag: "Acompanhamentos 07",
    title: "Guarnições & Molhos",
    desc: "Farofas, vinagretes, pão de alho e acompanhamentos que equilibram a experiência.",
    pill: "À mesa",
  },
  {
    tag: "Bônus 08",
    title: "O Churrasco Gaúcho",
    desc: "Livro ilustrado com fundamentos tradicionais da cultura do churrasco sulista.",
    pill: "Acesso incluído",
  },
];

// 11 — Decisão -> Ferramenta
const decisoesFerramentas = [
  { q: "“Quanto de carne e carvão preciso comprar?”", tool: "CALCULADORA DE CARNE" },
  { q: "“Qual corte escolher sem gastar demais?”", tool: "GUIA PRÁTICO DE CORTES" },
  { q: "“O que não posso esquecer no mercado?”", tool: "CHECKLIST DO ANFITRIÃO" },
  { q: "“Como saber se a brasa está forte ou fraca?”", tool: "GUIA DE CONTROLE DO FOGO" },
  { q: "“Quando tirar a carne no ponto certo?”", tool: "TABELA VISUAL DE PONTOS" },
  { q: "“Por onde começo a organizar o churrasco?”", tool: "ROTEIROS POR TAMANHO" },
];

// 14 — Antes vs Com o Clube
const semClube = [
  "Compra quantidades no chute e torce para não faltar nem sobrar quilos de carne.",
  "Decide tudo em cima da hora com os convidados já chegando.",
  "Insegurança constante se o fogo está forte demais ou apagando.",
  "Corta a carne no meio a todo momento na grelha para conferir o ponto.",
  "Esquece itens essenciais no mercado e tem que sair correndo no meio do churrasco.",
  "Improvisa a ordem dos cortes e serve tudo descompassado.",
];

const comClube = [
  "Calcula as quantidades exatas por tipo de convidado antes de sair de casa.",
  "Consulta referências práticas no celular quando surge qualquer dúvida.",
  "Planeja a compra, os acompanhamentos e a brasa com antecedência tranquila.",
  "Conduz o fogo com critérios claros de tempo e calor radiante.",
  "Confere o checklist antes de receber as pessoas e aproveita o churrasco.",
  "Serve as peças no ponto desejado respeitando o tempo de descanso.",
];

// 15 — Bundle da Oferta
const ofertaBundle = [
  { t: "Central Digital de Consulta", d: "Acesso imediato no celular ou computador, sem instalar nada." },
  { t: "Calculadora Dinâmica de Carne", d: "Ajuste de quilos por homem, mulher, criança e acompanhamentos." },
  { t: "Guia Completo de Cortes", d: "Referência rápida no açougue para escolher carnes com melhor custo-benefício." },
  { t: "Manual de Fogo & Brasas", d: "Como acender, controlar temperaturas e posicionar a grelha." },
  { t: "Guia Visual de Pontos", d: "Critérios claros para servir malpassado, ao ponto e bem passado." },
  { t: "Roteiros por Tamanho de Grupo", d: "Estruturas prontas para 2, 5, 10, 20 pessoas e versão econômica." },
  { t: "Checklists do Anfitrião", d: "Mercado, churrasqueira e pré-evento para nada ser esquecido." },
  { t: "Bônus: O Churrasco Gaúcho", d: "Livro ilustrado com técnicas e fundamentos tradicionais." },
];

const faqs = [
  {
    q: "O que exatamente é o Clube do Churrasco Perfeito?",
    a: "É uma central prática de consulta e organização digital. Em vez de aulas longas ou teorias pesadas, você tem ferramentas diretas (calculadora, guias de cortes, manuais de fogo, pontos da carne e checklists) formatadas para você abrir no celular e consultar antes e durante o churrasco.",
  },
  {
    q: "Serve para quem não é especialista ou nunca fez churrasco?",
    a: "Sim, foi desenhado exatamente para ser universal. Todo o material utiliza linguagem direta e orientações práticas. Se você é o anfitrião, o responsável pelas compras ou quem está na grelha, o Clube serve como uma referência clara para tirar o improviso do caminho.",
  },
  {
    q: "Como recebo o acesso após a compra?",
    a: "Imediatamente após a confirmação do pagamento, você recebe os dados de acesso no seu e-mail cadastrado. O acesso é 100% digital, pelo navegador do celular, tablet ou computador.",
  },
  {
    q: "Preciso baixar ou instalar algum aplicativo pesado?",
    a: "Não precisa instalar nada nas lojas de aplicativos. O material roda direto pelo navegador de forma leve e rápida, perfeitamente adaptado para a tela do celular.",
  },
  {
    q: "Por quanto tempo terei acesso?",
    a: "O acesso é vitalício, incluindo todas as futuras atualizações e melhorias das ferramentas sem qualquer cobrança adicional ou mensalidade.",
  },
  {
    q: "E se eu achar que não foi útil para mim?",
    a: "Você conta com 7 dias de garantia incondicional. Se você acessar e achar que as ferramentas não agregaram praticidade ao seu churrasco, basta solicitar o reembolso dentro do prazo e 100% do valor de R$ 17,90 será devolvido.",
  },
  {
    q: "Quais são os métodos de pagamento disponíveis?",
    a: "Pagamento único via Pix (liberação imediata), Cartão de Crédito ou Boleto bancário, processado com segurança pela plataforma oficial.",
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

function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState<"calc" | "cortes" | "fogo" | "check">("calc");
  const [homens, setHomens] = useState(6);
  const [mulheres, setMulheres] = useState(4);
  const [criancas, setCriancas] = useState(2);

  // Cálculos de exemplo da calculadora
  // Padrão de consumo aproximado: Homem 400g carne, Mulher 300g, Criança 150g
  const totalCarneKg = ((homens * 0.4 + mulheres * 0.3 + criancas * 0.15)).toFixed(1);
  const totalBovinaKg = ((parseFloat(totalCarneKg) * 0.6)).toFixed(1);
  const totalLinguicaKg = ((parseFloat(totalCarneKg) * 0.25)).toFixed(1);
  const totalFrangoKg = ((parseFloat(totalCarneKg) * 0.15)).toFixed(1);
  const totalCarvaoKg = Math.max(3, Math.ceil(parseFloat(totalCarneKg) * 1.2));
  const totalPessoas = homens + mulheres + criancas;

  return (
    <div className="demo-container">
      <div className="demo-tabs-bar">
        <button
          className={`demo-tab-btn ${activeTab === "calc" ? "active" : ""}`}
          onClick={() => setActiveTab("calc")}
        >
          <svg className="icon-sm"><use href="#ic-calc" /></svg>
          Calculadora de Carne
        </button>
        <button
          className={`demo-tab-btn ${activeTab === "cortes" ? "active" : ""}`}
          onClick={() => setActiveTab("cortes")}
        >
          <svg className="icon-sm"><use href="#ic-cut" /></svg>
          Guia de Cortes
        </button>
        <button
          className={`demo-tab-btn ${activeTab === "fogo" ? "active" : ""}`}
          onClick={() => setActiveTab("fogo")}
        >
          <svg className="icon-sm"><use href="#ic-flame" /></svg>
          Controle de Fogo & Ponto
        </button>
        <button
          className={`demo-tab-btn ${activeTab === "check" ? "active" : ""}`}
          onClick={() => setActiveTab("check")}
        >
          <svg className="icon-sm"><use href="#ic-check" /></svg>
          Checklists Interativos
        </button>
      </div>

      <div className="demo-content-area">
        {activeTab === "calc" && (
          <div className="calc-demo-grid">
            <div className="calc-controls">
              <div className="calc-control-group">
                <div className="calc-label">
                  <span>Homens ({homens})</span>
                  <span className="val">{homens} pessoas</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="25"
                  value={homens}
                  onChange={(e) => setHomens(parseInt(e.target.value) || 0)}
                  className="calc-range"
                />
              </div>

              <div className="calc-control-group">
                <div className="calc-label">
                  <span>Mulheres ({mulheres})</span>
                  <span className="val">{mulheres} pessoas</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="25"
                  value={mulheres}
                  onChange={(e) => setMulheres(parseInt(e.target.value) || 0)}
                  className="calc-range"
                />
              </div>

              <div className="calc-control-group">
                <div className="calc-label">
                  <span>Crianças ({criancas})</span>
                  <span className="val">{criancas} pessoas</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="15"
                  value={criancas}
                  onChange={(e) => setCriancas(parseInt(e.target.value) || 0)}
                  className="calc-range"
                />
              </div>

              <p className="calc-note">
                💡 Arraste os controles para simular o cálculo automático que você terá no celular.
              </p>
            </div>

            <div className="calc-results-card">
              <div className="calc-results-header">
                <span>Resultado para {totalPessoas} pessoas</span>
                <span style={{ color: "var(--brasa-2)" }}>Total: {totalCarneKg} kg</span>
              </div>
              <div className="calc-results-list">
                <div className="calc-result-row">
                  <span className="label">🥩 Carne Bovina (Picanha / Fraldinha / Contrafilé)</span>
                  <span className="amount">{totalBovinaKg} kg</span>
                </div>
                <div className="calc-result-row">
                  <span className="label">🌭 Linguiça Toscana / Campeira</span>
                  <span className="amount">{totalLinguicaKg} kg</span>
                </div>
                <div className="calc-result-row">
                  <span className="label">🍗 Frango (Coxinha da Asa / Tulipa)</span>
                  <span className="amount">{totalFrangoKg} kg</span>
                </div>
                <div className="calc-result-row">
                  <span className="label">🔥 Carvão Recomendado</span>
                  <span className="amount">~{totalCarvaoKg} kg (1 a 2 sacos)</span>
                </div>
              </div>
              <p className="calc-note">
                O Clube calcula automaticamente proporções ideais para evitar sobras excessivas ou falta de carne.
              </p>
            </div>
          </div>
        )}

        {activeTab === "cortes" && (
          <div className="cuts-grid">
            <div className="cut-card">
              <span className="cut-tag">Custo-Benefício Alto</span>
              <h4>Fraldinha / Vazio</h4>
              <div className="cut-prep">Grelha rápida · Fogo médio-alto</div>
              <p>Fibra longa e suculenta. Pede fogo vivo e corte estritamente contra o sentido da fibra para garantir maciez total.</p>
            </div>

            <div className="cut-card">
              <span className="cut-tag">O Clássico</span>
              <h4>Picanha</h4>
              <div className="cut-prep">Bife de tira ou peça inteira</div>
              <p>Gordura uniforme sem necessidade de limpar. Sele primeiro o lado da gordura com calor moderado para derreter e selar.</p>
            </div>

            <div className="cut-card">
              <span className="cut-tag">Rápido e Prático</span>
              <h4>Contrafilé / Ancho</h4>
              <div className="cut-prep">Grelha a 15-20cm do fogo</div>
              <p>Excelente marmoreio. Ideal para bifes de 2 a 3 dedos servidos ao ponto ou malpassados em poucos minutos.</p>
            </div>

            <div className="cut-card">
              <span className="cut-tag">Tradição de Fogo Lento</span>
              <h4>Costela Janela</h4>
              <div className="cut-prep">Grelha alta / Espeto longo</div>
              <p>Pede paciência: 3 a 5 horas de brasa suave com o lado do osso voltado para o calor para amaciar o colágeno.</p>
            </div>
          </div>
        )}

        {activeTab === "fogo" && (
          <div className="fire-grid">
            <div className="fire-card">
              <span className="fire-badge alta">Calor Alto (Forte)</span>
              <h4>Selagem Rápida</h4>
              <p>Ideal para cortes finos, bifes de tira e picanha. Cria a crosta saborosa mantendo o interior suculento.</p>
              <div className="rule">Regra da mão: suporta de 3 a 5 segundos na altura da grelha.</div>
            </div>

            <div className="fire-card">
              <span className="fire-badge media">Calor Médio (Constante)</span>
              <h4>Assar e Dourar</h4>
              <p>Ideal para linguiças, frangos, fraldinha e queijo coalho. Cozinha por dentro sem queimar por fora.</p>
              <div className="rule">Regra da mão: suporta de 6 a 8 segundos na altura da grelha.</div>
            </div>

            <div className="fire-card">
              <span className="fire-badge baixa">Calor Baixo (Fogo Lento)</span>
              <h4>Peças Grandes e Densas</h4>
              <p>Ideal para costela, cupim e peças inteiras que precisam de tempo para quebrar fibras rígidas.</p>
              <div className="rule">Regra da mão: suporta 9 segundos ou mais sem queimar.</div>
            </div>
          </div>
        )}

        {activeTab === "check" && (
          <div className="checklist-demo">
            <div className="checklist-box">
              <h4>
                <svg><use href="#ic-check" /></svg>
                Antes do Churrasco (Mercado)
              </h4>
              <div className="checklist-items">
                <label className="interactive-check">
                  <input type="checkbox" defaultChecked />
                  <span>Carne calculada por pessoa</span>
                </label>
                <label className="interactive-check">
                  <input type="checkbox" defaultChecked />
                  <span>Sacos de carvão seco e acendedor</span>
                </label>
                <label className="interactive-check">
                  <input type="checkbox" defaultChecked />
                  <span>Sal de parrilla ou sal grosso</span>
                </label>
                <label className="interactive-check">
                  <input type="checkbox" />
                  <span>Gelo, cerveja e bebidas sem álcool</span>
                </label>
                <label className="interactive-check">
                  <input type="checkbox" />
                  <span>Pão de alho, farofa e queijo coalho</span>
                </label>
              </div>
            </div>

            <div className="checklist-box">
              <h4>
                <svg><use href="#ic-check" /></svg>
                Na Churrasqueira (Pré-Serviço)
              </h4>
              <div className="checklist-items">
                <label className="interactive-check">
                  <input type="checkbox" defaultChecked />
                  <span>Grelha limpa e aquecida</span>
                </label>
                <label className="interactive-check">
                  <input type="checkbox" defaultChecked />
                  <span>Faca amolada e tábua higienizada</span>
                </label>
                <label className="interactive-check">
                  <input type="checkbox" />
                  <span>Pegador de carne (evite furar a peça)</span>
                </label>
                <label className="interactive-check">
                  <input type="checkbox" />
                  <span>Travessa de descanso para as carnes</span>
                </label>
                <label className="interactive-check">
                  <input type="checkbox" />
                  <span>Acompanhamentos servidos na bancada</span>
                </label>
              </div>
            </div>
          </div>
        )}
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

      {/* Header Fixo */}
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

      {/* 1 & 22 & 23 — HERO SECTION (Above the fold CRO) */}
      <section className="hero grate-bg" id="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="hero-badge-wrap">
              <span className="hero-tag">
                <svg className="icon-sm"><use href="#ic-flame" /></svg>
                Central Prática de Consulta
              </span>
            </div>
            <h1 className="headline">
              Pare de torcer para o churrasco <em>dar certo.</em>
            </h1>
            <p className="hero-sub">
              Tenha no celular uma central prática para planejar compras, controlar o fogo, calcular quantidades e consultar cortes — antes e durante o churrasco.
            </p>
            <div className="hero-cta-box">
              <a href={CHECKOUT_URL} className="cta-btn-main">
                Quero Ter o Meu Acesso
                <span className="cta-subtext">R$ 17,90 · Pagamento único · Acesso imediato</span>
              </a>
              <div className="hero-micro">
                <svg className="icon-sm"><use href="#ic-shield" /></svg>
                <span>7 dias de garantia incondicional • Uso direto no celular</span>
              </div>
            </div>
          </div>

          {/* Device Mockup Visual */}
          <div className="device-stage">
            <div className="float-card float-a">
              <b>Qual corte escolher?</b>
              Consulta rápida no açougue
            </div>
            <div className="device">
              <div className="device-notch" />
              <div className="device-screen">
                <div className="device-app-bar">
                  <div className="brand-mini">
                    <svg><use href="#ic-flame" /></svg>
                    <span>Clube do Churrasco</span>
                  </div>
                  <span className="device-badge-active">Online</span>
                </div>
                <div className="device-body">
                  <div className="dcard">
                    <span className="k">
                      <svg className="icon-sm"><use href="#ic-calc" /></svg>
                      Calculadora de Carne
                    </span>
                    <div className="v">
                      10 pessoas
                      <small>Cálculo automático de carne, bebidas e carvão</small>
                    </div>
                  </div>

                  <div className="dcard">
                    <span className="k">
                      <svg className="icon-sm"><use href="#ic-flame" /></svg>
                      Controle de Brasa
                    </span>
                    <div className="dcard-heat">
                      <div className="v" style={{ fontSize: "1.1rem" }}>Calor Médio</div>
                      <div className="heat-bars">
                        <i className="on" />
                        <i className="on" />
                        <i />
                      </div>
                    </div>
                  </div>

                  <div className="dcard">
                    <span className="k">
                      <svg className="icon-sm"><use href="#ic-check" /></svg>
                      Checklist do Mercado
                    </span>
                    <div style={{ marginTop: 6 }}>
                      <div className="checkline">
                        <b>✓</b> Carnes compradas e calculadas
                      </div>
                      <div className="checkline">
                        <b>✓</b> Carvão seco pronto para acender
                      </div>
                      <div className="checkline off">
                        <b> </b> Bebidas no gelo
                      </div>
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
        </div>
      </section>

      <div className="divider" />

      {/* 4 & 3 — SEÇÃO "PARA QUEM É?" UNIVERSAL */}
      <section className="bg-darker">
        <div className="wrap reveal">
          <div className="section-header center">
            <span className="eyebrow">Acesso Universal</span>
            <h2>Para quem foi pensado o Clube do Churrasco?</h2>
            <p className="lede">
              Se você se identifica com pelo menos uma dessas situações, vai entender de imediato o valor prático de ter essa central no bolso.
            </p>
          </div>

          <div className="forwho-grid">
            {paraQuem.map((p) => (
              <div className="forwho-card" key={p.title}>
                <div className="forwho-top">
                  <span className="forwho-situation">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
                <div className="forwho-tool">
                  <span>→ Recurso:</span>
                  <b>{p.tool}</b>
                </div>
              </div>
            ))}
          </div>

          <div className="forwho-footer-note">
            “Se você faz churrasco, organiza churrasco, compra os itens ou simplesmente quer parar de depender do improviso, o Clube foi pensado para facilitar a sua experiência.”
          </div>
        </div>
      </section>

      {/* 5 & 12 & 13 — DIFERENCIAÇÃO RADICAL: NÃO É SOBRE SER EXPERT */}
      <section className="grate-bg">
        <div className="wrap reveal">
          <div className="statement-box">
            <span className="eyebrow">Diferenciação Clara</span>
            <h2>Você já viu muito produto digital sobre churrasco. <em>A diferença aqui é a utilidade.</em></h2>
            <p className="lead-stat">
              Não prometemos que você vai virar mestre churrasqueiro da noite para o dia. A proposta é muito mais honesta e simples: <strong>ter a informação certa disponível exatamente quando você precisar decidir.</strong>
            </p>
            <div className="contrast-pills">
              <div className="contrast-pill">
                <span>O que você NÃO encontra:</span>
                <b>Teorias longas de 200 páginas</b>
              </div>
              <div className="contrast-pill">
                <span>O que você NÃO precisa:</span>
                <b>Decorar nomes ou regras de cabeça</b>
              </div>
              <div className="contrast-pill highlight">
                <span>O que você RECEBE:</span>
                <b>Central de consulta rápida no celular</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 — NÃO VENDEMOS CONTEÚDO. MOSTRAMOS UTILIDADE. */}
      <section className="bg-darker">
        <div className="wrap reveal">
          <div className="section-header center">
            <span className="eyebrow">Fluxo na Prática</span>
            <h2>Você não compra páginas. Você compra praticidade.</h2>
            <p className="lede">
              O valor do Clube está no que você consegue consultar, decidir e aplicar em poucos segundos.
            </p>
          </div>

          <div className="workflow-ribbon">
            {workflow.map((w) => (
              <div className="workflow-card" key={w.step}>
                <span className="workflow-step-num">{w.step}</span>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — VEJA COMO FUNCIONA ANTES DE COMPRAR (DEMONSTRAÇÃO REAL) */}
      <section className="demo-section" id="demonstracao">
        <div className="wrap reveal">
          <div className="section-header center">
            <span className="eyebrow">Demonstração ao Vivo</span>
            <h2>Veja como o Clube funciona antes de comprar</h2>
            <p className="lede">
              Navegue pelas abas abaixo e experimente os recursos reais que você terá acesso imediato:
            </p>
          </div>

          <InteractiveDemo />
        </div>
      </section>

      {/* 8 — ABRA QUANDO PRECISAR (TIMELINE DO IMPROVISO À MESA) */}
      <section className="grate-bg">
        <div className="wrap reveal">
          <div className="section-header">
            <span className="eyebrow">Do Improviso à Mesa</span>
            <h2>Você não precisa ler tudo de uma vez. Abra conforme a situação.</h2>
            <p className="lede">
              O Clube acompanha cada momento do seu evento, eliminando as dúvidas na ordem exata em que elas surgem.
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

      {/* 9 — MODO DE USO */}
      <section className="bg-darker">
        <div className="wrap reveal">
          <div className="section-header center">
            <span className="eyebrow">Modos Operacionais</span>
            <h2>Interface por Modo de Uso</h2>
            <p className="lede">
              Cada modo reúne apenas as ferramentas necessárias para a etapa em que você está.
            </p>
          </div>

          <div className="mode-grid">
            {modosDeUso.map((m) => (
              <div className="mode-card" key={m.num}>
                <div className="mode-num">{m.num}</div>
                <div className="mode-body">
                  <h4>{m.title}</h4>
                  <span className="mode-question">{m.question}</span>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — SEU CHURRASCO EM UMA TELA (DASHBOARD REAL) */}
      <section className="grate-bg">
        <div className="wrap reveal">
          <div className="section-header center">
            <span className="eyebrow">Visão Geral</span>
            <h2>Seu churrasco organizado em uma tela</h2>
            <p className="lede">
              Todas as categorias de suporte reunidas em um ambiente limpo e intuitivo.
            </p>
          </div>

          <div className="dashboard-frame">
            <div className="dashboard-header">
              <div className="dashboard-title">
                <span className="live-dot" />
                <span>Central de Controle do Churrasco</span>
              </div>
              <div className="mono" style={{ fontSize: "0.78rem", color: "var(--mostarda)" }}>
                Versão Web & Mobile
              </div>
            </div>

            <div className="dashboard-modules-grid">
              {dashboardCategorias.map((d) => (
                <div className="dash-mod" key={d.title}>
                  <span className="dash-mod-tag">{d.tag}</span>
                  <h4>{d.title}</h4>
                  <p>{d.desc}</p>
                  <span className="dash-pill">{d.pill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11 — DECISÃO -> FERRAMENTA */}
      <section className="bg-darker">
        <div className="wrap reveal">
          <div className="section-header center">
            <span className="eyebrow">Resolução Direta</span>
            <h2>Qual decisão você precisa tomar agora?</h2>
            <p className="lede">
              Para cada dúvida comum do churrasco, existe uma ferramenta pronta para responder.
            </p>
          </div>

          <div className="decision-grid">
            {decisoesFerramentas.map((df) => (
              <div className="decision-row" key={df.q}>
                <span className="decision-q">{df.q}</span>
                <span className="decision-arrow">→</span>
                <span className="decision-tool">{df.tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14 — ANTES VS COM O CLUBE */}
      <section className="grate-bg">
        <div className="wrap reveal">
          <div className="section-header center">
            <span className="eyebrow">Comparativo de Praticidade</span>
            <h2>O mesmo churrasco, feito com mais organização</h2>
            <p className="lede">
              O Clube não promete milagres: ele serve como uma referência clara para você parar de depender da sorte.
            </p>
          </div>

          <div className="compare-container">
            <div className="compare-col">
              <div className="compare-col-header">
                <span className="icon-state">✕</span>
                <h3>Sem o Clube (No Improviso)</h3>
              </div>
              <ul className="compare-list">
                {semClube.map((item, idx) => (
                  <li key={idx}>
                    <span className="icon-state">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="compare-col good">
              <div className="compare-col-header">
                <span className="icon-state">✓</span>
                <h3>Com o Clube (Com Referência)</h3>
              </div>
              <ul className="compare-list">
                {comClube.map((item, idx) => (
                  <li key={idx}>
                    <span className="icon-state">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 17 & 18 — O QUE VOCÊ NÃO PRECISA VS O QUE VOCÊ GANHA */}
      <section className="bg-darker">
        <div className="wrap reveal">
          <div className="gains-grid">
            <div className="no-need-card">
              <span className="card-header-badge dim">Liberdade & Sem Pressão</span>
              <h3>O que você NÃO precisa:</h3>
              <ul className="points-list crosses">
                <li>Não precisa ser churrasqueiro profissional ou especialista.</li>
                <li>Não precisa decorar todos os tempos de fogo e cortes de cabeça.</li>
                <li>Não precisa passar horas assistindo vídeos teóricos.</li>
                <li>Não precisa investir em equipamentos caros para acertar o ponto.</li>
                <li>Não precisa ter medo de errar a quantidade no mercado.</li>
              </ul>
            </div>

            <div className="gains-card">
              <span className="card-header-badge highlight">Ganhos Reais</span>
              <h3>O que você ganha em praticidade:</h3>
              <ul className="points-list checks">
                <li><strong>Menos improviso:</strong> decisões tomadas com base em cálculos e critérios.</li>
                <li><strong>Mais organização:</strong> listas de compras e checklists prontos para uso.</li>
                <li><strong>Consulta rápida:</strong> abra no celular com a mão ocupada e tire a dúvida.</li>
                <li><strong>Informação reunida:</strong> chega de procurar dicas soltas e desencontradas.</li>
                <li><strong>Apoio contínuo:</strong> segurança desde a compra até o corte da carne à mesa.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 24 — PRODUTO EM CONTEXTO REAL */}
      <section className="grate-bg">
        <div className="wrap reveal">
          <div className="context-scene">
            <div className="context-img-wrap">
              <img
                src={heroArt.url}
                alt="Churrasqueiro consultando as ferramentas digitais ao lado da churrasqueira"
              />
            </div>
            <div className="context-content">
              <span className="eyebrow">Feito para o Uso Real</span>
              <h3>Feito para abrir ao lado da grelha</h3>
              <p>
                Telas objetivas, botões grandes e leitura clara. O Clube foi projetado para quando você estiver com a mão ocupada, o carvão aceso e pessoas conversando ao redor.
              </p>
              <p>
                Você entra, verifica o que precisa em 10 segundos e volta sua atenção para os amigos e para a carne.
              </p>
              <div className="context-tag-line">
                “Abra. Consulte. Conduza o seu churrasco.”
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15 & 16 & 28 & 29 — A OFERTA COMPLETA, TRANSPARENTE E ÓBVIA */}
      <section className="offer-section" id="comprar">
        <div className="wrap reveal">
          <div className="offer-box">
            <div className="offer-grid">
              <div>
                <span className="eyebrow">Acesso Completo</span>
                <h2 style={{ fontSize: "clamp(1.8rem,4.5vw,2.6rem)" }}>
                  Tudo o que você recebe por R$ 17,90
                </h2>
                <p className="lede" style={{ marginTop: 8 }}>
                  Agora que você já viu as ferramentas por dentro, confira tudo o que está incluído no seu acesso vitalício:
                </p>

                <div className="offer-items-list">
                  {ofertaBundle.map((item) => (
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

              <div className="pricing-checkout-card">
                <span className="pricing-kicker">Pagamento Único • Sem Mensalidades</span>
                <div className="price-display">
                  <div className="price-old">de R$ 47,00</div>
                  <div className="price-actual">
                    R$ 17<sup>,90</sup>
                  </div>
                </div>

                <ul className="price-conditions">
                  <li>
                    <svg><use href="#ic-check" /></svg>
                    Acesso imediato no e-mail
                  </li>
                  <li>
                    <svg><use href="#ic-check" /></svg>
                    Uso direto no celular, sem downloads
                  </li>
                  <li>
                    <svg><use href="#ic-check" /></svg>
                    Acesso vitalício com atualizações
                  </li>
                  <li>
                    <svg><use href="#ic-check" /></svg>
                    Garantia incondicional de 7 dias
                  </li>
                </ul>

                <a href={CHECKOUT_URL} className="cta-btn-main">
                  Quero Acessar o Clube
                  <span className="cta-subtext">Apenas R$ 17,90 · Pagamento seguro</span>
                </a>

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

      {/* 32 & 43 — GARANTIA TRANSPARENTE */}
      <section className="bg-darker">
        <div className="wrap reveal">
          <div className="guarantee-card">
            <div className="guarantee-stamp">
              <span className="num">7</span>
              <span className="txt">Dias de Garantia</span>
            </div>
            <div className="guarantee-text">
              <h3>Teste no seu próximo churrasco sem assumir riscos.</h3>
              <p>
                Acesse o material, consulte a calculadora, use os checklists e guias de fogo. Se por qualquer motivo você achar que o Clube não facilitou a organização do seu churrasco, basta pedir o reembolso em até 7 dias e devolveremos 100% do seu dinheiro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="grate-bg">
        <div className="wrap reveal">
          <div className="section-header center">
            <span className="eyebrow">Dúvidas Frequentes</span>
            <h2>Perguntas Frequentes</h2>
            <p className="lede">
              Respostas claras para as principais dúvidas sobre o formato e acesso ao Clube.
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

      {/* FINAL CTA */}
      <section className="final-section bg-darkest">
        <div className="wrap reveal">
          <h2>Seu próximo churrasco não precisa depender do improviso.</h2>
          <p className="sub">
            Tenha a central de consulta no seu celular e conduza cada etapa com tranquilidade.
          </p>
          <a href={CHECKOUT_URL} className="cta-btn-main" style={{ margin: "0 auto" }}>
            Quero Ter o Meu Acesso
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

      {/* 38 & 39 — MOBILE STICKY CTA */}
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
