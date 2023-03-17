<template>
  <div>
    <v-container>
      <v-card flat tile color="white">
        <v-row>
          <v-col>
            <v-img contain max-height="200" src="../assets/logo.png" />
          </v-col>
        </v-row>
        <v-row>
          <v-col align="end">
            <v-toolbar color="black" dark>
              <v-toolbar-title>TSG Admin Page</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-row justify="center">
                <v-dialog v-model="dialog2" persistent max-width="1000">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      style="background-color: white"
                      v-bind="attrs"
                      v-on="on"
                      outlined
                      depressed
                      rounded
                      color="black"
                      small
                      elevation="3"
                      ><v-icon left>{{ "mdi-calendar" }}</v-icon
                      >Add</v-btn
                    >
                  </template>
                  <v-card>
                    <v-form ref="form" v-model="form"  class="pa-4 pt-6">
                      <v-card-title>
                        <span class="text-h5">Create Event</span>
                      </v-card-title>

                      <v-container>
                        <v-card flat tile>
                          <v-row>
                            <v-row>
                              <v-col>
                                <v-text-field
                                  label="Event Name"
                                  counter
                                  maxlength="20"
                                  required
                                  v-model="name"
                                ></v-text-field>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col>
                                <v-container>
                                  <v-date-picker
                                    v-model="dates"
                                    multiple
                                    required
                                    value="YYYY-mm-dd"
                                  ></v-date-picker>
                                </v-container>
                              </v-col>

                              <v-col>
                                <v-menu
                                  ref="menu"
                                  v-model="menu"
                                  :close-on-content-click="false"
                                  :return-value.sync="dates"
                                  transition="scale-transition"
                                  offset-y
                                  min-width="auto"
                                >
                                  <template v-slot:activator="{ on, attrs }">
                                    <v-combobox
                                      v-model="dates"
                                      multiple
                                      chips
                                      small-chips
                                      label="Selected Dates"
                                      prepend-icon="mdi-calendar"
                                      readonly
                                      v-bind="attrs"
                                      v-on="on"
                                    ></v-combobox>
                                  </template>
                                </v-menu>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col>
                                <v-menu
                                  ref="menu1"
                                  v-model="menu1"
                                  :close-on-content-click="false"
                                  :nudge-right="40"
                                  :return-value.sync="startTime"
                                  transition="scale-transition"
                                  offset-y
                                  max-width="290px"
                                  min-width="290px"
                                >
                                  <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                      v-model="startTime"
                                      label="Pick start time."
                                      prepend-icon="mdi-clock-time-four-outline"
                                      required
                                      readonly
                                      v-bind="attrs"
                                      v-on="on"
                                    ></v-text-field>
                                  </template>
                                  <v-time-picker
                                    v-if="menu1"
                                    v-model="startTime"
                                    full-width
                                    @click:minute="$refs.menu1.save(startTime)"
                                  ></v-time-picker>
                                </v-menu>
                              </v-col>
                              <v-col>
                                <v-menu
                                  ref="menu2"
                                  v-model="menu2"
                                  :close-on-content-click="false"
                                  :nudge-right="40"
                                  :return-value.sync="endTime"
                                  transition="scale-transition"
                                  offset-y
                                  max-width="290px"
                                  min-width="290px"
                                >
                                  <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                      v-model="endTime"
                                      label="Pick end time."
                                      prepend-icon="mdi-clock-time-four-outline"
                                      required
                                      readonly
                                      v-bind="attrs"
                                      v-on="on"
                                    ></v-text-field>
                                  </template>
                                  <v-time-picker
                                    v-if="menu2"
                                    v-model="endTime"
                                    full-width
                                    @click:minute="$refs.menu2.save(endTime)"
                                  ></v-time-picker>
                                </v-menu>
                              </v-col>
                            </v-row>
                            <v-row class="ma-4">
                              <v-col cols="6">
                                <v-select
                                  :style="select.style"
                                  v-model="select"
                                  :items="items"
                                  item-text="name"
                                  label="Color"
                                  persistent-hint
                                  return-object
                                  single-line
                                  @change="colorChange(select.color)"
                                >
                                  <template #item="{ item }">
                                    <v-icon :color="item.name">{{
                                      item.name
                                    }}</v-icon>
                                  </template></v-select
                                >
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col class="ma-4">
                                <v-textarea
                                  v-model="address"
                                  counter
                                  maxlength="100"
                                  auto-grow
                                  color="#272727"
                                  label="Address"
                                  outlined
                                  rows="3"
                                  type="text"
                                ></v-textarea>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col class="ma-4">
                                <v-textarea
                                  v-model="details"
                                  counter
                                  maxlength="100"
                                  auto-grow
                                  color="#272727"
                                  label="Details"
                                  outlined
                                  rows="5"
                                  type="text"
                                ></v-textarea>
                              </v-col>
                            </v-row>
                          </v-row>
                        </v-card>
                      </v-container>
                  

                    <v-card-actions>
                      <v-btn
                        :disabled="!form"
                        color="black"
                        text
                        @click="submit()"
                      >
                        Create
                      </v-btn>

                      <v-spacer />
                      <v-btn
                        color="black"
                        text
                        @click="(dialog2 = false), close()"
                      >
                        Cancel
                      </v-btn>
                    </v-card-actions>
                   </v-form>
                  </v-card>
                </v-dialog>
              </v-row>
              <v-spacer />
              <v-col>
                <h3>{{ currentUser }}</h3>

                <v-btn
                  class="ml-4"
                  light
                  rounded
                  x-small
                  @click.prevent="logOut"
                  >LogOut
                </v-btn>
              </v-col>
            </v-toolbar>
          </v-col>
        </v-row>
        <h3>{{ content }}</h3>

        <br />
        <div>
          <v-sheet tile height="70" class="d-flex">
            <v-toolbar flat>
              <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
                <v-icon x-large>mdi-chevron-left</v-icon>
              </v-btn>

              <v-btn icon class="ma-2" @click="$refs.calendar.next()">
                <v-icon x-large>mdi-chevron-right</v-icon>
              </v-btn>
              <v-toolbar-title v-if="$refs.calendar">
                {{ $refs.calendar.title }}
              </v-toolbar-title>
              <v-spacer />
              <v-menu>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    small
                    outlined
                    color="grey darken-2"
                    v-bind="attrs"
                    v-on="on"
                  >
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
            </v-toolbar>
          </v-sheet>
          <v-sheet height="550">
            <v-calendar
              ref="calendar"
              v-model="focus"
              color="primary"
              :weekdays="weekday"
              :type="type"
              show-month-on-first
              :events="displayEvents"
              :event-overlap-mode="mode"
              :event-overlap-threshold="30"
              @click:event="showEvent"
              @click:more="viewWeek"
            ></v-calendar>
            <v-menu
              v-model="selectedOpen"
              :close-on-content-click="false"
              :activator="selectedElement"
              offset-x
            >
              <v-card color="grey lighten-4" min-width="150px" flat>
                <v-toolbar :color="selectedEvent.color" dark>
                  <v-toolbar-title
                    v-html="selectedEvent.name"
                  ></v-toolbar-title>
                  <v-spacer></v-spacer>

                  <v-row justify="center">
                    <v-dialog v-model="dialog1" persistent max-width="290">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn dark v-bind="attrs" v-on="on" icon>
                          <v-icon>mdi-delete</v-icon>
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title class="text-h5">
                          Are you sure you want to delete event name:
                          {{ selectedEvent.name }} event ID:
                          {{ selectedEvent.eventID }} ?
                        </v-card-title>
                        <v-card-actions>
                          <v-btn
                            color="red"
                            text
                            @click="deleteEvent(selectedEvent.eventID)"
                          >
                            Yes
                          </v-btn>

                          <v-spacer />
                          <v-btn color="red" text @click="dialog1 = false">
                            No
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-row>
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
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import UserService from "../services/user.service";

