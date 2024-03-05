<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true
  }
})

const emits = defineEmits(['click'])
</script>

<template>
  <button
    class="text-black bg-gray-200 hover:bg-gray-300 transition rounded-full text-lg font-semibold py-3 px-6 w-full sm:w-auto text-center"
    @click="emits('click')"
  >
    {{ props.label }}
  </button>
</template>

<style scoped></style>
