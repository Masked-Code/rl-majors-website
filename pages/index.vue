<template>
  <div class="flex flex-col justify-center items-center min-h-96 m-[5%]">
    <div class="flex flex-col mt-24 mb-24 justify-center items-center">
      <div
        class="gradient-text text-8xl font-bold text-center"
        :style="{ animationDuration: animationDuration }"
      >
      ROCKET LEAGUE MAJORS
      </div>
      <div class="text-xl mt-3">
        Tournaments By Rocket League Players For Rocket League Players
      </div>
      <div v-if="!user" class="mt-10">
        <UButton to="/gettingstarted" size="xl" class="rounded-3xl">Get Started</UButton>
      </div>
    </div>
    <ULandingGrid class="m-36 ml-48 mr-48">
      <ULandingCard class="col-span-6 row-span-4" title="Divisions">
        <template #icon>
          <UIcon name="i-heroicons-users" class="text-4xl text-primary"></UIcon>
        </template>
        <template #description>
          RL Majors tournaments and leagues consist of divisions that seperate the player base into skill basaed groups. They are constructed to enable as many players as possible to have fun and fair competition.
        </template>
      </ULandingCard>
      <ULandingCard class="col-span-6 row-span-2" title="Franchises">
        <template #icon>
          <UIcon name="i-heroicons-building-office" class="text-4xl text-primary"></UIcon>
        </template>
        <template #description>
          The active members of RLM are able to create their own franchises that span across the divisions. These franchises build and organize the teams that compete in RLM tournaments and leagues.
        </template>
      </ULandingCard>
      <ULandingCard class="col-span-6 row-span-4" title="Prize Money">
        <template #icon>
          <UIcon name="i-heroicons-currency-dollar" class="text-4xl text-primary"></UIcon>
        </template>
        <template #description>
          Thanks to our community donations, stream activities and sponsors we are able to provide a monetary prize for most of the divions. Every team that is eligible, in a high enough division and wins their tournament or league will recieve a monetary reward.
        </template>
      </ULandingCard>
      <ULandingCard class="col-span-6 row-span-2" title="Statistics & Analytics">
        <template #icon>
          <UIcon name="i-heroicons-cube-transparent" class="text-4xl text-primary"></UIcon>
        </template>
        <template #description>
          RLM has built custom automated systems for collecting and authenticating replay data. This collected data allows us to provide a deep analysis to the players and reveal key information that hasn't been possible before.
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
