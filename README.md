## 🎬 CineScore – Sistema de Recomendação de Filmes e Séries

Aplicação web que oferece recomendações personalizadas de filmes e séries a partir das preferências e interações dos usuários (likes, favoritos e feedbacks), ajudando a reduzir o tempo gasto escolhendo o que assistir e contribuindo para diminuir a taxa de churn em plataformas de streaming.

---

## 📑 Sumário
- [🎯 Visão Geral do Produto](#-visão-geral-do-produto)
- [👥 Público-Alvo e Principais Casos de Uso](#-público-alvo-e-principais-casos-de-uso)
- [🏗️ Arquitetura e Tecnologias](#️-arquitetura-e-tecnologias)
- [📂 Estrutura do Repositório](#-estrutura-do-repositório)
- [🚀 Como Executar o Projeto](#-como-executar-o-projeto)
  - [🧰 Pré-requisitos](#-pré-requisitos)
  - [☕ Backend (Spring Boot)](#-backend-spring-boot)
  - [💻 Frontend (Aplicação Web)](#-frontend-aplicação-web)
- [🧩 Funcionalidades Principais](#-funcionalidades-principais)
  - [👤 Gerenciar Usuários](#-gerenciar-usuários)
  - [⭐ Gerenciar Favoritos](#-gerenciar-favoritos)
  - [🤖 Gerenciar Recomendações](#-gerenciar-recomendações)
  - [💬 Gerenciar Feedback](#-gerenciar-feedback)
- [🗄️ Modelo de Dados e Documentação](#️-modelo-de-dados-e-documentação)
- [📈 Histórico de Versões (Release Notes)](#-histórico-de-versões-release-notes)
- [👨‍💻 Equipe](#-equipe)
- [👩‍🏫 Docentes Orientadores](#-docentes-orientadores)

---

## 🎯 Visão Geral do Produto

O CineScore é uma aplicação web focada em:

- **Coletar preferências dos usuários** (gênero, plataforma de streaming, classificação indicativa, etc.).
- **Analisar interações** (likes, favoritos, feedbacks) para identificar padrões de consumo.
- **Recomendar títulos de forma personalizada**, reduzindo o tempo de busca por filmes/séries.
- **Melhorar a experiência de entretenimento**, apoiando a retenção de usuários em plataformas de streaming.

A solução se inspira em plataformas como IMDb, Rotten Tomatoes e Metacritic, mas com foco em recomendações personalizadas a partir do perfil do usuário e de suas ações dentro do sistema.

---

## 👥 Público-Alvo e Principais Casos de Uso

- **Usuário geral de plataformas de streaming**
  - Quer decidir rapidamente o que assistir sem ficar minutos rolando catálogos.
  - Deseja receber recomendações alinhadas ao próprio gosto.

- **Administrador**
  - Responsável por manter o catálogo de títulos atualizado.
  - Pode cadastrar/atualizar filmes e séries que alimentarão o mecanismo de recomendação.

Principais cenários:
- Descobrir novos filmes e séries personalizados para o usuário.
- Salvar títulos como favoritos para consultas futuras.
- Registrar feedbacks (comentários, likes e dislikes).
- Buscar títulos por filtros e palavras‐chave.

---

## 🏗️ Arquitetura e Tecnologias

- **Backend**
  - Java 21
  - Spring Boot (REST API, regras de negócio)
  - Spring Data JPA
  - Banco relacional (PostgreSQL)
  - Ferramentas de gestão de dependência (Maven)

- **Frontend**
  - HTML, CSS e JavaScript puros
  - Estrutura organizada em `assets/css`, `assets/js` e `assets/img`

- **Outros**
  - IDEs sugeridas: Eclipse/IntelliJ para backend, VS Code para frontend
  - pgAdmin para administração do banco PostgreSQL

---

## 📂 Estrutura do Repositório

```text
.
├── docs/                     # Documentação textual, diagramas, apresentações e vídeo
│   ├── interface.md          # Detalhamento da interface do sistema
│   ├── processo_1.md         # Processo 1 – Gerenciar Usuários
│   ├── processo_2.md         # Processo 2 – Gerenciar Favoritos
│   ├── processo_3.md         # Processo 3 – Gerenciar Recomendações
│   ├── processo_4.md         # Processo 4 – Gerenciar Feedback
│   ├── solution-design.md    # Modelo de dados e tecnologias
│   ├── performance-indicators.md
│   ├── presentations/        # Slides da apresentação final
│   └── video/                # Vídeo de apresentação
│
├── src/
│   ├── back/                 # Backend (projeto Spring Boot)
│   │   ├── cinescore/
│   │   │   ├── pom.xml
│   │   │   └── src/main/java/com/cinescore/...
│   │   └── README.md         # Informações acadêmicas e contexto do projeto
│   └── front/                # Frontend (aplicação web)
│       ├── assets/css/       # Estilos da aplicação
│       ├── assets/js/        # Scripts (login, favoritos, recomendações etc.)
│       └── assets/img/       # Imagens e recursos visuais
│
├── README.md                 # Visão geral do projeto (este arquivo)
└── CITATION.cff              # Metadados de citação científica do projeto
```

Para detalhes adicionais de código-fonte:
- `src/README.md` – ponteiro para código de front-end e back-end.
- Documentos técnicos e de negócio em `docs/`.

---

## 🚀 Como Executar o Projeto

### 🧰 Pré-requisitos

- Java 21 instalado.
- Maven configurado (para o backend).
- PostgreSQL instalado e em execução.
- pgAdmin (opcional, para gerenciar o banco).
- VS Code (ou outro editor) para servir o frontend.

### ☕ Backend (Spring Boot)

1. **Configurar o banco de dados**
   - Crie um banco PostgreSQL (nome a sua escolha).
   - Edite o arquivo `application.properties` do backend para apontar para seu banco, usuário e senha:

   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/seu_banco_de_dados
   spring.datasource.username=seu_usuario
   spring.datasource.password=sua_senha
   spring.datasource.driver-class-name=org.postgresql.Driver
   spring.jpa.hibernate.ddl-auto=update
   ```

2. **Build e execução**
   - Abra o projeto `src/back/cinescore` na sua IDE ou linha de comando.
   - Via Maven:

   ```sh
   mvn clean package
   mvn spring-boot:run
   ```

   - Ou diretamente pela IDE, executando a classe principal `CinescoreApplication`.

3. **Verificar a API**
   - Após subir o Spring Boot, os endpoints REST do CineScore ficarão disponíveis na porta configurada (por padrão, 8080).

### 💻 Frontend (Aplicação Web)

1. Abra a pasta `src/front` no VS Code.
2. Instale a extensão “Live Server” (ou similar).
3. Clique com o botão direito em `index.html` e selecione “Open with Live Server”.
4. Certifique-se de que o backend está rodando para que as chamadas da interface funcionem corretamente.

---

## 🧩 Funcionalidades Principais

### 👤 Gerenciar Usuários

- Cadastro de novos usuários.
- Autenticação (login).
- Configuração de conta (por exemplo, alteração de senha).

### ⭐ Gerenciar Favoritos

- Visualizar listas de filmes e séries.
- Adicionar/remover títulos dos favoritos.
- Visualizar detalhes de cada título.

### 🤖 Gerenciar Recomendações

- Exibição de listas de recomendações com base nas preferências e interações do usuário.
- Otimização do tempo de busca por conteúdo relevante.

### 💬 Gerenciar Feedback

- Inserir comentários sobre títulos.
- Registrar likes e dislikes.
- Restringir feedbacks ofensivos conforme regras de negócio.

---

## 🗄️ Modelo de Dados e Documentação

A modelagem de dados e os detalhes de design da solução estão descritos em:

- `docs/solution-design.md` – modelo relacional e tecnologias.
- `docs/performance-indicators.md` – indicadores de desempenho dos processos.
- `docs/interface.md` – visão detalhada da interface do sistema.
- `docs/processo_1.md` a `docs/processo_4.md` – detalhamento de cada processo de negócio.

Além disso, a pasta `docs/images` contém:
- Diagramas de classes.
- Modelo de dados (conceitual e relacional).
- Capturas de tela das principais telas da aplicação.

---

## 📈 Histórico de Versões (Release Notes)

Resumo das principais etapas de evolução do projeto (consolidado a partir da documentação):

- **0.8.x – Indicadores de Desempenho**
  - Definição e implementação dos indicadores de desempenho dos processos.
  - Atualização das documentações associadas.

- **0.7.x – Processo 4: Gerenciar Feedback**
  - Implementação das funcionalidades de comentários e likes/dislikes.
  - Atualização das documentações do processo de feedback.

- **0.6.x – Processo 3: Gerenciar Recomendações**
  - Implementação das listas de recomendações para filmes e séries.
  - Detalhamento do processo de recomendações.

- **0.5.x – Processo 2: Gerenciar Favoritos**
  - Implementação da visualização de listas (filmes, séries, favoritos, detalhes).
  - Modelagem do processo de favoritos.

- **0.4.x – Processo 1: Gerenciar Usuários**
  - Implementação de login, cadastro e configuração de conta.
  - Modelagem do processo de usuários.

- **0.3.x – Modelo de Dados**
  - Definição e documentação do modelo de dados relacional.

- **0.2.x – Modelagem de Processos de Negócio**
  - Detalhamento dos processos de negócio principais do sistema.

- **0.1.x – Estrutura Inicial**
  - Criação da visão geral de negócio e estrutura básica da documentação.

Para uma linha do tempo completa, consulte a seção “Histórico de Versões” na documentação original em `docs/README.md` (quando aplicável).

---

## 👨‍💻 Equipe

- Brenda Evers  
- Isabella Luiza Dias dos Santos  
- Islayder Jackson Ribeiro de Oliveira  
- Leandro Alencar Pereira Clemente  
- Lucas Valente Alves  
- Victor Rafael de Neiva Machado  

---

## 👩‍🏫 Docentes Orientadores

- Aline Norberta de Brito  
- Eveline Alonso Veloso  
- Juliana Amaral Baroni de Carvalho  

---

Para detalhes acadêmicos completos (introdução, justificativa, conclusão, referências e apêndices), consulte `src/back/README.md` e os demais arquivos da pasta `docs/`.
