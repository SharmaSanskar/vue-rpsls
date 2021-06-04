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

<script>
import Header from "./components/Header.vue";
import Credentials from "./components/Credentials.vue";
import Scores from "./components/Scores.vue";
import Selection from "./components/Selection.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Credentials,
    Scores,
    Selection,
    Footer,
  },
  data() {
    return {
      playerScore: 0,
      characterScore: 0,
      gameStatus: false,
    };
  },
  methods: {
    incrementScore(winner) {
      if (winner === "player") {
        this.playerScore++;
      }
      if (winner === "character") {
        this.characterScore++;
      }
    },
    initializeGame(playerName, characterName) {
      this.gameStatus = true;
      this.playerName = playerName;
      this.characterName = characterName;
    },
    resetGame() {
      this.playerScore = 0;
      this.characterScore = 0;
      this.gameStatus = false;
    },
  },
};
</script>

<style>
</style>
