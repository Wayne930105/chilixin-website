<template>
  <section class="py-16 bg-brand-orange relative overflow-hidden" aria-label="聯絡我們">
    <!-- 背景紋路 -->
    <div class="absolute inset-0 bg-grid-industrial opacity-20" />
    <!-- 斜角裝飾 -->
    <div class="absolute -right-20 top-0 bottom-0 w-64 bg-white/5 skew-x-[-10deg]" />

    <div class="relative section-container text-center">
      <p class="text-sm font-bold uppercase tracking-[0.2em] text-white/70 mb-3">需要液壓工程服務？</p>
      <h2 class="text-3xl sm:text-4xl font-black text-white mb-4">
        立即聯絡，免費評估報價
      </h2>
      <p class="text-white/80 mb-8 max-w-lg mx-auto">
        無論是新設備配管、舊系統維修或緊急搶修，歡迎電話或 Email 聯繫，我們將在最短時間內回覆您的需求。
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+886426996011"
          class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-orange font-black rounded-sm hover:bg-brand-light transition-colors text-lg"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          04-26996011
        </a>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-black rounded-sm hover:bg-white/10 transition-colors"
        >
          填寫詢問表單
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
