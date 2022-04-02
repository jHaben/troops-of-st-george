<template>
  <center>
    <h1>Page Not Found.</h1>
    <br />
    <p>
      <v-btn color="#272727" class="text2" label dark large :to="{ path: '/' }">
        Return Home
      </v-btn>
    </p>
  </center>
</template>

<script>
export default {
  name: "NotFound",
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
