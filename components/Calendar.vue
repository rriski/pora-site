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
              <v-menu :key="event.summary" full-width offset-x>
                <template v-slot:activator="{ on }">
                  <div
                    v-if="event.startTime"
                    v-ripple
                    class="event"
                    :class="{ 'event--sm': $breakpoint.is.smAndDown }"
                    v-on="on"
                    v-html="
                      '<b>' +
                        event.startTime +
                        '-' +
                        event.endTime +
                        '</b>' +
                        '<br />' +
                        event.summary
                    "
                  />
                  <div
                    v-else
                    v-ripple
                    class="event"
                    :class="{ 'event--sm': $breakpoint.is.smAndDown }"
                    v-on="on"
                    v-html="event.summary"
                  />
                </template>
                <v-card color="grey lighten-4" flat>
                  <v-toolbar color="secondary">
                    <v-toolbar-title v-html="event.summary" />
                  </v-toolbar>
                  <v-card-title primary-title>
                    <div class="calendar__card__text">
                      <div
                        v-if="event.startTime"
                        v-html="
                          '<b>Time</b>: ' +
                            event.startTime +
                            '-' +
                            event.endTime
                        "
                      />
                      <div
                        v-if="event.description"
                        v-html="'<b>Description</b>:' + event.description"
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
        const dates = []

        const { start, end, summary, description, location } = e

        if (start.dateTime) {
          // Event with a date and time
          const startParts = start.dateTime.slice(0, -1).split('T')
          const endParts = end.dateTime.slice(0, -1).split('T')

          e = {
            description: description,
            summary: summary,
            location: location,
            date: startParts[0],
            startTime: startParts[1].split('+')[0].slice(0, 5),
            endTime: endParts[1].split('+')[0].slice(0, 5)
          }
          dates.push(e)
        } else {
          // Multi day events
          const endDate = new Date(end.date)

          let loop = new Date(start.date)
          while (loop < endDate) {
            e = {
              description: description,
              summary: summary,
              location: location,
              date: loop.toISOString().split('T')[0]
            }
            dates.push(e)

            const newDate = loop.setDate(loop.getDate() + 1)
            loop = new Date(newDate)
          }
        }

        dates.forEach(d => (map[d.date] = map[d.date] || []).push(d))
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
          maxResults: 250,
          singleEvents: true,
          orderBy: 'startTime'
        })
        .then(response => {
          this.events = response.result.items
        })
    })
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
}
</style>
