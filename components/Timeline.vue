<template>
  <v-timeline v-editable="blok" :dense="$breakpoint.is.smAndDown">
    <v-timeline-item
      v-for="(item, index) in blok.timeline_items"
      :key="item._uid"
      color="#000"
      small
    >
      <template v-if="!$breakpoint.is.smAndDown" v-slot:opposite>
        <span
          :class="`headline font-weight-bold white--text`"
          v-text="item.year"
        />
      </template>
      <span
        v-if="$breakpoint.is.smAndDown"
        :class="`headline font-weight-bold white--text`"
        v-text="item.year"
      />
      <v-card v-slot:default class="elevation-2">
        <v-img v-if="item.image" :src="imgUrls[index]" />
        <v-card-title class="headline timeline__headline">
          {{ item.headline }}
        </v-card-title>
        <v-card-text>
          <p
            v-for="formatted_text in item.description"
            :key="formatted_text._uid"
          >
            {{ formatted_text.text }}
          </p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import { transformImage } from '~/services/transformImageService.js'

export default {
  props: ['blok'],
  computed: {
    slot: function() {
      return this.$breakpoint.is.smAndDown ? null : 'opposite'
    },
    imgUrls() {
      return this.blok.timeline_items.map(item => {
        const image = item.image
        const url = image
          ? transformImage(image, 'fit-in/400x400/filters:quality(100)')
          : ''
        return url
      })
    }
  }
}
</script>

<style lang="scss">
.timeline__headline {
  text-decoration: underline;
}
</style>
