<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    <UDropdown :items="divisions" :popper="{ placement: 'bottom-start' }">
      <UButton color="primary" trailing-icon="i-heroicons-chevron-down-20-solid" class="m-1" size="md" >
        {{ currentSelectedDivision }}
      </UButton>
    </UDropdown>
      <div class="flex flex-col place-items-center">
        <UTable v-if="currentSelectedDivision == 'Div 1'" :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No Player Prices.' }" :rows="d1PlayerPrices || undefined" :columns="columns" class="w-full" >
          <template #discord_username-data="{row}">
            <ULink
            :to="`/player/${row.discord_username}`"
              class="text-primary font-bold text-lg"
            >
              {{ row.discord_username }}
            </ULink>
          </template>
          <template #tracker_link-data="{row}">
            <ULink
            :to="`${row.tracker_link}`"
            target="_blank"
              class="text-primary font-bold text-lg"
            >
              Link
            </ULink>
          </template>
        </UTable>
        <UTable v-if="currentSelectedDivision == 'Div 2'" :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No Player Prices.' }" :rows="d2PlayerPrices || undefined" :columns="columns" class="w-full" >
          <template #discord_username-data="{row}">
            <ULink
            :to="`/player/${row.discord_username}`"
              class="text-primary font-bold text-lg"
            >
              {{ row.discord_username }}
            </ULink>
          </template>
          <template #tracker_link-data="{row}">
            <ULink
            :to="`${row.tracker_link}`"
            target="_blank"
              class="text-primary font-bold text-lg"
            >
              Link
            </ULink>
          </template>
        </UTable>
        <UTable v-if="currentSelectedDivision == 'Div 3'" :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No Player Prices.' }" :rows="d3PlayerPrices || undefined" :columns="columns" class="w-full" >
          <template #discord_username-data="{row}">
            <ULink
            :to="`/player/${row.discord_username}`"
              class="text-primary font-bold text-lg"
            >
              {{ row.discord_username }}
            </ULink>
          </template>
          <template #tracker_link-data="{row}">
            <ULink
            :to="`${row.tracker_link}`"
            target="_blank"
              class="text-primary font-bold text-lg"
            >
              Link
            </ULink>
          </template>
        </UTable>
      </div>
  </UCard>
</template>

<script setup>
let currentSelectedDivision = ref('Div 1')
const client = useSupabaseClient()

const { data: d1PlayerPrices } = await client
  .from('Players')
  .select('*')
  .eq('division', 1)
  .order('price', { ascending: false })
console.log(d1PlayerPrices)
const { data: d2PlayerPrices } = await client
.from('Players')
.select('*')
.eq('division', 2)
.order('price', { ascending: false })
  
const { data: d3PlayerPrices } = await client
.from('Players')
.select('*')
.eq('division', 3)
.order('price', { ascending: false })
  
const columns = [{
  key: 'discord_username',
  label: 'Discord Username'
}, {
  key: 'tracker_link',
  label: 'RL Tracker'
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
