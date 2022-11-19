<template>
  <div id="searchbar" class="row d-flex justify-content-center align-items-center">
    <label class="col" for="searchbar">Encontre seu produto</label>
    <div class="col-9 d-flex justify-content-center align-items-center">
      <input v-model="searchText" type="text" name="searchbar" placeholder="Pesquisar...">
      <button @click="$emit('click', searchText)"><img src="~/assets/icons/magnifying-glass.svg" alt="Pesquisar"></button>
    </div>
  </div>
</template>

<script>
export default {
  name:"SearchBar",
  data() {
    return {
      searchText: "",
    }
  }
};
</script>

<style lang="scss" scoped>
#searchbar {
  padding: 20px 10px;
  margin: 0 auto;
  max-height: 100px;
  max-width: 872px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  label {
    color: $gray;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
  }

  input {
    height: 40px;
    width: 100%;
    border: solid 1px $gray;
    border-right: none;
    border-radius: 3px 0 0 3px;

    &::placeholder {
      padding: 0 10px;
      font-size: 12px;
      color: $light-gray;
      font-weight: 600;
    }
  }

  button {
    height: 40px;
    padding: 2.5px 10px 7.5px 10px;
    border: none;
    border-radius: 0 3px 3px 0;
    background: $highlight-color;

    img {
      max-height: 20px;
      max-width: 20px;
    }
  }


}
</style>
