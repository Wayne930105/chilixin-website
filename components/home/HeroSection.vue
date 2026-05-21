<template>
  <section class="relative min-h-screen flex items-center overflow-hidden" aria-label="主視覺">
    <!-- 背景圖（液壓管路特寫，無圖片時顯示深色漸層背景） -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#0F1924] via-[#1C2D42] to-[#0F1924]">
      <NuxtImg
        v-if="true"
        src="/images/services/hero-bg.png"
        alt="專業液壓管路配管工程現場"
        class="w-full h-full object-cover object-center"
        loading="eager"
        :width="1920"
        :height="1080"
        format="webp"
      />
      <!-- 幾何裝飾背景（無圖片時的替代視覺） -->
      <div class="absolute inset-0 bg-grid-industrial opacity-40" />
      <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/5 to-transparent" />
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
      <div class="absolute inset-0 hero-overlay" />
      <!-- 藍色品牌漸層疊加 -->
      <div class="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-transparent to-transparent" />
    </div>

    <!-- 內容 -->
    <div class="relative section-container py-24">
      <div class="max-w-2xl animate-slide-up">
        <!-- 標籤 -->
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/20 border border-brand-blue/40 rounded-sm mb-6">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
          <span class="text-xs font-bold uppercase tracking-widest text-brand-cyan">重工業專業工程</span>
        </div>

        <!-- 主標題 -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
          精密液壓管路<br>
          <span class="text-gradient-brand">配管工程</span><br>
          專業服務
        </h1>

        <!-- 副標題 -->
        <p class="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
          錡利鑫實業深耕台灣重工業領域，專業承接油壓高壓管路配管、系統油洗、設備維護、液壓機械門製作及焊接配管工程，為精密機械與重工業廠房提供全方位解決方案。
        </p>

        <!-- CTA 按鈕組 -->
        <div class="flex flex-col sm:flex-row gap-4">
          <NuxtLink to="/services" class="btn-primary">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
            查看服務項目
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-outline">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            立即聯絡詢問
          </NuxtLink>
        </div>

        <!-- 數據統計 -->
        <div class="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
          <div v-for="stat in [
            { value: '20+', label: '年工程經驗' },
            { value: '500+', label: '完工工程案例' },
            { value: '100%', label: '品質保證' },
          ]" :key="stat.label">
            <p class="text-3xl font-black text-gradient-brand">{{ stat.value }}</p>
            <p class="text-xs text-slate-400 mt-1 uppercase tracking-widest">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 向下滾動指示 -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
      <span class="text-xs text-slate-400 tracking-widest uppercase">Scroll</span>
      <svg class="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </div>
  </section>
</template>
