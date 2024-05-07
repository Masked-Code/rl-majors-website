<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    <div class="m-2">
      player: {{ currentSelectedPlayer }}
    </div>
    <div class="m-2">
      playerData: {{ currentSelectedPlayerData }}
    </div>
    <div>
      <div class="flex flex-flow justify-between">
        <div class="flex flex-row">
          <img src="~/assets/RLMajors_logo_Big.png" class="rounded-2xl max-w-48">
          <div class="flex flex-col justify-center ml-2">
            <div class="">
            </div>
            <div class="flex flex-row">
            </div>
          </div>
        </div>
        <div class="flex flex-row">
          <div class="place-self-center m-2 text-lg">
            <UButton
              icon="i-heroicons-arrow-top-right-on-square"
              target="_blank"
              class="text-primary m-2 text-lg"
              variant="link"
              trailing
            >TRN Tracker</UButton>
            <UButton
              icon="i-heroicons-arrow-top-right-on-square"
              target="_blank"
              class="text-primary m-2 text-lg"
              variant="link"
              trailing
            >Ballchasing Profile</UButton>
          </div>
        </div>
      </div>
      <UDivider></UDivider>
        <UDropdown :items="seasons" :popper="{ placement: 'bottom-start' }" class="mt-2">
          <UButton color="primary" trailing-icon="i-heroicons-chevron-down-20-solid" class="m-2" size="md" >
            Season {{ currentSelectedSeason }}
          </UButton>
        </UDropdown>
        <UTabs :items="tabs" class="m-4">
          <template #default="{ item, index, selected }">
            <div class="flex items-center gap-2 relative truncate">
              <UIcon :name="item.icon" class="w-6 h-6 flex-shrink-0 text-primary" />
              <span class="truncate text-lg text-primary">{{ item.label }}</span>
            </div>
          </template>
          <template #item="{ item }">
            <div v-if="item.key === 'overview'">
            <div>
              <div class="flex flex-row">
                <div class="flex flex-col flex-grow">
                  <UCard class="m-4 flex-grow">
                    Overview Coming Soon
                    <div class="flex flex-row justify-center">
                      <div class="m-4 flex flex-col justify-center">
                        <img src="~/assets/discord-mark-blue.png" class="rounded-2xl max-w-24">
                      </div>
                    <div class="m-4 flex flex-col justify-center">
                    </div>
                    <div class="m-4 flex flex-col justify-center">
                    </div>
                    </div>
                  </UCard>
                </div>
                <UCard class="m-4 flex">
                  Recent Matches Coming Soon
                </UCard>
              </div>
            </div>
            </div>
            <div v-if="item.key === 'analytics'">
              <UCard class="m-6">
                <div>
                Analytis Coming Soon
                </div>
              </UCard>
            <div>
            </div>
            </div>
            <div v-if="item.key === 'matches'">
              <UCard class="m-6">
                Mathes Coming Soon
              </UCard>
            </div>
          </template>
        </UTabs>
    </div>
  </UCard>
</template>

<script setup>
import PlaytylePieChart from '~/components/PlaystylePieChart.vue'
import TeamRankingLineChart from '~/components/TeamRankingLineChart.vue'
const client = useSupabaseClient()
const route = useRoute()
const currentSelectedSeason = ref()
const currentSelectedPlayer = ref()
const currentSelectedPlayerData = ref()
let allPlayer = [];
let allPlayerData = [];
let seasons = []
onMounted(async () => {
  const { data: player, error: playerError } = await client
    .from('Players')
    .select('*')
    .eq('discord_username', route.params.id)
    .order('season')
  if (player) {
    allPlayer = player
    currentSelectedSeason.value = player[player.length-1].season
    currentSelectedPlayer.value = player[player.length-1]
    for (let playerIndex in player) {
      const { data: playerData, error: playerDataError } = await client
        .from('Player_Stats')
        .select('*')
        .eq('player_uuid', player[playerIndex].uuid)
        .single()
      if (playerData) {
        allPlayerData.push(playerData) 
      }
      if (playerDataError) {
        console.error("playerDataError: ", playerDataError);
      }
    }
    currentSelectedPlayerData.value = allPlayerData[allPlayerData.length-1]
  }
  if (playerError) {
    console.error("playerError: ", playerError);
  }
  let seasonEntries = []
  player.forEach((eachPlayerSeason) => seasonEntries.push(
    {
      label: `Season ${eachPlayerSeason.season}`, 
      click: () => {currentSelectedSeason.value = eachPlayerSeason.season}
    }
  ));
  seasons.push(seasonEntries)
})
currentSelectedPlayer.value = computed(() => {
  return allPlayer.find((playah) => playah.season == currentSelectedSeason.value)
})
currentSelectedPlayerData.value = computed(() => {
  return allPlayerData.find((playahData) => playahData.season == currentSelectedSeason.value)
})
watch(currentSelectedSeason, async (newVal) => {
  currentSelectedPlayer.value = allPlayer.find((playah) => playah.season == newVal)
  currentSelectedPlayerData.value = allPlayerData.find((playahData) => playahData.season == newVal)
})
const tabs = [{
  key: 'overview',
  label: 'Overview',
  icon: 'i-heroicons-view-columns',
  description: 'View player overview.'
}, {
  key: 'analytics',
  label: 'Analytics',
  icon: 'i-heroicons-chart-bar',
  description: 'View analytics here.'
}, {
  key: 'matches',
  label: 'Matches',
  icon: 'i-heroicons-list-bullet',
  description: 'View recent matches.'
}]
</script>

<style>
</style>
