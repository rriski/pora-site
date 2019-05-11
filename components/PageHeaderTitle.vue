<template>
  <v-layout align-start column justify-center :align-center="isFrontPage">
    <span
      :class="{
        'page__title--sm': $breakpoint.is.smAndDown,
        page__frontpage: isFrontPage,
        'page__frontpage--xs': $breakpoint.is.xsOnly && isFrontPage
      }"
      class="page__title font-weight-bold"
    >
      {{ blok.title }}
    </span>
  </v-layout>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    isFrontPage() {
      const p = this.$route.path.replace(/\//g, '')
      const language = this.$store.state.language
      return p.startsWith('etusivu') || p.startsWith(language + 'etusivu')
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/_variables.scss';
.page__title {
  font-size: 6rem;
  padding: 0.25rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  letter-spacing: -0.05em;
  line-height: 1.5;
  margin-left: $content-spacing;
  text-shadow: $pageheader-text-shadow;
}

.page__title--sm {
  font-size: 3rem;
  margin-left: $content-spacing-sm;
}

// Highlight animation
.page__title {
  position: relative;
  z-index: 1;
}

.page__title::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  transform-origin: center right;
  transform: scaleX(0);
  transition: transform 0.2s ease-in-out;
}

.page__title:hover::before {
  transform: scaleX(1);
  transform-origin: center left;
}
</style>
