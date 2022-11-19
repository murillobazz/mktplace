<template>
  <div class="d-flex">
    <NuxtLink to="/cart"><img src="~/assets/icons/shopping-cart.svg" alt="Carrinho" width="30px"></NuxtLink>
    <span v-show="cartQuantity">{{ cartQuantity }}</span>
  </div>
</template>

<script>
export default {
  name: 'CartButton',
  computed: {
    cartQuantity() {
      if (this.$store.getters.getCartQuantity <= 0) return null;
      if (this.$store.getters.getCartQuantity > 9) return "9+";
      return this.$store.getters.getCartQuantity;
    }
  }
};
</script>

<style lang="scss" scoped>
span {
  font-size: 10px;
  font-weight: 700;
  text-align: center;
  padding: 0 4px;
  color: #ffffff;
  background-color: red;
  border-radius: 50%;
  align-self: flex-end;
}
</style>