export default {
  name: "AdminSection",
  data: () => ({
    form: false,
    dialog1: false,
    dialog2: false,
    type: "month",
    mode: "stack",
    weekday: [0, 1, 2, 3, 4, 5, 6],

    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    allEvents: [],
    name: undefined,
    startTime: "",
    endTime: "",
    select: {
      name: "purple",
      style: "background-color:#694bb7;",
      color: "#694bb7",
    },
    items: [
      { name: "purple", style: "background-color:#694bb7;", color: "#694bb7" },
      {
        name: "blue",
        style: "background-color:blue;",
        color: "blue",
      },
      { name: "cyan", style: "background-color:cyan;", color: "cyan" },
      {
        name: "red",
        style: "background-color:rgb(211,62,39,1);",
        color: "rgb(211,62,39,1)",
      },
      { name: "orange", style: "background-color:orange;", color: "orange" },
      { name: "green", style: "background-color:green;", color: "green" },
    ],
    color: "deep-purple",
    dates: [],
    details: undefined,
    address: undefined,
    postResult: null,
    menu: false,
    menu1: false,
    menu2: false,
    menu3: false,
    typeToLabel: {
      month: "Month",
      week: "Week",
    },
    focus: "",
    content: "",
  }),

  beforeMount() {
    this.getEvents();
  },

  computed: {
    displayEvents() {
      return this.allEvents;
    },
    currentUser() {
      return localStorage.getItem("username");
    },
  },

  methods: {
    getEvents() {
      UserService.getEvents().then(
        (response) => {
          this.allEvents = response.data;
        },
        (error) => {
          this.content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    },
    viewWeek({ date }) {
      console.log(date);
      this.focus = date;
      this.type = "week";
    },
    colorChange(newColor) {
      this.color = newColor;
    },
    close() {
      this.$emit("close");
    },
    submit() {
      this.$emit("submit");
      this.createEvent();
      this.$emit("close");
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

    fortmatResponse(res) {
      return JSON.stringify(res, null, 1);
    },

    async deleteEvent(selectedId) {
      const postData = new FormData();

      postData.append("id", selectedId);
      try {
        const res = await UserService.deleteEvent(postData);
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        this.postResult = this.fortmatResponse(result);
      } catch (err) {
        this.postResult = this.fortmatResponse(err.response?.data) || err;
        alert(
          "The server is not able to delete the event at this time. Please try again later."
        );
      }

      this.dialog1 = false;
      this.selectedOpen = false;
      this.getEvents();
    },

    async createEvent() {
      const postData = new FormData();

      postData.append("websiteID", 3);
      postData.append("name", this.name);
      postData.append("startTime", this.startTime);
      postData.append("endTime", this.endTime);
      postData.append("dates", this.dates);
      postData.append("color", this.color);
      postData.append("address", this.address);
      postData.append("details", this.details);
      try {
        const res = await UserService.addEvent(postData);
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        this.postResult = this.fortmatResponse(result);
      } catch (err) {
        this.postResult = this.fortmatResponse(err.response?.data) || err;
        alert("The server could not create the event. Please try again later.");
      }
      this.dialog2 = false;
    },

    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/");
    },
  },

  watch: {
    dialog2: function (val) {
      if (!val) {
        this.$refs.form.reset();
        this.name = "";
        this.startTime = "";
        this.endTime = "";
        this.dates = [];
        this.details = "";
        this.address = "";
        this.color = "deep-purple";
        this.select = {
          name: "purple",
          style: "background-color:#694bb7;",
          color: "#694bb7",
        };
        this.getEvents();
      }
    },
  },
};
</script>

<style scoped>
center {
  margin: 15vw;
}

h1 {
  color: var(--border);
  font-size: 2em;
}
</style>
