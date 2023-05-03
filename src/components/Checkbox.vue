<script setup>
import {ref} from "vue";
import Checkbox from "primevue/checkbox";

const check = ref(false)
</script>

<template>
  <div class="container py-4 px-2">
    <h1 class="text-3xl font-bold mb-4">Checkbox</h1>
    <div class="grid grid-cols-4 gap-4">
      <div>
        <h4 class="text-lg mb-2">Base usage</h4>
        <checkbox v-model="check" :binary="true" /> Checked
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>