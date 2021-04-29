<template>
  <img class="logo" :style="{ width, height }" src="@/assets/logo.png" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Logo',
  props: {
    width: {
      default: 'auto'
    },
    height: {
      default: '25px'
    }
  }
})
</script>

<style lang="scss" scoped></style>
