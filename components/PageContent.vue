<template>
  <div
    v-editable="blok"
    :class="{ 'page__content--sm': $breakpoint.is.smAndDown }"
    class="page__content"
  >
    <component
      :is="blok_.component | dashify"
      v-for="blok_ in blok.content"
      :key="blok_._uid"
      :blok="blok_"
    />
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style scoped lang="scss">
@import '~assets/_variables.scss';

.page__content {
  margin: 0 $content-spacing;
  margin-bottom: 50px;
}

.page__content--sm {
  margin: 0 $content-spacing-sm;
  margin-bottom: 40px;
}
</style>
