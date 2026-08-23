# Plano de Implementação: Otimização do Funil e Recuperação de Leads

Implementar melhorias no funil de vendas da Cakto, incluindo upsell, recuperação de saída (exit intent) e otimização de metadados.

## Ações Técnicas

### 1. Configuração de Upsell e Recuperação de Saída
- Criar um componente `CaktoScripts` para injetar o script externo da Cakto e lidar com a lógica de "Exit Intent".
- Adicionar o script `https://caktoscripts.nyc3.cdn.digitaloceanspaces.com/upsell.js` ao cabeçalho ou rodapé.
- Implementar um modal ou pop-up de "Condição Especial" (downsell/recuperação) que é acionado quando o usuário tenta sair da página.
- Configurar o link da oferta especial: `https://pay.cakto.com.br/6vow3uz`.

### 2. Validação e Melhoria do Webhook
- Garantir que o endpoint `src/routes/api/public/cakto-webhook.ts` esteja pronto para receber dados da Cakto.
- Adicionar logs detalhados para depurar integrações em produção.

### 3. Otimização de SEO e Open Graph
- Atualizar as tags `head` no `src/routes/index.tsx` para garantir que `og:image` e `twitter:image` utilizem URLs absolutas corretas para compartilhamento em redes sociais.
- Refinar títulos e descrições para máxima conversão.

## Fluxo do Funil
1. **Oferta Principal**: `https://clubdochurrascoperfeito.vercel.app/`
2. **Upsell 1 (Mestre da Brasa)**: `https://mestredabrasa.vercel.app/` (após compra da principal)
3. **Upsell 2 (Sabor dos Molhos)**: `https://sabordosmolhos.vercel.app/` (após compra ou negação do anterior)
4. **Recuperação (Exit Intent)**: Pop-up com oferta `https://pay.cakto.com.br/6vow3uz` caso o lead tente sair sem comprar.

## Detalhes Técnicos
- Utilizar `useEffect` para detectar intenção de saída (movimento do mouse para fora do viewport ou botão voltar).
- Injetar os botões de upsell da Cakto conforme o template fornecido no `user-uploads://prompt.txt`.
- Garantir compatibilidade com SSR do TanStack Start.
