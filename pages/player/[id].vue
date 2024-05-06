<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    <div v-if="allPlayerData">
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
              <div v-if="playerDataError">
              Error loading player data
            </div>
            <div v-else>
              <div class="flex flex-row">
                <div class="flex flex-col flex-grow">
                  <UCard class="m-4 flex-grow">
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
              <div v-if="playerDataError">
              Error loading player data
            </div>
            <div v-else>
              <UCard class="m-4">
              </UCard>
              <UCard class="m-4">
              </UCard>
              <UCard class="m-4">
              </UCard> 
            </div>
            </div>
            <div v-if="item.key === 'matches'">
              Coming Soon
            </div>
          </template>
        </UTabs>
    </div>
    <div v-else>
      Error
    </div>
  </UCard>
</template>

<script setup>
import PlaytylePieChart from '~/components/PlaystylePieChart.vue'
import TeamRankingLineChart from '~/components/TeamRankingLineChart.vue'
const client = useSupabaseClient()
const route = useRoute()
const allPlayerData = []
let currentSelectedSeasonalPlayer = ref()
onMounted(async () => {
  const { data: player, error: playerError } = await client
    .from('Players')
    .select('*')
    .eq('discord_username', route.params.id)
    .order('season')
  if(player) {
    console.log(player)
  }
  if (playerError) {
    console.error(playerError);
  }
  player.forEach(async (foundPlayer) =>{
    const { data: playerData, error: playerDataError } = await client
      .from('Player_Stats')
      .select('*')
      .eq('player_uuid', foundPlayer.uuid)
      .order('season')
    if(playerData) {
      allPlayerData.push(playerData);
    }
    if (playerDataError) {
      console.error(playerDataError);
    }
  })
  const currentSelectedSeason = ref(player[player.length-1].season)
  const seasons = []
  const seasonslist = []
  console.log(allPlayerData)
  player.forEach((seasonalData) => seasonslist.push(
    {
      label: `Season ${seasonalData.season}`, 
      click: () => {currentSelectedSeason.value = seasonalData.season}
    }
  ));
  seasons.push(seasonslist)
  currentSelectedSeasonalPlayer.value = computed(() => {
    console.log("test", player.find((foundPlayer) => foundPlayer.season == currentSelectedSeason.value))
    return player.find((foundPlayer) => foundPlayer.season == currentSelectedSeason.value)
  })
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
  label: 'Recent Matches',
  icon: 'i-heroicons-list-bullet',
  description: 'View recent matches.'
}]
</script>

<style>
</style>
