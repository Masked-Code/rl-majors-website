<template>
  <div class="flex flex-col justify-center items-center min-h-96 m-[5%]">
  <div
      class="gradient-text text-8xl font-bold mt-14 mb-3 text-center"
      :style="{ animationDuration: animationDuration }"
    >
    ROCKET LEAGUE MAJORS
    </div>
    <div class="text-xl">
      Tournaments By Rocket League Players For Rocket League Players
    </div>
    <div v-if="!user" class="m-10">
      <UButton to="/gettingstarted" size="xl" class="rounded-3xl">Get Started</UButton>
    </div>
    <ULandingGrid class="m-36 ml-48 mr-48">
      <ULandingCard class="col-span-6 row-span-4" title="Divisions">
        <template #icon>
          <UIcon class="i-heroicons-users text-4xl text-primary"></UIcon>
        </template>
        <template #description>
          <div class="m-2">RL Majors tournaments and leagues consist of division that seperate the player base into skill basaed divisions.</div>
          <div class="m-2">They are constructed to enable all players to have fun and fair competition.</div>
        </template>
      </ULandingCard>
      <ULandingCard class="col-span-6 row-span-2" title="Franchises">
        <template #icon>
          <UIcon class="i-heroicons-building-office text-4xl text-primary"></UIcon>
        </template>
        <template #description>
          <div class="m-2">The active players of RLM are able to create their own franchises that span across the divisions.</div>
          <div class="m-2">These franchises build and organize the teams that compete in the tournaments and leagues.</div>
        </template>
      </ULandingCard>
      <ULandingCard class="col-span-6 row-span-4" title="Prize Money">
        <template #icon>
          <UIcon class="i-heroicons-currency-dollar text-4xl text-primary"></UIcon>
        </template>
        <template #description>
          <div class="m-2">Thanks to our community donations, stream activities, and sponsors we are able to provide a monetary prize for most of the divions.</div>
          <div class="m-2">Every team that is eligible, in a high enough division and wins their tournament or league will recieve their prize money.</div>
        </template>
      </ULandingCard>
      <ULandingCard class="col-span-6 row-span-2" title="Statistics & Analytics">
        <template #icon>
          <UIcon class="i-heroicons-circle-stack text-4xl text-primary"></UIcon>
        </template>
        <template #description>
          <div class="m-2">RLM has built custom automated systems for collecting and authenticating replay data.</div>
          <div class="m-2">This collected data allows us to provide a deep analysis to the players and reveal key information that hasn't been possible before.</div>
        </template>
      </ULandingCard>
    </ULandingGrid>
  </div>
</template>

<script setup lang="ts">
const animationDuration = `5s`
const user = useSupabaseUser()

</script>

<style scoped>
.gradient-text {
  display: inline-block;
  background: linear-gradient(100deg, #6750db, #c45fff, #6750db, #6750db);
  background-size: 200% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: scroll-gradient linear infinite;
}

@keyframes scroll-gradient {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>