# Auth

Esta aplicação em **Node.js** aborda autenticação e autorização utilizando tokens **JWT**.

## Principais Funcionalidades

- Implementação prática da **autenticação** e **autorização**;
- Proteção de rotas e identificação de usuários com base em tokens JWT;
- Criação de **middleware** para garantir que apenas usuários autenticados acessem determinadas rotas;
- Utilização de **papéis de usuários (roles)** para controle de acesso baseado em regras de negócio.

## Boas Práticas com Variáveis de Ambiente

- Uso de arquivos `.env` para armazenar dados sensíveis;
- Carregamento seguro das variáveis no projeto;
- Inclusão do `.env` no `.gitignore` para evitar a exposição no GitHub;
- Criação de um arquivo de exemplo (`.env.example`) para compartilhamento seguro.

Essa abordagem proporciona maior segurança e controle no acesso às funcionalidades da aplicação.
