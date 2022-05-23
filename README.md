<h1 id="topo">Dev Demands 👨‍💻​</h1>

Este projeto faz parte da continuação do curso de GraphQL.

[Clique aqui](https://github.com/brseghese/vtex-hiring-coders-3/tree/main/d2_graphql)🔗 para acessar o repositório com a introdução do curso onde foi desenvolvido um exemplo de cliente / servidor que é a base deste projeto.

### 📍 Sobre

O projeto irá controlar as demandas de um programador:

- Criar demandas
- Criar clientes
- Ver demandas
- Ver clientes

<details>
<summary>Clique para Navegar 🔽</summary>

- <a href="#1">Preparando o Ambiente</a>
- <a href="#2">Instalando os Pacotes</a>
- <a href="#3">Preparando o Server</a>
- <a href="#4">Preparando o Client</a>
- <a href="#5">Instalando o Express</a>
- <a href="#6">Requisições Assíncronas</a>
- <a href="#7">APIs RESTful</a>
- <a href="#8">Apollo Server</a>
- <a href="#9">Entendendo o GraphQL</a>
- <a href="#10">Estruturando os TypeDefs e Resolvers</a>

</details>

---

<h3 id="1">🛠️ Preparando o Ambiente</h3>

O projeto base - exemplo de cliente / servidor - foi desenvolvido em um único pacote.

Iremos transformar o projeto em um **Monorepo** (mais de um pacote).

Organizando as Pastas

- packages
  - web
    - cliente
  - server
    - servidor

<a href="#topo">🔝</a>

---

<h3 id="2">⚙️​ Instalando os Pacotes</h3>

Deletando "package-lock.json" usaremos o lock-file do pnpm.

Deletando "node_modules" será gerado novamente com o pnpm.

#### ✔️ Instalando o pnpm

```
npm i -g pnpm
```

#### ✔️ Inicializando o pnpm

```
pnpm init
```

#### ✔️ Preparando pacotes

Nomeando o pacote como @dev-demands/root.

O @ indica scopo de pacote - @dev-demands será todos os pacotes que teremos.

O root indica o domínio raiz.

Criando um arquivo "pnpm-workspaces.yaml" - contém a indicação dos nossos pacotes.

```
packages:
  - "packages/**"
```

O "yaml" é similar ao json, porém mais simples de escrever e específico para arquivo de configuração.

Nomeando "package.json" do server para @dev-demands/server.

Nomeando "package.json" do client para @dev-demands/web.

<a href="#topo">🔝</a>

---

<h3 id="3">🛰️  Preparando o Server</3>

#### ✔️ Instalando o pnpm no server

```
pnpm i --filter @dev-demands/server
```

O pacote instalado gera o node_modules na pasta server e um pnpm-lock.yaml, com isso podemos rodar o server através do root.

#### ✔️​ Executando o Server

```
pnpm --filter @dev-demands/server run start
```

<a href="#topo">🔝</a>

---

<h3 id="4">😎 Preparando o Client </h3>

#### ✔️ Inciando um pacote React

```
pnpx create-react-app packages/web
```

O pnpx vem instalado junto com o pnpm e executa uma função externa.

Deletando "package-lock.json" usaremos o lock-file do pnpm.

#### ✔️ Instalando o pnpm no client

```
pnpm i --filter @dev-demands/web
```

#### ✔️ Instalando o React-Router-Dom

```
pnpm i react-router-dom --filter @dev-demands/web
```

Desenvolvendo o react para rodar o client.

#### ✔️ Executando o app React

```
pnpm --filter @dev-demands/web run start
```

<a href="#topo">🔝</a>

---

<h3 id="5">⚙️ Instalando o Express</h3>

```
pnpm i express --filter @dev-demands/server
```

O Express é uma biblioteca para facilitar as requisições com as APIs.

Até então não estávamos tratando os métodos HTTP das requests, somente olhando as URLs.

Codificando o express no "main.js" e deixando a API pronta.

#### ✔️ Executando o server com Express

```
pnpm --filter @dev-demands/server run start
```

O express já abstrai muito mais coisas do servidor, é muito mais prático trabalhar com ele.

<a href="#topo">🔝</a>

---

<h3 id="6"> ⏰​ Requisições Assíncronas</h3>

#### ✔️ Implementando o client

O proxímo passo é implementar o client para fazer o authenticate.

Rodando o server na porta 8000 e o client na porta 3000.

Tratando a requisição para o authenticate com `fetch`.

#### ✔️ Resolvendo CORS

Para resolver precisamos configurar o server para lidar com as requisições, lidar com os cabeçalhos específicos que os Browsers pedem para validar se os métodos são válidos e se o host (origin) que estamos usando para fazer as requisições são válidas.

Para resolver precisamos instalar a biblioteca "cors".

#### ✔️ Instalando o CORS

```
pnpm i cors --filter @dev-demands/server
```

CORS resolvido com sucesso!

<a href="#topo">🔝</a>

---

<h3 id="7"> ⚙️ APIs RESTful </h3>

Como vamos falar de GraphQL é importante falar de RESTful que é o cara que vem antes dele.

#### ✔️ Como funciona o RESTful?

- Recebe parâmetros e envia dados usando `JSON` como formato
- Todas as operações são abstraídas dentro dos métodos HTTP (GET, POST, PUT, PATCH, DELETE e OPTIONS)
  - GET - para buscar dados
  - POST - para criar novas instâncias de dados
  - PUT - para alterar o dado todo
  - PATCH - para alterar determinado atributo do dado
  - DELETE - para remover uma entidade
  - OPTIONS - utilizado pelo Browser para checar opções dentro de um server
- As rotas, ou endpoints, são baseados nas entidades das aplicações.
  - Ex: /users/:userID

Endpoints / Rotas - cada entidade (abstração da regra de negócio / domínios estruturados na aplicação) será um Endpoint diferente.

Ex: Endpoint de Usuário, de Empresa, de Pagamento, etc...

Exemplos de requisição RESTful

```
POST /users
{
  "name": "Bruno Cecilio Seghese",
  ...
}

PATCH /users/1
{
  "name": "Bruno Seghese",
}
```

#### ⚠️ Problemas

As APIs RESTful são limitadas pelos protocolos que a definem, pois não é possível lidar com as relações entre as entidades sendo necessária a implementação manual deles.

Essas limitações resultam 3 situações que o GraphQL se propõe a resolver:

- Cascata de Requisições - Request Waterfall
- Dados insuficientes nas APIs - Under-Fetching
- Dados mais que suficientes nas APIs - Over-Fetching

Resumindo os protocolos Http são protocolos de mensagens e não de regras de negócio.

<a href="#topo">🔝</a>

---

<h3 id="8">🛰️ Apollo Server </h3>

[![image](https://img.shields.io/badge/Apollo%20GraphQL-311C87?&style=for-the-badge&logo=Apollo%20GraphQL&logoColor=white)](https://www.apollographql.com/)

Apollo Server é uma plataforma / servidor para Node.js que trabalha com GraphQL.

Ele provê uma interface bem elegante para o trabalho.

Nesse projeto usaremos o Apollo Server Express que é uma implementação do Apollo Server Oficial.

#### ✔️ Instalando o Apollo Server Express

```
pnpm i apollo-server-express --filter @dev-demands/server
```

Implementando o Apollo Server em "main.js".

#### ✔️ Instalando o Nodemon

```
pnpm i -D nodemon --filter @dev-demands/server
```

O Nodemon reinicia o servidor a cada atualizaçõa.

O -D é porque ele é uma dependência de desenvolvimento, ou seja, não é uma dependência obrigatória para rodar nosso servidor.

#### ✔️ Configurando Nodemon

```
"dev": "nodemon -r esm .",
```

#### ✔️ Rodando o Nodemon

```
pnpm --filter @dev-demands/server run dev
```

<a href="#topo">🔝</a>

---

<h3 id="9"> 🎯 Entendendo o GraphQL</h3>

O **typeDefs** é uma propriedade do apollo server que define o tipo das respostas da API, podemos dizer que significa **o que** vai ser retornado.

O valor que vamos passar para o typeDefs será um gql (função que trabalha com templeta string).

A sintaxe que vamos usar dentro das crases do gql é uma **sintaxe de GraphQL**.

```
const server = new ApolloServer({
  typeDefs: gql`

   ...GraphQL...

  `,
});
```

Tudo que estamos declarando dentro da template string são graphos.

Os **graphos** são esquemas (possuem dados) e é a partir desse esquema que as queries são executadas e consequentemente validadas, tanto entrada quanto saída.

O mais importante é que podemos fazer as **relações entre os graphos**.

É preciso prover pelo menos um Type Query para poder operar os dados.

**Type Query** é especificamente utilizado para definir como é feita a consulta.

**Resolvers** são basicamente o **como** as expectativas colocadas nos typeDefs serão resolvidas, devolvendo o dado solicitado.

O GraphQL possue uma **documentação viva e dinâmica**.

Na API que estamos executando colocando `/graphql` na URL, uma página com toda documentação e outras funcionalidades será disponibilizada.

<a href="#topo">🔝</a>

---

<h3 id="10">📁 Estruturando os TypeDefs e Resolvers</h3>

Um boa maneira de manter a estrutura grapho é separando em camadas / pastas e definindo cada entidade em pasta e arquivo com seus respectivos typeDefs e Resolvers, podendo assim escalar de forma estruturada.

Nesse projeto vamos criar uma pasta graphql e nela uma pasta "Demand" e "Client".

Em "Client" crimaos um client.js e em "Demand" um demand.js.

Em client.js:

```
import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Client {
    id: ID!
    name: String!
    email: String!
    disabled: Boolean!
  }
`;

export const resolvers = {
  Query: {
    demands: () => [],
  },
};
```

A **exclamação** na frente do tipo define como campo obrigatório.

Há dois tipos de exportação:

Exportações Explícitas (Named Exports) (Zero ou mais exports por módulo).

Exportações Padrão (Default Exports) (Uma por módulo).

Usaremos Named Exports em typeDefs e resolvers e quando for importar, importaremos eles desse módulo.

Faremos o mesmo para demand.js:

```
import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Demand {
    id: ID!
    name: String!
    client: Client!
    deadline: String
  }

  extend type Query {
    demands: [Demand]!
  }
`;

export const resolvers = {
  Query: {
    demands: () => [],
  },
};
```

O **extend** permite extender o tipo query e adicionar outras query com facilidade.

Por enquanto estamos retornando um lista vazia no resolvers.

Agora precisamos fazer uma junção do client, então criamos na pasta graphql um arquivo typeDefs.js e importamos os typeDefs de client.js e de demand.js.

Como estamos importando duas constantes iguais precisamos fazer um rename:

```
import { typeDefs as clientTypeDefs } from "./Client/Client";
import { typeDefs as demandTypeDefs } from "./Demand/Demand";
```

E aqui vamos contruir um novo typeDefs que será o **typeDefs global**

Como vimos, o typeDefs do demand usa um extend para extender o type query, e para isso temos que implementar um type query (pai).

```
const typeDefs = gql`
  type Query {
    _root: String
  }
`;
```

O type query (pai) não pode ser vazio então implementamos ele com um \_root: String.

A ordem é obrigátoria pois o extend só dará certo se o pai já estiver implementado e na sequência podemos fazer a concatenação dos typeDefs de client.js e demands.js pois já importamos eles.

```
const typeDefs = gql`
  type Query {
    _root: String
  }

  ${clientTypeDefs}
  ${demandTypeDefs}
`;
```

O typeDefs é exportado com default.

```
export default typeDefs;
```

Depois de implementado o typeDefs.js, podemos importar (como default) para main.js.

Como a propriedade e a constante tem o mesmo nome, podemos usar uma shorthand (propriedade abreviadas) do JavaScript.

```
import typeDefs from "./graphql/typeDefs";

const server = new ApolloServer({
  typeDefs,
});
```

O resolvers segue a mesma lógica do typeDefs.

Precisamos configura o body parse nos Middleware do nosso server, porque antes tínhamos o express.json() e agora se mandarmos um json para o server ele não irá interpretar.

Então passamos um bodyParseConfig: true

```
server.applyMiddleware({
  app,
  cors: {
    origin: "http://localhost:3000",
  },
  bodyParserConfig: true,
});
```

Concluindo, conseguimos criar um server GraphQL e modularizar nossos typeDefs, resolvers e uma query.
