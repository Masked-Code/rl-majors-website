<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    <div class="flex flex-flow justify-between m-3">
      <div class="flex flex-flow m-3">
        <img :src="authUser.user_metadata.avatar_url" class="rounded-2xl">
        <h1 class="place-self-center m-2 ml-10 text-3xl"> {{ authUser.user_metadata.custom_claims.global_name }}</h1>
      </div>
      <UButton v-if="userDataError">Register</UButton>
      <UButton v-else target="_blank" class="text-xl self-center p-4"><b>Player Page</b></UButton>
    </div>
    <UDivider></UDivider>
    <div v-if="authUser">
      <div class="flex flex-flow m-4">
        <UCard class="m-2"><h1><b class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">Discord Username: </b>{{ authUser.user_metadata.full_name }}</h1></UCard>
        <UCard class="m-2"><h1><b class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">Discord ID: </b>{{ authUser.user_metadata.provider_id }}</h1></UCard>
      </div>
    </div>
    <UButton @click="signOut()" class="m-3" size="lg"><b>Sign Out</b></UButton>
  </UCard>
</template>

<script setup>
const supabase = useSupabaseClient()
const authUser = useSupabaseUser()
const { data: { user } } = await supabase.auth.getUser()
definePageMeta({
  middleware: 'auth'
})

async function signOut() {
  const { error } = await supabase.auth.signOut()
  navigateTo('/')
}

</script>

<style>

</style>