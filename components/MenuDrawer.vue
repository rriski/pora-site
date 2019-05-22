<template>
  <v-navigation-drawer
    v-if="$breakpoint.is.smAndDown"
    :value="drawer"
    fixed
    disable-resize-watcher
    @input="closeDrawer"
  >
    <v-icon class="drawer__icon" @click.stop="closeDrawer">close</v-icon>
    <LogoDrawer />
    <div class="drawer__list">
      <div v-for="item in singleMenus" :key="item._uid">
        <nuxt-link :to="'/' + item.link.cached_url">
          {{ item.title }}
        </nuxt-link>
      </div>
      <div v-for="item in subMenus" :key="item._uid" two-line>
        <div class="drawer__submenu__list">
          <span class="drawer__submenu__list__title">{{ item.title }}</span>
          <div
            v-for="submenu_item in item.submenu"
            :key="submenu_item._uid"
            class="drawer__submenu__list__subtitle"
          >
            <nuxt-link :to="'/' + submenu_item.link.cached_url">
              {{ submenu_item.title }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
import LogoDrawer from '~/components/LogoDrawer.vue'

export default {
  components: {
    LogoDrawer
  },
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
    },
    drawer: function() {
      return this.$store.state.drawer
    }
  },
  methods: {
    closeDrawer: function(e) {
      if (!e || e.target) {
        setTimeout(() => this.$store.commit('setDrawer', false), 200)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/_variables.scss';

.drawer__list {
  margin: 20px 0 0 50px;

  & * {
    font-size: 1.5rem;
  }
}

.drawer__icon {
  float: right;
  padding: 10px;
}

.drawer__submenu__list {
  display: flex;
  flex-direction: column;
}

.drawer__submenu__list__title {
  color: darken(white, 50%);
}

.drawer__submenu__list__subtitle {
  margin-left: 30px;
}
</style>
