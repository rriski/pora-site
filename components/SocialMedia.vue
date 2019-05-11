<template>
  <div>
    <a href="https://www.facebook.com/Polyteknikkojenraittiusseura/">
      <fa :icon="['fab', 'facebook-square']" class="icon" :class="faSize" />
    </a>
    <a href="https://www.instagram.com/raittiusseura/">
      <fa :icon="['fab', 'instagram']" class="icon" :class="faSize" />
    </a>
  </div>
</template>

<script>
export default {
  computed: {
    faSize: function() {
      const smAndDown = this.$breakpoint.is.smAndDown
      return smAndDown ? 'fa-2x' : 'fa-3x'
    }
  }
}
</script>

<style scoped lang="scss">
.icon {
  margin-right: 10px;
}

a:hover {
  border-bottom: none;
}
</style>
