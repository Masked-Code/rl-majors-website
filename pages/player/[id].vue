<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    <div class="flex flex-flow m-3">
      <img src="~/assets/RLMajors_logo_Big.png" class="rounded-2xl max-w-64">
      <h1 v-if="playerData[0].display_name" class="place-self-center m-2 ml-10 text-4xl">{{ playerData[playerData.length - 1].display_name }}</h1>
      <h1 v-else class="place-self-center m-2 ml-10 text-4xl">{{ playerData[playerData.length - 1].discord_username }}</h1>
      <h1 class="place-self-center m-2 ml-10 text-xl">Div {{  playerData[playerData.length - 1].division  }}</h1>
      <h1 class="place-self-center m-2 ml-10 text-xl">Price {{ playerData[playerData.length - 1].price }}</h1>
    </div>
    <UDivider></UDivider>
    <UDropdown :items="seasons" :popper="{ placement: 'bottom-start' }">
      <UButton color="primary" trailing-icon="i-heroicons-chevron-down-20-solid" class="m-1" size="md" >
        {{ currentSelectedDivision }}
      </UButton>
    </UDropdown>
    <div v-if="playerData">
      {{ playerData.find((seasonalPlayerDataThingy) => seasonalPlayerDataThingy.season = currentSelectedSeason ? currentSelectedSeason : playerData[0].season) }}
    </div>
    <div v-else>
      There is no data on this player
    </div>
  </UCard>
</template>

<script setup>
import PlaytylePieChart from '~/components/PlaystylePieChart.vue'
import TeamRankingLineChart from '~/components/TeamRankingLineChart.vue'
let currentSelectedSeason = ref()
const client = useSupabaseClient()
const route = useRoute()
const user = useSupabaseUser()
const { data: playerData, error: playerDataError } = await client
  .from('Player_Data')
  .select('')
  .eq('discord_username', route.params.id)
  .order('season')

const seasons = []
playerData.forEach((seasonalData) => seasons.push([{label: `Season ${seasonalData.season}`, click: () => {currentSelectedSeason.value = `${seasonalData.season}`}}]);
// const seasons = [
// [{
//   label: 'Season 1',
//   click: () => {
//     currentSelectedSeason.value = '1'
//   }
// }, {
//   label: 'Season 2',
//   click: () => {
//     currentSelectedSeason.value = '2'
//   }
// }, {
//   label: 'Season 3',
//   click: () => {
//     currentSelectedSeason.value = '3'
//   }
// }]
// ]
</script>

<style>
</style>
