<template>
  <div id="cart-table" class="d-flex flex-column justify-content-center">
    <table>
      <tr>
        <th>&nbsp;</th>
        <th>Produtos</th>
        <th>Quantidade</th>
        <th>Valor Unitário</th>
        <th>Total</th>
      </tr>
      <tr v-for="product in cartContent" :key="product.id">
        <td>
          <img @click="removeProduct" src="~/assets/icons/garbage.svg" alt="Lixeira" width="16px" />
        </td>
        <td>
          <small>{{ product.category }}</small>
          <p>{{ product.name }}</p>
        </td>
        <td>
          <p>{{ product.count }}</p>
        </td>
        <td>
          <p>{{ currencyFormatter(product.price) }}</p>
        </td>
        <td>
          <p>{{ currencyFormatter(product.price * product.count) }}</p>
        </td>
      </tr>
    </table>
    <div class="align-self-end">
      <div>
        <p>Total à Vista</p>
        <p>{{ currencyFormatter(totalPrice) }}</p>
    </div>
      <div>
        <p>Total Parcelado</p>
        <p>em até <b>10x de {{ installmentsFormatter(totalPrice) }}</b></p>
      </div>
    </div>
    <div class="d-flex">
      <button @click="removeProduct" class="mr-auto"><img src="~/assets/icons/garbage.svg" alt="Lixeira" width="16px" />Limpar carrinho</button>
      <button class="mr-3">Continuar comprando</button>
      <button>Concluir compra</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartTable",
  computed: {
    cartContent() {
      return this.$store.getters.getCartContent;
    },
    totalPrice() {
      return this.$store.getters.getCartTotal;
    }
  },
  methods: {
    removeProduct(product) {
      this.$store.dispatch('remove', this.cartContent.indexOf(product));
    },
    currencyFormatter(value) {
      return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    },
    installmentsFormatter(value) {
      return (value/10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    },
  }
};
</script>

<style lang="scss" scoped>
#cart-table {
  margin: 60px auto;
  max-width: 1024px;
}
</style>
