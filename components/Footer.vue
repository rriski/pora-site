<template>
  <v-footer
    :height="70"
    class="footer"
    :class="{ 'footer--sm': $breakpoint.is.smAndDown }"
  >
    <Sponsor />
    <Quote />
    <SocialMedia />
  </v-footer>
</template>

<script>
import SocialMedia from '~/components/SocialMedia.vue'
import Quote from '~/components/Quote.vue'
import Sponsor from '~/components/Sponsor.vue'

export default {
  components: {
    SocialMedia,
    Quote,
    Sponsor
  }
}
</script>

<style scoped lang="scss">
@import '~assets/_variables.scss';

.footer {
  padding: 0 calc(#{$content-spacing} - 15%);
}
.footer--sm {
  font-size: 0.75rem;
}
</style>
