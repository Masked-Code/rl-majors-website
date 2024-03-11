<template>
    <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
        <div>
            <USelect v-model="country" :options="countries" />
        </div>
        <div>
            <template>
              <UInput v-model="rlid" placeholder="Rocket League ID"/>
            </template>
        </div>
        <div>
            <UButton @click="searchForPlayer">Search</UButton>
        </div>
        <div>
            TRN PLAYER DATA: {{ trnPlayerData }}
        </div>
    </UCard>
</template>

<script setup>
const route = useRoute();
const platforms = ['epic', 'steam', 'psn', 'xbl', 'switch']
const platform = ref(platforms[0])
const rlid = ref('')

searchForPlayer() {
    const { data: trnPlayerData } = await useFetch(`https://api.tracker.gg/api/v2/rocket-league/standard/profile/${platform}/${rlid}`)
}
</script>

<style>
</style>
