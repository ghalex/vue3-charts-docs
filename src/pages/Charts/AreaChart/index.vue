<template>
  <div class="area-chart">
    <h1>Area Chart</h1>
    <p>
      To create an area chart in <b>vue3-charts</b> you can use the <code>Area</code> layer. You can add the
      <code>Area</code> layer multiple times or combine it with other layers (<code>Line</code>, <code>Bar</code>,
      <code>Marker</code>).
    </p>

    <p>If you have multiple <code>Area</code> layers you can render them as stacked.</p>

    <p>Let's see a simple example using an <code>Area</code> layer and a <code>Line</code> layer.</p>

    <ChartBlock :chartCode="code.chartCode" :dataCode="code.dataCode">
      <AreaChart />
    </ChartBlock>

    <p>As you can see the area <code>fill</code> color can be a gradient.</p>

    <CodeBlock :code="code.gradient" />

    <h2 class="mt-6">Stacked Area Chart</h2>
    <p>
      If you have multiple <code>Area</code> layers you can render them as stacked using <code>Group</code> component.
    </p>

    <ChartBlock :chartCode="code.chartCode" :dataCode="code.dataCode">
      <StackedAreaChart />
    </ChartBlock>

    <h2 class="mt-6">Area Props</h2>
    <p>The area layer allows a number of properties to be specified.</p>
    <PropsBlock class="mt-4">
      <Prop name="areaStyle" :types="['Object']">
        <div class="mb-2">Use areaStyle to set svg styling for each bar.</div>
        <div class="font-bold">Ex:</div>
        <ul class="list-disc list-inside">
          <li>fill (ex. red)</li>
          <li>fill-opacity</li>
          <li>etc...</li>
        </ul>
      </Prop>
      <Prop name="dataKeys" :types="['Array']" odd>
        <div>What data the bar to render.</div>
        <div>Ex: <code>['name', 'pl']</code></div>
      </Prop>
      <Prop name="type" :types="['normal', 'step', 'natural', 'monotone']"> Set how to draw the line. </Prop>
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
