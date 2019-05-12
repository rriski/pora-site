import Vue from 'vue'
import VueGAPI from 'vue-gapi'

const apiConfig = {
  apiKey: process.env.GOOGLE_API_KEY,
  clientId: process.env.GOOGLE_CLIENT_ID,
  discoveryDocs: [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
  ],
  scope: 'https://www.googleapis.com/auth/calendar.readonly'
}

Vue.use(VueGAPI, apiConfig)
