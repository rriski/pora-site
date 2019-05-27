<template>
  <v-breadcrumbs v-editable="blok" :items="items" divider=">" />
</template>

<script>
export default {
  props: ['blok'],
  computed: {
    items: function() {
      const map = []
      const lang = this.$store.state.language.toUpperCase()
      const firstItem = {
        text: lang,
        disabled: true
      }

      map.push(firstItem)
      const items = this.blok.path.split('/')

      items.forEach(i => {
        i = {
          text: i,
          disabled: true
        }
        return map.push(i)
      })

      return map
    }
  }
}
</script>
