<h1 id="topo"> Dev Demands 👨‍💻​ </h1>

## VTEX - Hiring Coders #3 🚀

### 📌 Módulo GraphQL

Projeto desenvolvido para exercitar os conceitos dados no curso de GraphQL.

Este projeto é a continuação do curso de GraphaQL e está vinculado ao repositório **Principal** do Programa HC#3 - [clique aqui](https://github.com/brseghese/vtex-hiring-coders-3/tree/main/d2_graphql)🔗 para acessá-lo.

<details>
<summary>Clique para Navegar 🔽</summary>

◽ <a href="#1">Preparando o Ambiente</a> <br>
◽ <a href="#2">Requisições Assíncronas</a> <br>
◽ <a href="#3">APIs RESTful</a> <br>
◽ <a href="#4">Apollo Server</a> <br>

</details>

### 📍 Sobre

O projeto irá controlar as demandas de um programador:

- Ver as próximas demandas
- Ver os horários

---

<h3 id="1"> 🛠️ Preparando o Ambiente</h3>

Este projeto tem com base o Projeto Exemplo Cliente / Servidor que foi desenvolvido em um único pacote.

#### ✔️​ Monorepositório

Transformando o projeto em um "Monorepo" (mais de um pacote).

#### ✔️​ Organizando as Pastas

- packages
  - web
    - htmls
  - server
    - src

#### ✔️​ Instalando os Pacotes

Deletando o "package-lock.json" porque vamos usar um lock-file sem ser o do npm, iremos usar o do pnpm.

Deletando o "node_modules" porque vamos gerar ele novamente com o pnpm.

O pnpm é um package manager também e a única diferença é que coseguimos controlar melhor em monorepositórios.

Instalando o pnpm:

```
npm i -g pnpm
```

Inicializando o pnpm:

```
pnpm init
```

Nomeando o pacote como @dev-demands/root.

O @ é para indicar um scopo de pacote, ou seja, @dev-demands será todos os pacotes que teremos.

O root indica o domínio raiz.

Não iremos publicar, mas ele terá esse domínio.

Definindo a liçença como "MIT".

Criando um arquivo "pnpm-workspaces.yaml" que contém somente a indicação de onde ficam nossos pacotes do monorepositório.

O "yaml" é similar ao json, porém mais simples de escrever e específico para arquivo de configuração.

Alterando o nome do pacote no "package.json" para @dev-demands/server.

Instalando o pnpm:

```
pnpm i --filter @dev-demands/server
```

O pacote instalado gera o node_modules na pasta server e um pnpm-lock.yaml, com isso podemos rodar o server através do root.

#### ✔️​ Executando o Servidor

```
pnpm --filter @dev-demands/server run start
```

Servidor conectado com sucesso!

#### ✔️ Acoplando View e Server

Retirando as referências de view no arquivo "main.js".

#### ✔️ Inciando um pacote React

```
pnpx create-react-app packages/web
```

O pnpx vem instalado junto com o pnpm e executa uma função externa.

Removendo o "package-lock.json, pois vamos gerenciar pelo pnpm.

Renomeando o nome do pacote para @dev-demands/web no "package.json".

Removendo os test na pasta "web".

Removendo os .css e .svg na pasta "web".

Instalando o pnpm:

```
pnpm i --filter @dev-demands/web
```

#### ✔️ Instalando o React-Router-Dom

```
pnpm i react-router-dom --filter @dev-demands/web
```

Codificando o App.js.

Codificando o "index.js".

Criando o arquivo "routes.js".

Codificando os arquivos "Home.js" e "Signin.js".

#### ✔️ Executando a aplicação

```
pnpm --filter @dev-demands/web run start
```

#### ✔️ Instalando o Express

```
pnpm i express --filter @dev-demands/server
```

O Express é uma biblioteca para facilitar as requisições com as APIs.

Até então não estávamos tratando os métodos HTTP das requests, somente olhando as URLs.

Codificando o express no "main.js" e deixando a API pronta.

Executando:

```
pnpm --filter @dev-demands/server run start
```

O express já abstrai muito mais coisas do servidor, é muito mais prático trabalhar com ele.

<a href="#topo">🔝</a>

---

<h3 id="2"> ⏰​ Requisições Assíncronas</h3>

#### ✔️ Implementando o front / client

O proxímo passo é implementar o front/client que irá fazer o authenticate.

Rodando o server na porta 8000 e o client/web na porta 3000.

Tratando a requisição para o authenticate com `fetch`.

#### ✔️ Resolvendo CORS

Para resolver precisamos configurar o server para lidar com as requisições, lidar com os cabeçalhos específicos que os Browsers pedem para validar se os métodos são válidos e se o host (origin) que estamos usando para fazer as requisições são válidas.

Para resolver precisamos instalar a biblioteca "cors" no nosso backend, digitando:

```
pnpm i cors --filter @dev-demands/server
```

CORS resolvido com sucesso!

<a href="#topo">🔝</a>

---

<h3 id="3"> ⚙️ APIs RESTful </h3>

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

Endpoints / Rotas - cada entidade (abstração da regra de negócio / domínios estruturados na aplicação) será um Endpoint diferente. Ex: Endpoint de Usuário, de Empresa, de Pagamento, etc...

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

APIs RESTful são limitadas pelos protocolos que a definem, pois não é possível lidar com as relações entre as entidades sendo necessária a implementação manual deles.

Essas limitações resultam 3 situações que o GraphQL se propõe a resolver:

- Cascata de Requisições - Request Waterfall
- Dados insuficientes nas APIs - Under-Fetching
- Dados mais que suficientes nas APIs - Over-Fetching

Resumindo os protocolos Http são protocolos de mensagens e não de regras de negócio.

<a href="#topo">🔝</a>

---

<h3 id="4">🛰️ Apollo Server </h3>

[![image](https://img.shields.io/badge/Apollo%20GraphQL-311C87?&style=for-the-badge&logo=Apollo%20GraphQL&logoColor=white)](https://www.apollographql.com/)
