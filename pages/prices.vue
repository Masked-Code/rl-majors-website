<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
  {{ playerPrices }}
  </UCard>
</template>

<script lang="ts" setup>
const client = useSupabaseClient()

const { data: playerPrices, error } = await client
  .from('S1_D1_Prices')
  .select('')
</script>

<style>

</style>