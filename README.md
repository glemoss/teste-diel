
# Gerenciador de Tarefas

## Sobre o Projeto

Este projeto é uma aplicação completa de gerenciamento de tarefas, dividida em duas partes principais: um backend responsável pela lógica de negócios e um frontend para a interação do usuário. A aplicação permite aos usuários criar, atualizar, excluir e listar tarefas através de uma interface amigável e uma API robusta.

### Backend

O backend é construído com Fastify, um framework web para Node.js, e utiliza PostgreSQL como sistema de gerenciamento de banco de dados. O código é escrito em TypeScript, adicionando tipagem estática e outras funcionalidades ao JavaScript. O projeto backend é organizado em várias pastas e arquivos, incluindo controladores para a lógica de negócios, arquivos de configuração do banco de dados, definições de rotas para os endpoints da API e tipos para a aplicação.

### Frontend

O frontend é desenvolvido com React, uma biblioteca JavaScript para construção de interfaces de usuário. Ele utiliza um hook personalizado para gerenciar a lista de tarefas, permitindo uma experiência de usuário fluida e eficiente. O projeto frontend é projetado para ser simples e intuitivo, facilitando a adição, edição, exclusão e filtragem de tarefas.

## Tecnologias Utilizadas

- **Fastify**: Framework web para Node.js, conhecido por sua alta performance.
- **PostgreSQL (pg)**: Sistema de gerenciamento de banco de dados relacional open-source.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática e outras funcionalidades.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.

## Como Executar o Projeto

### Backend

1. Clone o repositório do backend.
2. Navegue até o diretório do projeto.
3. Suba os containers com Docker Compose.
4. Acesse a aplicação no endereço `http://localhost:3001`.

### Frontend

1. Clone o repositório do frontend.
2. Navegue até o diretório do projeto.
3. Instale as dependências com `npm install`.
4. Inicie o servidor de desenvolvimento com `npm start`.
5. Acesse o aplicativo no navegador em `http://localhost:3000`.

## Testando a Aplicação

Para testar a aplicação, você pode utilizar ferramentas como Postman ou cURL para fazer chamadas aos endpoints da API do backend. No frontend, você pode interagir com a aplicação diretamente no navegador.

## Contribuindo

Contribuições são bem-vindas. Por favor, siga estas etapas:

1. Faça um fork do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`.
3. Faça commit das suas alterações: `git commit -am 'Add some feature'`.
4. Faça push para a branch: `git push origin my-feature`.
5. Crie um novo Pull Request.