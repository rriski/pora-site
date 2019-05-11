import Vue from 'vue'

// Fixes vuetify breakpoints
// see: https://github.com/vuetifyjs/vuetify/issues/3436

Vue.prototype.$breakpoint = new Vue({
  data() {
    return {
      isMounted: false,
      default: {
        xs: true,
        xsOnly: true,
        xsAndUp: true,
        sm: false,
        smOnly: true,
        smAndDown: true,
        smAndUp: false,
        md: false,
        mdOnly: false,
        mdAndDown: true,
        mdAndUp: false,
        lg: false,
        lgOnly: false,
        lgAndDown: true,
        lgAndUp: false,
        xl: false,
        xlOnly: false,
        xlAndDown: true
      }
    }
  },
  computed: {
    is() {
      return Object.keys(this.$vuetify.breakpoint).reduce(
        (breakpoints, dim) => {
          breakpoints[dim] = this.breakpointWithDefault(dim)
          return breakpoints
        },
        {}
      )
    }
  },
  methods: {
    breakpointWithDefault(breakpoint) {
      return this.isMounted
        ? this.$vuetify.breakpoint[breakpoint]
        : this.$data.default[breakpoint]
    }
  }
})

export default function({ app }) {
  if (!app.mixins) {
    app.mixins = []
  }
  app.mixins.push({
    mounted() {
      this.$breakpoint.$data.isMounted = true
    }
  })
}
