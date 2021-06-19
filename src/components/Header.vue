<template>
  <header>
    <h3>ROCK, PAPER, SCISSORS, LIZARD, SPOCK</h3>
    <h4>from The Big Bang Theory</h4>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<style scoped>
header {
  background: #393e46;
  color: #eeeeee;
  height: 10vh;
  padding: 0.8rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h4 {
  color: #aad8d3;
}
</style>