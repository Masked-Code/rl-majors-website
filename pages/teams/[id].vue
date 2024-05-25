<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    <div class="m-4">
      {{ team }}
    </div>
    <div class="m-4">
      {{ teamData }}
    </div>
  </UCard>
</template>

<script setup>
const route = useRoute()
const teamUUID = route.params.id

const client = useSupabaseClient()

const { data: team } = await client
.from('Teams')
.select('*')
.eq('uuid', teamUUID)

const { data: teamData } = await client
.from('Team_Stats')
.select('*')
.eq('team_uuid', teamUUID)


</script>

<style>
</style>