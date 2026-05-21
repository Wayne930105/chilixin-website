<script setup lang="ts">
useSeoMeta({
  title: '頁面不存在 | 錡利鑫實業有限公司',
  robots: 'noindex',
})
</script>

<template>
  <div class="min-h-[60vh] flex items-center justify-center">
    <div class="text-center">
      <p class="text-8xl font-black text-brand-blue/20 mb-4">404</p>
      <h1 class="text-2xl font-bold text-brand-light mb-3">頁面不存在</h1>
      <p class="text-brand-steel mb-8">您所查詢的頁面可能已移除或網址有誤。</p>
      <div class="flex gap-4 justify-center">
        <NuxtLink to="/" class="btn-primary">返回首頁</NuxtLink>
        <NuxtLink to="/contact" class="btn-outline">聯絡我們</NuxtLink>
      </div>
    </div>
  </div>
</template>
