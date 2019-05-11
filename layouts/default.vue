<template>
  <v-app dark>
    <Menu app />
    <MenuDrawer app />
    <v-content>
      <nuxt />
    </v-content>
    <Footer app />
  </v-app>
</template>

<script>
import Menu from '~/components/Menu.vue'
import MenuDrawer from '~/components/MenuDrawer.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Menu,
    MenuDrawer,
    Footer
  }
}
</script>

<style lang="scss">
@import '~assets/_variables.scss';

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  margin: 0;
}

.layout {
  min-height: 100vh;
}

a {
  color: $link-color;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  &:hover,
  &:focus {
    color: $link-color-hover;
  }
}

a:hover {
  border-bottom: 2px solid $link-color-hover;
}
</style>
