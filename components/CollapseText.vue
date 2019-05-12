<template>
  <div v-editable="blok" class="collapse__text">
    <component
      :is="formatted_text.component | dashify"
      v-for="formatted_text in blok.text"
      :key="formatted_text._uid"
      :blok="formatted_text"
      :elevation="'elevation-0'"
      :padding="padding"
    />
  </div>
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    padding() {
      return this.$breakpoint.is.smAndDown ? 'pa-0' : 'pa-4'
    }
  }
}
</script>
