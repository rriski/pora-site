<template>
  <div v-editable="blok" class="grid">
    <component
      :is="blok_.component | dashify"
      v-for="blok_ in blok.columns"
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
.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  grid-column-gap: 10px;
}
</style>
