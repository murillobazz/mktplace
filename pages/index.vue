<template>
  <div>
    <Carousel />
    <SearchBar @click="filterProducts" />
    <div class="row container justify-content-center" style="margin: 0 auto;">
      <ProductCard v-for="product in filteredProducts" :key="product.id" :name="product.name"
        :category="product.category" :description="product.description" :price="product.price"
        :imageUrl="product.imageUrl" @addToCart="addToCart(product)" class="col-md-4 col-lg-3" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      products: [],
      searchText: "",
    };
  },
  async mounted() {
    this.products = await this.$axios.$get('https://raw.githubusercontent.com/owInteractive/desafio-frontend-2020/master/produtos.json');

    if (!this.cartContent.length) {
      for (let i = 1; i <= localStorage.length; i++) {
        if (localStorage.getItem(`product${i}`)) {
          this.$store.dispatch('add', { product: this.products[i - 1] });

          if (localStorage.getItem(`product${i}`) > 1) {
            for (let j = 1; j < localStorage.getItem(`product${i}`); j++) {
              this.$store.dispatch('increment', (i - 1));
            }
          }
        }
      }
    }
  },
  methods: {
    addToCart(product) {
      let hasProduct = this.cartContent.find(el => el.id === product.id);

      if (hasProduct) {
        this.$store.dispatch('increment', this.cartContent.indexOf(hasProduct));
        localStorage.setItem("product" + product.id, hasProduct.count);
      } else {
        this.$store.dispatch('add', { product: product });
        localStorage.setItem("product" + product.id, 1);
      };
    },
    filterProducts(value) {
      this.searchText = value;
    }
  },
  computed: {
    filteredProducts() {
      if (!this.searchText) return this.products;
      return this.products.filter((element) => element.name.includes(this.searchText));
    },
    cartContent() {
      return this.$store.getters.getCartContent;
    }
  }
};
</script>
