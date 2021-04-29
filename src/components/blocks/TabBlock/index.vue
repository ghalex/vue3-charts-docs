<template>
  <div class="shadow-sm rounded overflow-hidden border border-gray-200">
    <div class="flex border-b border-gray-200">
      <div
        v-for="(tab, i) in tabs"
        class="flex items-center px-6 py-3 cursor-pointer hover:text-green-600"
        :key="i"
        :class="{ ' border-b-2 border-green-600 text-green-600': index === i }"
        @click="index = i"
      >
        <span class="material-icons-outlined mr-2">{{ tab.icon }}</span>
        {{ tab.label }}
      </div>
    </div>
    <div class="flex flex-co">
      <slot :selected="index" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {},
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  setup(_, { slots }) {
    const index = ref(0)

    return { index }
  }
})
</script>

<style></style>
