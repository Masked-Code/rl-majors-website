<template>
    <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
      <div>
        {{ playerName }}'s player page under construction
      </div>
     
    </UCard>
  </template>
  
  <script setup>
  const route = useRoute();
  const platform = 'switch'
  const playerName = route.params.id
  
  </script>
  
  <style>
  </style>
