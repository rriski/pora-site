<template>
  <v-img class="image" :src="imgUrl" />
</template>

<script>
import { transformImage } from '~/services/transformImageService.js'

export default {
  props: ['blok'],
  computed: {
    imgUrl() {
      return transformImage(
        this.blok.image,
        'fit-in/500x500/filters:quality(100)'
      )
    }
  }
}
</script>

<style scoped lang="scss">
.image {
  object-fit: contain;
  width: 100%;
  max-width: 500px;
}
</style>
