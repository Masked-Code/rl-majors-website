<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    This is the player page
    <h1>{{  user }}</h1>
  </UCard>
</template>

<script lang="ts" setup>
const user = useSupabaseUser()
</script>

<style>

</style>