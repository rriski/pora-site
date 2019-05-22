<template>
  <div v-editable="blok">
    <v-card :class="[getElevation, getPadding]">
      <div class="text__container" v-html="content"></div>
    </v-card>
  </div>
</template>

<script>
import md from 'markdown-it'

export default {
  props: ['blok', 'elevation', 'padding'],
  data: function() {
    return {
      content: null
    }
  },
  computed: {
    getElevation() {
      return this.elevation || 'elevation-3'
    },
    getPadding() {
      return this.padding || 'pa-4'
    }
  },
  watch: {
    content: 'contentUpdated'
  },
  mounted() {
    this.addListeners()
  },
  beforeDestroy() {
    this.removeListeners()
  },
  created() {
    this.content = md('commonmark').render(this.blok.text)
  },
  methods: {
    navigate(event) {
      let target = event.target
      let i = 0
      // Go throught 5 parents max to find a tag
      while (
        i < 5 &&
        !(target instanceof HTMLAnchorElement) &&
        target.parentNode
      ) {
        target = target.parentNode
        i++
      }
      // If target is still not a link, ignore
      if (!(target instanceof HTMLAnchorElement)) return
      const href = target.getAttribute('href')
      // Get link target, if local link, navigate with router link
      if (href && href[0] === '/') {
        event.preventDefault()
        this.$router.push(href)
      }
    },
    contentUpdated() {
      this.removeListeners()
      this.$nextTick(() => {
        this.addListeners()
      })
    },
    addListeners() {
      this._links = this.$el.getElementsByTagName('a')
      for (let i = 0; i < this._links.length; i++) {
        this._links[i].addEventListener('click', this.navigate, false)
      }
    },
    removeListeners() {
      for (let i = 0; i < this._links.length; i++) {
        this._links[i].removeEventListener('click', this.navigate, false)
      }
      this._links = []
    }
  }
}
</script>

<style lang="scss">
@import '~assets/_variables.scss';

.text__container a {
  color: $link-color;
  border-bottom: 2px solid $link-color;

  &:hover,
  &:focus {
    color: $link-color-hover;
  }
}

.text__container a:hover {
  border-bottom: 2px solid $link-color-hover;
}
</style>
