<template>
  <div>
    <v-sheet height="50" color="rgb(235,243,243)">
      <center><h1>Donut Calculator</h1></center>
    </v-sheet>

    <v-sheet height="20" color="rgb(211,62,39,1)" />
    <v-container>
      <base-card>
        <div style="font-size: 25px" class="ma-2">
          <v-row>
            <v-col
              ><v-img
                max-height="50"
                max-width="50"
                src="../assets/donutCalc/donut.png"
              >
              </v-img>
            </v-col>
            <v-col>
              <v-btn>-</v-btn>
            </v-col>
            <v-col>
              <v-btn> +</v-btn>
            </v-col>
            <v-col>0</v-col>
          </v-row>
          <v-row>
            <v-col
              ><v-img
                max-height="50"
                max-width="50"
                src="../assets/donutCalc/bsandwhich.png"
              >
              </v-img>
            </v-col>
            <v-col>
              <v-btn>-</v-btn>
            </v-col>
            <v-col>
              <v-btn> +</v-btn>
            </v-col>
            <v-col>0</v-col>
          </v-row>
          <v-row>
            <v-col
              ><v-img
                max-height="50"
                max-width="50"
                src="../assets/donutCalc/coffee.png"
              >
              </v-img>
            </v-col>
            <v-col>
              <v-btn>-</v-btn>
            </v-col>
            <v-col>
              <v-btn> +</v-btn>
            </v-col>
            <v-col>0</v-col>
          </v-row>
          <v-row>
            <v-col
              ><v-img
                max-height="50"
                max-width="50"
                src="../assets/donutCalc/milk-juice.png"
              >
              </v-img>
            </v-col>
            <v-col>
              <v-btn>-</v-btn>
            </v-col>
            <v-col>
              <v-btn> +</v-btn>
            </v-col>
            <v-col>0</v-col>
          </v-row>
          <v-sheet height="15" />
          <v-divider />
          <v-sheet height="15" />
          <v-row
            ><v-col align="center"><strong>$ Total:</strong></v-col></v-row
          >
          <v-sheet height="15" />
          <v-divider />
          <v-sheet height="15" />
          <v-row>
            <v-col>
              <v-text-field
                label="Paid:"
                value="0.00"
                prefix="$"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row
            ><v-col align="center"><strong>Change:</strong></v-col></v-row
          >
          <v-divider />
          <v-sheet height="15" />
          <v-row
            ><v-col align="right"><v-btn><strong>Reset</strong></v-btn></v-col></v-row
          >
        </div>
      </base-card></v-container
    >
    <v-sheet height="20" color="rgb(235,243,243)" />
    <v-sheet height="75" color="rgb(235,243,243)" />
  </div>
</template>

<script>
export default {
  name: "DonutCalc",
  data() {
    return {
      items: [
        {
          src: require("../assets/groto.png"),
        },
        {
          src: require("../assets/ice.png"),
        },
        {
          src: require("../assets/barn-food.png"),
        },
        {
          src: require("../assets/barn.jpg"),
        },
        {
          src: require("../assets/priest.jpg"),
        },
        {
          src: require("../assets/dishes.jpg"),
        },
        {
          src: require("../assets/firetruck.jpg"),
        },
        {
          src: require("../assets/fishing.jpg"),
        },
        {
          src: require("../assets/mary.jpg"),
        },
        {
          src: require("../assets/Mass.jpg"),
        },
      ],
    };
  },
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 220;
        case "sm":
          return 400;
        case "md":
          return 500;
        case "lg":
          return 600;
        case "xl":
          return 800;
      }
      return 1000;
    },
  },

  components: {},
};
</script>
