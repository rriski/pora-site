<template>
  <v-layout
    v-editable="blok"
    align-start
    column
    justify-center
    :align-center="true"
  >
    <span
      :class="{
        'page__title__frontpage--sm': $breakpoint.is.smAndDown
      }"
      class="page__title__frontpage font-weight-bold"
      >{{ blok.title }}</span
    >
    <span
      :class="{ 'page__subtitle--sm': $breakpoint.is.smAndDown }"
      class="page__subtitle font-weight-medium font-italic"
      >{{ blok.subtitle }}</span
    >
  </v-layout>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style scoped lang="scss">
@import '~assets/_variables.scss';
.page__title__frontpage {
  font-size: 6rem;
  color: #fff;
  letter-spacing: -0.05em;
  line-height: 1.5;
  text-shadow: $pageheader-text-shadow;
}

.page__title__frontpage--sm {
  font-size: 2rem;
  margin-left: $content-spacing-sm;
}

.page__subtitle {
  font-size: 1.5rem;
  text-shadow: $pageheader-text-shadow;
}

.page__subtitle--sm {
  font-size: 1rem;
}
</style>
