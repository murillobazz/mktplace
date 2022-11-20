<template>
  <div>
    <CheckoutForm @toggleModal="checkoutSuccess = !checkoutSuccess;" />
    <Modal v-show="checkoutSuccess" @toggleModal="checkoutSuccess = !checkoutSuccess;" />
  </div>
</template>

<script>
export default {
  name: 'CheckoutPage',
  data() {
    return {
      checkoutSuccess: false,
    }
  }
}
</script>

<style>

</style>
