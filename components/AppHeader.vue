<template>
    <UCard class="rounded-3xl m-10">
        <div class="flex items-center justify-between">
            <div class="justify-self-start">
                <UButton color="primary" variant="link" to="/" class="text-3xl">RL Majors</UButton>
            </div>
            <div class="justify-self-center">
                <UButton size="xl" class="rounded-2xl m-1" to="/leaderboards">Leaderboards</UButton>
                <UButton size="xl" class="rounded-2xl m-1" to="/search">Player</UButton>
                <UButton size="xl" class="rounded-2xl m-1" to="/prices">Prices</UButton>
                <UButton size="xl" class="rounded-2xl m-1" to="/schedule">Schedule</UButton>
                <UButton size="xl" class="rounded-2xl m-1" to="https://www.rocketleague.com/en/news" target="_blank">Updates</UButton>
            </div>
            <div class="flex flex-row justify-self-end">
              <UButton size="xl" class="rounded-2xl mr-1" :icon="isDark ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid'" variant="ghost" @click="isDark = !isDark"/>
              <UButton v-if="user" size="xl" class="rounded-3xl p-0 m-0" to="/profile" variant="ghost" id="profile-button-with-avatar"><UAvatar  class="p-0 m-0" size="xl" :src="user.user_metadata.avatar_url"></UAvatar></UButton>
              <UButton v-else size="xl" class="rounded-2xl m-0" to="/login" icon="i-heroicons-user-circle" variant="ghost" id="profile-button-without-avatar"></UButton>
            </div>
        </div>
    </UCard>
</template>
<script lang="ts" setup>
const colorMode = useColorMode()
const user = useSupabaseUser()

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<style>

</style>