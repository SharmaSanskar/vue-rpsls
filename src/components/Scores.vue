<template>
  <h1>{{ playerName }} Score: {{ playerScore }}</h1>
  <h1>{{ characterName }} Score: {{ characterScore }}</h1>
  <button @click="$emit('triggerReset')">Reset</button>
</template>

<script>
export default {
  name: "Scores",
  emits: ["triggerReset"],
  props: {
    playerName: String,
    characterName: String,
    playerScore: Number,
    characterScore: Number,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
