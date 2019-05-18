<template>
  <v-toolbar app>
    <Logo class="hidden-sm-and-down" />
    <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="openDrawer" />
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        v-for="item in singleMenus"
        :key="item._uid"
        color="white"
        flat
        :ripple="false"
      >
        <nuxt-link :to="'/' + item.link.cached_url">
          {{ item.title }}
        </nuxt-link>
      </v-btn>
      <v-menu
        v-for="item in subMenus"
        :key="item._uid"
        top
        transition="slide-y-transition"
      >
        <template v-slot:activator="{ on }">
          <v-btn dark flat :ripple="false" v-on="on">
            {{ item.title }}
          </v-btn>
        </template>
        <v-list>
          <v-list-tile
            v-for="submenu_item in item.submenu"
            :key="submenu_item._uid"
            flat
          >
            <v-list-tile-title>
              <nuxt-link :to="'/' + submenu_item.link.cached_url">
                {{ submenu_item.title }}
              </nuxt-link>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
    <v-spacer />
    <LanguagePicker />
  </v-toolbar>
</template>

<script>
import Logo from '~/components/Logo.vue'
import LanguagePicker from '~/components/LanguagePicker.vue'

export default {
  components: {
    Logo,
    LanguagePicker
  },
  props: ['blok'],
  computed: {
    singleMenus: function() {
      return this.$store.state.settings.main_menu.filter(
        x => x.submenu.length === 0
      )
    },
    subMenus: function() {
      return this.$store.state.settings.main_menu.filter(
        x => x.submenu.length > 0
      )
    }
  },
  methods: {
    openDrawer() {
      this.$store.commit('setDrawer', true)
    }
  }
}
</script>
