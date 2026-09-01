# Otimização de conversão — Clube do Churrasco Perfeito

Reescrita de copy, hierarquia e UX mobile da página existente. Sem página nova, sem trocar checkout, sem mexer em pixel/eventos.

## Decisões já confirmadas
- Popup de saída (downsell R$ 9,90): **removido**. Uma única oferta: R$ 17,90.
- Depoimentos atuais: **reais** — mantidos, apenas mais legíveis no mobile.
- Preço riscado de R$ 47,00: **não é real** — removido de todos os lugares (hero, caixa de oferta).

## Nova ordem da página
1. Hero (promessa + preço + CTA)
2. Dor ("já aconteceu de o churrasco não sair como esperava?")
3. Calculadora (demonstração real de valor)
4. Solução (fim do achismo)
5. O que você recebe (ferramentas reais já existentes)
6. Imagine o seu próximo churrasco (benefício emocional)
7. Oferta R$ 17,90
8. Depoimentos
9. Garantia de 7 dias
10. FAQ (accordion, 6 perguntas)
11. CTA final
12. Rodapé (inalterado)

## Copy principal

Hero, curta e direta:
- Selo: 🔥 VAI TER CHURRASCO?
- Título: ANTES DE COMPRAR A CARNE, APRENDA A PLANEJAR E PREPARAR SEU CHURRASCO.
- Sub: como calcular a quantidade de carne, entender cortes, fogo, tempos, temperos e preparo — direto pelo celular.
- Preço: R$ 17,90 · Pagamento único • Acesso vitalício • Garantia de 7 dias
- CTA: 🔥 QUERO MEU ACESSO POR R$ 17,90
- Microcopy: 🔒 Pagamento seguro · ⚡ Acesso digital · 🛡️ Garantia de 7 dias

Calculadora ganha título "🥩 QUANTO DE CARNE VOCÊ PRECISA?", subtítulo sobre parar de comprar no chute e a linha "Essa é apenas uma das ferramentas que você encontra dentro do Clube."

Seções de dor, solução, benefício emocional, garantia e CTA final seguem exatamente a direção de copy enviada. Nada de escassez, contador, número inventado ou promessa de resultado.

FAQ reduzido para: é para iniciantes / funciona no celular / como recebo o acesso / é pagamento único / tenho garantia / o que recebo.

## Mobile-first
- Todos os CTAs com largura total, altura de toque confortável, tipografia grande.
- CTA sticky de rodapé mantido e simplificado: "R$ 17,90 — QUERO MEU ACESSO", mesmo destino do CTA principal.
- Calculadora com botões maiores e leitura clara em telas estreitas.
- Depoimentos em cards de largura total, texto legível.
- Revisão em 320, 360, 375, 390 e 414 px: sem overflow horizontal, sem texto cortado, sem sobreposição.
- Redução de animações pesadas; imagens com lazy loading e dimensões definidas.

## Detalhes técnicos
- Arquivos alterados: `src/routes/index.tsx` (estrutura e copy) e `src/churrasco.css` (tipografia mobile, tamanho de botões, espaçamentos, cards de depoimento).
- Preservado sem alteração: `CHECKOUT_URL`, Meta Pixel + CAPI, TikTok Pixel, `trackEvent`, `trackInitiateCheckout`, `trackAddToCart` nos mesmos CTAs (sem duplicar eventos), webhook da Cakto, rodapé e links legais.
- Removidos junto com o popup: estado `showExitPopup`, listener de exit intent, `DOWNSELL_URL` e o CSS do modal.
- Verificação final com navegador headless nas larguras de mobile, corrigindo o que aparecer.
