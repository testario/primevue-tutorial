<template>
  <div class="container py-4 px-2">
    <h1 class="text-3xl font-bold mb-4">Chips</h1>
    <div class="grid grid-cols-4 gap-4">
      <div>
          <h4 class="text-lg mb-2">Basic usage with spase separator</h4>
          <chips class="mb-2" v-model="chip" separator=" " />
      </div>
      <div>
          <h4 class="text-lg mb-2">With template</h4>
          <chips class="mb-2" v-model="chip" separator=" " >
              <template #chip="slotProps">
                  <span>{{ slotProps.value }} - active <i class="pi pi-user-plus" style="font-size: 14px"></i> </span>
              </template>
          </chips>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import Chips from "primevue/chips";

const chip = ref([])
</script>

<style lang="scss" scoped>

</style>