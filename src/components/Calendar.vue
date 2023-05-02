<script setup>
import Calendar from 'primevue/calendar';
import {ref, watch} from "vue";

// calendar
const date = ref(new Date()),
  dates = ref([]),
  minDate = new Date("04/27/2023"),
  maxDate = new Date("05/27/2023"),
  dateWithTime24 = ref(),
  timeOnly = ref()
</script>

<template>
  <div class="container py-4 px-2">
    <h1 class="text-3xl font-bold mb-4">Calendar</h1>
    <div class="grid grid-cols-4 gap-4">
      <div>
        <h4 class="text-lg mb-2">Base usage</h4>
        <calendar class="mb-2" v-model="date" />
      </div>
      <div>
        <h4 class="text-lg mb-2">Date format</h4>
        <calendar class="mb-2" v-model="date" date-format="d MM yy" />
      </div>
      <div>
        <h4 class="text-lg mb-2">With icon</h4>
        <calendar class="mb-2" v-model="date" date-format="d MM yy" showIcon />
      </div>
      <div>
        <h4 class="text-lg mb-2">Min / max</h4>
        <calendar class="mb-2" v-model="date" :minDate="minDate" :maxDate="maxDate" date-format="d MM yy" />
      </div>
      <div>
        <h4 class="text-lg mb-2">Multiple</h4>
        <calendar class="mb-2" v-model="dates" selection-mode="multiple" date-format="d MM yy" />
      </div>
      <div>
        <h4 class="text-lg mb-2">Range</h4>
        <calendar class="mb-2" v-model="dates" selection-mode="range" date-format="d MM yy" />
      </div>
      <div>
        <h4 class="text-lg mb-2">Button bar</h4>
        <calendar class="mb-2" v-model="date" show-button-bar />
      </div>
      <div>
        <h4 class="text-lg mb-2">Time</h4>
        <calendar class="mb-2" v-model="dateWithTime24" hour-format="24" show-time />
        <calendar class="mb-2" v-model="timeOnly" hour-format="24" time-only />
      </div>
      <div>
        <h4 class="text-lg mb-2">Month</h4>
        <calendar class="mb-2" v-model="date" view="month" date-format="d M" />
      </div>
      <div>
        <h4 class="text-lg mb-2">Multiple month</h4>
        <calendar class="mb-2" v-model="date" date-format="d M yy" :number-of-months="2" />
      </div>
      <div>
        <h4 class="text-lg mb-2">Touch</h4>
        <calendar class="mb-2" v-model="date" touchUI />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>