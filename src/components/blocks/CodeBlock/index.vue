<template>
  <div
    class="
      shadow-sm
      rounded
      overflow-hidden
      border border-gray-200
      my-2
      code-block
    "
  >
    <PrismEditor
      :code="code"
      :readonly="true"
      :lang="lang"
      :oneLine="oneLine"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PrismEditor } from '@/components/core'

export default defineComponent({
  name: 'CodeBlock',
  components: { PrismEditor },
  props: {
    code: {
      type: String,
      default: ''
    },
    lang: {
      type: String,
      default: 'markup'
    },
    oneLine: { type: Boolean, default: false }
  }
})
</script>

<style lang="postcss" scoped>
.code-block {
  background-color: #f6f9fc;
}
</style>
