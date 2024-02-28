<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    <UDropdown :items="divisions" :popper="{ placement: 'bottom-start' }">
      <UButton color="primary" :label="currentSelectedDivision" trailing-icon="i-heroicons-chevron-down-20-solid" class="m-1" size="md" >
        {{ currentSelectedDivison }}
      </UButton>
    </UDropdown>
    <div class="flex flex-col place-items-center">
      <UTable v-if="currentSelectedDivision='Div 1'" :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No Player Prices.' }" :rows="d1PlayerPrices" :columns="columns" class="w-full" />
      <UTable v-if="currentSelectedDivision='Div 2'" :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No Player Prices.' }" :rows="d2PlayerPrices" :columns="columns" class="w-full" />
      <UTable v-if="currentSelectedDivision='Div 3'" :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No Player Prices.' }" :rows="d3PlayerPrices" :columns="columns" class="w-full" />
    </div>
  </UCard>
</template>

<script lang="ts" setup>
let currentSelectedDivison = 'Div 1'
const client = useSupabaseClient()

const { data: d1PlayerPrices, error } = await client
  .from('S1_D1_Prices')
  .select('')
  .order('price', { ascending: false })

const { data: d2PlayerPrices, error } = await client
.from('S1_D2_Prices')
.select('')
.order('price', { ascending: false })
  
const { data: d3PlayerPrices, error } = await client
.from('S1_D3_Prices')
.select('')
.order('price', { ascending: false })
  
const columns = [{
  key: 'discord_id',
  label: 'Discord Username'
}, {
  key: 'rl_id',
  label: 'Rocket League ID'
}, {
  key: 'price',
  label: 'Price'
}]

const divisions = [
  [{
    label: 'Div 1',
    click: () => {
      currentSelectedDivison = 'Div 1'
    }
  }, {
    label: 'Div 2',
    click: () => {
      currentSelectedDivison = 'Div 2'
    }
  }, {
    label: 'Div 3',
    click: () => {
      currentSelectedDivison = 'Div 3'
    }
  }]
]
</script>

<style>

</style>
