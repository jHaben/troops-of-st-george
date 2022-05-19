<template>
  <v-container id="iconBanner" tag="section">
    <base-card tile flat color="#6698b3">
      <v-row>
        <v-col>
          <v-container>
            <base-card
              color="transparent"
              tile
              flat
              min-width="130"
              class="ma-4"
              style="color: white; font-size: 20px; text-align: center"
            >
              <v-row justify="center" class="mb-4">
                <v-icon size="60" color="white"> {{ "mdi-church" }}</v-icon>
              </v-row>
              <v-row justify="center">CATHOLIC</v-row>
              <v-divider style="border-width: 3px" dark class="my-9" />
              <v-row justify="center" style="font-size: 15px"> </v-row>
            </base-card>
          </v-container>
        </v-col>
        <v-col>
          <v-container>
            <base-card
              color="transparent"
              tile
              flat
              min-width="130"
              class="ma-4"
              style="color: white; font-size: 20px; text-align: center"
            >
              <v-row justify="center" class="mb-4">
                <v-icon size="60" color="white"> {{ "mdi-campfire" }}</v-icon>
              </v-row>
              <v-row justify="center">OUTDOORS</v-row>
              <v-divider style="border-width: 3px" dark class="my-9" />
              <v-row justify="center" style="font-size: 15px"> </v-row>
            </base-card>
          </v-container>
        </v-col>

        <v-col>
          <v-container>
            <base-card
              color="transparent"
              tile
              flat
              min-width="130"
              class="ma-4"
              style="color: white; font-size: 20px; text-align: center"
            >
              <v-row justify="center" class="mb-4">
                <v-icon size="60" color="white">
                  {{ "mdi-shield-cross" }}</v-icon
                >
              </v-row>
              <v-row justify="center">TRADITION</v-row>
              <v-divider style="border-width: 3px" dark class="my-9" />
              <v-row justify="center" style="font-size: 15px"> </v-row>
            </base-card>
          </v-container>
        </v-col>
        <v-col>
          <v-container>
            <base-card
              color="transparent"
              tile
              flat
              min-width="130"
              class="ma-4"
              style="color: white; font-size: 20px; text-align: center"
            >
              <v-row justify="center" class="mb-4">
                <v-icon size="60" color="white">
                  {{ "mdi-handshake-outline" }}</v-icon
                >
              </v-row>
              <v-row justify="center">BROTHERHOOD</v-row>
              <v-divider style="border-width: 3px" dark class="my-9" />
              <v-row justify="center" style="font-size: 15px"> </v-row>
            </base-card>
          </v-container>
        </v-col>

        <v-col>
          <v-container>
            <base-card
              color="transparent"
              tile
              flat
              min-width="130"
              class="ma-4"
              style="color: white; font-size: 20px; text-align: center"
            >
              <v-row justify="center" class="mb-4">
                <v-icon size="60" color="white"> {{ "mdi-flag" }}</v-icon>
              </v-row>
              <v-row justify="center">PATRIOTISM</v-row>
              <v-divider style="border-width: 3px" dark class="my-9" />
              <v-row justify="center" style="font-size: 15px"> </v-row>
            </base-card>
          </v-container>
        </v-col>
      </v-row>
    </base-card>
  </v-container>
</template>

<script>

export default {
  name: "HomeIconBanner",
};
</script>