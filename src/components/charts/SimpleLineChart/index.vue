<template>
  <Responsive class="w-full">
    <template #main="{ width }">
      <Chart :size="{ width, height: 420 }" :data="data" :margin="margin" :direction="direction">
        <template #layers>
          <Grid strokeDasharray="2,2" />
          <Line :dataKeys="['name', 'pl']" />
        </template>
      </Chart>
    </template>
  </Responsive>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Responsive, Chart, Grid, Line } from 'vue3-charts'
import { plByMonth } from '@/data'

export default defineComponent({
  name: 'LineChart',
  components: { Responsive, Chart, Grid, Line },
  setup() {
    const data = ref(plByMonth)
    const direction = ref('horizontal')
    const margin = ref({
      left: 10,
      top: 20,
      right: 20,
      bottom: 10
    })

    return { data, direction, margin }
  }
})
</script>

<style></style>
