<template>
  <section class="selection">
    <h1 class="result">{{ result }}</h1>
    <div class="choices">
      <div @click="makeSelection('Rock')">
        <img src="../assets/img/rock.png" alt="rock-symbol" />
      </div>
      <div @click="makeSelection('Paper')">
        <img src="../assets/img/paper.png" alt="paper-symbol" />
      </div>
      <div @click="makeSelection('Scissors')">
        <img src="../assets/img/scissors.png" alt="scissors-symbol" />
      </div>
      <div @click="makeSelection('Lizard')">
        <img src="../assets/img/lizard.png" alt="lizard-symbol" />
      </div>
      <div @click="makeSelection('Spock')">
        <img src="../assets/img/spock.png" alt="spock-symbol" />
      </div>
    </div>
  </section>
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
      return "It's a tie 😐";
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
.selection {
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
}

.choices {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2.6rem 0;
}

.choices div {
  background: #00adb5;
  border: 4px solid #278ea5;
  border-radius: 50%;
  padding: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.choices div:hover {
  transform: scale(1.1);
  border: 4px solid #aad8d3;
}

.result {
  color: #1f4287;
  text-align: center;
}
</style>