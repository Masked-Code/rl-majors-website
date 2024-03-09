<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    <div>
      {{ teamName }} team page under construction
    </div>
    <div>Team Name: {{ s1TeamData[0].team_name }}</div>
    <div>Franchise Owner: {{ s1TeamData[0].franchise_owner }}</div>
    <div>Team Captain: {{ s1TeamData[0].team_captain }}</div>
    <div v-for="nonCaptainPlayer in s1TeamData[0].non_captain_players.ncp">Player: {{ nonCaptainPlayer }}</div>
    <div>Current Salary: {{ s1TeamData[0].curent_salary }}</div>
    <div>Division: {{ s1TeamData[0].division }}</div>
    <div>Remaining Transactions: {{ s1TeamData[0].remaining_transactions }}</div>
    <div>Wins: {{ s1TeamData[0].wins }}</div>
    <div>Losses: {{ s1TeamData[0].losses }}</div>
    <div>Goal Difference: {{ s1TeamData[0].goal_difference }}</div>
  </UCard>
</template>

<script setup>
const route = useRoute()
const teamName = route.params.id.split(/(?=[A-Z])/).join(' ')

const client = useSupabaseClient()

const { data: s1TeamData } = await client
.from('S1_Team_Data')
.select('')
.eq('division', 1)
.eq('team_name', teamName)


</script>

<style>
</style>