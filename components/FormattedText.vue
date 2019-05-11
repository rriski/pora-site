<template>
  <div v-editable="blok">
    <v-card :class="elevation" class="pa-4">
      <div v-html="content"></div>
    </v-card>
  </div>
</template>

<script>
import md from 'markdown-it'

export default {
  props: ['blok', 'elevation'],
  data: function() {
    return {
      content: null
    }
  },
  computed: {
    getElevation() {
      return this.elevation || 'elevation-3'
    }
  },
  created() {
    this.content = md('commonmark').render(this.blok.text)
  }
}
</script>
