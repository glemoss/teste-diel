# Gerenciador de Tarefas

## Sobre o Projeto

Este projeto é uma aplicação backend que fornece uma API para gerenciar tarefas. Ele permite aos usuários criar, atualizar, excluir e listar tarefas através de chamadas de API. A aplicação foi construída utilizando Fastify, um framework web para Node.js, e PostgreSQL como sistema de gerenciamento de banco de dados. O código é escrito em TypeScript, uma linguagem que adiciona tipagem estática e outras funcionalidades ao JavaScript.

## Tecnologias Utilizadas

- **Fastify**: Um framework web para Node.js, conhecido por sua alta performance.
- **PostgreSQL (pg)**: Um sistema de gerenciamento de banco de dados relacional open-source.
- **TypeScript**: Um superset de JavaScript que adiciona tipagem estática e outras funcionalidades.

## Estrutura do Projeto

O projeto é organizado em várias pastas e arquivos, incluindo:

- **src/**: Contém o código fonte da aplicação.
 - **controllers/**: Contém os controladores responsáveis pela lógica de negócios relacionada às tarefas.
    - **task.controller.ts**: Contém funções para operações CRUD em tarefas.
 - **db/**: Contém arquivos relacionados ao banco de dados.
    - **db.ts**: Arquivo para configurar a conexão com o banco de dados.
    - **init.sql**: Arquivo SQL para inicializar o esquema do banco de dados.
 - **routes/**: Contém as definições de rotas para os endpoints da API.
    - **task.routes.ts**: Define as rotas relacionadas às tarefas.
 - **types/**: Contém definições de tipos para a aplicação.
    - **task.ts**: Contém interfaces ou tipos relacionados às tarefas.
 - **index.ts**: O ponto de entrada da aplicação.

## Como Executar o Projeto

### Usando Docker Compose

1. **Clone o repositório**:
git clone <URL do repositório>


2. **Navegue até o diretório do projeto**:
cd <nome-do-diretório-do-projeto>


3. **Suba os containers com Docker Compose**:
docker-compose up -d


4. **Acesse a aplicação**:
   A aplicação estará disponível no endereço `http://localhost:3001`.

## Testando a Aplicação

Para testar a aplicação, você pode utilizar ferramentas como Postman ou cURL para fazer chamadas aos endpoints da API.

## Contribuindo

Contribuições são bem-vindas. Por favor, siga estas etapas:

1. Faça um fork do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`.
3. Faça commit das suas alterações: `git commit -am 'Add some feature'`.
4. Faça push para a branch: `git push origin my-feature`.
5. Crie um novo Pull Request.
