<template>
  <TabBlock
    class="my-3"
    :tabs="[
      { label: 'Chart', icon: 'show_chart' },
      { label: 'Code', icon: 'code' },
      { label: 'Data', icon: 'receipt_long  ' }
    ]"
  >
    <template #default="{ selected }">
      <slot v-if="selected === 0" />
      <PrismEditor :code="chartCode" :readonly="true" v-if="selected === 1" />
      <PrismEditor :code="dataCode" :readonly="true" v-if="selected === 2" :style="{ minHeight: '420px' }" />
    </template>
  </TabBlock>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PrismEditor } from '@/components/core'
import TabBlock from '../TabBlock/index.vue'

export default defineComponent({
  components: { PrismEditor, TabBlock },
  props: {
    chartCode: {
      type: String,
      default: ''
    },
    dataCode: {
      type: String,
      default: ''
    }
  }
})
</script>

<style></style>
