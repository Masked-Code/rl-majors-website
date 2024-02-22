<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    <div class="flex flex-col place-items-center">
      <h1 class="text-4xl font-bold m-1 mb-5">Please Login</h1>
      <UButton @click="signInWithDiscord" class="m-3" size="lg"><b>Login With Discord</b></UButton>
    </div>
  </UCard>
</template>

<script lang="ts" setup>
const user = useSupabaseUser()
const supabase = useSupabaseClient()
async function signInWithDiscord() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'discord',
  })
  if(error) console.log(error);
}
</script>

<style>

</style>