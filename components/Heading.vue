<template>
  <div v-editable="blok" class="title">{{ blok.title }}</div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
