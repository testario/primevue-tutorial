<script setup>

</script>

<template>
  <div class="flex flex-row">
    <div class="basis-1/5 h-screen border-r border-solid border-slate-600">
      <aside class="px-4 py-6">
        <router-link class="text-3xl font-bold" to="/">Components</router-link>
        <nav class="mt-5">
          <ul>
            <li class="py-2"><router-link to="/calendar"><span class="pi pi-calendar"></span> Calendar</router-link></li>
            <li class="py-2"><router-link to="/cascade-select"><span class="pi pi-caret-down"></span> Select</router-link></li>
          </ul>
        </nav>
      </aside>
    </div>
    <div class="basis-4/5 pl-4">
      <router-view />
    </div>
  </div>
</template>

<style scoped>

</style>
