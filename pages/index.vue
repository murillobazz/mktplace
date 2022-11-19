<template>
  <div>
    <Carousel />
    <div><h2>searchbar</h2></div>
    <div class="row container justify-content-center" style="margin: 0 auto;">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :name="product.name"
        :category="product.category"
        :description="product.description"
        :price="product.price"
        :imageUrl="product.imageUrl"
        @addToCart="addToCart(product)"
        class="col-md col-lg-3"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      products: [],
    }
  },
  async fetch() {
    this.products = await this.$axios.$get('https://raw.githubusercontent.com/owInteractive/desafio-frontend-2020/master/produtos.json');
  },
  // methods: {
  //   addToCart() {

  //   }
  // }
}
</script>

<style lang="scss" scoped>
</style>
