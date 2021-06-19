<template>
  <section class="scores">
    <div class="player-info">
      <h2>{{ playerName }}</h2>
      <h1>{{ playerScore }}</h1>
    </div>
    <div class="versus">
      <h2>v/s</h2>
      <button @click="$emit('triggerReset')">Reset</button>
    </div>
    <div class="character-info">
      <h2>{{ characterName }}</h2>
      <h1>{{ characterScore }}</h1>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Scores",
  emits: ["triggerReset"],
  props: {
    playerName: String,
    characterName: String,
    playerScore: Number,
    characterScore: Number,
  },
});
</script>

<style scoped>
.scores {
  min-height: 30vh;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 50%;
  margin: 0 auto;
}

.player-info,
.character-info,
.versus {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.player-info h1,
.character-info h1 {
  background: #aad8d3;
  border: 4px solid #278ea5;
  color: #1f4287;
  padding: 0.4rem 1.2rem;
  width: 6rem;
  text-align: center;
}

.player-info h2,
.character-info h2 {
  margin: 2rem 0 0.6rem 0;
  color: #1f4287;
}

.versus h2 {
  margin: 2rem 0 2.5rem 0;
  color: #278ea5;
}
</style>
