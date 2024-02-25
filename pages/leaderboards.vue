<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    <div class="flex flex-col place-items-center">
      <UTable :rows="teams" class="w-full"/>
    </div>
  </UCard>
</template>

<script lang="ts" setup>
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
  'Goal Difference': '-9'
}]

</script>

<style>

</style>