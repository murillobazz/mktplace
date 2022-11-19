<template>
  <div id="card">
    <div class="image-container">
      <!-- Se a url da imagem estiver quebrada, alterna para um fundo cinza padrão. ('onerror') -->
      <img
        :src="imageUrl"
        alt="Imagem do produto" onerror="this.remove()">
    </div>
    <div class="card-text">
      <p class="category">{{ category }}</p>
      <p class="name">{{ name }}</p>
      <p class="description">{{ descriptionFormatter(description) }}</p>
      <p class="price">{{ currencyFormatter(price) }}</p>
    </div>
    <button @click="$emit('addToCart')">Adicionar ao Carrinho</button>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    id: Number,
    name: String,
    category: String,
    description: String,
    price: Number,
    imageUrl: String
  },
  methods: {
    currencyFormatter(value) {
      return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    },
    descriptionFormatter(string) {
      return string.length > 100 ? `${string.slice(0, 100)}...` : string;
    }
  }
};
</script>

<style lang="scss" scoped>
#card {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin: 30px 10px;
  min-height: 450px;
  max-width: 360px !important;
  padding: 0;

  .image-container {
    height: 160px;
    background-color: $light-gray;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .card-text {
    padding: 20px;
    font-family: 'Source Sans Pro', sans-serif;

    .category {
      color: $highlight-color;
      font-size: 12px;
      font-weight: 900;
    }

    .name {
      color: $main-text;
      font-size: 14px;
      font-weight: 900;
    }

    .description {
      color: $gray;
      font-size: 12px;
      font-weight: 700;
    }

    .price {
      color: $main-text;
      font-size: 20px;
      font-weight: 900;
    }

  }

  button {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;

    border: none;
    padding: 10px;
    border-top: solid 1px $light-gray;

    background-color: #fff;

    font-family: 'Source Sans Pro', sans-serif;
    font-weight: bold;
    color: $highlight-color;
    text-transform: uppercase;

    &:hover {
      background-color: $highlight-color;
      color: #fff;
    }
  }
}
</style>
