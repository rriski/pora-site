<template>
  <div class="text-xs-center">
    <v-menu open-on-hover offset-y>
      <template v-slot:activator="{ on }">
        <v-btn flat v-on="on">
          Language
        </v-btn>
      </template>
      <v-list>
        <v-list-tile>
          <span class="flag flag-icon flag-icon-fi" />
          <v-list-tile-title>
            <nuxt-link :to="'/fi/etusivu'">
              Suomi
            </nuxt-link>
          </v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <span class="flag flag-icon flag-icon-gb" />
          <v-list-tile-title>
            <nuxt-link :to="'/en/etusivu'">
              English
            </nuxt-link>
          </v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <span class="flag flag-icon flag-icon-nl" />
          <v-list-tile-title>
            <nuxt-link :to="'/nl/etusivu'">
              Netherlands
            </nuxt-link>
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import 'flag-icon-css/css/flag-icon.css'
export default {}
</script>

<style scoped lang="scss">
.flag {
  margin-right: 5px;
}
</style>
