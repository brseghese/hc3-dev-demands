# Dev Demands 👨‍💻​

## VTEX - Hiring Coders #3 🚀

### 📌 Módulo GraphQL

Projeto desenvolvido para exercitar os conceitos dados no curso de GraphQL.

Este projeto está vinculado ao repositório **Principal** do Programa HC#3 - [clique aqui](https://github.com/brseghese/vtex-hiring-coders-3/tree/main/d2_graphql)🔗 para acessá-lo.

### 📍 Sobre

O projeto irá controlar as demandas de um programador:

- Ver as próximas demandas
- Ver os horários

---

### 🛠️ Preparando o Ambiente

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

---

### ⏰​ Requisições Assíncronas

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
