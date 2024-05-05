<template>
    <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
        <div class="flex flex-col mx-[35%] text-center m-6">
            <h1 class="font-bold text-5xl">Search For A Player</h1>
        </div>
        <div class="mx-[35%] m-10">
            <UInputMenu
                class="shadow-xl"
                size="xl"
                v-model="selected"
                :options="uniquePlayers"
                placeholder="Find a player..."
                by="discord_username"
                option-attribute="discord_username"
                :search-attributes="['discord_id', 'discord_username', 'display_name', 'platform_id']"
                @select="routeToSelected()"
            >
                <template #option="{ option: player }">
                    <span v-if="player.display_name">{{ player.display_name }}</span>
                    <span v-else>{{ player.discord_username }}</span>
                </template>
            </UInputMenu>
        </div>
    </UCard>
</template>

<script setup>
const route = useRoute()
const client = useSupabaseClient()
const { data: players } = await client
    .from('Players')
    .select('discord_username')
    .order('season')
    .order('division')
    .order('price')
const uniquePlayers = (() => {
    const seenDiscordUsernames = new Set();
    return players.filter(player => {
    if (!seenDiscordUsernames.has(player.discord_username)) {
        seenDiscordUsernames.add(player.discord_username);
        return true;
    }
    return false;
    });
})();
const selected = ref()
function routeToSelected() {
    if (selected) {
        navigateTo(`/player/${selected._value.discord_username}`);
    }
}
watch(selected, routeToSelected);
</script>

<style>
</style>
