<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    <UDropdown :items="divisions" :popper="{ placement: 'bottom-start' }">
      <UButton color="primary" trailing-icon="i-heroicons-chevron-down-20-solid" class="m-1" size="md" >
        {{ currentSelectedDivision }}
      </UButton>
    </UDropdown>
      <div class="flex flex-col place-items-center">
        <UTable v-if="currentSelectedDivision == 'Div 1'" :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No Team Data.' }" :rows="d1TeamData || undefined" :columns="columns" class="w-full" >
          <template #team_name-data="{row}">
            <ULink
            :to="`/players/${row.team_name}`"
              class="text-primary font-bold text-lg"
            >
              {{ row.team_name }}
            </ULink>
          </template>
          <template #non_captain_players-data="{row}">
              {{ row.non_captain_players.ncp }}
          </template>
        </UTable>
        <UTable v-if="currentSelectedDivision == 'Div 2'" :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No Team Data.' }" :rows="d2TeamData || undefined" :columns="columns" class="w-full" >
          <template #team_name-data="{row}">
            <ULink
            :to="`/players/${row.team_name}`"
              class="text-primary font-bold text-lg"
            >
              {{ row.team_name }}
            </ULink>
          </template>
          <template #non_captain_players-data="{row}">
              {{ row.non_captain_players.ncp }}
          </template>
        </UTable>
        <UTable v-if="currentSelectedDivision == 'Div 3'" :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No Team Data.' }" :rows="d3TeamData || undefined" :columns="columns" class="w-full" >
          <template #team_name-data="{row}">
            <ULink
            :to="`/players/${row.team_name}`"
              class="text-primary font-bold text-lg"
            >
              {{ row.team_name }}
            </ULink>
          </template>
          <template #non_captain_players-data="{row}">
              {{ row.non_captain_players.ncp }}
          </template>
        </UTable>
      </div>
  </UCard>
</template>

<script lang="ts" setup>
let currentSelectedDivision = ref('Div 1')
const client = useSupabaseClient()

const { data: d1TeamData } = await client
  .from('S1_Team_Data')
  .select('')
  .eq('division', 1)
  .order('wins', { ascending: true })
  .order('goal_difference', { ascending: true})

const { data: d2TeamData } = await client
.from('S1_Team_Data')
  .select('')
  .eq('division', 2)
  .order('wins', { ascending: true })
  .order('goal_difference', { ascending: true})
  
const { data: d3TeamData } = await client
.from('S1_Team_Data')
  .select('')
  .eq('division', 3)
  .order('wins', { ascending: true })
  .order('goal_difference', { ascending: true})
  
const columns = [{
    key: 'team_name',
    label: 'Team Name'
  }, {
    key: 'franchise_owner',
    label: 'Franchise Owner'
  }, {
    key: 'team_captain',
    label: 'Team Captain'
  }, {
    key: 'non_captain_players',
    label: 'Non-Captain Players'
  }, {
    key: 'current_salary',
    label: 'Remaining Salary'
  }, {
    key: 'remaining_transactions',
    label: 'Remaining Transactions'
}]

const divisions = [
  [{
    label: 'Div 1',
    click: () => {
      currentSelectedDivision.value = 'Div 1'
    }
  }, {
    label: 'Div 2',
    click: () => {
      currentSelectedDivision.value = 'Div 2'
    }
  }, {
    label: 'Div 3',
    click: () => {
      currentSelectedDivision.value = 'Div 3'
    }
  }]
]
</script>

<style>

</style>
