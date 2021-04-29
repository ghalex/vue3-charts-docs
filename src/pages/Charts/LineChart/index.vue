<template>
  <div class="line-chart">
    <h1>Line Chart</h1>
    <p>
      To create a line chart in <b>vue3-charts</b> you can use the <code>Line</code> layer. You can add the
      <code>Line</code> layer multiple times or combine it with other layers (<code>Bar</code>, <code>Area</code>).
    </p>

    <p>Here you can see a simple example using two <code>Line</code> layers.</p>

    <ChartBlock :chartCode="code.chartCode" :dataCode="code.dataCode">
      <LineChart />
    </ChartBlock>

    <h2 class="mt-6">Line Props</h2>
    <p>The line layer allows a number of properties to be specified.</p>
    <PropsBlock class="mt-4">
      <Prop name="lineStyle" :types="['Object']">
        <div class="mb-2">Use lineStyle to set svg styling for the line.</div>
        <div class="font-bold">Ex:</div>
        <ul class="list-disc list-inside">
          <li>stroke (ex. red)</li>
          <li>strokeWidth</li>
          <li>strokeLinecap</li>
          <li>strokeDasharray</li>
        </ul>
      </Prop>
      <Prop name="dotStyle" :types="['Object']" odd> Same as <code>lineStyle</code> but applyes to line dot. </Prop>
      <Prop name="dataKeys" :types="['Array']">
        <div>What data the line to render.</div>
        <div>Ex: <code>['name', 'pl']</code></div>
      </Prop>
      <Prop name="type" :types="['normal', 'step', 'natural', 'monotone']" odd> Set how to draw the line. </Prop>
    </PropsBlock>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import * as Components from '@/components'
import * as code from './code'

export default defineComponent({
  components: { ...Components },
  setup() {
    return { code }
  }
})
</script>
