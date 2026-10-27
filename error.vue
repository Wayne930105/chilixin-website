<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const is404 = computed(() => props.error.statusCode === 404)

// error.vue 會取代 app.vue，titleTemplate 不會套用，需自行寫完整標題
useSeoMeta({
  title: () => `${is404.value ? '頁面不存在' : '系統發生錯誤'} | 錡利鑫實業有限公司`,
  robots: 'noindex',
})

const { data: services } = await useServices()

function goHome() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <NuxtLayout>
    <section class="py-20 sm:py-28">
      <div class="section-container text-center">
        <p class="text-7xl sm:text-8xl font-black text-brand-blue/20 mb-4">{{ error.statusCode }}</p>
        <h1 class="text-2xl sm:text-3xl font-black text-brand-light mb-3">
          {{ is404 ? '頁面不存在' : '系統發生錯誤' }}
        </h1>
        <p class="text-brand-steel mb-8">
          {{ is404 ? '您所查詢的頁面可能已移除或網址有誤。' : '請稍後再試，或直接來電與我們聯繫。' }}
        </p>
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button type="button" class="btn-primary justify-center" @click="goHome">返回首頁</button>
          <a href="tel:+886426996011" class="btn-outline justify-center">來電 04-26996011</a>
        </div>
      </div>
    </section>

    <!-- 引導到服務項目 -->
    <section v-if="is404 && services?.length" class="py-16 bg-brand-navy">
      <div class="section-container">
        <h2 class="text-lg font-bold text-brand-light mb-6 text-center">或許您在找這些服務</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
          <NuxtLink
            v-for="service in services"
            :key="service.path"
            :to="service.path"
            class="card-industrial group flex items-center gap-3 p-4"
          >
            <span class="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-brand-blue/10 border border-brand-blue/20 rounded-sm text-brand-blue">
              <AppIcon :name="service.icon" class="w-5 h-5" />
            </span>
            <span class="flex-1 text-sm font-bold text-brand-light group-hover:text-brand-blue transition-colors">
              {{ service.title }}
            </span>
            <svg class="w-4 h-4 text-brand-blue group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
