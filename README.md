# Portfolio Satoru Gojo - Adryan Galdino

> _"Ao longo dos céus e da terra, eu sozinho sou o mais honrado."_

Um portfólio web de alto impacto visual, interativo e moderno, inspirado no universo de **Jujutsu Kaisen** e na estética do personagem **Satoru Gojo**. Desenvolvido com **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4** e **Motion**.

---

## 📸 Demonstração & Conceito

Este projeto foi construído para apresentar meus projetos, habilidades técnicas e trajetória como Desenvolvedor Front-End de maneira imersiva e memorável.

### 🌌 Destaques Visuais & Efeitos Cursados

- 👁️ **Six Eyes Icon**: Elemento vetorial SVG customizado no Hero com brilho, gradiente e animação contínua.
- 🔴🔵 **Reversão Vermelha & Lapso Azul**: Orbes de energia cursada flutuantes com sombras radiais personalizadas que revelam seções dinamicamente durante o scroll.
- 🟣 **Vazio Roxo (Hollow Purple)**: Animação de colisão no trecho de Tecnologias em que os orbes vermelho e azul colidem no centro, desencadeando uma explosão de energia roxa para revelar as categorias técnicas.
- ☯️ **Alternador de Tema (Light / Dark Mode)**:
  - **Light Mode**: Estética _Jujutsu High Tech_ limpa e vibrante com acentos azuis e vermelhos.
  - **Dark Mode**: Estética _Vazio Imensurável (Limitless Void)_ com fundo obsidiana (`#0a0a0a`), bordas translúcidas e auras em tons de roxo e rosa neon.

---

## 🚀 Deploy

> 📌 **Status do Deploy**: _Online_

### 🔗 Link Oficial

- **Aplicação Online (Live)**: [https://gojofolio.vercel.app/](https://gojofolio.vercel.app/)

---

## 🛠️ Tecnologias Utilizadas

### Core & Frameworks

![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

### Estilização & Animações

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-000000?style=for-the-badge&logo=framer&logoColor=white)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=google&logoColor=white)

### Ícones & Tipografia

- **Simple Icons** (`@icons-pack/react-simple-icons`)
- **Lucide React** (`lucide-react`)
- **Fontes**: _Dela Gothic One_, _M PLUS Rounded 1c_, _JetBrains Mono_ (`@fontsource`)

---

## 🧠 Como o Projeto Funciona

A aplicação é estruturada como uma **Single Page Application (SPA)** modular, performática e desacoplada:

1. **Gestão de Tema Global (`ThemeContext` & `ThemeProvider`)**:
   - Um contexto global do React gerencia o estado do tema (Light / Dark).
   - O tema altera o atributo `data-theme` na raiz do DOM, sincronizando em tempo real com as variáveis de CSS puro (`theme.css` e `orbs.css`).
2. **Animações de Entrada & Interação (`Motion`)**:
   - Os componentes utilizam `motion/react` com `whileInView`, `staggerChildren` e `variants` para proporcionar transições suaves e responsivas à navegação.
3. **Arquitetura Orientada a Dados**:
   - Todos os conteúdos de projetos (`projects.data.ts`), tecnologias (`technologies.data.ts`) e links sociais (`contact.data.ts`) estão desacoplados da renderização em arquivos TypeScript tipados, facilitando a manutenção e adição de novos itens.
4. **Animações de Revelação por Energia Cursada**:
   - Componentes visuais como `AboutMeEnergyBallReveal`, `ProjectsEnergyBallReveal` e `TechnologiesCollisionReveal` utilizam elementos canvas e gradientes radiais animados via CSS e Motion.

---

## 📂 Organização de Pastas

```text
portfolio-gojo/
├── public/                      # Recursos estáticos acessíveis diretamente
│   ├── contact/                 # Documentos para download (ex: Currículo PDF)
│   └── projects/                # Mockups e imagens de preview dos projetos
├── src/                         # Código-fonte da aplicação
│   ├── components/              # Componentes reutilizáveis de UI
│   │   └── ui/                  # Componentes de interface genéricos
│   │       ├── Button.tsx       # Botão customizado (variantes: filled e outline)
│   │       ├── EnergyBall.tsx   # Orbe animado de energia (Red / Blue)
│   │       ├── MiniOrb.tsx      # Partículas e orbes em miniatura
│   │       └── ThemeToggle.tsx  # Botão flutuante para troca de tema (Dark / Light)
│   ├── context/                 # Contextos globais da aplicação
│   │   └── theme/               # Gerenciamento de estado do tema
│   │       ├── ThemeContext.tsx # Interfaces e definição do contexto do tema
│   │       └── ThemeProvider.tsx# Provider com suporte a persistência no DOM
│   ├── hooks/                   # Hooks customizados do React
│   │   └── useTheme.tsx         # Hook utilitário para consumo do ThemeContext
│   ├── sections/                # Seções modulares da página
│   │   ├── AboutMe/             # Seção "Sobre Mim" (Bio, foto, stats e efeito energy reveal)
│   │   ├── Contact/             # Seção "Contato" (Links sociais, botão de download do CV e Footer)
│   │   ├── Hero/                # Seção de abertura (Six Eyes Icon, títulos e scroll indicator)
│   │   ├── Projects/            # Seção de projetos (Cards de projetos, dados e animações)
│   │   └── Technologies/        # Seção de tecnologias (Categorias técnicas e colisão Hollow Purple)
│   ├── styles/                  # Estilos globais e tokens CSS
│   │   ├── fonts.css            # Definição e atalhos de fontes
│   │   ├── orbs.css             # Variáveis CSS para auras, sombras e gradientes dos orbes
│   │   └── theme.css            # Tokens de cores para Light/Dark mode e tema Tailwind
│   ├── App.tsx                  # Estrutura e composição das seções na página
│   ├── index.css                # Diretivas do Tailwind CSS v4 e camada base
│   └── main.tsx                 # Ponto de entrada que renderiza o App com o ThemeProvider
├── index.html                   # Estrutura HTML principal e metadados
├── package.json                 # Lista de dependências e scripts npm
├── tsconfig.json                # Configuração base do TypeScript
└── vite.config.ts               # Configuração da ferramenta de build Vite
```

---

## ⚡ Como Executar o Projeto Localmente

### Pré-requisitos

Certifique-se de ter o **Node.js** (versão 18 ou superior) instalado em sua máquina.

### Passo a Passo

1. **Clonar o repositório:**

   ```bash
   git clone https://github.com/adry4nbr/gojofolio.git
   cd portfolio-gojo
   ```

2. **Instalar as dependências:**

   ```bash
   npm install
   ```

3. **Executar o ambiente de desenvolvimento:**

   ```bash
   npm run dev
   ```

   Abra seu navegador em `http://localhost:5173`.

4. **Construir para produção:**

   ```bash
   npm run build
   ```

5. **Testar a build de produção localmente:**
   ```bash
   npm run preview
   ```

---

## 🧑‍💻 Autor

Desenvolvido por **Adryan Galdino**.

- 🐙 **GitHub**: [@adry4nbr](https://github.com/adry4nbr)
- 💼 **LinkedIn**: [Adryan Galdino](https://www.linkedin.com/in/adryan-galdino-262769276/)
- ✉️ **E-mail**: `adry4nb@gmail.com`

---SS

## 📜 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE.txt](LICENSE.txt) para mais detalhes.

---

<p align="center">
  <i>"Ao longo do céu e da terra, a minha criatividade é infinita."</i>
</p>
