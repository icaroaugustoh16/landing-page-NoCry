# 🛡️ NoCry Anti-Cheat - Landing Page

Landing page futurista e moderna para o sistema NoCry Anti-Cheat, desenvolvida com as tecnologias mais recentes do ecossistema React.

## 🚀 Tecnologias

- **Next.js 15.1.8** - Framework React com App Router
- **React 19.0.0** - Biblioteca UI mais recente
- **TypeScript 5.7.2** - Tipagem estática
- **Tailwind CSS 3.4.17** - Estilização utility-first
- **Framer Motion 11.15.0** - Animações avançadas
- **Lucide React 0.469.0** - Ícones modernos

## ✨ Características

- 🎨 **Design Futurista**: Interface com glass morphism, gradientes e efeitos neon
- 🌈 **Tema Customizado**: Paleta de cores nocry (azuis) e cyber (roxo/rosa/verde)
- 🎭 **Animações Suaves**: Transições e animações com Framer Motion
- 📱 **Totalmente Responsivo**: Design adaptável para todos os dispositivos
- ⚡ **Performance**: Otimizado com Next.js 15 e React 19
- 🎯 **SEO Ready**: Metadados e estrutura otimizada para mecanismos de busca

## 📦 Instalação

```bash
# Navegue até o diretório
cd landing-page

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🏗️ Estrutura do Projeto

```
landing-page/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout raiz com metadata
│   │   ├── page.tsx             # Página principal
│   │   └── globals.css          # Estilos globais
│   └── components/
│       ├── layout/
│       │   └── Navbar.tsx       # Barra de navegação
│       └── sections/
│           ├── Hero.tsx         # Seção hero
│           ├── Features.tsx     # Recursos do produto
│           ├── Stats.tsx        # Estatísticas animadas
│           ├── Architecture.tsx # Arquitetura do sistema
│           ├── Pricing.tsx      # Planos e preços
│           ├── CTA.tsx          # Call-to-action
│           └── Footer.tsx       # Rodapé
├── public/                      # Arquivos estáticos
├── tailwind.config.ts           # Configuração do Tailwind
├── tsconfig.json                # Configuração do TypeScript
└── package.json                 # Dependências
```

## 🎨 Componentes

### Navbar
- Menu de navegação responsivo
- Logo animado com efeito de pulso
- Menu mobile com animações

### Hero
- Headline com texto gradiente
- Ícones flutuantes (Shield, Zap, Lock)
- Cards de estatísticas animados
- Indicador de scroll

### Features
- 6 cards de recursos com:
  - IA Powered Detection
  - Ultra-Low Latency
  - Load Balancing
  - Real-time Monitoring
  - Challenge-Response Auth
  - Health Checks

### Stats
- Contadores animados com useEffect
- 4 métricas principais:
  - 2.547 servidores ativos
  - 10.23M jogadores protegidos
  - 48.932 cheats detectados
  - 99.94% uptime

### Architecture
- Diagrama visual do sistema
- Componentes animados:
  - Player Client
  - Challenge-Response
  - UDP Proxy Layer
  - Game Servers
  - PostgreSQL
  - AI Detection Engine
- Tech stack badges

### Pricing
- 3 planos (Starter, Professional, Enterprise)
- Badge "Mais Popular" no plano recomendado
- Lista de recursos por plano
- Botões CTA animados

### CTA
- Seção final de conversão
- Ícones flutuantes
- Estatísticas de confiança
- Botões de ação (Começar/Demo)
- Trust badges

### Footer
- Links organizados por categoria
- Redes sociais
- Status do sistema
- Badges de compliance (SOC 2, GDPR)

## 🎭 Animações

Todas as animações são implementadas com Framer Motion:

- **Fade In**: Elementos aparecem gradualmente
- **Slide Up**: Elementos sobem ao entrar na viewport
- **Hover Effects**: Escala, sombras e transformações
- **Floating**: Ícones com movimento de flutuação
- **Pulse**: Efeitos de pulso em elementos importantes
- **Counters**: Animação de contagem de números
- **Gradient**: Gradientes animados em backgrounds

## 🌈 Tema Customizado

### Cores Nocry (Azuis)
- nocry-50 até nocry-950
- Cores principais: #0ea5e9, #0284c7

### Cores Cyber (Roxo/Rosa/Verde)
- cyber-purple: #a855f7
- cyber-pink: #ec4899
- cyber-blue: #3b82f6
- cyber-green: #10b981

### Animações Tailwind
- pulse-slow (3s)
- float (6s)
- glow (2s)
- gradient (15s)

### Utilitários CSS
- `.glass`: Glass morphism effect
- `.gradient-text`: Texto com gradiente
- `.neon-text`: Texto com efeito neon
- `.cyber-grid-bg`: Background com grid

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start

# Linting
npm run lint
```

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Instale a CLI do Vercel
npm i -g vercel

# Deploy
vercel
```

### Outras Plataformas
O projeto é compatível com qualquer plataforma que suporte Next.js:
- Netlify
- AWS Amplify
- Google Cloud Run
- Railway
- Render

## 📄 Licença

Este projeto está sob a licença MIT.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

---

Desenvolvido com ❤️ para o NoCry Anti-Cheat
