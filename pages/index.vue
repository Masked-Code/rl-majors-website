<template>
  <div class="flex flex-col place-items-center">
    <p class="text-xl m-2 text-red-600 mt-[7%] font-bold">This website is currently under construction</p>
    <h1 class="flex text-6xl m-2 p-4 text-transparent bg-clip-text bg-gradient-to-br from-zinc-900 to-zinc-900 font-bold text-center">The Gold Standard For Tournaments By Rocket League Players For Rocket League Players</h1>
    <p class="text-3xl font-bold m-2">Join The Discord And Start Competing</p>
      <div class="flex flex-row justify-center mt-[15%]">
      <UCard class="flex flex-col m-3 max-w-[22%]">
        <template #header>
          <div class="flex text-xl font-bold text-center m-1">Prize Money</div>
        </template>

        <div>Team up with your friends and perform your best to compete for the prize money within each division!</div>
      </UCard>
      <UCard class="flex flex-col m-3 max-w-[22%]">
        <template #header>
          <div class="flex text-xl font-bold text-center m-1">Skill Improvement</div>
        </template>

        <div>Compete with players around and above your skill level!</div>
      </UCard>
      <div class="flex flex-row m-3">
        <iframe src="https://discord.com/widget?id=1047297400416514068&theme=dark" width="350" height="400" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" class="rounded-2xl"></iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
</style>