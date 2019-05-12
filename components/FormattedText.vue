<template>
  <div v-editable="blok">
    <v-card :class="[getElevation, getPadding]">
      <div v-html="content"></div>
    </v-card>
  </div>
</template>

<script>
import md from 'markdown-it'

export default {
  props: ['blok', 'elevation', 'padding'],
  data: function() {
    return {
      content: null
    }
  },
  computed: {
    getElevation() {
      return this.elevation || 'elevation-3'
    },
    getPadding() {
      return this.padding || 'pa-4'
    }
  },
  created() {
    this.content = md('commonmark').render(this.blok.text)
  }
}
</script>
