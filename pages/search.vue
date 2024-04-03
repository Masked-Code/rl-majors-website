<template>
    <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
        <div class="flex flex-col mx-[35%] text-center m-6">
            <h1 class="font-bold text-5xl">Search For A Player</h1>
        </div>
        <div class="mx-[35%]">
            <UInputMenu
                size="xl"
                v-model="selected"
                :options="options"
                placeholder="Select a person"
                by="id"
                option-attribute="name"
                :search-attributes="['name', 'colors']"
            >
                <template #option="{ option: person }">
                    <span v-for="color in person.colors" :key="color.id" class="h-2 w-2 rounded-full" :class="`bg-${color}-500 dark:bg-${color}-400`" />
                    <span class="truncate">{{ person.name }}</span>
                </template>
            </UInputMenu>
        </div>
    </UCard>
</template>

<script setup>
const options = [
  { id: 1, name: 'Wade Cooper', colors: ['red', 'yellow'] },
  { id: 2, name: 'Arlene Mccoy', colors: ['blue', 'yellow'] },
  { id: 3, name: 'Devon Webb', colors: ['green', 'blue'] },
  { id: 4, name: 'Tom Cook', colors: ['blue', 'red'] },
  { id: 5, name: 'Tanya Fox', colors: ['green', 'red'] },
  { id: 5, name: 'Hellen Schmidt', colors: ['green', 'yellow'] }
]

const selected = ref(options[1])
</script>

<style>
</style>
