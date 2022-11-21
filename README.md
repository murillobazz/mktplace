# 🛒 [MktPlace](https://mktplace-ow.vercel.app/)

<small><i>(Este projeto foi feito por Murillo Bazilio, para participação no processo seletivo da OW Interactive.)</i></small>

## 📘 Descrição

  O 🛒 [MktPlace](https://mktplace-ow.vercel.app/) é uma aplicação Web/PWA que simula um sistema de ecommerce: o usuário poderá visualizar na página principal os produtos que são renderizados à partir de chamada para a API da OW Interactive. Nessa mesma página, o usuário pode adicionar produtos ao carrinho, e ao acessar o carrinho poderá ver seus produtos adicionados, e manipulá-los, incrementando ou decrementando suas quantidades, ou até removendo-os totalmente do mesmo. Por fim, o usuário pode simular uma finalização da compra ("checkout"), em que cadastrará seus dados, que serão validados pela própria HTML API de formulário.

  A aplicação, ainda, utiliza a API de LocalStorage do JavaScript para salvar o conteúdo do carrinho do usuário: toda vez que este interage com o carrinho, a ação é reproduzida no LocalStorage, e ao renderizar novamente o index da aplicação, a mesma checa se o carrinho do usuário está vazio e se o mesmo tem conteúdo registrado em seu LocalStorage, se sim, seu carrinho é populado com os produtos e suas respectivas quantidades, mapeado através de uma simples conferência através do id de cada produto que é obtido através da API da OW Interactive.


<hr>

## 💾 Tecnologias

  A aplicação foi feita utilizando [Vue 2](https://vuejs.org/) (Options API), que teve como ponto de partida o CLI do [create-nuxt-app](https://github.com/nuxt/create-nuxt-app/blob/master/README.md). É executada sobre [Node.js v16.1.0](https://nodejs.org/en/). Utiliza o [Axios](https://axios.nuxtjs.org/) (já incluído no setup inicial do create-nuxt-app) para fazer a chamada para a API e [Bootstrap](https://getbootstrap.com/) para funcionalidades de responsividade do layout em grid, além das classes CSS inline, também responsivas. Utiliza-se SCSS/SASS para a estilização de toda a aplicação, utilizando conceitos como "mixins" e variáveis para estilos globais da aplicação.
  Por fim, é importante apontar que todos os componentes da aplicação foram de desenvolvimento próprio, não foi utilizado nenhum componente pronto de pacotes de terceiros.

  A aplicação está disponível através de deploy no [Vercel](https://vercel.com/), você pode acessar clicando aqui -> [MktPlace](https://mktplace-ow.vercel.app/)
<br>

### Para rodar essa aplicação localmente (considerando que você tenha permissão de acesso):
```bash
# Clone este repositório
$ git clone <https://github.com/murillobazz/mktplace.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd mktplace

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```
<hr>

## 👨‍💻 Como usar

  O usuário poderá visualizar na página principal os produtos. Nessa mesma página, o usuário pode adicionar produtos ao carrinho, e ao acessar o carrinho poderá ver seus produtos adicionados, e manipulá-los, incrementando ou decrementando suas quantidades, ou até removendo-os totalmente do mesmo. Por fim, o usuário pode simular uma finalização da compra ("checkout"), em que cadastrará seus dados.
