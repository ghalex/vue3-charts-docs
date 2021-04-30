<template>
  <div class="getting-started">
    <h1>Getting Started</h1>
    <p><b>vue3-charts</b> is a SVG-based charting library that is very easy to use and highly customizable.</p>

    <h2>1. Installation</h2>
    <p>You can install vue3-charts using <code>yarn</code> or <code>npm</code>.</p>
    <CodeBlock :code="code.npmInstall" :readonly="true" lang="bash" />

    <p>And you are done with the installation. Please keep in mind you need a Vue version > 3.x</p>

    <h2>2. Creating your first Chart</h2>
    <p>
      To create your first chart you just import the <code>Chart</code> component from <b>vue3-charts</b> and add as
      many <b>layers & widgets</b> as you want.
    </p>
    <p>Here is a simple line chart example with 2 layers:</p>
    <ul>
      <li>- Grid layer</li>
      <li>- Line layer</li>
    </ul>

    <ChartBlock :chartCode="code.chartCode" :dataCode="code.dataCode">
      <SimpleLineChart />
    </ChartBlock>

    <h2>3. More Charts</h2>
    <p>Check the <a href="/docs/charts">charts</a> section for more examples.</p>
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
