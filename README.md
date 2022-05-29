<h1 id="topo">Dev Demands 👨‍💻​</h1>

Este projeto faz parte da continuação do curso de GraphQL.

[Clique aqui](https://github.com/brseghese/hiring-coders-3-vtex-gama/tree/main/d2_graphql)🔗 para acessar o repositório com a introdução do curso onde foi desenvolvido um exemplo de cliente / servidor que é a base deste projeto.

---

### 📍 Sobre

A implementação deste projeto foi dividido em backend e frontend:

- backend - apollo server
- frontend - react

No backend foi desenvolvida toda a infraestrutura de dados em GraphQL manipulando um arquivo JSON.

No frontend foi desenvolvida a interface para receber e editar os dados do backend.

Recursos atuais:

- Criar, editar e remover clientes e demandas - backend
- Listar clientes - backend e frontend

Futuros recursos:

- Criar a regra de negócio entre clientes e demandas.

---

<h3 id="">📁 Acessar Projeto</h3>

◽ <a href="https://github.com/brseghese/hc3-dev-demands/tree/main">Acessar</a>🔗 o código fonte pelo GitHub. <br>
◽ <a href="https://github.com/brseghese/hc3-dev-demands/archive/refs/heads/main.zip">Download</a>🔗 do código fonte no formato zip.<br>
◽ Clonar o repositório ultilizando Git Bash + o comando:

       git clone https://github.com/brseghese/hc3-dev-demands.git

<h3 id="">🛠️ Instalação</h3>

Após clonar ou fazer o download do projeto digitar no terminal:

```
pnpm i --filter @dev-demands/server
```

```
pnpm i --filter @dev-demands/web
```

Instruções para executar o projeto [clique aqui](#✔️-testando-o-projeto)🔗

---

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
- <a href="#11">GraphQL Query</a>
- <a href="#12">GraphQL Mutation</a>
- <a href="#13">Apollo Link / Client / Devtools</a>

</details>

---

<h2>🚀 Iniciando o Projeto</h2>

<h3 id="1">🧰 Preparando o Ambiente</h3>

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

O "yaml" é similar ao json, ele é mais simples de escrever e específico para arquivo de configuração.

Nomeando "package.json" do server para @dev-demands/server.

Nomeando "package.json" do client para @dev-demands/web.

<a href="#topo">🔝</a>

---

<h3 id="3">🛰️  Preparando o Server</3>

#### ✔️ Instalando o pnpm no server

```
pnpm i --filter @dev-demands/server
```

O pacote instalado gera o node_modules na pasta server e um pnpm-lock.yaml.

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

Codificando a interface web.

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

Codificando o express no "main.js" e deixando a API pronta.

#### ✔️ Executando o server com Express

```
pnpm --filter @dev-demands/server run start
```

O express abstrai muito mais coisas do servidor e é muito mais prático para trabalhar.

<a href="#topo">🔝</a>

---

<h3 id="6"> ⏰​ Requisições Assíncronas</h3>

#### ✔️ Implementando o client

Codificando o client para fazer o authenticate.

Executando o server na porta 8000 e o client na porta 3000.

Tratando a requisição para o authenticate.

#### ✔️ Resolvendo CORS

Para resolver precisamos configurar o server para lidar com as requisições.

Lidando com os cabeçalhos específicos que os Browsers pedem para validar se os métodos são válidos e se o host (origin) que estamos usando para fazer as requisições são válidas.

Instalando a biblioteca "cors" resolvemos o CORS.

#### ✔️ Instalando o CORS

```
pnpm i cors --filter @dev-demands/server
```

<a href="#topo">🔝</a>

---

<h3 id="7"> ⚙️ APIs RESTful </h3>

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

Ele provê uma excelente interface para o trabalho.

Nesse projeto usaremos o Apollo Server Express que é uma implementação do Apollo Server Oficial.

#### ✔️ Instalando o Apollo Server Express

```
pnpm i apollo-server-express --filter @dev-demands/server
```

Codificando o Apollo Server em "main.js".

Instalando o Nodemon

```
pnpm i -D nodemon --filter @dev-demands/server
```

O Nodemon reinicia o servidor a cada atualizaçõa.

O -D é porque ele é uma dependência de desenvolvimento, ou seja, não é uma dependência obrigatória para rodar nosso servidor.

Configurando Nodemon

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

O `TypeDefs` é uma propriedade do apollo server que define o tipo de respostas da API, podemos dizer que significa **o que** vai ser retornado.

O valor que vamos passar para o typeDefs será um `gql` (função que trabalha com templeta string).

A sintaxe que vamos usar dentro das crases do gql é uma **sintaxe de GraphQL**.

```
const server = new ApolloServer({
  typeDefs: gql`

   ...GraphQL...

  `,
});
```

Os **graphos** são esquemas (possuem dados) e é a partir desse esquema que as queries são executadas e consequentemente validadas, tanto entrada quanto saída.

Podemos fazer as **relações entre os graphos**.

É preciso prover pelo menos um type query para poder operar os dados.

`Type Query` é especificamente utilizado para definir como são feitas as consultas.

`Resolvers` são basicamente o **como** as expectativas colocadas nos typeDefs serão resolvidas, devolvendo o dado solicitado.

O GraphQL possue uma **documentação viva e dinâmica**.

Na API que estamos executando colocando `/graphql` na URL, uma página com toda documentação e outras funcionalidades serão disponibilizada.

<a href="#topo">🔝</a>

---

<h3 id="10">📁 Estruturando os TypeDefs e Resolvers</h3>

Um boa maneira de manter a estrutura grapho é separando em camadas / pastas e definindo cada entidade em pasta e arquivo com seus respectivos typeDefs e Resolvers, podendo assim escalar de forma estruturada.

#### ✔️ TypeDefs e Resolvers - globais & Type Query - extend

Para fazermos a união dos typeDefs e resolvers criamos os arquivos "typeDefs.js" e "resolvers.js".

O `extend` permite extender o type query e adicionar outras queries com mais facilidade.

#### ✔️ Type Query Global

O type query global não pode ser vazio, então implementamos ele com um \_root: String.

```
const typeDefs = gql`
  type Query {
    _root: String
  }
`;
```

A ordem é obrigátoria, para o extend funcionar o extend global deve estar implementado.

```
const typeDefs = gql`
  type Query {
    _root: String
  }

  ${clientTypeDefs}
  ${demandTypeDefs}
`;
```

#### ✔️ Importando e Exportando Módulos e Funções

Exportações Explícitas (Named Exports) (Zero ou mais exports por módulo).

Exportações Padrão (Default Exports) (Uma por módulo).

Usaremos Named Exports em typeDefs e resolvers.

#### ✔️ Shorthand e Rename

Quando a propriedade e a constante tem o mesmo nome, podemos usar uma shorthand (propriedade abreviadas) do JavaScript.

```
import typeDefs from "./graphql/typeDefs";

const server = new ApolloServer({
  typeDefs,
});
```

Quando importamos duas constantes iguais precisamos fazer um rename.

```
import { typeDefs as clientTypeDefs } from "./Client/Client";
import { typeDefs as demandTypeDefs } from "./Demand/Demand";
```

#### ✔️ Ajustando Server

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

<a href="#topo">🔝</a>

---

<h3 id="11">🔎 GraphQL Query</h3>

As Query é uma das três principais operações em GraphQL, elas praticamente assistem os dados e os retornam quando solicitados.

O GraphQL não diz respeito a banco de dados, ele é a camada de ligação entre o front e o back.

#### ✔️ Criando GraphQL Queries

Gerando dados fakes no site [mockaroo](https://www.mockaroo.com/) para consumir esses dados.

Inserindo os dados fakes em um arquivo "client.json".

Criando "server/io/Database/createRepository.js" e desenvolvendo a ligação entre o arquivo JSON e o GraphQL.

#### ✔️ Consultando Clientes no PlayGround

Buscando um cliente pelo id:

```
query GET_CLIENT($clientID: ID!) {
  client(id: $clientID) {
    id
    name
    email
    disabled
  }
}


// Query Variables - parâmetro para consulta


{
  "clientID": "10b34d77-a60d-4916-8303-964f1e1261a4"
}
```

```
query GET_CLIENTS {
  clients {
    totalItems
    items {
      name
      email
    }
  }
}
```

<a href="#topo">🔝</a>

---

<h3 id="12">♻️ GraphQL Mutations</h3>

As Mutations é uma das três principais operações em GraphQL, elas deletam, alteram e incluem dados.

> Observação: o Nodemon está assistindo os dados do "server/data/client.json" e vamos modificar isso para que ele não assista mais os dados.

Em "server/package.json":

```
"nodemonConfig": {
    "ignore": [
      "src/data/*"
    ]
```

#### ✔️ Type Mutation Global

O type mutation global não pode ser vazio, então implementamos ele com um \_root: String.

```
const typeDefs = gql`
  type Mutation {
    _root: String
  }
`;
```

Podemos extender a mutation com o global implementado.

#### ✔️ Type Mutation Extend

Criando o input e extendendo a mutation no typeDefs.

O resolvers de query e mutations são iguais, têm os mesmos parâmetros:

- parent
- args
- context
- info

Para criar um novo cliente usaremos somente o parâmetro args.

Para gerar o id vamos utilizar uma biblioteca chamada "uuid".

```
pnpm i uuid --filter @dev-demands/server
```

Implementado a mutation no "client.js" e "resolvers.js" para inserir clientes.

#### ✔️ Inserindo Cliente no PlayGround

```
mutation CREATE_CLIENT {
  createClient(input:{
    name: "Bruno Seghese",
    email: "brsegh@gmail.com"
  }) {
    id
    name
    email
    disabled
  }
}
```

Implementado a mutation no "client.js" e "resolvers.js" para alterar clientes.

#### ✔️ Alterando Cliente no PlayGround

```
mutation UPDATE_CLIENT {
  updateClient(
    input: {
      id: "e0b6e391-9191-469a-9322-b0491191870c"
      name: "Eduardo Seghese"
      email: "dudu@gmail.com"
    }
  ) {
    id
    name
    email
    disabled
  }
}
```

Implementado a mutation no "client.js" e "resolvers.js" para deletar clientes.

#### ✔️ Deletando Cliente no PlayGround

```
mutation DELETE_CLIENT {
  deleteClient(id: "4a2a2588-f67b-42ac-aa48-39d7b37fae96") {
    id
    name
    email
    disabled
  }
}
```

<a href="#topo">🔝</a>

---

<h3 id="13">🛰️ Apollo Link / Client / Devtools</h3>

#### ✔️ Instalando o Appolo Link

```
pnpm i apollo-link apollo-link-context apollo-link-error apollo-link-http --filter @dev-demands/web
```

Implementando "web/src/plugins/apollo/link.js"

#### ✔️ Instalando o Appolo Client

```
pnpm i apollo-client graphql graphql-tag react-apollo --filter @dev-demands/web
```

```
pnpm i apollo-cache-inmemory --filter @dev-demands/web
```

Implementando "web/src/plugins/apollo/client.js"

Instalando plugin Apollo no Browser.

#### ✔️ Testando o projeto

server

```
pnpm --filter @dev-demands/server run dev
```

web

```
pnpm --filter @dev-demands/web run start
```

Abrindo a página HOME - devtools Apollo - executar Query & Mutations

<a href="#topo">🔝</a>

---

### 📝 License

Esse projeto é licenciado pela MIT License. Veja [aqui](https://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT) mais detalhes.

---

### ✒️ Autor

<a href="https://github.com/brseghese"> <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/80193824?v=4" width="100px;" alt="Personal photo"/> </a>

[Clique aqui](https://brseghese.github.io)🔗 e acesse meu portfólio! 💼 (em construção...)

---

#### 💬 Sinta-se a vontade para entrar em contato

[![Linkedin Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/brunoseghese/) [![Github Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/brseghese) [![Gmail Badge](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:brseghese@gmail.com)

---

> Desenvolvido com ❤️ por **Bruno Seghese**

---
