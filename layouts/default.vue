<template>
  <div>
    <header>
      <div>
        <h1>Mkt<span>Place</span></h1>
        <nav>
          <NuxtLink to="/">Produtos</NuxtLink>
          <NuxtLink to="/cart"><img src="~/assets/icons/shopping-cart.svg" alt="Carrinho"></NuxtLink>
        </nav>
      </div>
    </header>
    <Nuxt />
    <footer>
      <p>MktPlace</p>
    </footer>
  </div>
</template>

<style lang="scss">
  $highlight-color: #8e36b7;
  $light-gray: #bbbbbb;
  $gray: #909090;
  $dark-gray: #666666;

  header {
    width: 100vw;

    div {
      margin: 0 auto;
      max-width: 1024px;
      display: flex;
      justify-content: space-between;
      padding: 30px 10px;

      h1 {
        font-size: 1.5rem;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 700;
        color: $gray;
      }

      span {
        color: $highlight-color;
      }

      a {
        font-size: 1rem;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 700;
        color: $gray;

        &:hover {
          filter: brightness(0.7);
          color: $gray;
          text-decoration: none;
        }
      }
    }
  }

  footer {
    width: 100vw;
    display: flex;
    background-color: $light-gray;
    padding: 10px 0;
    position: fixed;
    left: 0;
    bottom: 0;

    p {
      margin: 0 auto;
      font-size: 1.5rem;
      font-family: 'Source Sans Pro', sans-serif;
      font-weight: 700;
      color: $dark-gray;
    }
  }
</style>
