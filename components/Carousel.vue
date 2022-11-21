<template>
  <div id="carousel">
    <img :src="this.current.value" alt="Imagem do Carrossel">
    <div class="radio">
      <label for="image"></label>
      <input v-for="image in images" :key="image.id" type="radio" @change="changeImage(image)" name="image" :checked="current.id === image.id"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  created() {
    this.current = this.images[0];
  },
  mounted() {
    setInterval(() => this.updateImage(this.current.id), 5000);
  },
  data() {
    return {
      current: {id: null, value: ""},
      images: [
        { id: 0, value: 'https://i.imgur.com/YwC0bWz.png' },
        { id: 1, value: 'https://i.imgur.com/cUi88y4.png' }
      ]
    };
  },
  methods: {
    changeImage(img) {
      this.current = img;
    },
    updateImage(index) {
      this.current.id === this.images[this.images.length - 1].id
        ? this.current = this.images[0]
        : this.current = this.images[index + 1];
    }
  }
};
</script>

<style lang="scss" scoped>

#carousel {
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  img {
    width: 100%;
    min-height: 120px;
    max-height: 100%;
    margin: 0 auto;
  }

  .radio {
    margin: 0 auto;

      input[type=radio] {
        margin: 0 5px;
        height: 12px;
        accent-color: $highlight-color;
      }
  }
}
</style>
