<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    <div class="flex flex-flow m-3">
      <img :src="user.user_metadata.avatar_url" class="rounded-2xl">
      <h1 class="place-self-center m-2 ml-10 text-3xl"> {{ user.user_metadata.custom_claims.global_name }}</h1>
    </div>

    <UDivider></UDivider>
    <div class="flex flex-flow m-4">
      <UCard class="m-2"><h1><b class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">Discord User ID</b>: {{ user.user_metadata.full_name }}</h1></UCard>
      <UCard class="m-2"><h1><b class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">Rocket League Platform</b>: {{ rocketLeaguePlatform }}</h1></UCard>
      <UCard class="m-2"><h1><b class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">Seasons Played</b>: {{ seasonsPlayed }}</h1></UCard>
      <UCard class="m-2"><h1><b class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">Input Method</b>: {{ inputMethod }}</h1></UCard>
    </div>

    <UButton @click="signOut()" class="m-3" size="lg"><b>Sign Out</b></UButton>
  </UCard>
</template>

<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const seasonsPlayed = 0
const rocketLeaguePlatform = 'Steam'
const inputMethod = 'Keyboard Mouse'

definePageMeta({
  middleware: 'auth'
})

async function signOut() {
  const { error } = await supabase.auth.signOut()
}

</script>

<style>

</style>