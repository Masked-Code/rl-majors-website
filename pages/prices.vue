<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    <UDropdown :items="divisions" :popper="{ placement: 'bottom-start' }">
      <UButton color="primary" trailing-icon="i-heroicons-chevron-down-20-solid" class="m-1" size="md" >
        {{ currentSelectedDivision }}
      </UButton>
    </UDropdown>
      <div class="flex flex-col place-items-center">
        <UTable v-if="currentSelectedDivision == 'Div 1'" :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No Player Prices.' }" :rows="d1PlayerPrices || undefined" :columns="columns" class="w-full" >
          <template #discord_id-data="{row}">
            <ULink
            :to="`/players/${row.discord_id}`"
              class="text-primary font-bold text-lg"
            >
              {{ row.discord_id }}
            </ULink>
          </template>
        </UTable>
        <UTable v-if="currentSelectedDivision == 'Div 2'" :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No Player Prices.' }" :rows="d2PlayerPrices || undefined" :columns="columns" class="w-full" >
          <template #discord_id-data="{row}">
            <ULink
            :to="`/players/${row.discord_id}`"
              class="text-primary font-bold text-lg"
            >
              {{ row.discord_id }}
            </ULink>
          </template>
        </UTable>
        <UTable v-if="currentSelectedDivision == 'Div 3'" :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No Player Prices.' }" :rows="d3PlayerPrices || undefined" :columns="columns" class="w-full" >
          <template #discord_id-data="{row}">
            <ULink
            :to="`/players/${row.discord_id}`"
              class="text-primary font-bold text-lg"
            >
              {{ row.discord_id }}
            </ULink>
          </template>
        </UTable>
      </div>
  </UCard>
</template>

<script lang="ts" setup>
let currentSelectedDivision = ref('Div 1')
const client = useSupabaseClient()

const { data: d1PlayerPrices } = await client
  .from('S1_Prices')
  .select('')
  .gte('price', 289)
  .order('price', { ascending: false })

const { data: d2PlayerPrices } = await client
.from('S1_Prices')
.select('')
.lte('price', 288)
.gte('price', 238)
.order('price', { ascending: false })
  
const { data: d3PlayerPrices } = await client
.from('S1_Prices')
.select('')
.lte('price', 237)
.gte('price', 170)
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
      currentSelectedDivision.value = 'Div 1'
    }
  }, {
    label: 'Div 2',
    click: () => {
      currentSelectedDivision.value = 'Div 2'
    }
  }, {
    label: 'Div 3',
    click: () => {
      currentSelectedDivision.value = 'Div 3'
    }
  }]
]
</script>

<style>

</style>
