<template>
  <div style="border: solid; border-color: black; border-width: 6px" class="my-2">
    <v-row>
      <v-col>
        <v-sheet tile>
          <v-toolbar flat height="200px">
            <v-container>
              <v-row>
                <v-row align="center">
                  <v-btn icon class="ma-2" @click="prev">
                    <v-icon x-large>mdi-chevron-left</v-icon>
                  </v-btn>

                  <v-btn icon class="ma-2" @click="next">
                    <v-icon x-large>mdi-chevron-right</v-icon>
                  </v-btn>
                  <v-toolbar-title v-if="calendarTitle">
                    {{ calendarTitle }}
                  </v-toolbar-title>
                </v-row>
                <v-row>
                  <v-spacer />
                  <v-menu>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn outlined small color="grey darken-2" v-bind="attrs" v-on="on">
                        <span>{{ typeToLabel[type] }}</span>
                        <v-icon right> mdi-menu-down </v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item @click="type = 'week'">
                        <v-list-item-title>Week</v-list-item-title>
                      </v-list-item>
                      <v-list-item @click="type = 'month'">
                        <v-list-item-title>Month</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                  <v-spacer />
                </v-row>
              </v-row>
            </v-container>
          </v-toolbar>
        </v-sheet>
        <v-sheet height="550px">
          <v-calendar ref="calendar" v-model="focus" color="primary" :weekdays="weekday" :type="type" show-month-on-first
            :events="displayEvents" :event-overlap-mode="mode" :event-overlap-threshold="30" @click:event="showEvent"
            @mouseenter:event="showEvent" @click:more="viewWeek" height="100%"></v-calendar>
          <v-menu v-model="selectedOpen" :close-on-content-click="false" :activator="selectedElement" offset-x>
            <v-card color="grey lighten-4" min-width="150px" flat>
              <v-toolbar :color="selectedEvent.color" dark>
                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <span v-html="'Start time: ' + selectedEvent.start"></span>
                <br />
                <span v-html="'End time: ' + selectedEvent.end"></span>
                <br />
                <span v-html="'Address: ' + selectedEvent.address"></span>
                <br />
                <span v-html="'Details: ' + selectedEvent.details"></span>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="secondary" @click="selectedOpen = false">
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-sheet>
      </v-col></v-row>
  </div>
</template>
<script>
//import UserServices from "../../services/user.service";

export default {
  name: "EventPage",
  data: () => ({
    type: "month",
    mode: "stack",
    weekday: [0, 1, 2, 3, 4, 5, 6],
    value: "focus",
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    setEvents: [],
    allEvents: [
      {
      "eventID": 0,
      "websiteID": 2,
      "name": "Donut Sunday",
      "start": "2023-09-10 06:30",
      "end": "2023-09-10 11:30",
      "color": "blue",
      "details": "Serve donuts after all Mass Times ",
      "address": "St. Agnes"
    },{
      "eventID": 1,
      "websiteID": 2,
      "name": "First Meeting",
      "start": "2023-09-11 18:30",
      "end": "2023-09-11 20:00",
      "color": "red",
      "details": "TSG 121 Meeting",
      "address": "TBD"
    }
  ],

    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1",
    ],
    typeToLabel: {
      month: "Month",
      week: "Week",
    },
    focus: "",
    calendarTitle: "",
  }),

  beforeMount() {
    //this.getEvents();

  },




  mounted() {
    this.$nextTick(() => {
      if (this.$refs.calendar) {
        this.calendarTitle = this.$refs.calendar.title;
      }
    });
  },
  // watch: {
  //   'focus': function () {
  //     if (this.$refs.calendar) {
  //       this.calendarTitle = this.$refs.calendar.title;
  //     }
  //   },
  // },



  computed: {
    displayEvents() {
      return this.allEvents;
    },
  },

  methods: {

    next() {
      this.$refs.calendar.next();
      this.$nextTick(() => {
        this.calendarTitle = this.$refs.calendar.title;
      });
    },
    prev() {
      this.$refs.calendar.prev();
      this.$nextTick(() => {
        this.calendarTitle = this.$refs.calendar.title;
      });
    },
    viewWeek({ date }) {
      console.log(date);
      this.focus = date;
      this.type = "week";
    },
    // getEvents() {
    //   UserServices.getEvents().then(
    //     (response) => {
    //       this.allEvents = response.data;
    //     },
    //     (error) => {
    //       console.log(
    //         (error.response && error.response.data) ||
    //           error.message ||
    //           error.toString()
    //       );
    //     }
    //   );
    // },
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
    hideEvent({ nativeEvent, event }) {
      const close = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        requestAnimationFrame(() =>
          requestAnimationFrame(() => (this.selectedOpen = false))
        );
      };

      if (this.selectedOpen) {
        this.selectedOpen = true;
        requestAnimationFrame(() => requestAnimationFrame(() => close()));
      } else {
        close();
      }

      nativeEvent.stopPropagation();
    },
  },
};
</script>