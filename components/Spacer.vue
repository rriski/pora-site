<template>
  <div
    v-editable="blok"
    class="spacer"
    :style="{ height: blok.height + 'px' }"
  />
</template>

<script>
export default {
  props: ['blok']
}
</script>
