<template>
  <v-breadcrumbs :items="items" divider=">" />
</template>

<script>
export default {
  computed: {
    items: function() {
      const arr = this.$route.path
        .split('/')
        .slice(1)
        .map(this.capitalizeFirstLetter)

      if (arr[0] === '') {
        arr.shift()
      }

      return arr.reduce((acc, item, index) => {
        const prevHref = acc[index - 1] ? acc[index - 1].href : ''

        const isDisabled =
          item === arr[0] || (item === arr[1] && arr.length > 2)
        return [
          ...acc,
          {
            text: item,
            disabled: isDisabled,
            href: prevHref + '/' + item.toLowerCase()
          }
        ]
      }, [])
    }
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>
