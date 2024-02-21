<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    This is the profile page
    <h1>{{  user }}</h1>
    <UButton @click="signOut()">Sign Out</UButton>
  </UCard>
</template>

<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()

definePageMeta({
  middleware: 'auth'
})

async function signOut() {
  const { error } = await supabase.auth.signOut()
}

</script>

<style>

</style>