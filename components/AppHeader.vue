<template>
    <UCard class="rounded-3xl m-10">
        <div class="flex items-center justify-between">
            <div class="justify-self-start">
                <UButton color="primary" variant="link" to="/" class="text-3xl">RL Majors</UButton>
            </div>
            <div class="justify-self-center">
                <UButton size="xl" class="rounded-2xl m-1" to="/leaderboards">Leaderboards</UButton>
                <UButton size="xl" class="rounded-2xl m-1" to="/coaching">Coaching</UButton>
                <UButton size="xl" class="rounded-2xl m-1" to="/player">Player</UButton>
                <UButton size="xl" class="rounded-2xl m-1" to="https://www.rocketleague.com/en/news" target="_blank">Updates</UButton>
            </div>
            <div class="flex flex-row justify-self-end">
              <UButton size="xl" class="rounded-2xl m-1" to="https://discord.gg/9sHQNwCfQg" target="_blank">Discord</UButton>
              <UButton size="xl" class="rounded-2xl m-1" @click="changeColor()">☀️</UButton>
            </div>
        </div>
    </UCard>
</template>
<script lang="ts" setup>
const colorMode = useColorMode()
function changeColor() {
  if (colorMode.preference == "dark") {
    colorMode.preference = "light";
  } else {
    colorMode.preference = "dark"
  }
};
</script>

<style>

</style>