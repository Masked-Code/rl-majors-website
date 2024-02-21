<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    <div>Waiting for login...</div>
  </UCard>
</template>

<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()

watch(user, () => {
  if (user.value) {
      return navigateTo('/profile')
  }
}, { immediate: true })

definePageMeta({
  middleware: 'auth'
})
</script>

<style>

</style>