<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
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
      <div class="flex flex-col place-items-center">
        <UTable :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No Team Data.' }" :rows="teamData" :columns="columns" class="w-full" >
          <template #team_name-header="{column}">
            {{ column.label }}
          </template>
          <template #name-data="{row}">
            {{ row.name }}
          </template>
          <template #owner-header="{column}">
            {{ column.label }}
          </template>
          <template #owner-data="{row}">
            {{ row.owner }}
          </template>
          <template #captain-data="{row}">
            {{ row.captain }}
          </template>
          <template #salary-data="{row}">
            {{ row.salary }}
          </template>
          <template #transactions-data="{row}">
            {{ row.transactions }}
          </template>
        </UTable>
      </div>
  </UCard>
</template>

<script lang="ts" setup>
const client = useSupabaseClient()
let currentSelectedSeason = ref(1)
let currentSelectedDivision = ref(1)
let teamData = ref();
onMounted(async () => {
  const { data: initTeamData } = await client
    .from('Teams')
    .select('*')
    .eq('season', 1)
    .eq('division', 1)
    teamData.value = initTeamData;
})

watch(currentSelectedSeason, async (newVal) => {
  const { data: newTeamData } = await client
    .from('Teams')
    .select('*')
    .eq('division', currentSelectedDivision.value)
    .eq('season', newVal)
    teamData.value = newTeamData;
})

watch(currentSelectedDivision, async (newVal) => {
  const { data: newTeamData } = await client
    .from('Teams')
    .select('*')
    .eq('division', newVal)
    .eq('season', currentSelectedSeason.value)
    teamData.value = newTeamData;
})

const columns = [{
    key: 'name',
    label: 'Team Name'
  }, {
    key: 'owner',
    label: 'Franchise Owner'
  }, {
    key: 'salary',
    label: 'Remaining Salary'
  }, {
    key: 'transactions',
    label: 'Remaining Transactions'
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
