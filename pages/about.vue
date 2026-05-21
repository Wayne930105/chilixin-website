<script setup lang="ts">
useSeoMeta({
  title: '關於我們 | 錡利鑫實業有限公司 | 台中液壓工程專家',
  description: '錡利鑫實業有限公司，台中大肚區專業液壓工程公司，深耕重工業領域逾20年，提供液壓配管、設備維護、焊接配管全方位工程服務。',
  ogTitle: '關於錡利鑫實業 | 台中液壓工程專家',
  ogImage: '/images/og-image.png',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: '錡利鑫實業有限公司',
        alternateName: 'Chilixin Industrial Co., Ltd.',
        url: 'https://www.chilixin.com.tw',
        telephone: '+886-4-26996011',
        email: 'qilixin17@gmail.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '博愛街52巷17號',
          addressLocality: '大肚區',
          addressRegion: '台中市',
          postalCode: '432',
          addressCountry: 'TW',
        },
      }),
    },
  ],
})
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="py-20 bg-brand-navy relative overflow-hidden">
      <div class="absolute inset-0 bg-grid-industrial opacity-30" />
      <div class="relative section-container">
        <BreadcrumbNav :items="[{ label: '關於我們', path: '/about' }]" />
        <div class="mt-6 max-w-2xl">
          <SectionHeading
            tag="h1"
            eyebrow="Company Profile"
            title="關於錡利鑫實業"
            subtitle="立足台中大肚，深耕台灣重工業液壓工程領域，以精準技術與嚴格品質，成為客戶信賴的長期合作夥伴。"
          />
        </div>
      </div>
    </section>

    <!-- 公司簡介 -->
    <section class="py-20 bg-brand-dark">
      <div class="section-container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-2xl font-black text-brand-light mb-6">
              專業・可靠・精準
            </h2>
            <div class="space-y-4 text-brand-steel leading-relaxed">
              <p>
                錡利鑫實業有限公司（CLX Industrial）創立於台中大肚工業區，長年深耕台灣重工業液壓工程領域。我們的服務核心，是協助各大精密機械、模具製造、金屬加工廠商，解決液壓系統的設計、施工、維護與緊急搶修需求。
              </p>
              <p>
                超過二十年的工程經驗，我們累積了數百件完工案例，服務客戶遍及台中、台北、高雄等各大工業區。無論是新廠建置的全套管路配管，或是現有設備的液壓系統改造，都能提供從勘查設計到竣工交付的一條龍專業服務。
              </p>
              <p>
                我們深信，液壓工程的品質決定了工廠的生產穩定性。因此，錡利鑫實業對每一件工程都嚴格把關，從管材選用、施工工法到最終的耐壓測試，每個環節都不妥協。
              </p>
            </div>
          </div>
          <div class="relative">
            <div class="aspect-[4/3] overflow-hidden rounded-sm">
              <NuxtImg
                src="/images/services/about-factory.png"
                alt="錡利鑫實業工廠作業現場"
                class="w-full h-full object-cover"
                loading="lazy"
                format="webp"
                :width="800"
                :height="600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心能力 -->
    <section class="py-20 bg-brand-navy">
      <div class="section-container">
        <SectionHeading
          eyebrow="Core Competency"
          title="核心技術能力"
          subtitle="二十年磨礪出的專業技術，是我們為客戶解決問題最可靠的後盾。"
        />
        <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="cap in [
            { icon: '🔧', title: '液壓系統設計', desc: '依設備需求規劃液壓管路佈局，選用適當元件與管材，確保系統效能與安全性。' },
            { icon: '💧', title: '精密管路油洗', desc: '運用大流量沖洗設備，依 ISO/NAS 標準執行管路清潔度檢測，確保元件安全。' },
            { icon: '⚙️', title: '設備故障診斷', desc: '豐富的液壓元件知識，快速精準診斷故障根因，提供最有效的修復方案。' },
            { icon: '🔥', title: '工業焊接技術', desc: '具備 TIG、MIG/MAG 等多種焊接工法，適應各類管材與施工環境。' },
            { icon: '🏗️', title: '整廠配管規劃', desc: '從新廠建置到既有廠房改造，提供完整的配管系統規劃與施工服務。' },
            { icon: '🚨', title: '緊急搶修服務', desc: '設備急修時快速到廠，縮短停機時間，降低生產損失，維護客戶利益。' },
          ]" :key="cap.title" class="card-industrial p-6">
            <div class="text-3xl mb-4">{{ cap.icon }}</div>
            <h3 class="text-base font-bold text-brand-light mb-2">{{ cap.title }}</h3>
            <p class="text-sm text-brand-steel leading-relaxed">{{ cap.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 未來展望（輕描） -->
    <section class="py-16 bg-brand-dark border-t border-slate-200">
      <div class="section-container">
        <div class="max-w-3xl">
          <SectionHeading
            eyebrow="Future Vision"
            title="研究發展方向"
            subtitle="在穩固核心液壓工程業務的同時，我們也積極探索新興工程領域。"
          />
          <div class="mt-8 p-6 bg-brand-blue/5 border border-brand-blue/20 rounded-sm">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-brand-blue/10 rounded-sm text-xl">
                🌱
              </div>
              <div>
                <h3 class="text-base font-bold text-brand-light mb-2">溫室工程與工業自動化</h3>
                <p class="text-sm text-brand-steel leading-relaxed">
                  目前錡利鑫實業正積極研究溫室精密農業設施與工業自動化系統的整合應用，結合既有的液壓工程與金屬加工能量，探索農業科技與智慧製造領域的服務可能性。此為公司中長期研究發展方向，期望在未來能為客戶提供更廣泛的工程解決方案。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>
