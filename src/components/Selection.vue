<template>
  <h3>{{ result }}</h3>
  <button @click="makeSelection('Rock')">✊</button>
  <button @click="makeSelection('Paper')">✋</button>
  <button @click="makeSelection('Scissors')">✌</button>
  <button @click="makeSelection('Lizard')">🤏</button>
  <button @click="makeSelection('Spock')">🖖</button>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";
import { Data, data } from "@/data";

export default defineComponent({
  name: "Selection",
  emits: ["sendWinner"],

  setup(props, context) {
    const gameData = reactive<Data>({ ...data });
    const winner = ref("");
    const winnerSelection = ref("");
    const loserSelection = ref("");
    const firstSelection = ref(false);

    // Computed Property
    const result = computed(() => {
      if (!firstSelection.value) {
        return "Let's Play";
      }
      if (winnerSelection.value && loserSelection.value) {
        const outcome =
          winner.value === "player" ? "You win 🔥" : "You Lose 😭";
        return `${winnerSelection.value} ${
          gameData[winnerSelection.value][loserSelection.value]
        } ${loserSelection.value}. ${outcome}`;
      }
      return "Tie";
    });

    // Methods
    const characterChoice = () => {
      const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
      const randomNumber = Math.floor(Math.random() * 5);
      return choices[randomNumber];
    };

    const isWinner = (selection: string, opponentSelection: string) => {
      return opponentSelection in gameData[selection];
    };

    const makeSelection = (playerSelection: string) => {
      firstSelection.value = true;
      const characterSelection = characterChoice();
      const playerWinner = isWinner(playerSelection, characterSelection);
      const characterWinner = isWinner(characterSelection, playerSelection);

      if (playerWinner) {
        winnerSelection.value = playerSelection;
        loserSelection.value = characterSelection;
        winner.value = "player";
        context.emit("sendWinner", winner.value);
      } else if (characterWinner) {
        winnerSelection.value = characterSelection;
        loserSelection.value = playerSelection;
        winner.value = "character";
        context.emit("sendWinner", winner.value);
      } else {
        winnerSelection.value = "";
        loserSelection.value = "";
        context.emit("sendWinner", "tie");
      }
    };

    return {
      result,
      makeSelection,
    };
  },
});
</script>

<style>
</style>