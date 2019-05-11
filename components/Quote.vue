<template>
  <div
    :class="{
      'quote__container--sm': $breakpoint.is.smAndDown
    }"
    class="quote__container"
  >
    <span class="quote__text">"{{ quote.text }}"</span>
    <span
      :class="{
        'quote__author--sm': $breakpoint.is.smAndDown
      }"
      class="quote__author"
    >
      -{{ quote.author }}
    </span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      quote: ''
    }
  },
  computed: {
    quotes: function() {
      return this.$store.state.settings.quotes
    }
  },
  watch: {
    $route(to, from) {
      this.quote = this.randomQuote()
    }
  },
  created() {
    this.quote = this.randomQuote()
  },
  methods: {
    randomQuote() {
      const rand = Math.floor(Math.random() * this.quotes.length)
      return this.quotes[rand]
    }
  }
}
</script>

<style lang="scss" scoped>
.quote__container {
  margin: 0 auto;
  padding: 0;
  max-width: 600px;
}

.quote__container--sm {
  max-width: 250px;
}

.quote__text,
.quote__author {
  margin: 0;
}

.quote__author {
  font-style: italic;
}

.quote__author--sm {
  display: block;
}
</style>
