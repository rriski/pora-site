<template>
  <div v-editable="blok" class="collapse__text">
    <component
      :is="formatted_text.component | dashify"
      v-for="formatted_text in blok.text"
      :key="formatted_text._uid"
      :blok="formatted_text"
      :elevation="'elevation-0'"
    />
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
