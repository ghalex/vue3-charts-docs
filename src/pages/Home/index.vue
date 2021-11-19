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
          <div class="grid sm:grid-cols-3 gap-2">
            <a href="https://antsignals.com/" class="sponsor">
              <img
                src="data:image/png;base64,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"
              />
            </a>
            <a href="https://10stickere.ro" class="sponsor">
              <img
                src="https://10stickere.ro/wp-content/uploads/2020/12/logo-1.svg"
              />
            </a>
            <a href="#" class="sponsor">
              <img src="/img/coderbox.png" />
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
