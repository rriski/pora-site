<template>
  <div v-editable="blok">
    <v-expansion-panel v-model="panels" expand>
      <v-expansion-panel-content
        v-for="panel in blok.panels"
        :key="panel._uid"
        :header="panel.title"
      >
        <template v-slot:header>
          <div>{{ panel.title }}</div>
        </template>
        <v-card>
          <v-container grid-list-md fluid>
            <v-layout
              class="collapse__layout"
              align-center
              row
              fill-height
              wrap
            >
              <v-flex
                v-for="content in panel.content"
                :key="content._uid"
                xs12
                md6
                shrink
              >
                <component :is="content.component | dashify" :blok="content" />
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  data() {
    return {
      panels: this.blok.panels.map((p, i) => i === 0)
    }
  }
}
</script>

<style scoped lang="scss">
.collapse__layout {
  min-height: 100%;
}
</style>
