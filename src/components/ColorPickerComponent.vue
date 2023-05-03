<script setup>
import {ref} from "vue";
import ColorPicker from "primevue/colorpicker";

const color = ref()
</script>

<template>
  <div class="container px-2 py-4">
    <h1 class="text-3xl font-bold mb-4">Color picker</h1>
    <div class="grid grid-columns-6 gap-4">
      <div>
        <h4 class="text-lg mb-2">Basic</h4>
        <color-picker v-model="color" />
      </div>
      <div>
        <h4 class="text-lg mb-2">Basic</h4>
        <color-picker v-model="color" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>