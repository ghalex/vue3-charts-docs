<template>
  <div class="home">
    <Navbar />
    <div class="page-full">
      <div class="py-8 flex flex-col items-center">
        <img class="logo" :style="{ height: '120px' }" src="@/assets/logo.png" />
        <h1 class="font-bold mt-4 text-4xl text-gray-800">Vue3-Charts</h1>
        <p class="my-0 text-xl">Data visualization in Vue3 made easy</p>
        <div class="my-6">
          <router-link to="/docs/getting-started" class="btn primary mr-4">Get Started</router-link>
          <a href="https://github.com/ghalex/vue3-charts" class="btn">GitHub</a>
        </div>
        <!-- <a href="https://github.com/ghalex/vue3-charts">
          <img
            src="https://img.shields.io/github/stars/ghalex/vue3-charts.svg?style=social&amp;label=Star"
            alt="Github Stars"
          />
        </a> -->
        <div :style="{ width: '650px' }">
          <ChartBlock :chartCode="code.chartCode" :dataCode="code.dataCode">
            <AreaChart />
          </ChartBlock>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Navbar, ChartBlock, AreaChart } from '@/components'
import * as code from './code'

export default defineComponent({
  components: { Navbar, ChartBlock, AreaChart },
  setup() {
    return { code }
  }
})
</script>
