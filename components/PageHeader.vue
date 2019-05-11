<template>
  <v-parallax dark :src="imgUrl" :height="imageHeight">
    <PageHeaderTitleFrontpage v-if="isFrontPage" :blok="blok" />
    <PageHeaderTitle v-else :blok="blok" />
  </v-parallax>
</template>

<script>
import PageHeaderTitle from '~/components/PageHeaderTitle.vue'
import PageHeaderTitleFrontpage from '~/components/PageHeaderTitleFrontpage.vue'
import { transformImage } from '~/services/transformImageService.js'

export default {
  components: {
    PageHeaderTitle,
    PageHeaderTitleFrontpage
  },
  props: ['blok'],
  computed: {
    isFrontPage() {
      const p = this.$route.path.replace(/\//g, '')
      const language = this.$store.state.language
      return p.startsWith('etusivu') || p.startsWith(language + 'etusivu')
    },
    imgUrl() {
      const image = this.blok.image
      const url = image ? transformImage(image, '2000x1000/smart') : ''
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
