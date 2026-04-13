<div align="center">

# CineScore

**Descubra filmes com estilo — tendências, busca e catálogo com filtros.**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TMDb](https://img.shields.io/badge/API-TMDb-01D277?style=for-the-badge&logo=themoviedatabase&logoColor=white)](https://www.themoviedb.org/)
[![License](https://img.shields.io/badge/Licença-CC--BY--4.0-525252?style=for-the-badge)](https://creativecommons.org/licenses/by/4.0/)

*Projeto acadêmico voltado a recomendação e experiência em streaming — interface moderna consumindo dados reais do cinema.*

&#127871;&#127902;&#11088;&#127909;

[Como rodar](#como-rodar) · [Stack](#stack-tecnológica) · [Estrutura](#estrutura-do-repositório) · [Documentação](#documentação-e-visão-de-produto) · [Equipe](#equipe)

</div>

---

## &#127909; Sobre o projeto

O **CineScore** é uma aplicação web para explorar filmes: **destaques da semana**, **populares**, **busca por título** e uma página dedicada de **catálogo** com **gênero**, **classificação indicativa** e **paginação**. A experiência inclui **cards**, **banner hero** e **modal de detalhes**, com textos e metadados em **português (pt-BR)** quando disponíveis na API.

A visão mais ampla do produto — usuários, favoritos, feedback e motor de recomendação — está descrita na pasta **`docs/`**, junto com modelagem e processos de negócio.

---

## &#127871; Funcionalidades (front-end atual)

- &#127909; **Início** — tendências da semana, populares, busca rápida e modal do filme
- &#127902; **Filmes** — descoberta com filtros (gênero, certificação), busca e paginação
- &#127912; **UI** — layout responsivo, tema dedicado, cabeçalho e rodapé
- &#128279; **Integração** — [The Movie Database (TMDb)](https://www.themoviedb.org/) via variável de ambiente

---

## &#128187; Stack tecnológica

| Camada | Tecnologias |
|--------|-------------|
| **Interface** | [React 18](https://react.dev/), [React Router 6](https://reactrouter.com/) |
| **Build** | [Vite 5](https://vitejs.dev/), `@vitejs/plugin-react` |
| **Dados** | REST API do TMDb (`fetch`, endpoints v3) |
| **Estilo** | CSS (`theme.css` e estilos por componente) |

> A documentação em `docs/` também descreve **Spring Boot**, **PostgreSQL** e os processos de negócio — visão completa da solução acadêmica.

---

## &#128193; Estrutura do repositório

```text
.
├── docs/                 # Processos, interface, modelo de dados, indicadores
├── src/
│   ├── front/            # React + Vite
│   │   ├── src/
│   │   │   ├── api/      # Cliente TMDb (trending, popular, busca, discover…)
│   │   │   ├── components/
│   │   │   ├── pages/    # Home, Movies
│   │   │   ├── assets/css/
│   │   │   ├── App.jsx
│   │   │   └── main.jsx
│   │   ├── index.html
│   │   ├── vite.config.js
│   │   ├── package.json
│   │   └── .env.example
│   └── README.md
├── CITATION.cff
└── README.md
```

---

## &#128640; Como rodar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado: LTS atual)
- Conta e **chave de API** no [TMDb](https://www.themoviedb.org/settings/api)

### Passos

1. **Entre na pasta do front-end**

   ```bash
   cd src/front
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Configure a API**

   Copie o exemplo e preencha sua chave:

   ```bash
   # Windows (PowerShell ou CMD)
   copy .env.example .env

   # macOS / Linux
   cp .env.example .env
   ```

   No arquivo `.env`:

   ```env
   VITE_TMDB_API_KEY=sua_chave_aqui
   ```

4. **Suba o servidor de desenvolvimento**

   ```bash
   npm run dev
   ```

5. Abra o endereço indicado no terminal (geralmente `http://localhost:5173`).

### Scripts úteis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento com hot reload |
| `npm run build` | Build de produção em `dist/` |
| `npm run preview` | Pré-visualização do build |

---

## &#128218; Documentação e visão de produto

| Documento | Conteúdo |
|-----------|----------|
| `docs/solution-design.md` | Modelo de dados e tecnologias |
| `docs/interface.md` | Interface do sistema |
| `docs/processo_1.md` … `processo_4.md` | Usuários, favoritos, recomendações, feedback |
| `docs/performance-indicators.md` | Indicadores de desempenho |
| `docs/diagramas.md` | Diagramas |

### &#128200; Histórico de versões (resumo)

- **0.8.x** — Indicadores de desempenho e documentação associada
- **0.7.x** — Processo 4: feedback (comentários, likes/dislikes)
- **0.6.x** — Processo 3: recomendações
- **0.5.x** — Processo 2: favoritos e listagens
- **0.4.x** — Processo 1: usuários (login, cadastro, conta)
- **0.3.x** — Modelo de dados
- **0.2.x** — Modelagem de processos
- **0.1.x** — Estrutura inicial da documentação

*(Detalhes completos nos arquivos em `docs/`.)*

---

## &#128101; Equipe

- Brenda Evers
- Isabella Luiza Dias dos Santos
- Islayder Jackson Ribeiro de Oliveira
- Leandro Alencar Pereira Clemente
- Lucas Valente Alves
- Victor Rafael de Neiva Machado

---

## &#127891; Docentes orientadoras

- Aline Norberta de Brito
- Eveline Alonso Veloso
- Juliana Amaral Baroni de Carvalho

---

## &#128172; Citação

Ao referenciar o trabalho, use os metadados em [`CITATION.cff`](./CITATION.cff).

---

<div align="center">

**Bom filme e bom código!** &#127871;

</div>
