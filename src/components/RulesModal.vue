<template>
  <button @click="modalOpen = true">Rules</button>

  <teleport to="body">
    <div v-if="modalOpen" class="modal" @click.self="modalOpen = false">
      <div>
        <h3 class="rules-heading">Rules:</h3>
        <div class="rules">
          <p>Scissors cuts Paper</p>
          <p>Paper covers Rock</p>
          <p>Rock crushes Lizard</p>
          <p>Lizard poisons Spock</p>
          <p>Spock smashes Scissors</p>
          <p>Scissors decapitates Lizard</p>
          <p>Lizard eats Paper</p>
          <p>Paper disproves Spock</p>
          <p>Spock vaporizes Rock</p>
          <p>(and as it always has) Rock crushes Scissors</p>
          <button class="close-btn" @click="modalOpen = false">Close</button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "RulesModal",

  setup() {
    const modalOpen = ref(false);
    return {
      modalOpen,
    };
  },
});
</script>

<style scoped>
.close-btn {
  margin: 1rem;
}

.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #eeeeee;
  width: 30vw;
  padding: 5px;
  border-radius: 0.8rem;
}

.rules-heading {
  padding: 1rem 0;
  width: 90%;
  text-align: center;
  color: #00adb5;
  border-bottom: 1px solid #393e46;
}

.rules {
  margin-top: 1rem;
}

.rules p {
  line-height: 2rem;
}
</style>