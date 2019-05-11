<template>
  <div v-editable="blok" class="page">
    <component
      :is="blok_.component | dashify"
      v-for="blok_ in blok.body"
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
.page {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  flex: auto;
}
</style>
