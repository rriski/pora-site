<template>
  <v-footer
    :height="70"
    class="footer"
    :class="{
      'footer--sm': $breakpoint.is.smAndDown
    }"
  >
    <SocialMedia />
    <Quote />
    <span>
      Polyteknikkojen Raittiusseura &copy;{{ new Date().getFullYear() }}
    </span>
  </v-footer>
</template>

<script>
import SocialMedia from '~/components/SocialMedia.vue'
import Quote from '~/components/Quote.vue'

export default {
  components: {
    SocialMedia,
    Quote
  }
}
</script>

<style scoped lang="scss">
@import '~assets/_variables.scss';

.footer {
  justify-content: end;
  padding: 0 calc(#{$content-spacing} - 15%);

  span {
    width: 150px;
  }
}

span {
  display: block;
}

.footer--sm {
  font-size: 0.75rem;

  span {
    width: 90px;
  }
}
</style>
