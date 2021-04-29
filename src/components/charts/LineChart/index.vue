<template>
  <Responsive class="w-full">
    <template #main="{ width }">
      <Chart :size="{ width, height: 420 }" :data="data" :margin="margin" :direction="direction" :axis="axis">
        <template #layers>
          <Grid strokeDasharray="2,2" />
          <Line :dataKeys="['name', 'pl']" />
          <Line :dataKeys="['name', 'avg']" :lineStyle="{ stroke: 'red' }" type="step" />
        </template>
        <template #widgets>
          <Tooltip
            borderColor="#48CAE4"
            :config="{
              name: { hide: true },
              pl: { color: '#0077b6' },
              avg: { label: 'averange', color: 'red' },
              inc: { hide: true }
            }"
          />
        </template>
      </Chart>
    </template>
  </Responsive>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Responsive, Chart, Grid, Line, Tooltip } from 'vue3-charts'
import { plByMonth } from '@/data'

export default defineComponent({
  name: 'LineChart',
  components: { Responsive, Chart, Grid, Line, Tooltip },
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
        type: 'band',
        format: (val: string) => {
          if (val === 'Feb') {
            return '😜'
          }
          return val
        }
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

<style></style>
