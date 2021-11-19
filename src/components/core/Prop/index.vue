<template>
  <div class="props-row" :class="{ 'bg-odd': odd }">
    <div>{{ name }}</div>
    <div class="flex flex-wrap items-start">
      <div v-for="type in types" :key="type">
        <router-link
          v-if="link"
          class="block m-1 code"
          :to="`/docs/types#${type.toLowerCase()}`"
        >
          {{ type }}
        </router-link>
        <div class="m-1 code" v-else>
          {{ type }}
        </div>
      </div>
    </div>
    <div class="w-full">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PropItems',
  props: {
    name: { type: String },
    types: { type: Array },
    odd: { type: Boolean, default: false },
    link: { type: String }
  }
}
</script>

<style lang="postcss" scoped>
.props-row {
  @apply flex items-stretch border-b;

  & > div {
    @apply flex-1 p-2 border-r;
  }

  & > div:not(:last-child) {
    max-width: 150px;
  }

  & > div:last-child {
    @apply border-r-0;
  }

  .code {
    @apply px-4 mx-1 rounded text-green-700;
    opacity: 0.7;
    background-color: rgba(27, 31, 35, 0.05);
  }
}

.bg-odd {
  background-color: #f5f8fa;
}
</style>
