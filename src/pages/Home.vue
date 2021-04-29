<template>
  <div class="home">
    <Navbar />
    <Sidebar />
    <div class="page">div sasdas</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { Navbar, Sidebar } from '@/components'

export default defineComponent({
  components: { Navbar, Sidebar },
  setup() {
    onMounted(() => {
      console.log('work')
    })
  }
})
</script>
