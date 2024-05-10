<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    <div>
      <div class="flex flex-flow justify-between">
        <div class="flex flex-row">
          <img src="~/assets/RLMajors_logo_Big.png" class="rounded-2xl max-w-48">
          <div class="flex flex-col justify-center ml-4">
            <div class="text-3xl font-bold m-1">{{ currentSelectedPlayer.display_name ? currentSelectedPlayer.display_name : currentSelectedPlayer.discord_username}}</div>
            <div v-if="currentSelectedPlayer.display_name" class="text-xl m-1">Discord Username: {{ currentSelectedPlayer.discord_username }}</div>
            <div class="text-xl m-1">Div: {{ currentSelectedPlayer.division }}</div>
            <div class="text-xl m-1">Price: {{ currentSelectedPlayer.price }}</div>
          </div>
        </div>
        <div class="flex flex-row">
          <div class="place-self-center m-2 text-lg">
            <UButton
              icon="i-heroicons-arrow-top-right-on-square"
              :to="currentSelectedPlayer.tracker_link"
              target="_blank"
              class="text-primary m-2 text-lg"
              variant="link"
              trailing
            >TRN Tracker</UButton>
            <UButton
              icon="i-heroicons-arrow-top-right-on-square"
              :to="currentSelectedPlayer.ballchasing_link"
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
                <div class="m-4">
                  <UCard class="core-card">
                    <div class="flex flex-row">
                      <div class="text-3xl m-4 mr-6 place-self-center"><b>Core</b></div>
                      <div class="flex flex-row">
                        <div class="flex flex-col place-items-center">
                          <div class="text-lg ml-3 mr-3">Wins</div>
                          <div class="text-2xl ml-3 mr-3">{{ currentSelectedPlayerData.wins }}</div>
                        </div>
                        <div class="flex flex-col place-items-center">
                          <div class="text-lg ml-3 mr-3">Win%</div>
                          <div v-if="currentSelectedPlayerData.losses == 0 && currentSelectedPlayerData.wins == 0" class="text-2xl ml-3 mr-3">-</div>
                          <div v-if="currentSelectedPlayerData.losses == 0 && currentSelectedPlayerData.wins > 0" class="text-2xl ml-3 mr-3">100</div>
                          <div v-if="currentSelectedPlayerData.losses > 0" class="text-2xl ml-3 mr-3">{{ ((currentSelectedPlayerData.wins / (currentSelectedPlayerData.losses + currentSelectedPlayerData.wins)) * 100).toFixed(2)}}</div>
                        </div>
                        <div class="flex flex-col place-items-center">
                          <div class="text-lg ml-3 mr-3">MVPs</div>
                          <div class="text-2xl ml-3 mr-3">{{ currentSelectedPlayerData.mvps }}</div>
                        </div>
                        <div class="flex flex-col place-items-center">
                          <div class="text-lg ml-3 mr-3">Goals</div>
                          <div class="text-2xl ml-3 mr-3">{{ currentSelectedPlayerData.goals }}</div>
                        </div>
                        <div class="flex flex-col place-items-center">
                          <div class="text-lg ml-3 mr-3">Assists</div>
                          <div class="text-2xl ml-3 mr-3">{{ currentSelectedPlayerData.assists }}</div>
                        </div>
                        <div class="flex flex-col place-items-center">
                          <div class="text-lg ml-3 mr-3">Shots</div>
                          <div class="text-2xl ml-3 mr-3">{{ currentSelectedPlayerData.shots }}</div>
                        </div>
                        <div class="flex flex-col place-items-center">
                          <div class="text-lg ml-3 mr-3">Saves</div>
                          <div class="text-2xl ml-3 mr-3">{{ currentSelectedPlayerData.saves }}</div>
                        </div>
                      </div>
                    </div>
                  </UCard>
                </div>
              </div>
            </div>
            </div>
            <div v-if="item.key === 'analytics'">
              <UCard class="m-6">
                <div v-for="(value, name, index) in currentSelectedPlayerData">
                {{name}}: {{ value }}
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
.core-card {
  background: radial-gradient(circle at left, #FFBF00 8%, transparent 20%);
}
</style>
