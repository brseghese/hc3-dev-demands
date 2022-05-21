<h1 id="topo">Projeto Dev Demands - GraphQL <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" width="30px"/></h1>

Esse projeto está vinculado ao repositório **Principal** do Programa HC#3 - [clique aqui](https://github.com/brseghese/vtex-hiring-coders-3/tree/main/d2_graphql)🔗 para acessá-lo.

---

[![image](https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white)](https://graphql.org/)

### ​🚀 Iniciando o Projeto - Dev Demands

Requisições Assíncronas

### 📌 Sobre

O projeto irá controlar as demandas de um programador:

- Ver as próximas demandas
- Ver os horários

Este projeto tem com base o Projeto Exemplo Cliente / Servidor que foi desenvolvido em um único pacote.

Transformando o projeto em um "Monorepo" (mais de um pacote).

### Organizando as pastas

- packages
  - web
    - htmls
  - server
    - src

Deletar o "package-lock.json" porque vamos usar um lock file sem ser o npm, vamos usar o pnpm.

Deletar o "node_modules" porque vamos gerar ele novamente com pnpm.

O pnpm é um package manager também e a única diferença é que coseguimos controlar melhor em monorepositórios.

Instalando o pnpm, caso não esteja instalado, digitando:

```
npm i -g pnpm
```

Inicializando com o pnpm:

```
pnpm init
```

Trocamos o nome do pacote por @dev-demands/root.

O @ é para indicar um scopo de pacote, ou seja, @dev-demands será todos os pacotes que teremos.

O root indica o domínio raiz.

Não iremos publicar, mas ele terá esse domínio.

Em liçença colocamos "MIT".

Em "packages" criamos um arquivo "pnpm-workspaces.yaml" que conterá somente a indicação de onde ficam nossos pacotes do monorepositório.

O "yaml" é similar ao json, mais simples de escrever e específico para arquivo de configuração.

Alteramos o nome do pacote no "package.json" que está na pasta "server" para @dev-demands/server.

Instalamos o pnpm:

```
pnpm i --filter @dev-demands/server
```

O pacote instalado gera o node_modules na pasta server e um pnpm-lock.yaml, com isso podemos rodar o server através do root.

```
pnpm --filter @dev-demands/server run start
```

Servidor conectado com sucesso!

Retirando as referências de view no arquivo "main.js":

1. Remover o switch case sign-in inteiro
2. Remorver switch case home inteiro
3. Remover somente o 301 em switch case authenticate
4. Remover módulo "fs"
5. Remover módulo "path"

### Inciando um pacote React

No terminal digitar:

```
pnpx create-react-app packages/web
```

O pnpx vem instalado junto com o pnpm e executa uma função externa.

O packages/web é o caminho para instalação do pacote.

Remover na pasta "web" o "package-lock.json, pois vamos gerenciar pelo pnpm.

Renomear o nome do pacote para @dev-demands/web no "package.json" na pasta "web".

Remover os test na pasta "web".

Remover os .css e .svg na pasta "web".

Digitar no terminal:

```
pnpm i --filter @dev-demands/web
```

### Instalando o React-Router-Dom

No terminal digitar:

```
pnpm i react-router-dom --filter @dev-demands/web
```

Configurando o App.js.

Configurando o "index.js".

Criando o arquivo "Router.js".

Criando e configurando os arquivos "Home.js" e "Signin.js".

### Rodando a aplicação

```
pnpm --filter @dev-demands/web run start
```
