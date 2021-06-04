<template>
  <h3>{{ result }}</h3>
  <button @click="makeSelection('Rock')">✊</button>
  <button @click="makeSelection('Paper')">✋</button>
  <button @click="makeSelection('Scissors')">✌</button>
  <button @click="makeSelection('Lizard')">🤏</button>
  <button @click="makeSelection('Spock')">🖖</button>
</template>

<script>
import data from "../../data.js";
export default {
  name: "Selection",
  emits: ["sendWinner"],
  data() {
    return {
      gameData: data(),
      winnerSelection: "",
      loserSelection: "",
      firstSelection: false,
    };
  },
  computed: {
    result() {
      if (!this.firstSelection) {
        return "Let's Play";
      }
      if (this.winnerSelection && this.loserSelection) {
        return `${this.winnerSelection} ${
          this.gameData[this.winnerSelection][this.loserSelection]
        } ${this.loserSelection}`;
      }
      return "Tie";
    },
  },
  methods: {
    characterChoice() {
      const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
      const randomNumber = Math.floor(Math.random() * 5);
      return choices[randomNumber];
    },

    isWinner(selection, opponentSelection) {
      return opponentSelection in this.gameData[selection];
    },

    makeSelection(playerSelection) {
      this.firstSelection = true;
      const characterSelection = this.characterChoice();
      console.log(characterSelection);
      const playerWinner = this.isWinner(playerSelection, characterSelection);
      const characterWinner = this.isWinner(
        characterSelection,
        playerSelection
      );

      if (playerWinner) {
        this.winnerSelection = playerSelection;
        this.loserSelection = characterSelection;
        this.$emit("sendWinner", "player");
      } else if (characterWinner) {
        this.winnerSelection = characterSelection;
        this.loserSelection = playerSelection;
        this.$emit("sendWinner", "character");
      } else {
        this.winnerSelection = "";
        this.loserSelection = "";
        this.$emit("sendWinner", "tie");
      }
    },
  },
};
</script>

<style>
</style>