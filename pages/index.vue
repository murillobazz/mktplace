<template>
  <div>
    <Carousel />
    <SearchBar @click="filterProducts"/>
    <div class="row container justify-content-center" style="margin: 0 auto;">
      <ProductCard
        v-for="product in filteredProducts"
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
      searchText: "",
    }
  },
  async fetch() {
    this.products = await this.$axios.$get('https://raw.githubusercontent.com/owInteractive/desafio-frontend-2020/master/produtos.json');
  },
  methods: {
    // addToCart() {

    // },
    filterProducts(value) {
      console.log(value);
      this.searchText = value;
    }
  },
  computed: {
    filteredProducts() {
      if (!this.searchText) return this.products;
      return this.products.filter((element) => element.name.includes(this.searchText));
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
