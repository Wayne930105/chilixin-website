<template>
  <section class="py-20 bg-brand-navy" aria-labelledby="about-heading">
    <div class="section-container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <!-- 文字側 -->
        <div>
          <SectionHeading
            id="about-heading"
            eyebrow="關於錡利鑫"
            title="台灣重工業液壓工程專家"
            subtitle="立足台中大肚工業區，服務全台重工業廠商，以精準技術與嚴格品質控管，成為客戶信賴的長期合作夥伴。"
          />

          <div class="mt-8 space-y-4">
            <div v-for="item in [
              { title: '精準施工', desc: '每項工程嚴格依設計圖施作，確保管路耐壓、無洩漏，符合工業安全規範。' },
              { title: '快速響應', desc: '提供緊急設備搶修服務，縮短廠房停機時間，降低生產損失。' },
              { title: '全程負責', desc: '從勘查設計、材料採購、施工安裝到竣工測試，一條龍負責到底。' },
            ]" :key="item.title"
              class="flex gap-4"
            >
              <div class="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-brand-blue/10 border border-brand-blue/20 rounded-sm mt-0.5">
                <svg class="w-4 h-4 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div>
                <h3 class="text-sm font-bold text-brand-light mb-1">{{ item.title }}</h3>
                <p class="text-sm text-brand-steel leading-relaxed">{{ item.desc }}</p>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <NuxtLink to="/about" class="btn-primary">
              了解更多關於我們
            </NuxtLink>
          </div>
        </div>

        <!-- 圖片側 -->
        <div class="relative">
          <div class="relative aspect-[4/3] overflow-hidden rounded-sm bg-brand-card border border-slate-200">
            <NuxtImg
              v-if="true"
              src="/images/services/about-welding.png"
              alt="錡利鑫實業工程師進行管路焊接作業"
              class="w-full h-full object-cover"
              loading="lazy"
              format="webp"
              :width="800"
              :height="600"
            />
            <!-- 無圖片時的替代視覺 -->
            <div class="absolute inset-0 bg-grid-industrial opacity-30" />
            <div class="absolute inset-0 flex flex-col items-center justify-center gap-4 text-brand-steel/30">
              <svg class="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
              </svg>
              <span class="text-sm font-medium tracking-widest uppercase">工程照片</span>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
          </div>
          <!-- 浮動資訊卡 -->
          <div class="absolute -bottom-4 -left-4 bg-brand-card border border-brand-blue/20 p-4 rounded-sm shadow-xl">
            <p class="text-3xl font-black text-gradient-brand">20+</p>
            <p class="text-xs text-brand-steel mt-1 uppercase tracking-widest">年工程經驗</p>
          </div>
          <div class="absolute -top-4 -right-4 bg-brand-orange p-4 rounded-sm shadow-xl">
            <p class="text-2xl font-black text-white">500+</p>
            <p class="text-xs text-white/80 mt-1 uppercase tracking-widest">完工案件</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
