<template>
  <aside class="sidebar" :class="{ show: showSidebar }">
    <section
      class="sidebar-section"
      v-for="(item, i) in items"
      :key="i"
      :class="{ open: route.path.indexOf(item.link) > -1 }"
    >
      <a @click="() => goTo(item.link)">
        <h1 class="sidebar-title">
          <span class="material-icons">circle</span>
          {{ item.title }}
        </h1>
      </a>
      <ul class="sidebar-links" v-if="route.path.indexOf(item.link) > -1">
        <li v-for="(child, j) in item.children" :key="j" :class="{ active: route.path.indexOf(child.link) > -1 }">
          <a @click="() => goTo(child.link)">
            {{ child.title }}
          </a>
        </li>
      </ul>
    </section>
  </aside>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import data from './data'

export default defineComponent({
  name: 'Sidebar',
  components: {},
  setup() {
    const items = ref(data)
    const route = useRoute()
    const router = useRouter()
    const showSidebar = inject('sidebar', ref(true))

    function goTo(to: string) {
      router.push(to)
      showSidebar.value = false
    }

    return { items, route, showSidebar, goTo }
  }
})
</script>

<style lang="postcss" scoped>
.sidebar {
  width: 20rem;
  position: fixed;
  z-index: 1000;
  margin: 0;
  top: 68px;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  background-color: white;
  border-right: 1px solid #eee;
  padding: 2rem 0 1rem 0;

  @media (max-width: 768px) {
    width: 100%;
    right: 0;
    display: none;

    &.show {
      display: block;
    }
  }
}

.sidebar-section {
  line-height: 2.2rem;
  h1 {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0.35rem 1.75rem;
    color: theme('colors.gray.700');
    cursor: pointer;

    span {
      font-size: 0.5rem;
      margin-right: 0.75rem;
    }

    &:hover {
      color: theme('colors.green.700');
    }
  }

  ul {
    padding-left: 1.75rem;

    li {
      padding: 0.35rem 1.475rem;
      line-height: 1.7rem;
      border-left: 1px solid theme('colors.gray.300');

      a {
        color: theme('colors.gray.700');
        cursor: pointer;
      }

      a:hover {
        color: theme('colors.green.700');
      }

      &.active {
        border-left: 3px solid theme('colors.green.700');
        margin-left: -1px;
        a {
          color: theme('colors.green.700');
        }
      }
    }
  }
}

.sidebar-section.open {
  h1 {
    color: theme('colors.green.700');
  }
}
</style>
