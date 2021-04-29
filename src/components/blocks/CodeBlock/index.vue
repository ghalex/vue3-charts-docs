<template>
  <div class="shadow-sm rounded overflow-hidden border border-gray-200 my-2">
    <PrismEditor :code="code" :readonly="true" :lang="lang" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PrismEditor } from '@/components/core'

export default defineComponent({
  components: { PrismEditor },
  props: {
    code: {
      type: String,
      default: ''
    },
    lang: {
      type: String,
      default: 'markup'
    }
  }
})
</script>

<style></style>
