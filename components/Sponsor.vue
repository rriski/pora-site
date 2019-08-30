<template>
  <div
    :class="{
      'sponsor__container--sm': $breakpoint.is.smAndDown
    }"
    class="sponsor__container"
  >
    <img class="sponsor__img" src="~/assets/images/vichy.jpg" />
    <span class="sponsor__text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      text: 'Värska Vichy - PoRan virallinen juoma, luonnollisesti...'
    }
  }
}
</script>

<style lang="scss" scoped>
.sponsor__container {
  margin: 0;
  padding: 0;
  max-width: 400px;
  display: flex;
  align-items: center;
}

.sponsor__img {
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
}

.sponsor__container--sm {
  max-width: 250px;
}

.sponsor__text {
  margin: 0;
}
</style>
