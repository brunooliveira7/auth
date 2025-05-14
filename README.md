# Exemplo de Testes Automatizados com Jest em Node.js

Este repositório apresenta um exemplo prático de aplicação de **testes automatizados com Jest** em um projeto **Node.js**. O objetivo principal é entender como estruturar e aplicar testes, simulando **cenários reais e falhas**.

## Estrutura do Projeto

- **`sum.ts`**: Arquivo criado para isolar uma função simples que será testada, facilitando a compreensão dos **testes unitários**.

- **`server.ts` e `app.ts`**: Separados para evitar conflitos de porta durante os **testes end-to-end**.  
  - `server.ts`: Responsável por subir o servidor.
  - `app.ts`: Contém a lógica da aplicação, incluindo **rotas**, **middlewares**, etc.

> Uma rota de **listagem de produtos** foi criada e testada com Jest, servindo como base para testes de integração e garantindo que a API esteja preparada para testes end-to-end.

## Objetivo

Esse processo ajuda a criar uma base sólida para **testes mais complexos e confiáveis** em APIs desenvolvidas com Node.js.
