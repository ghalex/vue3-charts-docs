<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue'

export default defineComponent({
  setup () {
    const showSidebar = ref(false)
    provide('sidebar', showSidebar)
  }
})
</script>
