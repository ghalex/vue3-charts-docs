<template>
  <Responsive class="w-full">
    <template #main="{ width }">
      <Chart
        :size="{ width, height: 420 }"
        :data="data"
        :margin="margin"
        :direction="direction"
        :axis="axis"
      >
        <template #layers>
          <Grid strokeDasharray="2,2" />
          <Bar
            :dataKeys="['name', 'pl']"
            :barStyle="{ fill: '#99d98c' }"
            :maxWidth="50"
          />
          <Bar
            :dataKeys="['name', 'avg']"
            :barStyle="{ fill: '#52b69a' }"
            :maxWidth="50"
          />
          <Marker
            v-if="marker"
            :value="1000"
            label="Avg."
            color="#e76f51"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
        </template>
        <template #widgets>
          <Tooltip
            borderColor="#99d98c"
            :config="{
              pl: { color: '#99d98c' },
              avg: { color: '#52b69a' },
              inc: { hide: true }
            }"
          />
          <div class="option">
            <label>Avg: </label>
            <select class="mr-4" v-model="marker">
              <option :value="1">show</option>
              <option :value="0">hide</option>
            </select>
            <label>Direction: </label>
            <select v-model="direction">
              <option value="horizontal">horizontal</option>
              <option value="vertical">vertical</option>
            </select>
          </div>
        </template>
      </Chart>
    </template>
  </Responsive>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Responsive, Chart, Grid, Bar, Marker, Tooltip } from 'vue3-charts'
import { plByMonth } from '@/data'

export default defineComponent({
  name: 'BarChart',
  components: { Responsive, Chart, Grid, Bar, Marker, Tooltip },
  setup () {
    const data = ref(plByMonth)
    const direction = ref('horizontal')
    const marker = ref(0)
    const margin = ref({
      left: 10,
      top: 40,
      right: 20,
      bottom: 10
    })

    const axis = ref({
      primary: {
        type: 'band'
      },
      secondary: {
        domain: ['dataMin', 'dataMax + 200'],
        type: 'linear',
        ticks: 8
      }
    })

    return { data, direction, margin, axis, marker }
  }
})
</script>

<style lang="postcss" scoped>
.option {
  position: absolute;
  right: 20px;
  top: 6px;

  > select {
    @apply border rounded px-1;
  }
}
</style>
