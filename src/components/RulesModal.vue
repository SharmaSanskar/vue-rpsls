<template>
  <button @click="modalOpen = true">Rules</button>

  <teleport to="body">
    <div v-if="modalOpen" class="modal" @click.self="modalOpen = false">
      <div>
        <h3>Rules:</h3>
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
        <button @click="modalOpen = false">Close</button>
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

<style>
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
  justify-content: center;
  background-color: white;
  width: 30vw;
  height: 90vh;
  padding: 5px;
  border-radius: 0.8rem;
}
</style>