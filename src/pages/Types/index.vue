<template>
  <div class="types">
    <h1 id="chart-config">ChartConfig</h1>
    <p class="mt-0">Chart config object is used to set size, margin, direction and axis.</p>
    <p>
      See: <router-link to="#axis">AxisConfig</router-link>, <router-link to="#margin">Margin</router-link>,
      <router-link to="#size">Size</router-link>
    </p>
    <CodeBlock :code="code.chartConfig" class="mt-4" />

    <h1 id="axis" class="mt-6">AxisConfig</h1>
    <p class="mt-0">Config the chart axis.</p>
    <TabBlock
      :tabs="[
        { label: 'Type', icon: 'text_fields' },
        { label: 'Default Value', icon: 'receipt_long' }
      ]"
    >
      <template #default="{ selected }">
        <PrismEditor :code="code.axis" :readonly="true" v-if="selected === 0" />
        <PrismEditor :code="code.axisDefault" :readonly="true" v-if="selected === 1" />
      </template>
    </TabBlock>

    <h1 id="size" class="mt-6">Size</h1>
    <p class="mt-0">Chart size.</p>
    <CodeBlock :code="code.size" class="mt-4" />

    <h1 id="margin" class="mt-6">Marign</h1>
    <p class="mt-0">Chart margins.</p>
    <CodeBlock :code="code.margin" class="mt-4" />
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
