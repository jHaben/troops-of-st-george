<template>
  <div>
    <v-sheet height="50" color="rgb(235,243,243)">
      <center><h1>Donut Calculator</h1></center>
    </v-sheet>

    <v-sheet height="20" color="rgb(211,62,39,1)" />
    <v-container>
      <center>
        <base-card max-width="325" min-width="325">
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
                <v-btn @click="minusItem('donut')"
                  ><v-icon>{{ "mdi-minus" }}</v-icon></v-btn
                >
              </v-col>
              <v-col>
                <v-btn @click="addItem('donut')">
                  <v-icon>{{ "mdi-plus" }}</v-icon></v-btn
                >
              </v-col>
              <v-col>{{ donut }}</v-col>
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
                <v-btn @click="minusItem('sandwhich')"
                  ><v-icon>{{ "mdi-minus" }}</v-icon></v-btn
                >
              </v-col>
              <v-col>
                <v-btn @click="addItem('sandwhich')">
                  <v-icon>{{ "mdi-plus" }}</v-icon></v-btn
                >
              </v-col>
              <v-col>{{ sandwhich }}</v-col>
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
                <v-btn @click="minusItem('coffee')"
                  ><v-icon>{{ "mdi-minus" }}</v-icon></v-btn
                >
              </v-col>
              <v-col>
                <v-btn @click="addItem('coffee')">
                  <v-icon>{{ "mdi-plus" }}</v-icon></v-btn
                >
              </v-col>
              <v-col>{{ coffee }}</v-col>
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
                <v-btn @click="minusItem('drink')"
                  ><v-icon>{{ "mdi-minus" }}</v-icon></v-btn
                >
              </v-col>
              <v-col>
                <v-btn @click="addItem('drink')">
                  <v-icon>{{ "mdi-plus" }}</v-icon></v-btn
                >
              </v-col>
              <v-col>{{ drink }}</v-col>
            </v-row>

            <v-sheet height="15" />
            <v-row
              ><v-col align="center"
                ><strong>Total: $ {{ getTotal }}</strong></v-col
              ></v-row
            >
            <v-sheet height="15" />
            <v-divider />
            <v-sheet height="15" />
            <v-row
              ><v-col align="left"
                ><strong>Amount Paid: $ {{ getPaid }} </strong></v-col
              ></v-row
            >
            <v-row>
              <v-col>
                <v-btn rounded>7</v-btn>
              </v-col>
              <v-col>
                <v-btn rounded>8</v-btn>
              </v-col>
              <v-col>
                <v-btn rounded>9</v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn rounded>4</v-btn>
              </v-col>
              <v-col>
                <v-btn rounded>5</v-btn>
              </v-col>
              <v-col>
                <v-btn rounded>6</v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn rounded>1</v-btn>
              </v-col>
              <v-col>
                <v-btn rounded>2</v-btn>
              </v-col>
              <v-col>
                <v-btn rounded>3</v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col> </v-col>
              <v-col>
                <v-btn rounded>0</v-btn>
              </v-col>
              <v-col> <v-btn rounded @click="setPaid">C</v-btn></v-col>
            </v-row>
            <v-sheet height="15" />
            <v-divider />
            <v-sheet height="15" />
            <v-row
              ><v-col align="center"
                ><strong>Change: $ {{ getChange }}</strong></v-col
              ></v-row
            >
            <v-divider />
            <v-sheet height="15" />
            <v-row
              ><v-col align="right"
                ><v-btn @click="reset"><strong>Reset</strong></v-btn></v-col
              ></v-row
            >
          </div>
        </base-card>
      </center></v-container
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
      donut: 0,
      sandwhich: 0,
      coffee: 0,
      drink: 0,
      total: 0,
      paid: 0,
    };
  },

  computed: {
    getTotal() {
      var num =
        this.donut * 1.25 +
        this.sandwhich * 3 +
        this.coffee +
        this.drink * 0.75;
      return num.toFixed(2);
    },

    getPaid() {
      var num = this.paid;
      return num.toFixed(2);
    },
    getChange() {
      var num = this.paid - this.total;
      return num.toFixed(2);
    },
  },
  methods: {
    addItem(item) {
      this[item]++;
      this.setTotal();
    },

    minusItem(item) {
      if (this[item] > 0) {
        this[item]--;
      } else {
        this[item] = 0;
      }
      this.setTotal();
      return;
    },

    setTotal() {
      this.total =
        this.donut * 1.25 +
        this.sandwhich * 3 +
        this.coffee +
        this.drink * 0.75;
    },

    setPaid() {
      this.paid = 50;
    },

    reset() {
      this.donut = 0;
      this.sandwhich = 0;
      this.coffee = 0;
      this.drink = 0;
      this.total = 0;
      this.paid = 0;
    },
  },

  watch: {},
  components: {},
};
</script>
