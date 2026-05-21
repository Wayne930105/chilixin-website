<script setup lang="ts">
const serviceLinks = [
  { label: '液壓高壓配管', path: '/services/hydraulic-piping' },
  { label: '油壓管路油洗', path: '/services/hydraulic-flushing' },
  { label: '油壓設備維護', path: '/services/hydraulic-maintenance' },
  { label: '液壓機械門製作', path: '/services/door-fabrication' },
  { label: '焊接工程', path: '/services/welding-engineering' },
  { label: '配管工程', path: '/services/piping-engineering' },
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-[#1C2D42] border-t border-white/5 mt-auto">
    <!-- 主要內容 -->
    <div class="section-container py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        <!-- 公司資訊 -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <img
              src="/images/logo/logo-icon.png"
              alt="CLX 錡利鑫實業"
              class="h-10 w-auto object-contain"
            />
            <div>
              <p class="text-lg font-black text-white tracking-wider">CLX</p>
              <p class="text-xs text-brand-steel tracking-widest">錡利鑫實業有限公司</p>
            </div>
          </div>
          <p class="text-sm text-brand-steel leading-relaxed mb-6 max-w-sm">
            專業提供油壓高壓管路配管、管路油洗、油壓設備維護、液壓機械門製作、焊接及配管工程，服務台灣各大重工業廠房與精密機械製造商。
          </p>
          <!-- 聯絡資訊 -->
          <div class="space-y-2.5 text-sm">
            <a href="tel:+886426996011"
               class="flex items-center gap-3 text-brand-steel hover:text-brand-cyan transition-colors">
              <svg class="w-4 h-4 flex-shrink-0 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              04-26996011
            </a>
            <p class="flex items-center gap-3 text-brand-steel">
              <svg class="w-4 h-4 flex-shrink-0 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
              </svg>
              04-26996221（傳真）
            </p>
            <a href="mailto:qilixin17@gmail.com"
               class="flex items-center gap-3 text-brand-steel hover:text-brand-cyan transition-colors">
              <svg class="w-4 h-4 flex-shrink-0 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              qilixin17@gmail.com
            </a>
            <p class="flex items-start gap-3 text-brand-steel">
              <svg class="w-4 h-4 flex-shrink-0 mt-0.5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              台中市大肚區博愛街52巷17號
            </p>
          </div>
        </div>

        <!-- 服務項目 -->
        <div>
          <h3 class="text-sm font-bold text-brand-light uppercase tracking-widest mb-4 pb-2 border-b border-brand-blue/30">
            服務項目
          </h3>
          <ul class="space-y-2">
            <li v-for="link in serviceLinks" :key="link.path">
              <NuxtLink
                :to="link.path"
                class="text-sm text-brand-steel hover:text-brand-cyan transition-colors flex items-center gap-1.5"
              >
                <span class="w-1 h-1 rounded-full bg-brand-blue flex-shrink-0" />
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- 快速連結 -->
        <div>
          <h3 class="text-sm font-bold text-brand-light uppercase tracking-widest mb-4 pb-2 border-b border-brand-blue/30">
            快速連結
          </h3>
          <ul class="space-y-2">
            <li v-for="item in [
              { label: '首頁', path: '/' },
              { label: '工程案例', path: '/projects' },
              { label: '關於我們', path: '/about' },
              { label: '聯絡我們', path: '/contact' },
            ]" :key="item.path">
              <NuxtLink
                :to="item.path"
                class="text-sm text-brand-steel hover:text-brand-cyan transition-colors flex items-center gap-1.5"
              >
                <span class="w-1 h-1 rounded-full bg-brand-blue flex-shrink-0" />
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>

          <!-- 緊急聯繫 CTA -->
          <div class="mt-8 p-4 bg-brand-orange/10 border border-brand-orange/20 rounded-sm">
            <p class="text-xs text-brand-orange font-bold uppercase tracking-widest mb-1">需要緊急維修？</p>
            <a href="tel:+886426996011"
               class="text-lg font-black text-white hover:text-brand-orange transition-colors">
              04-26996011
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- 版權列 -->
    <div class="border-t border-white/5">
      <div class="section-container py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-brand-steel">
        <p>© {{ currentYear }} 錡利鑫實業有限公司 Chilixin Industrial Co., Ltd. All rights reserved.</p>
        <p>Taiwan Heavy Industrial Engineering</p>
      </div>
    </div>
  </footer>
</template>
