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
        <UTable
          :loading-state="{ icon: 'i-heroicons-arrow-path-20-solid', label: 'Loading...' }"
          :progress="{ color: 'primary', animation: 'carousel' }"
          :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No Team Data.' }" 
          :rows="teams" :columns="columns" class="w-full"
        >
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
            {{ row.owner.display_name ? row.owner.display_name : row.owner.discord_username }}
          </template>
          <template #captain-header="{column}">
            {{ column.label }}
          </template>
          <template #captain-data="{row}">
            {{ row.captain.display_name ? row.captain.display_name : row.captain.discord_username }}
          </template>
          <template #salary-data="{row}">
            {{ row.salary }}
          </template>
          <template #transactions-data="{row}">
            {{ row.transactions }}
          </template>
          <template #wins-data="{row}">
            {{ row.wins }}
          </template>
          <template #losses-data="{row}">
            {{ row.losses }}
          </template>
          <template #goal_difference-data="{row}">
            {{ row.goal_difference }}
          </template>
        </UTable>
      </div>
  </UCard>
</template>

<script setup>
const client = useSupabaseClient()
let currentSelectedSeason = ref(1)
let currentSelectedDivision = ref(1)
let teams = ref();

onMounted(async () => {
    const { data: initteamdata } = await client
      .from('Team_Stats')
      .select('season, division, team_uuid(*, owner(*), captain(*)), games_played, wins, losses, goals, goals_against')
      .eq('season', 1)
      .eq('division', 1)
      .order('wins')
      .order('losses')
      .order('goals')
      .order('goals_against', { ascending: false })
    const transformData = (arr) => {
      return arr.map(item => {
        const { team_uuid, goals, goals_against, ...rest } = item;
        const goal_difference = goals - goals_against;
        return {
          ...rest,
          ...team_uuid,
          goal_difference
        };
      });
    };

    const transformedData = transformData(initteamdata);
    teams.value = transformedData;
})

watch(currentSelectedSeason, async (newVal) => { 
  const { data: initteamdata } = await client
      .from('Team_Stats')
      .select('season, division, team_uuid(*, owner(*), captain(*)), games_played, wins, losses, goals, goals_against')
      .eq('division', currentSelectedDivision.value)
      .eq('season', newVal)
      .order('wins')
      .order('losses')
      .order('goals')
      .order('goals_against', { ascending: false })
      const transformData = (arr) => {
      return arr.map(item => {
        const { team_uuid, goals, goals_against, ...rest } = item;
        const goal_difference = goals - goals_against;
        return {
          ...rest,
          ...team_uuid,
          goal_difference
        };
      });
    };

    const transformedData = transformData(initteamdata);
    teams.value = transformedData;
})

watch(currentSelectedDivision, async (newVal) => {
  const { data: initteamdata } = await client
      .from('Team_Stats')
      .select('season, division, team_uuid(*, owner(*), captain(*)), games_played, wins, losses, goals, goals_against')
      .eq('division', newVal)
      .eq('season', currentSelectedSeason.value)
      .order('wins')
      .order('losses')
      .order('goals')
      .order('goals_against', { ascending: false })
      const transformData = (arr) => {
      return arr.map(item => {
        const { team_uuid, goals, goals_against, ...rest } = item;
        const goal_difference = goals - goals_against;
        return {
          ...rest,
          ...team_uuid,
          goal_difference
        };
      });
    };

    const transformedData = transformData(initteamdata);
    teams.value = transformedData;
})

const columns = [{
    key: 'name',
    label: 'Team Name',
    sortable: true
  }, {
    key: 'owner',
    label: 'Franchise Owner'
  }, {
    key: 'captain',
    label: 'Team Captain'
  }, {
    key: 'salary',
    label: 'Remaining Salary',
    sortable: true
  }, {
    key: 'transactions',
    label: 'Remaining Transactions',
    sortable: true
  }, {
    key: 'wins',
    label: 'Wins',
    sortable: true
  }, {
    key: 'losses',
    label: 'Losses',
    sortable: true
  }, {
    key: 'goal_difference',
    label: 'Goal Diff',
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
