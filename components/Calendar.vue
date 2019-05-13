<template>
  <div>
    <v-flex xs12 class="mb-3 calendar__container">
      <v-sheet>
        <v-calendar
          ref="calendar"
          v-model="today"
          :value="today"
          :weekdays="weekdays"
          :class="{ 'calendar--sm': $breakpoint.is.smAndDown }"
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
                    v-ripple
                    class="event"
                    :class="{ 'event--sm': $breakpoint.is.smAndDown }"
                    v-on="on"
                    v-html="
                      event.startTime +
                        '-' +
                        event.endTime +
                        '<br />' +
                        event.summary
                    "
                  />
                </template>
                <v-card
                  v-if="event.summary"
                  color="grey lighten-4"
                  min-width="350px"
                  flat
                >
                  <v-toolbar color="secondary">
                    <v-toolbar-title
                      v-html="
                        event.summary +
                          ' ' +
                          event.startTime +
                          '-' +
                          event.endTime
                      "
                    />
                  </v-toolbar>
                  <v-card-title primary-title>
                    <div class="calendar__card__text">
                      <div
                        v-if="event.description"
                        v-html="'<b>Description</b>: ' + event.description"
                      />
                      <div
                        v-else-if="event.summary"
                        v-html="'<b>Description</b>: ' + event.summary"
                      />
                      <div
                        v-if="event.location"
                        v-html="'<b>Location:</b> ' + event.location"
                      />
                    </div>
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
        const startParts = e.start.dateTime.slice(0, -1).split('T')
        const endParts = e.end.dateTime.slice(0, -1).split('T')
        e = {
          description: e.description,
          summary: e.summary,
          location: e.location,
          date: startParts[0],
          startTime: startParts[1].split('+')[0].slice(0, 5),
          endTime: endParts[1].split('+')[0].slice(0, 5)
        }
        return (map[e.date] = map[e.date] || []).push(e)
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
.calendar--sm {
  font-size: 0.7rem;
}

.event {
  border-radius: 2px;
  background-color: #455a64;
  color: #ffffff;
  border: 1px solid #455a64;
  width: 100%;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
  flex: 1 1 auto;
}

.event--sm {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.calendar__card__text {
  color: black;
  display: block;
}
</style>
