<template>
  <div id="cart-table" class="d-flex flex-column justify-content-center">
    <table class="mb-5">
      <tr>
        <th>&nbsp;</th>
        <th>Produtos</th>
        <th class="text-center">Quantidade</th>
        <th>Valor Unitário</th>
        <th>Total</th>
      </tr>
      <tr v-for="product in cartContent" :key="product.id">
        <td>
          <img @click="removeProduct" src="~/assets/icons/garbage.svg" alt="Lixeira" width="16px" />
        </td>
        <td>
          <small>{{ product.category }}</small>
          <p><b>{{ product.name }}</b></p>
        </td>
        <td>
          <p class="text-center" style="letter-spacing: -3px;">
            <span class="quantity-input p-2" @click="decrementProduct(product)">-</span>
            <span class="quantity-value p-2">{{ product.count }}</span>
            <span class="quantity-input p-2" @click="incrementProduct(product)">+</span>
          </p>
        </td>
        <td>
          <p>
            <b>{{ currencyFormatter(product.price) }}</b> à vista<br />ou 10x de {{ currencyFormatter(product.price /10) }}
          </p>
        </td>
        <td>
          <p><b>{{ currencyFormatter(product.price * product.count) }}</b> à vista<br />ou 10x de {{
              currencyFormatter((product.price * product.count) / 10)
          }}</p>
        </td>
      </tr>
    </table>
    <div class="align-self-sm-end align-self-center mb-5">
      <div class="d-flex justify-content-between align-items-center">
        <p class="text-uppercase font-weight-bold text-right" style="font-size: 12px;">Total à Vista</p>
        <p class="total-price">{{ currencyFormatter(totalPrice) }}</p>
      </div>
      <div class="d-flex align-items-center">
        <p class="mr-3 text-uppercase font-weight-bold text-right" style="font-size: 12px;">Total Parcelado</p>
        <p style="font-size: 14px;">em até <b>10x de {{ installmentsFormatter(totalPrice) }}</b></p>
      </div>
    </div>
    <div class="d-flex align-items-center">
      <button @click="removeAll" class="mr-auto" style="background-color: #ffffff;">
        <img src="~/assets/icons/garbage.svg" alt="Lixeira" width="16px" class="mr-2" />
        Limpar carrinho
      </button>
      <NuxtLink to="/" class="mr-3 secondary-btn">Continuar comprando</NuxtLink>
      <NuxtLink to="/checkout" class="primary-btn">Concluir compra</NuxtLink>
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
    removeAll() {
      this.$store.dispatch('removeAll');
    },
    incrementProduct(product) {
      let hasProduct = this.cartContent.find(el => el.id === product.id);
      this.$store.dispatch('increment', this.cartContent.indexOf(hasProduct));
    },
    decrementProduct(product) {
      let hasProduct = this.cartContent.find(el => el.id === product.id);
      this.$store.dispatch('decrement', this.cartContent.indexOf(hasProduct));
    },
    currencyFormatter(value) {
      return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    },
    installmentsFormatter(value) {
      return (value / 10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    },
  }
};
</script>

<style lang="scss" scoped>
#cart-table {
  margin: 60px auto;
  max-width: 1024px;
  overflow-x: auto;

  table {
    th {
      text-transform: uppercase;
      font-size: 12px;
      color: $dark-gray;
      border-bottom: solid 1px $light-gray;
      padding: 10px;
    }

    tr {
      border-bottom: solid 1px $light-gray;
    }

    td {
      padding: 10px;
    }

    img:hover {
      cursor: pointer;
    }

    small {
      color: $highlight-color;
      font-size: 10px;
      font-weight: 900;
    }

    p {
      color: $main-text;
      font-size: 14px;
      font-weight: 400;
    }
  }

  .quantity-input {
    font-family: 'Source Sans Pro', sans-serif;
    border: solid 1px $light-gray;
    font-weight: 700;

    &:hover {
      cursor: pointer;
    }
  }

  .quantity-value {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 700;
    border-top: solid 1px $light-gray;
    border-bottom: solid 1px $light-gray;
  }
  .total-price {
      color: $highlight-color;
      font-size: 20px;
      font-weight: 700;
    }

  button, a {
    @include button-base;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 14px;
    text-decoration: none;
    border-radius: 3px;
  }

  .primary-btn {
    background: $highlight-color;
    color: #ffffff;
    font-weight: 700;

    &:active {
      filter: brightness(0.7);
    }
  }

  .secondary-btn {
    background: $light-gray;
    color: $dark-gray;
    font-weight: 700;

    &:active {
      filter: brightness(0.7);
    }
  }

}
</style>
