<template>
  <main class="main">
    <AInput v-model:value="value" placeholder="Введите имя" />
  </main>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { suggest } from '@/api/rest/suggest'
import AInput from './components/a-input.vue'

const value = ref('')

watch(() => value.value, suggest)
</script>

<style lang="postcss">
.main {
  margin: 0 auto;
  height: 24rem;
  max-width: 17.5rem;
  background-color: #c4c4c4;
}
</style>
