<template>
  <div>
    <header>
      <div class="content">
        <h1>Mkt<span>Place</span></h1>
        <nav class="d-flex">
          <NuxtLink to="/">Produtos</NuxtLink>
          <CartButton />
        </nav>
      </div>
    </header>
    <Nuxt />
    <footer>
      <p>MktPlace</p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
  $highlight-color: #8e36b7;
  $light-gray: #bbbbbb;
  $gray: #909090;
  $dark-gray: #666666;

  header {
    width: 100vw;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;

    .content {
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
        margin-right: 20px;

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
