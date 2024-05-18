<template>
  <div class="flex flex-col justify-center items-center min-h-96 m-[5%]">
  <div
      class="gradient-text text-8xl font-bold mb-4"
      :style="{ animationDuration: animationDuration }"
    >
    ROCKET LEAGUE MAJORS
    </div>
    <div class="text-xl">
      Tournaments By Rocket League Players For Rocket League Players
    </div>
    <div v-if="!user" class="m-4">
      <UButton to="/gettingstarted">Get Started</UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const animationDuration = `5s`
const user = useSupabaseUser()

</script>

<style scoped>
.gradient-text {
  display: inline-block;
  background: linear-gradient(100deg, #6750db, #c45fff, #6750db);
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