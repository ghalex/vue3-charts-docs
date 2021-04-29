<template>
  <div class="charts">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import * as Components from '@/components'

export default defineComponent({
  components: { ...Components },
  setup() {
    return {}
  }
})
</script>
