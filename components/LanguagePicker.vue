<template>
  <div class="text-xs-center">
    <v-menu
      :open-on-hover="!$breakpoint.is.smAndDown"
      offset-y
      transition="slide-y-transition"
    >
      <template v-slot:activator="{ on }">
        <v-btn flat v-on="on">
          Language
        </v-btn>
      </template>
      <v-list>
        <v-list-tile>
          <span
            :style="{ 'background-image': 'url(' + fi + ')' }"
            class="flag flag-icon flag-icon-fi"
          />
          <v-list-tile-title>
            <nuxt-link :to="'/fi/etusivu'">
              Suomi
            </nuxt-link>
          </v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <span
            :style="{ 'background-image': 'url(' + nl + ')' }"
            class="flag flag-icon flag-icon-nl"
          />
          <v-list-tile-title>
            <nuxt-link :to="'/nl/etusivu'">
              Netherlands
            </nuxt-link>
          </v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <span
            :style="{ 'background-image': 'url(' + en + ')' }"
            class="flag flag-icon"
          />
          <v-list-tile-title>
            <nuxt-link :to="'/en/etusivu'">
              English
            </nuxt-link>
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import fi from 'flag-icon-css/flags/4x3/fi.svg'
import nl from 'flag-icon-css/flags/4x3/nl.svg'
import en from 'flag-icon-css/flags/4x3/gb.svg'

export default {
  data() {
    return {
      fi: fi,
      nl: nl,
      en: en
    }
  }
}
</script>

<style scoped lang="scss">
.flag {
  margin-right: 5px;
}

.flag-icon-background {
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
}

.flag-icon {
  @extend .flag-icon-background;
  position: relative;
  display: inline-block;
  width: (4 / 3) * 1em;
  line-height: 1em;
  &:before {
    content: '\00a0';
  }
}
</style>
