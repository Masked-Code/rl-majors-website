<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    <div class="flex flex-col place-items-center">
      <div class="text-4xl font-bold m-4">Server Rules</div>
      <UAccordion :items="serverRules" >
        <template #item="{ item }">
          <p class="italic text-gray-900 dark:text-white text-center font-bold text-lg">
            {{ item.content }}
          </p>
        </template>
      </UAccordion>
      <UButton size="xl" class="rounded-2xl m-3 rulesbutton" to="https://docs.google.com/document/d/1Lzc0ewTx4bUC-UE58qaS-j6cC4xq_uh3ZbAuWD44iG4" target="_blank">Open League Rulebook</UButton>
    </div>
  </UCard>
</template>

<script lang="ts" setup>

const serverRules = [{
  label: 'Vulgar Language',
  icon: 'i-heroicons-information-circle',
  defaultOpen: true,
  content: 'Please speak politely with other RL Major members. Don\'t use any form of hate speech, racial slurs, or unnecessary amounts of swearing. Breaking this rule will result in either warnings or bans.'
}, {
  label: 'Respect',
  icon: 'i-heroicons-arrow-down-tray',
  content: 'Please respect your fellow members and all Staff. Do not argue with Staff. Do not intentionally harass anyone. Do not excessively ping anyone. Do not spam people in their DM\'s. Do not talk about controversial topics, such as politics, sexual identities, or social abnormalities. This is a safe place to get away from real world problems, not a place to annoy people about said topics.'
}, {
  label: 'Exploiting',
  icon: 'i-heroicons-eye-dropper',
  content: 'Please do not make alternate discord accounts to avoid Timeouts or Bans. Doing so will result in a Permanent Ban or IP Ban. Do not use loopholes in our system. We are not perfect, please reach out so we can fix issues rather than taking advantage of them.'
}, {
  label: 'Boosting',
  icon: 'i-heroicons-arrow-up-tray',
  content: 'Please do not boost other players ranks in Rocket League. We try to make our league as fair as possible and boosting makes it harder for us to match players with each other.'
}, {
  label: 'Languages',
  icon: 'i-heroicons-rectangle-group',
  content: 'Please use English in this server. We understand that people come from many different places and backgrounds, but using alternative languages makes it harder for us to fix and understand issues if they are to arise.'
}, {
  label: 'Age',
  icon: 'i-heroicons-square-3-stack-3d',
  content: 'Please follow discord\'s guidelines about age. If you are too young to have a discord account, then you are to young to join us here. This is not to be mean, but to prevent problems with maturity.'
}, {
  label: 'Self-Promoting',
  icon: 'i-heroicons-wrench-screwdriver',
  content: 'Please use the designated channel self-promo, to promote any form of social media that you wish to share. That being Twitch, Instagram, Tiktok, etc.'
}, {
  label: 'Usernames',
  icon: 'i-heroicons-check',
  content: 'Please keep all usernames appropriate. This also includes your discord bio.'
}]

</script>

<style>
.rulesbutton {
  box-shadow: 0px 5px 20px rgba(170, 189, 0, 0.29), 0px 5px 10px rgba(156, 190, 0, 0.23);
  overflow: "visible";
}
</style>