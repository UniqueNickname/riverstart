<template>
	<input
    class="input"
    type="text"
    :value="value"
    :placeholder="placeholder"
    @input="input"
  >
</template>

<script lang="ts" setup>
import { getEventValue } from "@/utils"

type Props = {
  value: string
  placeholder?: string
}

withDefaults(defineProps<Props>(), {
  placeholder: ""
})

const emit = defineEmits<{
  (event: 'update:value', value: string): void
}>()

const input = (event: Event) => {
  emit('update:value', getEventValue(event))
}
</script>

<style lang="postcss">
.input {
  display: block;
	padding: 0.875rem 1rem;
  box-sizing: border-box;
  border: 1px solid #C4C4C4;
	width: 100%;
	height: 3.3125rem;
  font-size: 0.75rem;
  line-height: 0.875rem;
  background: #FFFFFF;
  color: #000000;
}
</style>
