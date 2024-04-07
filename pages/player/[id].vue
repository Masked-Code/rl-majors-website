<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    <div v-if="playerData">
      <div class="flex flex-flow justify-between">
        <div class="flex flex-row">
          <img src="~/assets/RLMajors_logo_Big.png" class="rounded-2xl max-w-48">
          <div class="flex flex-col justify-center">
            <div class="flex flex-row">
              <h1 v-if="playerData[0].display_name" class="m-2 ml-6 text-4xl">{{ playerData[playerData.length - 1].display_name }}</h1>
              <h1 v-else class="m-2 text-4xl">{{ playerData[playerData.length - 1].discord_username }}</h1>
            </div>
            <div class="flex place-self-end">
              <h1 class="m-2 ml-6 text-2xl">Div {{  playerData[playerData.length - 1].division  }}</h1>
              <h1 class="m-2 ml-6 text-2xl">Price {{ playerData[playerData.length - 1].price }}</h1>
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
      <UDropdown :items="seasons" :popper="{ placement: 'bottom-start' }">
        <UButton color="primary" trailing-icon="i-heroicons-chevron-down-20-solid" class="m-2" size="md" >
          Season {{ currentSelectedSeason }}
        </UButton>
      </UDropdown>
      <div v-if="playerDataError">
        Error loading player data
      </div>
      <div v-else>
        <div>
          Discord Information
          <UCard>{{ currentSelectedSeasonalPlayerData.discord_id }}</UCard>
          <UCard>{{ currentSelectedSeasonalPlayerData.discord_id }}</UCard>
          <UCard>{{ currentSelectedSeasonalPlayerData.discord_username }}</UCard>
        </div>
        <UDivider></UDivider>
        <div>
          Rocket League Information
          <UCard>{{ currentSelectedSeasonalPlayerData.platform }}</UCard>
          <UCard>{{ currentSelectedSeasonalPlayerData.platform_id }}</UCard>
        </div>
        <UDivider></UDivider>
        <div>
          RL Majors Information
          <UCard>{{ currentSelectedSeasonalPlayerData.display_name }}</UCard>
          <UCard>{{ currentSelectedSeasonalPlayerData.seasonal_stats }}</UCard>
          <UCard>{{ currentSelectedSeasonalPlayerData.tags }}</UCard>
          <UCard>{{ currentSelectedSeasonalPlayerData.season }}</UCard>
          <UCard>{{ currentSelectedSeasonalPlayerData.division }}</UCard>
          <UCard>{{ currentSelectedSeasonalPlayerData.price }}</UCard>
          <UCard>{{ currentSelectedSeasonalPlayerData.team_uuid }}</UCard>
        </div>
        <UDivider></UDivider>
        <div>
          Other Information
          <UCard>{{ currentSelectedSeasonalPlayerData.tracker_link }}</UCard>
          <UCard>{{ currentSelectedSeasonalPlayerData.bc_link }}</UCard>
          <UCard>{{ currentSelectedSeasonalPlayerData.id }}</UCard>
        </div>
      </div>
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
</script>

<style>
</style>
