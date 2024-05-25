<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    <div class="flex flex-row">
    <UDropdown :items="seasons" :popper="{ placement: 'bottom-start' }">
      <UButton color="primary" trailing-icon="i-heroicons-chevron-down-20-solid" class="m-1" size="md" >
        Season {{ currentSelectedSeason }}
      </UButton>
    </UDropdown>
    <UDropdown :items="divisions" :popper="{ placement: 'bottom-start' }">
      <UButton color="primary" trailing-icon="i-heroicons-chevron-down-20-solid" class="m-1" size="md" >
        Div {{ currentSelectedDivision }}
      </UButton>
    </UDropdown>
  </div>
      <div class="flex flex-col place-items-center">
        <UTable :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No Player Prices.' }" :rows="filteredRows || undefined" :columns="columns" class="w-full" >
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
          <template #team_uuid-data="{row}">
            <ULink
              v-if="row.team_uuid"
              :to="`/teams/${row.team_uuid.uuid}`"
              class="text-primary font-bold text-lg"
            >
              {{ row.team_uuid.name }}
            </ULink>
          </template>
        </UTable>
      </div>
  </UCard>
</template>

<script setup>
const client = useSupabaseClient()
let currentSelectedSeason = ref(1)
let currentSelectedDivision = ref(1)
let filteredRows = ref()
let allPlayers = [];
onMounted(async () => {
  const { data: players} = await client
    .from('Players')
    .select('*, team_uuid(*)')
    .order('season', currentSelectedSeason.value)
    .order('division', currentSelectedDivision.value)
    .order('price', { ascending: false })
    allPlayers = players;
    filteredRows.value = players.filter((playah) => playah.season == currentSelectedSeason.value && playah.division == currentSelectedDivision.value)
})
watch(currentSelectedSeason, async (newVal) => {
  filteredRows.value = allPlayers.filter((playah) => playah.season == newVal && playah.division == currentSelectedDivision.value)
})
watch(currentSelectedDivision, async (newVal) => {
  filteredRows.value = allPlayers.filter((playah) => playah.division == newVal && playah.season == currentSelectedSeason.value)
})

const columns = [{
  key: 'discord_username',
  label: 'Discord Username',
  sortable: true
}, {
  key: 'tracker_link',
  label: 'RL Tracker'
}, {
  key: 'team_uuid',
  label: 'Team'
}, {
  key: 'price',
  label: 'Price',
  sortable: true
}]
const seasons = [
  [{
    label: 'Season 1',
    click: () => {
      currentSelectedSeason.value = 1
    }
  }, {
    label: 'Season 2',
    click: () => {
      currentSelectedSeason.value = 2
    }
  }, {
    label: 'Season 3',
    click: () => {
      currentSelectedSeason.value = 3
    }
  }]
]
const divisions = [
  [{
    label: 'Div 1',
    click: () => {
      currentSelectedDivision.value = 1
    }
  }, {
    label: 'Div 2',
    click: () => {
      currentSelectedDivision.value = 2
    }
  }, {
    label: 'Div 3',
    click: () => {
      currentSelectedDivision.value = 3
    }
  }]
]
</script>

<style>

</style>
