<template>
  <p>&copy; 2021 | Made by Sanskar Sharma</p>
  <rules-modal />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RulesModal from "./RulesModal.vue";

export default defineComponent({
  name: "Footer",
  components: { RulesModal },
});
</script>

<style>
</style>