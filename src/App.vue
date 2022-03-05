<template>
  <main class="main">
    <AInput v-model:value="value" placeholder="Введите имя" />
  </main>
</template>

<script setup lang="ts">
import { ref, watch } from "vue"
import { makeRequest } from "./api/makeRequest";
import AInput from "./components/a-input.vue"

const value = ref("")

watch(() => value.value, (current) => makeRequest({
  url: "https://dadata.ru/api/suggest/name/",
  method: "POST",
  data: current,
}))
</script>

<style lang="postcss">
.main {
  margin: 0 auto;
  height: 24rem;
  max-width: 17.5rem;
  background-color: #C4C4C4;
}
</style>
