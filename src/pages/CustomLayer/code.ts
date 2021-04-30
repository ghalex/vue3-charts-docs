export const chartCode = `
<template>
  <Responsive class="w-full">
    <template #main="{ width }">
      <Chart :size="{ width, height: 420 }" :data="data">
        <template #layers>
          <Line :dataKeys="['name', 'pl']" />
        </template>
      </Chart>
    </template>
  </Responsive>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { Responsive, Chart, Line } from 'vue3-charts'
  import { plByMonth } from '@/data'

  export default defineComponent({
  name: 'LineChart',
  components: { Responsive, Chart, Line },
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
</script>`

export const chartCodeLabels = `
<template>
  <Responsive class="w-full">
    <template #main="{ width }">
      <Chart :size="{ width, height: 420 }" :data="data">
        <template #layers>
          <Line :dataKeys="['name', 'pl']" />
          <LabelsLayer :dataKeys="['name', 'pl']" />
        </template>
      </Chart>
    </template>
  </Responsive>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { Responsive, Chart, Line } from 'vue3-charts'
  import { plByMonth } from '@/data'

  export default defineComponent({
  name: 'LineChart',
  components: { Responsive, Chart, Line },
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
</script>`

export const dataCode = `export const plByMonth = [
  { name: 'Jan', pl: 1000, avg: 500, inc: 300 },
  { name: 'Feb', pl: 2000, avg: 900, inc: 400 },
  { name: 'Apr', pl: 400, avg: 400, inc: 500 },
  { name: 'Mar', pl: 3100, avg: 1300, inc: 700 },
  { name: 'May', pl: 200, avg: 100, inc: 200 },
  { name: 'Jun', pl: 600, avg: 400, inc: 300 },
  { name: 'Jul', pl: 500, avg: 90, inc: 100 }
]`

export const customLayer = `
// LabelsLayer.vue
<template>
  <g class="layer-labels">
    <text
      v-for="(p, i) in points"
      :key="i"
      :x="p.x"
      :y="p.y - 10"
      text-anchor="middle"
      font-size="12"
      fill="#8884d8">
      {{ p.props.data[dataKeys[1]] }}
      </text>
  </g>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { usePoints } from 'vue3-charts'

export default defineComponent({
  name: 'Labels',
  props: {
    dataKeys: {
      type: Object as () => [string, string],
      required: true
    }
  },
  setup(props) {
    const { points } = usePoints(props.dataKeys)
    return { points }
  }
})
</script>
`
