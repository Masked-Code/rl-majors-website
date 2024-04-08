<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    <div v-if="playerData">
      <div class="flex flex-flow justify-between">
        <div class="flex flex-row">
          <img src="~/assets/RLMajors_logo_Big.png" class="rounded-2xl max-w-48">
          <div class="flex flex-col justify-center ml-2">
            <div class="">
              <h1 v-if="currentSelectedSeasonalPlayerData.display_name" class="m-2 text-4xl">{{ currentSelectedSeasonalPlayerData.display_name}}</h1>
              <h1 v-else class="m-2 text-4xl">{{ currentSelectedSeasonalPlayerData.discord_username }}</h1>
            </div>
            <div class="flex flex-row">
              <h1 class="m-2 text-2xl">Div {{  currentSelectedSeasonalPlayerData.division  }}</h1>
              <h1 class="m-2 text-2xl">Price {{ currentSelectedSeasonalPlayerData.price }}</h1>
            </div>
          </div>
        </div>
        <div class="flex flex-row">
          <div class="place-self-center m-2 text-lg">
            <UButton
              icon="i-heroicons-arrow-top-right-on-square"
              :to="currentSelectedSeasonalPlayerData.tracker_link"
              target="_blank"
              class="text-primary m-2 text-lg"
              variant="link"
              trailing
            >TRN Tracker</UButton>
            <UButton
              icon="i-heroicons-arrow-top-right-on-square"
              :to="currentSelectedSeasonalPlayerData.bc_link"
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
                      <div>Discord ID: {{ currentSelectedSeasonalPlayerData.discord_id }}</div>
                      <div>Discord Username: {{ currentSelectedSeasonalPlayerData.discord_username }}</div>
                      <div>Display Name: {{ currentSelectedSeasonalPlayerData.display_name }}</div>
                      <div>Tags: {{ currentSelectedSeasonalPlayerData.tags }}</div>
                    </div>
                    <div class="m-4 flex flex-col justify-center">
                      <div>Platform: {{ currentSelectedSeasonalPlayerData.platform }}</div>
                      <div>Platform ID: {{ currentSelectedSeasonalPlayerData.platform_id }}</div>
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
                <div>Seasonal Stats: {{ currentSelectedSeasonalPlayerData.seasonal_stats }}</div>
              </UCard>
              <UCard class="m-4">
                <div>Games Played: {{ currentSelectedSeasonalPlayerData.seasonal_stats.games.played }}</div>
                <div>Wins: {{ currentSelectedSeasonalPlayerData.seasonal_stats.games.won }}</div>
                <div>Losses: {{ currentSelectedSeasonalPlayerData.seasonal_stats.games.lost }}</div>
                <div>Win Rate: {{ currentSelectedSeasonalPlayerData.seasonal_stats.games.won / currentSelectedSeasonalPlayerData.seasonal_stats.games.played * 100 }}%</div>
                <div>Overtime Rate: {{ currentSelectedSeasonalPlayerData.seasonal_stats.games.overtimes / currentSelectedSeasonalPlayerData.seasonal_stats.games.played * 100 }}%</div>
                <div>Forfeit Rate: {{ currentSelectedSeasonalPlayerData.seasonal_stats.games.overtimes / currentSelectedSeasonalPlayerData.seasonal_stats.games.played * 100 }}%</div>
              </UCard>
              <UCard class="m-4">
                <div>Total Shots: {{ currentSelectedSeasonalPlayerData.seasonal_stats.core.shots }}</div>
                <div>Total Shots Against: {{ currentSelectedSeasonalPlayerData.seasonal_stats.core.shots_against }}</div>
                <div>Total Goals: {{ currentSelectedSeasonalPlayerData.seasonal_stats.core.goals }}</div>
                <div>Total Goals Against: {{ currentSelectedSeasonalPlayerData.seasonal_stats.core.goals_against }}</div>
                <div>Total Saves: {{ currentSelectedSeasonalPlayerData.seasonal_stats.core.saves }}</div>
                <div>Total Assists: {{ currentSelectedSeasonalPlayerData.seasonal_stats.core.assists }}</div>
                <div>Total Score: {{ currentSelectedSeasonalPlayerData.seasonal_stats.core.score }}</div>
                <div>Total MVPs: {{ currentSelectedSeasonalPlayerData.seasonal_stats.core.mvp }}</div>
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
const { data: playerData, error: playerDataError } = await client
  .from('Player_Data')
  .select('')
  .eq('discord_username', route.params.id)
  .order('season')
const currentSelectedSeason = ref(playerData[playerData.length-1].season)
const seasons = []
const seasonslist = []
playerData.forEach((seasonalData) => seasonslist.push(
  {
    label: `Season ${seasonalData.season}`, 
    click: () => {currentSelectedSeason.value = seasonalData.season}
  }
));
seasons.push(seasonslist)
const currentSelectedSeasonalPlayerData = computed(() => {
  return playerData.find((seasonalPlayerDataThingy) => seasonalPlayerDataThingy.season == currentSelectedSeason.value)
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
