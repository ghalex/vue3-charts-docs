<template>
  <div class="home">
    <Navbar />
    <Sidebar class="home-sidebar" />
    <div class="page-full">
      <div class="py-8 flex flex-col items-center">
        <img
          class="logo"
          :style="{ height: '120px' }"
          src="@/assets/logo.png"
        />
        <h1 class="font-bold mt-4 text-4xl text-gray-800">Vue3-Charts</h1>
        <p class="my-0 text-xl">Data visualization in Vue3 made easy</p>
        <div class="my-6">
          <router-link to="/docs/getting-started" class="btn primary mr-4"
            >Get Started</router-link
          >
          <a href="https://github.com/ghalex/vue3-charts" class="btn">GitHub</a>
        </div>
        <!-- <a href="https://github.com/ghalex/vue3-charts">
          <img
            src="https://img.shields.io/github/stars/ghalex/vue3-charts.svg?style=social&amp;label=Star"
            alt="Github Stars"
          />
        </a> -->
        <div class="main-chart">
          <ChartBlock :chartCode="code.chartCode" :dataCode="code.dataCode">
            <AreaChart />
          </ChartBlock>
        </div>

        <div class="bg-gray-100 p-8 rounded-lg mt-4 border border-gray-300">
          <h1 class="text-center font-bold mb-4">Gold Sponsors</h1>
          <div class="grid sm:grid-cols-2 gap-8">
            <a href="https://zapant.com" class="sponsor">
              <img
                src="/img/logozapant.png"
              />
            </a>
            <a href="https://logzai.com" class="sponsor">
              <img src="/img/logzai_transparent.png" />
            </a>
          </div>
        </div>

        <div class="flex flex-col mt-4 items-center">
          <div>© 2021 ghalex. All Rights Reserved</div>
          <div>Build with ❤️ by <a href="https://ghalex.com">ghalex</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Navbar, ChartBlock, AreaChart, Sidebar } from '@/components'
import * as code from './code'

export default defineComponent({
  components: { Navbar, ChartBlock, AreaChart, Sidebar },
  name: 'PageHome',
  setup () {
    return { code }
  }
})
</script>

<style lang="postcss" scoped>
.home-sidebar {
  display: none;
  @media (max-width: 768px) {
    &.show {
      display: block;
    }
  }
}

.main-chart {
  width: 350px;

  @screen sm {
    width: 300px;
  }

  @screen md {
    width: 450px;
  }

  @screen lg {
    width: 650px;
  }
}

.sponsor {
  padding: 6px;
  height: 45px;
  filter: grayscale(100%);
  text-align: center;

  img {
    height: 100%;
    display: inline-block;
  }
}
</style>
