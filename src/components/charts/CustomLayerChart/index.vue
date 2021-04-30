<template>
  <Responsive class="w-full">
    <template #main="{ width }">
      <Chart :size="{ width, height: 420 }" :data="data" :margin="margin" :direction="direction" :axis="axis">
        <template #layers>
          <!-- <Grid strokeDasharray="2,2" /> -->
          <Line :dataKeys="['name', 'pl']" />
          <LabelsLayer v-if="showLabels" :dataKeys="['name', 'pl']" />
        </template>
      </Chart>
    </template>
  </Responsive>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Responsive, Chart, Line } from 'vue3-charts'
import { plByMonth } from '@/data'
import LabelsLayer from './LabelsLayer.vue'

export default defineComponent({
  name: 'LineChart',
  components: { Responsive, Chart, Line, LabelsLayer },
  props: {
    showLabels: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const data = ref(plByMonth)
    const direction = ref('horizontal')
    const margin = ref({
      left: 10,
      top: 20,
      right: 20,
      bottom: 10
    })

    const axis = ref({
      primary: {
        type: 'band'
      },
      secondary: {
        domain: ['dataMin', 'dataMax + 100'],
        type: 'linear',
        ticks: 8
      }
    })

    return { data, direction, margin, axis }
  }
})
</script>
