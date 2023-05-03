<script setup>
import CascadeSelect from 'primevue/cascadeselect';
import {ref} from "vue";

const selectedCity = ref(),
    countries = ref([
    {
        name: 'Australia',
        code: 'AU',
        states: [
            {
                name: 'New South Wales',
                cities: [
                    { cname: 'Sydney', code: 'A-SY' },
                    { cname: 'Newcastle', code: 'A-NE' },
                    { cname: 'Wollongong', code: 'A-WO' }
                ]
            },
            {
                name: 'Queensland',
                cities: [
                    { cname: 'Brisbane', code: 'A-BR' },
                    { cname: 'Townsville', code: 'A-TO' }
                ]
            }
        ]
    },
    {
        name: 'Canada',
        code: 'CA',
        states: [
            {
                name: 'Quebec',
                cities: [
                    { cname: 'Montreal', code: 'C-MO' },
                    { cname: 'Quebec City', code: 'C-QU' }
                ]
            },
            {
                name: 'Ontario',
                cities: [
                    { cname: 'Ottawa', code: 'C-OT' },
                    { cname: 'Toronto', code: 'C-TO' }
                ]
            }
        ]
    },
    {
        name: 'United States',
        code: 'US',
        states: [
            {
                name: 'California',
                cities: [
                    { cname: 'Los Angeles', code: 'US-LA' },
                    { cname: 'San Diego', code: 'US-SD' },
                    { cname: 'San Francisco', code: 'US-SF' }
                ]
            },
            {
                name: 'Florida',
                cities: [
                    { cname: 'Jacksonville', code: 'US-JA' },
                    { cname: 'Miami', code: 'US-MI' },
                    { cname: 'Tampa', code: 'US-TA' },
                    { cname: 'Orlando', code: 'US-OR' }
                ]
            },
            {
                name: 'Texas',
                cities: [
                    { cname: 'Austin', code: 'US-AU' },
                    { cname: 'Dallas', code: 'US-DA' },
                    { cname: 'Houston', code: 'US-HO' }
                ]
            }
        ]
    }
]);
</script>

<template>
  <div class="container py-4 px-2">
    <h1 class="text-3xl font-bold mb-4">Cascade select</h1>
    <div class="grid grid-cols-3 gap-4">
      <div>
        <h4 class="text-lg mb-4">Basic</h4>
        <cascade-select v-model="selectedCity" :options="countries" option-group-label="name" option-label="cname"
          :option-group-children="['states', 'cities']" style="min-width: 14rem" placeholder="Select a city"
        />
      </div>
      <div>
        <h4 class="text-lg mb-4">Loading</h4>
        <cascade-select loading style="min-width: 14rem" placeholder="Loading..."
        />
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>