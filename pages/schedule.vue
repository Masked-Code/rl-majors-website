<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">

    <div class="flex flex-row m-2">
      <UDropdown :items="divisions" :popper="{ placement: 'bottom-start' }">
        <UButton color="primary" trailing-icon="i-heroicons-chevron-down-20-solid" class="m-2" size="md" >
          {{ currentSelectedDivision }}
        </UButton>
      </UDropdown>
      <div>
        <UTabs :items="seasonTypes" :default-index="0" @change="onChange" class="m-1"/>
      </div>
    </div>
    <div class="flex flex-col place-items-center min-h-3">
      <iframe v-if="selectedSeasonType == 'Regular' && currentSelectedDivision == 'Div 1'" src="https://brackethq.com/b/ttmxb/embed/" width="100%" height="1250" frameborder="0" class="rounded-2xl"></iframe>
      <iframe v-if="selectedSeasonType == 'Playoffs' && currentSelectedDivision == 'Div 1'" src="https://brackethq.com/b/u3mxb/embed/" width="100%" height="800" frameborder="0" class="rounded-2xl"></iframe>
      <iframe v-if="selectedSeasonType == 'Regular' && currentSelectedDivision == 'Div 2'" src="https://brackethq.com/b/loxxb/embed/" width="100%" height="1250" frameborder="0" class="rounded-2xl"></iframe>
      <iframe v-if="selectedSeasonType == 'Playoffs' && currentSelectedDivision == 'Div 2'" src="https://brackethq.com/b/33mxb/embed/" width="100%" height="800" frameborder="0" class="rounded-2xl"></iframe>
      <iframe v-if="selectedSeasonType == 'Regular' && currentSelectedDivision == 'Div 3'" src="https://brackethq.com/b/2oxxb/embed/" width="100%" height="1250" frameborder="0" class="rounded-2xl"></iframe>
      <iframe v-if="selectedSeasonType == 'Playoffs' && currentSelectedDivision == 'Div 3'" src="https://brackethq.com/b/k4mxb/embed/" width="100%" height="800" frameborder="0" class="rounded-2xl"></iframe>
    </div>
  </UCard>
</template>

<script lang="ts" setup>
let currentSelectedDivision = ref('Div 1')
let selectedSeasonType = ref('Regular')
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

const seasonTypes = [{
  label: 'Regular Season',
  click: () => {
    selectedSeasonType.value = 'Regular'
  }
}, {
  label: 'Playoffs',
  click: () => {
    selectedSeasonType.value = 'Playoffs'
  }
}]

function onChange (index: any) {
  const item = seasonTypes[index]

  if (item.label == 'Regular Season') {
    selectedSeasonType.value = 'Regular'
  } else {
    selectedSeasonType.value = 'Playoffs'
  }
}
</script>

<style>

</style>