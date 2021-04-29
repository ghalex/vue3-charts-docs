<template>
  <header class="navbar">
    <div class="navbar-left flex items-end p-2">
      <Logo />
      <router-link to="/">
        <div class="flex items-start ml-2">
          <h1 class="text-xl leading-none text-green-700"><b>Vue3</b>-Charts</h1>
          <small class="text-gray-500 leading-none">v1.0.11</small>
        </div>
      </router-link>
    </div>
    <div class="navbar-right flex items-center mr-4">
      <router-link to="/" aria-current="page" class="navbar-item" :class="{ active: route.name === 'home' }">
        Home
      </router-link>
      <router-link
        to="/docs/getting-started"
        aria-current="page"
        class="navbar-item"
        :class="{ active: route.path.indexOf('/docs') > -1 }"
      >
        Docs
      </router-link>
      <a href="https://github.com/ghalex/vue3-charts" aria-current="page" class="navbar-item"> GitHub </a>
      <a href="https://github.com/ghalex/vue3-charts" class="block ml-4">
        <img
          src="https://img.shields.io/github/stars/ghalex/vue3-charts.svg?style=social&amp;label=Star"
          alt="Github Stars"
        />
      </a>
    </div>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import Logo from '../Logo/index.vue'

export default defineComponent({
  name: 'Navbar',
  components: { Logo },
  setup() {
    const route = useRoute()
    const pageName = computed(() => route.name || 'home')
    return { route, pageName }
  }
})
</script>

<style lang="postcss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: 0 8px 8px -10px rgb(0 0 0 / 15%);
  padding: 0.8rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 500;
  border-bottom: 1px solid #eee;
}

.navbar-right {
  display: none;

  @screen md {
    display: flex;
  }
}

.navbar-item {
  font-weight: bold;
  padding: 0.2rem 0.5rem 0 0.5rem;
  color: theme('colors.gray.700');
  border-bottom: 2px solid white;

  & a {
    display: flex;
    align-items: center;
    color: theme('colors.gray.700');
    text-decoration: none;
  }

  &:not(:first-child) {
    margin-left: 2.5rem;
  }

  &.active {
    color: theme('colors.green.700');
    border-bottom: 2px solid theme('colors.green.700');
  }
}
</style>
