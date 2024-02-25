<template>
    <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
      <div>
        {{ teamName }} team page under construction
      </div>
     
    </UCard>
  </template>
  
  <script setup>
  const route = useRoute()
  const teamName = route.params.id.split(/(?=[A-Z])/).join(' ')
  
  </script>
  
  <style>
  </style>