<template>
  <div class="container error__container">
    <v-card class="elevation-3 pa-4">
      <h1 v-if="error.statusCode === 404">Sivua ei löytynyt</h1>
      <h1 v-else>Tapahtui virhe</h1>
      <nuxt-link to="/">Etusivulle</nuxt-link>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style lang="scss">
.error__container {
  text-align: center;
}
</style>
