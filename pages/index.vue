<template>
  <div class="flex flex-col place-items-center">
    <div class="gradient-background mt-[6%]">
      <h1 class="flex text-6xl m-2 p-4 text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-amber-800 font-bold text-center">The Gold Standard For Tournaments By Rocket League Players For Rocket League Players</h1>
    </div>
      <div class="flex flex-row justify-center mt-[13%]">
      <UCard class="flex flex-col m-3 max-w-[22%] place-items-center rounded-2xl">
        <template #header>
          <div class="flex text-2xl font-bold text-center m-1 text-green-600">Prize Money</div>
        </template>
        <div class="flex flex-row text-center">
          <div>Dedicated prize pools for every skill division! Scaling winnings for 3rd, 2nd, and 1st place! Fast grab $$$ opportunities! Sponsor, Leader, and Community funnded prize pools that are constantly growing!</div>
        </div>
      </UCard>
      <UCard class="flex flex-col m-3 max-w-[22%] place-items-center rounded-2xl">
        <template #header>
          <div class="flex text-2xl font-bold text-center m-1 text-pink-600">Skill Improvement</div>
        </template>
        <div class="flex flex-row text-center">
          <div>Compete with players around and above your skill level! Queue for 6mans with anyone from the player base! Get accurate and useful analyzed data to learn from!</div>
        </div>
      </UCard>
      <div class="flex flex-row m-3">
        <iframe src="https://discord.com/widget?id=1047297400416514068&theme=dark" width="400" height="400" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" class="rounded-2xl"></iframe>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
.gradient-background {
  background-image: radial-gradient(circle, black, transparent);
  padding: 20px;
  display: inline-block;
  overflow: visible;
  text-align: center;
}
</style>