<template>
  <div>
    <v-sheet tile height="54" class="d-flex">
      <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
        <v-icon x-large>mdi-chevron-left</v-icon>
      </v-btn>

      <v-btn icon class="ma-2" @click="$refs.calendar.next()">
        <v-icon x-large>mdi-chevron-right</v-icon>
      </v-btn>
      <v-toolbar-title v-if="$refs.calendar">
        {{ $refs.calendar.title }}
      </v-toolbar-title>
    </v-sheet>
    <v-sheet height="600">
      <v-calendar
        ref="calendar"
        v-model="value"
        color="primary"
        :weekdays="weekday"
        :type="type"
        show-month-on-first
        :events="allEvents"
        :event-overlap-mode="mode"
        :event-overlap-threshold="30"
        @change="getTBDSaturdays"
        @click:event="showEvent"
      ></v-calendar>
      <v-menu
        v-model="selectedOpen"
        :close-on-content-click="false"
        :activator="selectedElement"
        offset-x
      >
        <v-card color="grey lighten-4" min-width="150px" flat>
          <v-toolbar :color="selectedEvent.color" dark>
            <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <span v-html="selectedEvent.details"></span>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="secondary" @click="selectedOpen = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-sheet>
  </div>
</template>
<script>
export default {
  name: "EventPage",
  data: () => ({
    type: "month",
    mode: "stack",
    weekday: [5, 6, 0],
    value: "focus",
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    setEvents: [
      // {
      //   name: "Location ...",

      //   start: "2022-3-19 09:00",
      //   end: "2022-3-19 11:00",
      //   color: "#ff6347",
      //   timed: true,
      //   details:
      //     "Dunn Brothers Coffee Address: 919 Vermillion St Ste 140, Hastings, MN 55033 ",
      // },
      // {
      //   name: "Location ...",
      //   start: "2022-3-26 09:00",
      //   end: "2022-3-26 11:00",
      //   color: "cyan",
      //   timed: true,
      //   details: "Dunn Brothers Coffee Address: Saint Paul MN",
      // },
    ],
    allEvents: [],
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1",
    ],
  }),

  methods: {
    getTBDSaturdays({ start, end }) {
      const events = [];
      const lastJS = new Date(`${end.date}T23:59:59`);
      const now = new Date("2022-4-15");
      now.setHours(0, 0, 0, 0);
      const day = start;

      for (
        const dayJS = new Date(`${start.date}T00:00:00`);
        dayJS <= lastJS;
        dayJS.setDate(dayJS.getDate() + 1), day.day++
      ) {
        if (dayJS.getDay() === 6 && dayJS >= now) {
          events.push({
            name: "TBD",
            start: day.year + "-" + day.month + "-" + day.day + " 09:00",
            end: day.year + "-" + day.month + "-" + day.day + " 11:00",
            color: "deep-purple",
            details:
              "Confirmation of the location will be posted closer to the date. Please check back.",
            timed: false,
          });
        }
      }
      this.allEvents = events;
      this.allEvents.push(...this.setEvents);
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        requestAnimationFrame(() =>
          requestAnimationFrame(() => (this.selectedOpen = true))
        );
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        requestAnimationFrame(() => requestAnimationFrame(() => open()));
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
  },
};
</script>
