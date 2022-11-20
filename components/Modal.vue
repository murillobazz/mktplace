<template>
  <div class="background">
    <div class="modal-content d-flex">
      <span class="close-btn align-self-end" @click="toggleModal">&times;</span>
      <div class="d-flex flex-column align-items-center mx-auto">
        <img class="mb-3" src="~/assets/icons/confirmed.svg" alt="Sucesso" width="120px">
        <p class="text-center">Seu cadastro foi solicitado com sucesso!</p>
        <NuxtLink class="text-center" to="/"><img class="mr-1" src="~/assets/icons/left-arrow.svg" height="8px" alt="Voltar">Voltar para Home</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  methods: {
    toggleModal() {
      this.$emit('toggleModal');
    }
  }
};
</script>

<style lang="scss" scoped>
.background {
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #000; // Fallback
  background-color: rgba(0, 0, 0, 0.4);

  .modal-content {
    @include fade-in;
    background-color: #fefefe;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid $gray;
    width: 35%;

    p {
      font-size: 20px;
    }

    a {
      font-size: 14px;
      color: $highlight-color;
      text-transform: uppercase;
    }

    .close-btn:hover {
      cursor: pointer;
    }

    @media screen and (max-width: 768px) {
    width: 90%;
  }
  }
}
</style>
