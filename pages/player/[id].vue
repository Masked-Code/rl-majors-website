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
playerData.forEach((seasonalData) => seasons.push({label: `Season ${seasonalData.season}`, click: () => {currentSelectedSeason.value = `${seasonalData.season}`}});
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

<!-- <template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    <div class="flex flex-flow m-3">
      <img :src="user.user_metadata.avatar_url" class="rounded-2xl">
      <h1 class="place-self-center m-2 ml-10 text-4xl"> {{ user.user_metadata.custom_claims.global_name }}</h1>
      <h1 class="place-self-center m-2 ml-10 text-xl">Div {{ division }}</h1>
      <h1 class="place-self-center m-2 ml-10 text-xl">Price {{ price }}</h1>
    </div>

    <UDivider></UDivider>

    <UDropdown :items="seasons" :popper="{ placement: 'bottom-start' }">
      <UButton color="primary" :label="currentSelectedSeason" trailing-icon="i-heroicons-chevron-down-20-solid" class="m-2" size="md"/>
    </UDropdown>

    <UCard class="rankingCard">
        <div class="grid justify-items-center">
          <h1 class="m-1 text-xl font-bold">Overall Ranking</h1>
          <h1 class="m-1 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cool-400 to-slate-500">{{ overallRaking }}</h1>
        </div>
      </UCard>

    <div class="flex flex-row m-4 place-content-evenly">
      <UCard class="min-w-40 ">
        <div class="grid justify-items-center">
          <h1 class="m-1 text-xl">Win%</h1>
          <h1 class="m-1 text-xl font-bold">{{ winPercent }}</h1>
        </div>
      </UCard>
      <UCard class="min-w-40 ">
        <div class="grid justify-items-center">
          <h1 class="m-1 text-xl">Goals</h1>
          <h1 class="m-1 text-xl font-bold">{{ goals }}</h1>
        </div>
      </UCard>
      <UCard class="min-w-40 ">
        <div class="grid justify-items-center">
          <h1 class="m-1 text-xl">Assists</h1>
          <h1 class="m-1 text-xl font-bold">{{ assists }}</h1>
        </div>
      </UCard>
      <UCard class="min-w-40 ">
        <div class="grid justify-items-center">
          <h1 class="m-1 text-xl">Saves</h1>
          <h1 class="m-1 text-xl font-bold">{{ saves }}</h1>
        </div>
      </UCard>
    </div>

    <div class="flex flex-row m-4 place-content-evenly">
      <UCard class="min-w-40 ">
        <div class="grid justify-items-center">
          <h1 class="m-1 text-xl">Shooting%</h1>
          <h1 class="m-1 text-xl font-bold">{{ shootingPercent }}</h1>
        </div>
      </UCard>
      <UCard class="min-w-40 ">
        <div class="grid justify-items-center">
          <h1 class="m-1 text-xl">Possession</h1>
          <h1 class="m-1 text-xl font-bold">{{ possession }}</h1>
        </div>
      </UCard>
      <UCard class="min-w-40 ">
        <div class="grid justify-items-center">
          <h1 class="m-1 text-xl">Demos</h1>
          <h1 class="m-1 text-xl font-bold">{{ demos }}</h1>
        </div>
      </UCard>
    </div>
    <div class="flex flex-row">
      <div class="w-[33%]">
        <PlaytylePieChart />
      </div>
      <div class="w-[63%]">
        <TeamRankingLineChart />
      </div>
    </div>
  </UCard>
</template>

<script setup>
import PlaytylePieChart from '~/components/PlaystylePieChart.vue'
import TeamRankingLineChart from '~/components/TeamRankingLineChart.vue'
const user = useSupabaseUser()
let division = 1
let price = 300
let currentSelectedSeason = 'Season 1'
let winPercent = '83.3%'
let shootingPercent = '49.2%'
let goals = 20
let saves = 13
let assists = 9
let possession = 112
let demos = 3
let overallRaking = '2nd'



definePageMeta({
  middleware: 'auth'
})

const seasons = [
  [{
    label: 'Season 1',
    click: () => {
      console.log('Season 1')
      currentSelectedSeason = 'Season 1'
    }
  }, {
    label: 'Season 2',
    click: () => {
      console.log('Season 2')
      currentSelectedSeason = 'Season 2'
    }
  }, {
    label: 'Season 3',
    click: () => {
      console.log('Season 3')
      currentSelectedSeason = 'Season 3'
    }
  }, {
    label: 'Season 4',
    click: () => {
      console.log('Season 4')
      currentSelectedSeason = 'Season 4'
    }
  }, {
    label: 'Season 5',
    click: () => {
      console.log('Season 5')
      currentSelectedSeason = 'Season 5'
    }
  }]
]
</script>

<style>
.rankingCard {
  box-shadow: 1px 10px 20px rgba(192,192,192,0.29), 1px 5px 10px rgba(210,220,222,0.23);
  overflow: "visible";
}
</style> -->
