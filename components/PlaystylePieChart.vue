<template>
  <Pie
    id="playstyle-pie-chart"
    :data="chartData"
    :options="chartOptions"
  />
</template>

<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)

export default {
  name: 'PlaystylePieChart',
  components: { Pie },
  data() {
    return {
      chartData: {
        labels: [ 'Goals', 'Saves', 'Assists' ],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
            data: [33, 21, 40,],
            borderColor: 'rgb(0,0,0)',
          }
        ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>

<style>

</style>