<template>
  <div class="line-chart">
    <h1>Pie Chart</h1>
    <p>
      To create a pie chart in <b>vue3-charts</b> you can use the
      <code>Pie</code> layer. You <b class="text-red-500">cannot</b> add the
      <code>Pie</code> layer multiple times or combine it with other layers
      (<code>Bar</code>, <code>Area</code>).
    </p>

    <p>Here you can see a simple example using <code>Pie</code> layer.</p>

    <ChartBlock :chartCode="code.chartCode" :dataCode="code.dataCode">
      <PieChart />
    </ChartBlock>

    <h2 class="mt-6">Pie layer props</h2>
    <p>The pie layer allows a number of properties to be specified.</p>
    <PropsBlock class="mt-4">
      <Prop name="pieStyle" :types="['Object']">
        <div class="mb-2">Use pieStyle to set svg styling for the pie.</div>
        <div class="font-bold">Ex:</div>
        <ul class="list-disc list-inside">
          <li>colors (ex. ['#4daf4a', '#377eb8'])</li>
          <li>innerRadius</li>
          <li>cornerRadius</li>
          <li>padAngle</li>
        </ul>
      </Prop>

      <Prop name="dataKeys" :types="['Array']">
        <div>What data the line to render.</div>
        <div>Ex: <code>['name', 'pl']</code></div>
      </Prop>
      <!-- <Prop name="type" :types="['normal', 'step', 'natural', 'monotone']" odd>
        Set how to draw the line.
      </Prop> -->
    </PropsBlock>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import * as Components from '@/components'
import * as code from './code'

export default defineComponent({
  components: { ...Components },
  name: 'PagePieChart',
  setup () {
    return { code }
  }
})
</script>
