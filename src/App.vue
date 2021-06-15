<template>
  <Header />
  <Credentials v-if="!gameStatus" @startGame="initializeGame" />
  <div v-else>
    <Scores
      :playerName="playerName"
      :characterName="characterName"
      :playerScore="playerScore"
      :characterScore="characterScore"
      @triggerReset="resetGame"
    />
    <Selection @sendWinner="incrementScore" />
  </div>
  <Footer />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Header from "./components/Header.vue";
import Credentials from "./components/Credentials.vue";
import Scores from "./components/Scores.vue";
import Selection from "./components/Selection.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Credentials,
    Scores,
    Selection,
    Footer,
  },

  setup() {
    const playerName = ref("");
    const characterName = ref("");
    const playerScore = ref(0);
    const characterScore = ref(0);
    const gameStatus = ref(false);

    // Lifecycle Hooks
    onMounted(() => {
      // Getting data from LocalStorage
      if (localStorage.gameStatus) {
        gameStatus.value = JSON.parse(localStorage.gameStatus);
      }
      if (localStorage.scores) {
        const scores = JSON.parse(localStorage.scores);
        playerScore.value = scores.playerScore;
        characterScore.value = scores.characterScore;
      }
      if (localStorage.names) {
        const names = JSON.parse(localStorage.names);
        playerName.value = names.playerName;
        characterName.value = names.characterName;
      }
    });

    // Methods
    const initializeGame = (player_name: string, character_name: string) => {
      gameStatus.value = true;
      playerName.value = player_name;
      characterName.value = character_name;
      // Adding to LocalStorage
      localStorage.gameStatus = JSON.stringify(gameStatus.value);
      localStorage.names = JSON.stringify({
        playerName: playerName.value,
        characterName: characterName.value,
      });
    };

    const incrementScore = (winner: string) => {
      if (winner === "player") {
        playerScore.value++;
      }
      if (winner === "character") {
        characterScore.value++;
      }
      // Adding to LocalStorage
      localStorage.scores = JSON.stringify({
        playerScore: playerScore.value,
        characterScore: characterScore.value,
      });
    };

    const resetGame = () => {
      gameStatus.value = false;
      playerScore.value = 0;
      characterScore.value = 0;
      playerName.value = "";
      characterName.value = "";
      // Clearing LocalStorage
      localStorage.clear();
    };

    return {
      playerName,
      characterName,
      playerScore,
      characterScore,
      gameStatus,
      initializeGame,
      incrementScore,
      resetGame,
    };
  },
});
</script>

<style>
</style>