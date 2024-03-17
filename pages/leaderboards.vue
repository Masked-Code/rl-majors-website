<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    <UDropdown :items="divisions" :popper="{ placement: 'bottom-start' }">
      <UButton color="primary" trailing-icon="i-heroicons-chevron-down-20-solid" class="m-1" size="md" >
        {{ currentSelectedDivision }}
      </UButton>
    </UDropdown>
      <div class="flex flex-col place-items-center">
        <UTable v-if="currentSelectedDivision == 'Div 1'" :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No Team Data.' }" :rows="d1TeamData || undefined" :columns="columns" class="w-full" >
          <template #team_name-header="{column}">
            <div class="flex flex-col place-items-center">
              {{ column.label }}
            </div>
          </template>
          <template #team_name-data="{row}">
            <div class="flex flex-col place-items-center">
              <ULink
              :to="`/teams/div1/${row.team_name.split(' ').join('')}`"
                class="text-primary font-bold text-lg"
              >
              {{ row.team_name }}
            </ULink>
            </div>
          </template>
          <template #franchise_owner-header="{column}">
            <div class="flex flex-col place-items-center">
              {{ column.label }}
            </div>
          </template>
          <template #franchise_owner-data="{row}">
            <div class="flex flex-col place-items-center">
              {{ row.franchise_owner }}
            </div>
          </template>
          <template #team_captain-header="{column}">
            <div class="flex flex-col place-items-center">
              {{ column.label }}
            </div>
          </template>
          <template #team_captain-data="{row}">
            <div class="flex flex-col place-items-center">
              {{ row.team_captain }}
            </div>
          </template>
          <template #non_captain_players-header="{column}">
            <div class="flex flex-col place-items-center">
              {{ column.label }}
            </div>
          </template>
          <template #non_captain_players-data="{row}">
            <div class="flex flex-col place-items-center">
              <p v-for="singlePlayer in row.non_captain_players.ncp">{{ singlePlayer }}</p>
            </div>
          </template>
          <template #current_salary-header="{column}">
            <div class="flex flex-col place-items-center">
              {{ column.label }}
            </div>
          </template>
          <template #current_salary-data="{row}">
            <div class="flex flex-col place-items-center">
              {{ row.current_salary }}
            </div>
          </template>
          <template #remaining_transactions-header="{column}">
            <div class="flex flex-col place-items-center">
              {{ column.label }}
            </div>
          </template>
          <template #remaining_transactions-data="{row}">
            <div class="flex flex-col place-items-center">
              {{ row.remaining_transactions }}
            </div>
          </template>
          <template #wins-header="{column}">
            <div class="flex flex-col place-items-center">
              {{ column.label }}
            </div>
          </template>
          <template #wins-data="{row}">
            <div class="flex flex-col place-items-center text-green-600 font-bold text-lg">
              {{ row.wins }}
            </div>
          </template>
          <template #losses-header="{column}">
            <div class="flex flex-col place-items-center">
              {{ column.label }}
            </div>
          </template>
          <template #losses-data="{row}">
            <div class="flex flex-col place-items-center text-red-600 font-bold text-lg">
              {{ row.losses }}
            </div>
          </template>
          <template #goal_difference-header="{column}">
            <div class="flex flex-col place-items-center">
              {{ column.label }}
            </div>
          </template>
          <template #goal_difference-data="{row}">
            <div class="flex flex-col place-items-center text-primary font-bold text-lg">
              {{ row.goal_difference }}
            </div>
          </template>
        </UTable>
        <UTable v-if="currentSelectedDivision == 'Div 2'" :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No Team Data.' }" :rows="d2TeamData || undefined" :columns="columns" class="w-full" >
          <template #team_name-header="{column}">
            <div class="flex flex-col place-items-center">
              {{ column.label }}
            </div>
          </template>
          <template #team_name-data="{row}">
            <div class="flex flex-col place-items-center">
              <ULink
              :to="`/teams/div2/${row.team_name.split(' ').join('')}`"
                class="text-primary font-bold text-lg"
              >
              {{ row.team_name }}
            </ULink>
            </div>
          </template>
          <template #franchise_owner-header="{column}">
            <div class="flex flex-col place-items-center">
              {{ column.label }}
            </div>
          </template>
          <template #franchise_owner-data="{row}">
            <div class="flex flex-col place-items-center">
              {{ row.franchise_owner }}
            </div>
          </template>
          <template #team_captain-header="{column}">
            <div class="flex flex-col place-items-center">
              {{ column.label }}
            </div>
          </template>
          <template #team_captain-data="{row}">
            <div class="flex flex-col place-items-center">
              {{ row.team_captain }}
            </div>
          </template>
          <template #non_captain_players-header="{column}">
            <div class="flex flex-col place-items-center">
              {{ column.label }}
            </div>
          </template>
          <template #non_captain_players-data="{row}">
            <div class="flex flex-col place-items-center">
              <p v-for="singlePlayer in row.non_captain_players.ncp">{{ singlePlayer }}</p>
            </div>
          </template>
          <template #current_salary-header="{column}">
            <div class="flex flex-col place-items-center">
              {{ column.label }}
            </div>
          </template>
          <template #current_salary-data="{row}">
            <div class="flex flex-col place-items-center">
              {{ row.current_salary }}
            </div>
          </template>
          <template #remaining_transactions-header="{column}">
            <div class="flex flex-col place-items-center">
              {{ column.label }}
            </div>
          </template>
          <template #remaining_transactions-data="{row}">
            <div class="flex flex-col place-items-center">
              {{ row.remaining_transactions }}
            </div>
          </template>
          <template #wins-header="{column}">
            <div class="flex flex-col place-items-center">
              {{ column.label }}
            </div>
          </template>
          <template #wins-data="{row}">
            <div class="flex flex-col place-items-center text-green-600 font-bold text-lg">
              {{ row.wins }}
            </div>
          </template>
          <template #losses-header="{column}">
            <div class="flex flex-col place-items-center">
              {{ column.label }}
            </div>
          </template>
          <template #losses-data="{row}">
            <div class="flex flex-col place-items-center text-red-600 font-bold text-lg">
              {{ row.losses }}
            </div>
          </template>
          <template #goal_difference-header="{column}">
            <div class="flex flex-col place-items-center">
              {{ column.label }}
            </div>
          </template>
          <template #goal_difference-data="{row}">
            <div class="flex flex-col place-items-center text-primary font-bold text-lg">
              {{ row.goal_difference }}
            </div>
          </template>
        </UTable>
        <UTable v-if="currentSelectedDivision == 'Div 3'" :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No Team Data.' }" :rows="d3TeamData || undefined" :columns="columns" class="w-full" >
          <template #team_name-header="{column}">
            <div class="flex flex-col place-items-center">
              {{ column.label }}
            </div>
          </template>
          <template #team_name-data="{row}">
            <div class="flex flex-col place-items-center">
              <ULink
              :to="`/teams/div3/${row.team_name.split(' ').join('')}`"
                class="text-primary font-bold text-lg"
              >
              {{ row.team_name }}
            </ULink>
            </div>
          </template>
          <template #franchise_owner-header="{column}">
            <div class="flex flex-col place-items-center">
              {{ column.label }}
            </div>
          </template>
          <template #franchise_owner-data="{row}">
            <div class="flex flex-col place-items-center">
              {{ row.franchise_owner }}
            </div>
          </template>
          <template #team_captain-header="{column}">
            <div class="flex flex-col place-items-center">
              {{ column.label }}
            </div>
          </template>
          <template #team_captain-data="{row}">
            <div class="flex flex-col place-items-center">
              {{ row.team_captain }}
            </div>
          </template>
          <template #non_captain_players-header="{column}">
            <div class="flex flex-col place-items-center">
              {{ column.label }}
            </div>
          </template>
          <template #non_captain_players-data="{row}">
            <div class="flex flex-col place-items-center">
              <p v-for="singlePlayer in row.non_captain_players.ncp">{{ singlePlayer }}</p>
            </div>
          </template>
          <template #current_salary-header="{column}">
            <div class="flex flex-col place-items-center">
              {{ column.label }}
            </div>
          </template>
          <template #current_salary-data="{row}">
            <div class="flex flex-col place-items-center">
              {{ row.current_salary }}
            </div>
          </template>
          <template #remaining_transactions-header="{column}">
            <div class="flex flex-col place-items-center">
              {{ column.label }}
            </div>
          </template>
          <template #remaining_transactions-data="{row}">
            <div class="flex flex-col place-items-center">
              {{ row.remaining_transactions }}
            </div>
          </template>
          <template #wins-header="{column}">
            <div class="flex flex-col place-items-center">
              {{ column.label }}
            </div>
          </template>
          <template #wins-data="{row}">
            <div class="flex flex-col place-items-center text-green-600 font-bold text-lg">
              {{ row.wins }}
            </div>
          </template>
          <template #losses-header="{column}">
            <div class="flex flex-col place-items-center">
              {{ column.label }}
            </div>
          </template>
          <template #losses-data="{row}">
            <div class="flex flex-col place-items-center text-red-600 font-bold text-lg">
              {{ row.losses }}
            </div>
          </template>
          <template #goal_difference-header="{column}">
            <div class="flex flex-col place-items-center">
              {{ column.label }}
            </div>
          </template>
          <template #goal_difference-data="{row}">
            <div class="flex flex-col place-items-center text-primary font-bold text-lg">
              {{ row.goal_difference }}
            </div>
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
  .order('wins', { ascending: false })
  .order('losses', { ascending: true })
  .order('goal_difference', { ascending: false})

const { data: d2TeamData } = await client
.from('S1_Team_Data')
  .select('')
  .eq('division', 2)
  .order('wins', { ascending: false })
  .order('losses', { ascending: true })
  .order('goal_difference', { ascending: false})
  
const { data: d3TeamData } = await client
.from('S1_Team_Data')
  .select('')
  .eq('division', 3)
  .order('wins', { ascending: false })
  .order('losses', { ascending: true })
  .order('goal_difference', { ascending: false})
  
const columns = [{
    key: 'team_name',
    label: 'Team Name'
  }, {
    key: 'franchise_owner',
    label: 'Franchise Owner'
  }, {
    key: 'current_salary',
    label: 'Remaining Salary'
  }, {
    key: 'remaining_transactions',
    label: 'Remaining Transactions'
  }, {
    key: 'wins',
    label: 'Wins'
  }, {
    key: 'losses',
    label: 'Losses'
  }, {
    key: 'goal_difference',
    label: 'Goal Difference'
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
