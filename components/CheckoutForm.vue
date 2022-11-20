<template>
  <div id="checkout-form">
    <form action="" class="row">
      <div class="col-md col-12 form-column">
        <div class="py-2">
          <label for="nome">Nome*</label>
          <input type="text" name="nome" required v-model="client.name">
        </div>
        <div class="py-2">
          <label for="email">E-mail*</label>
          <input type="email" name="email" required v-model="client.email">
        </div>
        <div class="py-2">
          <label for="CPF">CPF*</label>
          <input type="text" name="CPF" placeholder="Somente números" maxlength="11" required
            pattern="[0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"
            v-model="client.cpf">
        </div>
        <div class="row py-2">
          <div class="col">
            <label for="Data de Nascimento">Data de Nascimento*</label>
            <input type="date" name="Data de Nascimento" required v-model="client.birthDate">
          </div>
          <div class="col">
            <label for="Telefone">Telefone*</label>
            <input type="text" name="Telefone" placeholder="DDD + Número (Somente números)" maxlength="11" required
              v-model="client.phone">
          </div>
        </div>
      </div>
      <div class="col-md col-12 form-column">
        <div class="py-2">
          <label for="CEP">CEP*</label>
          <input type="text" name="CEP" v-model="client.cep" @blur="checkCEP()" required>
        </div>
        <div class="row py-2">
          <div class="col-8">
            <label for="Endereço">Endereço*</label>
            <input type="text" name="Endereço" required v-model="client.street">
          </div>
          <div class="col-4">
            <label for="Número">Número*</label>
            <input type="text" name="Número" required v-model="client.number">
          </div>
        </div>
        <div class="row py-2">
          <div class="col">
            <label for="Endereço">Complemento</label>
            <input type="text" name="Endereço" v-model="client.additional">
          </div>
          <div class="col">
            <label for="Bairro">Bairro*</label>
            <input type="text" name="Bairro" required v-model="client.neighborhood">
          </div>
        </div>
        <div class="row py-2">
          <div class="col-8">
            <label for="Cidade">Cidade*</label>
            <input type="text" name="Cidade" required v-model="client.city">
          </div>
          <div class="col-4">
            <label for="Estado">Estado*</label>
            <input type="text" name="Estado" required v-model="client.state">
          </div>
        </div>
        <div class="d-flex">
          <button :action="checkout" type="submit" class="my-4 ml-auto">Concluir compra</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CheckoutForm',
  data() {
    return {
      client: {
        name: "",
        email: "",
        cpf: "",
        birthDate: "",
        phone: "",
        cep: null,
        street: "",
        number: "",
        additional: "",
        neighborhood: "",
        city: "",
        state: ""
      }
    };
  },
  methods: {
    async checkCEP() {
      if (this.client.cep) {
        let response = await this.$axios.$get(`https://viacep.com.br/ws/${this.client.cep}/json/`).catch(e => console.log(e));
        console.log(response);
        this.client.street = response.logradouro;
        this.client.city = response.localidade;
        this.client.state = response.uf;
        this.client.neighborhood = response.bairro;
      }
      else return;
    },
    // checkout() {

    // }
  }
};
</script>

<style lang="scss" scoped>
#checkout-form {
  max-width: 1024px;
  margin: 60px auto;

  label {
    font-size: 14px;
    color: #000;
  }

  input {
    width: 100%;
    padding: 5px;
    border: solid 1px $gray;
    border-radius: 5px;
  }

  button {
    @include button-base;
    @include primary-button;
    padding: 10px 80px;
  }

  @media screen and (max-width: 768px) {
    margin: 0 10px;
  }
}
</style>
