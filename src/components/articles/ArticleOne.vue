<template>
  <v-container>
    <v-row>
      <p>
        {{
          "Welcome to the homepage of the Troops of St. George-Troop 121 from the Church of St. Agnes in St. Paul, MN."
        }}
      </p>
    </v-row>
  </v-container>
</template>
<script>

export default {
  name: "ArticleOne",
  methods: {
    onClick(e) {
      e.stopPropagation();
   
        this.$router.push({ name: "home", offset: 40 });
    },
  },
};
</script>
