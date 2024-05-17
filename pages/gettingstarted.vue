<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    <div class="flex flex-col place-items-center">
      <h1 class="text-4xl font-bold m-1 mb-5">Getting Started</h1>
      <UCard class="flex flex-col place-items-center m-3 w-[65%] text-center">
        <template #header>
          <b class="text-xl">Step 1: Login With Discord</b>
        </template>
        <div v-if="user">✅ You are already logged in!</div>
        <div v-else><UButton @click="signInWithDiscord" class="m-2" size="lg"><b>Login With Discord</b></UButton></div>
      </UCard>
      <UCard class="flex flex-col place-items-center m-3 w-[65%] text-center">
        <template #header>
          <b class="text-xl">Step 2: Join The Discord</b>
        </template>
        <iframe src="https://discord.com/widget?id=1047297400416514068&theme=dark" width="700" height="350" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" class="rounded-2xl"></iframe>
      </UCard>
      <UCard class="flex flex-col place-items-center m-3 w-[65%] text-center">
        <template #header>
          <b class="text-xl">Step 3: Read The Rules</b>
        </template>
        <div>Rules can be found here: <ULink
          to="/rules" 
          target="_blank" 
          class="text-primary m-2"
        >
        Rules
        </ULink> or in the Discord server in #rules channel.</div>
      </UCard>
      <UCard class="flex flex-col place-items-center m-3 w-[65%] text-center">
        <template #header>
          <b class="text-xl">Step 4: Obtain Your Roles</b>
        </template>
        <div>Roles can be obtained by reacting to the messages in the #set-roles channel.</div>
      </UCard>
      <UCard class="flex flex-col place-items-center m-3 w-[65%] text-center">
        <template #header>
          <b class="text-xl">Step 5: Register</b>
        </template>
        <div class="mb-4">Using the RL Majors Discord bot slash commands, you can use the /register command to sign up for the current or next season depending on the time left in the current season.</div>
        <UAccordion :items="items" />
      </UCard>
      <UCard class="flex flex-col place-items-center m-3 w-[65%] text-center">
        <template #header>
          <b class="text-xl">Step 6: Get Your Price</b>
        </template>
        <div>This is a manual process conducted by the management and administrative roles with in the Discord. There is no action required fom you on this step.</div>
      </UCard>
      <UCard class="flex flex-col place-items-center m-3 w-[65%] text-center">
        <template #header>
          <b class="text-xl">Step 7: Tryout (Optional)</b>
        </template>
        <div>Most team captains and franchise owners prefer to view a player's potential players in action before picking them up. This is your chance to show off your skills and abilities. You can view the tryout channels by obtaining the tryouts role in the #set-roles channel. Communication is key to make it to a tryout.</div>
      </UCard>
      <UCard class="flex flex-col place-items-center m-3 w-[65%] text-center">
        <template #header>
          <b class="text-xl">Step 8: Get Drafted Or Traded Onto A Team</b>
        </template>
        <div class="mb-4">There are two different ways to make it onto a team. If it is currnetly in the off season, please make sure you are registed so you are able to be drafted.</div>
        <UAccordion :items="joinItems" />
      </UCard>
      <UCard class="flex flex-col place-items-center m-3 w-[65%] text-center">
        <template #header>
          <b class="text-xl">Step 9: Play!</b>
        </template>
        <div class="text-2xl"><b>GLHF</b></div>
        <img src="~/assets/RLMajors_logo_Big.png" class="rounded-2xl max-w-48">
      </UCard>
    </div>
  </UCard>
</template>

<script lang="ts" setup>
const user = useSupabaseUser()
const supabase = useSupabaseClient()
async function signInWithDiscord() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'discord',
  })
  if(error) console.log(error);
}
const items = [{
  label: 'Display Name',
  icon: 'i-heroicons-identification',
  defaultOpen: true,
  content: 'Your Display Name is how you would like to be seen as. It can be your Rocket League name, your Discord name, or anything else you would like as long as it falls within the rules.'
},{
  label: 'Tracker Network Account Link',
  icon: 'i-heroicons-user-circle',
  content: 'Your TRN tracker link is the link to your Rocket League account on Tracker Network. This is used to verify your rank, performance, validity, and more.'
}, {
  label: 'Ballchasing Account Link',
  icon: 'i-heroicons-document-chart-bar',
  content: 'Your Ballchasing link is the link to your Rocket League profile on Ballchasing. This is used in automatic replay verificaiton, analysis, and submission'
}]
const joinItems = [{
  label: 'Draft',
  icon: 'i-heroicons-clipboard-document-check',
  content: 'The draft is a process where team captains and franchise owners pick players to join their team. This is done in a snake draft format.'
},{
  label: 'Trade',
  icon: 'i-heroicons-arrows-right-left',
  content: 'Trades are when players are swapped between teams. This can be done in the first half of the season depending on when you register.'
}]
</script>

<style>

</style>
