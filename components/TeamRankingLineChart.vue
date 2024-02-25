<template>
  <Line
    id="team-ranking-line-chart"
    :data="chartData"
    :options="chartOptions"
  />
</template>

<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend)

export default {
  name: 'TeamRankingLineChart',
  components: { Line },
  data() {
    return {
      chartData: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
      datasets: [
        {
          label: 'Reno Rats',
          backgroundColor: 'rgba(0, 0, 0, 1)',
          data: [4, 3, 1, 4, 3, 8, 4],
          tension: 0.25,
          borderColor: 'rgb(75, 192, 192)',
        }
      ]
      },
      chartOptions: {
        responsive: true,
        scales: {
          y: {
            reverse: true
          }
        }
      }
    }
  }
}
</script>

<style>

</style>