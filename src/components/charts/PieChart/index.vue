<template>
  <Responsive class="w-full">
    <template #main="{ width }">
      <Chart
        direction="circular"
        :size="{ width, height: 400 }"
        :data="data"
        :margin="{
          left: Math.round((width - 360)/2),
          top: 20,
          right: 0,
          bottom: 20
        }"
        :axis="axis"
        :config="{ controlHover: false }"
      >
        <template #layers>
          <Pie :dataKeys="['name', 'pl']" :pie-style="{ innerRadius: 100, padAngle: 0.05 }" />
        </template>
        <template #widgets>
          <Tooltip
            :config="{
              name: { },
              avg: { hide: true},
              pl: { label: 'value' },
              inc: { hide: true }
            }"
            hideLine
          />
        </template>
      </Chart>
    </template>
  </Responsive>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Responsive, Chart, Pie, Tooltip } from 'vue3-charts'
import { plByMonth } from '@/data'

export default defineComponent({
  name: 'PieChart',
  components: { Responsive, Chart, Tooltip, Pie },
  setup () {
    const data = ref(plByMonth)
    const axis = ref({ primary: { hide: true }, secondary: { hide: true } })

    return { data, axis }
  }
})
</script>

<style></style>
