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
