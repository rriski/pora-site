<template>
  <v-parallax v-editable="blok" dark :src="imgUrl" :height="imageHeight">
    <PageHeaderTitle :blok="blok" />
  </v-parallax>
</template>

<script>
import PageHeaderTitle from '~/components/PageHeaderTitle.vue'
import { transformImage } from '~/services/transformImageService.js'

export default {
  components: {
    PageHeaderTitle
  },
  props: ['blok'],
  computed: {
    imgUrl() {
      const image = this.blok.image
      const url = image
        ? transformImage(image, '2000x1000/smart/filters:quality(80)')
        : ''
      return url
    },
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '200'
        case 'sm':
          return '250'
        case 'md':
          return '300'
        case 'lg':
          return '400'
        case 'xl':
          return '400'
        default:
          return '300'
      }
    }
  }
}
</script>
