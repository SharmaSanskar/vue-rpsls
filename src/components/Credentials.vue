<template>
  <section class="credentials">
    <transition name="gif-fade" appear>
      <div class="gif">
        <img src="../assets/img/home-gif.gif" alt="game-gif" />
      </div>
    </transition>
    <transition name="form-fade" appear>
      <form @submit.prevent="$emit('startGame', playerName, characterName)">
        <div class="player-name">
          <label for="playerName">Enter your name</label>
          <input
            type="text"
            id="playerName"
            v-model="playerName"
            placeholder="Player name"
            required
          />
        </div>
        <div class="character-name">
          <label for="characterName">Select your opponent</label>
          <select id="characterName" v-model="characterName" required>
            <option value="" selected disabled hidden>Character name</option>
            <option>Sheldon</option>
            <option>Leonard</option>
            <option>Penny</option>
            <option>Howard</option>
            <option>Raj</option>
          </select>
        </div>
        <button type="submit">Start game</button>
      </form>
    </transition>
  </section>
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

<style scoped>
.credentials {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gif {
  margin: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.player-name {
  margin-bottom: 1.1rem;
}

#playerName {
  padding: 0.2rem;
  font-size: 1.1rem;
  font-family: inherit;
}

label {
  font-size: 1.1rem;
  margin-right: 0.8rem;
  font-weight: bold;
  color: #1f4287;
}

#characterName {
  padding: 0.2rem;
  font-size: 1.1rem;
  font-family: inherit;
}

button[type="submit"] {
  margin: 2rem;
  padding: 0.8rem;
  font-size: 1rem;
  text-transform: uppercase;
}

/* Transitions */
.gif-fade-enter-from {
  opacity: 0;
}

.gif-fade-enter-active {
  transition: all 2s ease;
}

.form-fade-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}

.form-fade-enter-active {
  transition: all 0.8s ease-out;
}
</style>