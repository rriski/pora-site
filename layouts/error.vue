<template>
  <div class="container error__container">
    <v-card v-if="lang === 'fi'" class="elevation-3 pa-4">
      <h1 v-if="error.statusCode === 404">Sivua ei löytynyt</h1>
      <h1 v-else>Tapahtui virhe</h1>
      <nuxt-link to="/fi/etusivu">Siirry etusivulle</nuxt-link>
    </v-card>
    <v-card v-else-if="lang === 'nl'" class="elevation-3 pa-4">
      <h1 v-if="error.statusCode === 404">Pagina niet gevonden</h1>
      <h1 v-else>Er is een fout opgetreden</h1>
      <nuxt-link to="/nl/etusivu">Ga naar de voorpagina</nuxt-link>
    </v-card>
    <v-card v-else-if="lang === 'en'" class="elevation-3 pa-4">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occured</h1>
      <nuxt-link to="/en/etusivu">Go to the front page</nuxt-link>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['error'],
  computed: {
    lang() {
      return this.$store.state.language
    }
  }
}
</script>

<style lang="scss">
.error__container {
  text-align: center;
}
</style>
