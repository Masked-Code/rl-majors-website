<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    <UDropdown :items="seasons" :popper="{ placement: 'bottom-start' }">
      <UButton color="primary" :label="currentSelectedSeason" trailing-icon="i-heroicons-chevron-down-20-solid" class="m-1" size="md"/>
    </UDropdown>
    <div class="flex flex-col place-items-center">
      <UTable :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'No items.' }" :rows="teams" class="w-full">
        <template #name-data="{row}">
          <ULink
          :to="`/teams/${row.name.split(' ').join('')}`"
            class="text-primary font-bold text-lg"
          >
            {{ row.name }}
          </ULink>
        </template>
      </UTable>
    </div>
  </UCard>
</template>

<script lang="ts" setup>
let currentSelectedSeason = 'Season 1'
const teams = [{
  position: 1,
  name: 'Amarillo Armadillos',
  'Franchise Owner': 'Pluggin',
  'Team Captain': 'TyRogers',
  'Goal Difference': '+3'
}, {
  position: 2,
  name: 'Lafayette Lightning',
  'Franchise Owner': 'Juicy',
  'Team Captain': 'Landon',
  'Goal Difference': '-1'
}, {
  position: 3,
  name: 'Midland Manticores',
  'Franchise Owner': 'Greninja',
  'Team Captain': 'Not Chosen',
  'Goal Difference': '0'
}, {
  position: 4,
  name: 'Pheonix Phantoms',
  'Franchise Owner': 'Wheat',
  'Team Captain': 'Not Chosen',
  'Goal Difference': '0'
}, {
  position: 5,
  name: 'Miami Skyline',
  'Franchise Owner': 'Dyln',
  'Team Captain': 'Ahmed',
  'Goal Difference': '-2'
}, {
  position: 6,
  name: 'Boston Braves',
  'Franchise Owner': 'DBrown',
  'Team Captain': 'Brandon',
  'Goal Difference': '+1'
}, {
  position: 7,
  name: 'Austin Asteroids',
  'Franchise Owner': 'Askey',
  'Team Captain': 'Ice',
  'Goal Difference': '-1'
}, {
  position: 8,
  name: 'Morgantown Monsters',
  'Franchise Owner': 'BuzzNutly',
  'Team Captain': 'Not Chosen',
  'Goal Difference': '+69'
}]

const selectedTeam = ref([teams[1]])

function select (row: any) {
  const index = selectedTeam.value.findIndex((item) => item.name === row.id)
  if (index === -1) {
    selectedTeam.value.push(row)
  } else {
    selectedTeam.value.splice(index, 1)
  }
}

const seasons = [
  [{
    label: 'Season 1',
    click: () => {
      console.log('Season 1')
      currentSelectedSeason = 'Season 1'
    }
  }, {
    label: 'Season 2',
    click: () => {
      console.log('Season 2')
      currentSelectedSeason = 'Season 2'
    }
  }, {
    label: 'Season 3',
    click: () => {
      console.log('Season 3')
      currentSelectedSeason = 'Season 3'
    }
  }, {
    label: 'Season 4',
    click: () => {
      console.log('Season 4')
      currentSelectedSeason = 'Season 4'
    }
  }, {
    label: 'Season 5',
    click: () => {
      console.log('Season 5')
      currentSelectedSeason = 'Season 5'
    }
  }]
]
</script>

<style>

</style>