<template>
  <div class="getting-started">
    <h1>Custom Layer</h1>
    <p><b>Vue3-Charts</b> is build to be highly customizable.</p>
    <p>
      The library comes with some built-in layers (<code>Line</code>, <code>Bar</code>, <code>Area</code> etc...) but
      you can easly write your own layers using the power of Vue3
      <a href="https://v3.vuejs.org/api/composition-api.html">composition api</a>
    </p>

    <h2>Labels Layer</h2>
    <p>To demonstrate how to build a custom layer we will create a layer called <code>Labels</code></p>
    <p>
      The purpose of the layer is to display a label on the chart for each data point. Let's start with a simple line
      chart example.
    </p>

    <ChartBlock :chartCode="code.chartCode" :dataCode="code.dataCode">
      <CustomLayerChart />
    </ChartBlock>

    <p>
      As you can see in this example, it is very hard to see the values for each data point, so our layer will display a
      text with the value for each point.
    </p>

    <p>To create our layer we will use the <code>usePoints</code> hook provided by Vue3-Charts.</p>

    <p>
      The hook will do all the job for us (mapping the data) and will give us a list of points that we can use to draw
      whatever we want, in our case we will simply draw a text.
    </p>

    <p>Here is the code for our layer:</p>

    <CodeBlock :code="code.customLayer" />

    <p>And after we add this layer to our chart we get this result:</p>

    <ChartBlock :chartCode="code.chartCodeLabels" :dataCode="code.dataCode">
      <CustomLayerChart :showLabels="true" />
    </ChartBlock>

    <p>
      As you can see this is pretty easy and you can draw whatever you want. You can check the code for our built-in
      layers to learn more
      <a target="_blank" href="https://github.com/ghalex/vue3-charts/blob/main/src/components/Line/index.vue">Line</a>,
      <a target="_blank" href="https://github.com/ghalex/vue3-charts/blob/main/src/components/Bar/index.vue">Bar</a>,
      <a target="_blank" href="https://github.com/ghalex/vue3-charts/blob/main/src/components/Marker/index.vue"
        >Marker</a
      >
    </p>
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
