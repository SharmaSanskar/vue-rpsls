<template>
  <footer>
    <p>&copy; 2021 | Made by Sanskar Sharma</p>
    <div class="rules-btn">
      <rules-modal />
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RulesModal from "./RulesModal.vue";

export default defineComponent({
  name: "Footer",
  components: { RulesModal },
});
</script>

<style scoped>
footer {
  background: #393e46;
  color: #eeeeee;
  height: 10vh;
  padding: 0.8rem 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.rules-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10%;
}
</style>