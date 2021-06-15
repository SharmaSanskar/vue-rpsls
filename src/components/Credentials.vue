<template>
  <form @submit.prevent="$emit('startGame', playerName, characterName)">
    <label for="playerName">Enter your name</label>
    <input
      type="text"
      id="playerName"
      v-model="playerName"
      placeholder="Player name"
      required
    />
    <label for="characterName">Select your opponent</label>
    <select id="characterName" v-model="characterName" required>
      <option value="" selected disabled hidden>Character name</option>
      <option>Sheldon</option>
      <option>Leonard</option>
      <option>Penny</option>
      <option>Howard</option>
      <option>Raj</option>
    </select>
    <button type="submit">Start game</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Credentials",
  emits: ["startGame"],

  setup() {
    const playerName = ref("");
    const characterName = ref("");

    return {
      playerName,
      characterName,
    };
  },
});
</script>

<style>
</style>