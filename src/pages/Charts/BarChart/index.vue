<template>
  <div class="line-chart">
    <h1>Bar Chart</h1>
    <p>
      To create a bar chart in <b>vue3-charts</b> you can use the
      <code>Bar</code> layer. You can add the <code>Bar</code> layer multiple
      times or combine it with other layers (<code>Line</code>,
      <code>Area</code>).
    </p>

    <p>
      If you have multiple <code>Bar</code> layers you can render them stacked
      or side by side.
    </p>

    <p>
      Let's see a simple example using two <code>Bar</code> layers and a
      <code>Marker</code> layer. You can change the chart
      <code>direction</code> to have a column chart
    </p>

    <ChartBlock :chartCode="code.chartCode" :dataCode="code.dataCode">
      <BarChart />
    </ChartBlock>

    <h2 class="mt-6">Bar Props</h2>
    <p>The bar layer allows a number of properties to be specified.</p>
    <PropsBlock class="mt-4">
      <Prop name="barStyle" :types="['Function', 'Object']">
        <div class="mb-2">Use barStyle to set svg styling for each bar.</div>
        <div class="font-bold">Ex:</div>
        <ul class="list-disc list-inside">
          <li>fill (ex. red)</li>
          <li>fill-opacity</li>
          <li>stroke</li>
          <li>strokeWidth</li>
        </ul>
      </Prop>
      <Prop name="maxWidth" :types="['Number']" odd>
        Max width for the bar.
      </Prop>
      <Prop name="dataKeys" :types="['Array']">
        <div>What data the bar to render.</div>
        <div>Ex: <code>['name', 'pl']</code></div>
      </Prop>
    </PropsBlock>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import * as Components from '@/components'
import * as code from './code'

export default defineComponent({
  components: { ...Components },
  name: 'PageBarChart',
  setup () {
    return { code }
  }
})
</script>
