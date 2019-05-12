export function listEvents(gapi) {
  gapi.client.calendar.events
    .list({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      timeMin: new Date().toISOString(),
      singleEvents: true,
      orderBy: 'startTime'
    })
    .then(function(response) {
      return response.result.items
    })
}
