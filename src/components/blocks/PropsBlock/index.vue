<template>
  <div class="props">
    <div class="props-header font-semibold">
      <div>Name</div>
      <div>Type</div>
      <div>Description</div>
    </div>

    <slot />

    <!-- <div v-for="(p, i) in props" :key="p.name" class="props-row" :class="{ 'bg-odd': i % 2 }">
      <div>{{ p.name }}</div>
      <div class="flex flex-wrap">
        <router-link
          class="block m-1"
          v-for="type in p.types"
          :to="`/docs/types#${type.toLowerCase()}`"
          :class="{ 'text-gray-700': !p.link }"
          :key="type"
        >
          {{ type }}
        </router-link>
      </div>
      <div>{{ p.description }}</div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Prop {
  name: string
  types: string[]
  description: string
}

export default defineComponent ({
  name: 'PropsBlock',
  props: {
    props: {
      type: Array as () => Prop[],
      default: () => []
    }
  }
})
</script>

<style lang="postcss" scoped>
.props {
  @apply border rounded overflow-hidden;
}

.props-header {
  @apply flex border-b;

  & > div {
    @apply flex-1 p-2 border-r;
    max-width: 150px;
  }

  & > div:last-child {
    @apply border-r-0;
    max-width: auto;
  }
}
</style>
