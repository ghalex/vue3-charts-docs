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
          <Area
            :dataKeys="['name', 'pl']"
            type="monotone"
            :areaStyle="{ fill: 'url(#grad)' }"
          />
          <Line
            :dataKeys="['name', 'pl']"
            type="monotone"
            :lineStyle="{
              stroke: '#9f7aea'
            }"
          />
          <Marker
            :value="1000"
            label="Start Value"
            color="#76c893"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
          <Marker
            :value="2000"
            label="Stop Value"
            color="#9f7aea"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
          <defs>
            <linearGradient id="grad" gradientTransform="rotate(90)">
              <stop offset="0%" stop-color="#be90ff" stop-opacity="1" />
              <stop offset="100%" stop-color="white" stop-opacity="0.4" />
            </linearGradient>
          </defs>
        </template>
        <template #widgets>
          <Tooltip
            borderColor="#9f7aea"
            :config="{
              pl: { color: '#9f7aea' },
              avg: { hide: true },
              inc: { hide: true }
            }"
          />
          <!-- <div class="option">
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
          </div> -->
        </template>
      </Chart>
    </template>
  </Responsive>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
  Responsive,
  Chart,
  Grid,
  Area,
  Line,
  Marker,
  Tooltip
} from 'vue3-charts'
import { plByMonth } from '@/data'

export default defineComponent({
  name: 'AreaChart',
  components: { Responsive, Chart, Grid, Area, Line, Marker, Tooltip },
  setup () {
    const data = ref(plByMonth)
    const direction = ref('horizontal')
    const marker = ref(0)
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
