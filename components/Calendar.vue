<template>
  <div>
    <v-flex xs12 class="mb-3 calendar__container">
      <v-sheet height="500">
        <v-calendar
          ref="calendar"
          v-model="today"
          :value="today"
          :weekdays="weekdays"
          color="secondary"
        >
          <template v-if="events.length < 1" v-slot:day="{ date }">
            <ContentLoader
              :height="100"
              primary-color="#808080"
              secondary-color="#444444"
              :animate="true"
            />
          </template>
          <template v-else v-slot:day="{ date }">
            <template v-for="event in eventsMap[date]">
              <v-menu
                :key="event.summary"
                v-model="event.open"
                full-width
                offset-x
              >
                <template v-slot:activator="{ on }">
                  <div
                    v-if="!event.time"
                    v-ripple
                    class="event"
                    v-on="on"
                    v-html="event.summary"
                  />
                </template>
                <v-card
                  v-if="event.description"
                  color="grey lighten-4"
                  min-width="350px"
                  flat
                >
                  <v-toolbar color="secondary">
                    <v-toolbar-title v-html="event.summary" />
                  </v-toolbar>
                  <v-card-title primary-title>
                    <span
                      class="calendar__card__description"
                      v-html="event.description"
                    />
                  </v-card-title>
                  <v-card-actions>
                    <v-btn color="secondary">
                      <v-icon>close</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-menu>
            </template>
          </template>
        </v-calendar>
      </v-sheet>
    </v-flex>
    <v-flex xs12>
      <v-btn @click="$refs.calendar.prev()">
        <v-icon dark left>
          keyboard_arrow_left
        </v-icon>
      </v-btn>
      <v-btn @click="$refs.calendar.next()">
        <v-icon right dark>
          keyboard_arrow_right
        </v-icon>
      </v-btn>
    </v-flex>
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'

export default {
  components: {
    ContentLoader
  },
  props: ['blok'],
  data: () => ({
    today: new Date().toISOString().split('T')[0],
    weekdays: [1, 2, 3, 4, 5, 6, 0],
    events: [],
    uniqueKey: ''
  }),
  computed: {
    // convert the list of events into a map of lists keyed by date
    eventsMap() {
      const map = {}
      this.events.forEach(e => {
        const parts = e.start.dateTime.slice(0, -1).split('T')
        const date = parts[0]
        e.date = date
        return (map[date] = map[date] || []).push(e)
      })

      return map
    }
  },
  mounted() {
    this.$getGapiClient().then(gapi => {
      gapi.client.calendar.events
        .list({
          calendarId: 'miqv1ra1mb1878p9d5766i8a7g@group.calendar.google.com',
          timeMin: new Date().toISOString(),
          maxResults: 10,
          singleEvents: true,
          orderBy: 'startTime'
        })
        .then(response => {
          this.events = response.result.items
        })
    })
  },
  methods: {
    open(event) {
      alert(event.title)
    }
  }
}
</script>

<style lang="scss" scoped>
.event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #455a64;
  color: #ffffff;
  border: 1px solid #455a64;
  width: 100%;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
}

.calendar__card__description {
  color: black;
}
</style>
