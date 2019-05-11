<template>
  <div
    :class="{ 'logo__container--sm': $breakpoint.is.smAndDown }"
    class="logo__container"
  >
    <img class="logo__img" src="~/assets/images/pora-logo-white.png" />
  </div>
</template>

<style scoped lang="scss">
@import '~assets/_variables.scss';

.logo__container {
  height: 44px;
  margin: 10px 80px;
  padding-left: $content-spacing;
}

.logo__container--sm {
  height: 34px;
  margin: 0;
  padding-left: $content-spacing-sm;
}

.logo__img {
  height: 100%;
  display: block;
}
</style>
