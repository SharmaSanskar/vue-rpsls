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
  mounted() {
    //Getting data from LocalStorage
    if (localStorage.gameStatus) {
      this.gameStatus = JSON.parse(localStorage.gameStatus);
    }
    if (localStorage.scores) {
      const { playerScore, characterScore } = JSON.parse(localStorage.scores);
      this.playerScore = playerScore;
      this.characterScore = characterScore;
    }
    if (localStorage.names) {
      const { playerName, characterName } = JSON.parse(localStorage.names);
      this.playerName = playerName;
      this.characterName = characterName;
    }
  },
  methods: {
    incrementScore(winner) {
      if (winner === "player") {
        this.playerScore++;
      }
      if (winner === "character") {
        this.characterScore++;
      }

      // Adding to LocalStorage
      localStorage.scores = JSON.stringify({
        playerScore: this.playerScore,
        characterScore: this.characterScore,
      });
    },
    initializeGame(playerName, characterName) {
      this.gameStatus = true;
      this.playerName = playerName;
      this.characterName = characterName;

      // Adding to LocalStorage
      localStorage.gameStatus = JSON.stringify(this.gameStatus);
      localStorage.names = JSON.stringify({
        playerName: this.playerName,
        characterName: this.characterName,
      });
    },
    resetGame() {
      this.gameStatus = false;
      this.playerScore = 0;
      this.characterScore = 0;
      this.playerName = "";
      this.characterName = "";

      // Clearing LocalStorage
      localStorage.clear();
    },
  },
};
</script>

<style>
</style>
