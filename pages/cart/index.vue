<template>
  <div>
    <CartTable v-if="cartContent.length" />
    <p v-else>Ops, não tem nada aqui ainda!</p>
  </div>
</template>

<script>
export default {
  name: "CartPage",
  computed: {
    cartContent() {
      return this.$store.getters.getCartContent;
    },
  }
};
</script>

<style lang="scss" scoped>
p {
  text-align: center;
  margin: 60px auto;
  font-weight: 700;
  color: $highlight-color;
}
</style>
