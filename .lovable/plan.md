# Plano de Implementação - Melhorias de UX, SEO, Assets e Webhook Cakto

Este plano descreve as melhorias solicitadas para o projeto Clube do Churrasco Perfeito, focando em legibilidade mobile/desktop, otimização de SEO, verificação de assets e a implementação do webhook da Cakto.

## Alterações Propostas

### 1. Legibilidade e Design (Mobile & Desktop)
- Ajustar tamanhos de fonte e quebras de linha na headline (`hero-mega-headline`) para evitar cortes ou legibilidade ruim em telas pequenas.
- Revisar espaçamentos das seções e blocos de conteúdo no `src/churrasco.css`.
- Garantir que a calculadora e os mockups de dispositivo escalem corretamente em diferentes viewports.

### 2. SEO e Metatags
- Configurar metadados específicos na rota `src/routes/index.tsx`.
- Definir `title`, `description`, `og:title`, `og:description`, `og:image`, `og:type` e `twitter:card`.
- Garantir que a prévia de compartilhamento seja atraente e profissional.

### 3. Verificação de Assets (Imagens)
- Validar se `hero-churrasqueiro.jpeg` e `guia-produto.jpeg` estão sendo carregados corretamente.
- Garantir que as importações no Vite estejam corretas para o build de produção (uso de caminhos relativos `@/assets/...`).

### 4. Integração de Webhook Cakto
- Criar um endpoint de API pública em `src/routes/api/public/cakto-webhook.ts`.
- Implementar o tratamento do evento `purchase_approved` conforme o payload de exemplo.
- Configurar a validação do `secret` (armazenado via `secrets--add_secret`).
- O webhook processará as informações de venda para futuras integrações ou logs (o usuário não especificou o destino final dos dados, então implementaremos a estrutura de recebimento segura).

## Detalhes Técnicos

### Webhook
- **Caminho:** `/api/public/cakto-webhook`
- **Segurança:** Verificação do cabeçalho de autenticação ou campo `secret` no payload.
- **Payload:** Processamento do JSON enviado pela Cakto.

### SEO (index.tsx)
```typescript
head: () => ({
  meta: [
    { title: "Clube do Churrasco Perfeito™ — O Guia Definitivo" },
    { name: "description", content: "Domine a grelha com nosso sistema prático. Calculadoras, guias de cortes e segredos da brasa." },
    // Open Graph e Twitter tags...
  ]
})
```

## Próximos Passos
1. Adicionar o secret da Cakto ao ambiente.
2. Criar a rota do webhook.
3. Ajustar o CSS para melhor responsividade.
4. Revisar as metatags de SEO.
5. Testar o carregamento das imagens no preview.
