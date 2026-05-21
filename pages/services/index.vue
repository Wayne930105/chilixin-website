<script setup lang="ts">
useSeoMeta({
  title: '服務項目 | 錡利鑫實業有限公司 | 油壓配管・焊接・配管工程',
  description: '錡利鑫實業提供液壓高壓配管、油壓管路油洗、液壓設備維護、液壓機械門製作、焊接工程、配管工程等重工業專業服務，服務台灣各大工業廠房。',
  ogTitle: '服務項目 | 錡利鑫實業有限公司',
  ogImage: '/images/og-image.png',
})

const { data: services } = await useAsyncData('services-list', () =>
  queryCollection('services').order('order', 'ASC').all()
)
</script>

<template>
  <div>
    <!-- 頁面 Hero -->
    <section class="py-20 bg-brand-navy relative overflow-hidden">
      <div class="absolute inset-0 bg-grid-industrial opacity-30" />
      <div class="relative section-container">
        <BreadcrumbNav :items="[{ label: '服務項目', path: '/services' }]" />
        <div class="mt-6 max-w-2xl">
          <SectionHeading
            tag="h1"
            eyebrow="專業服務"
            title="液壓工程全方位服務"
            subtitle="從管路設計、施工、沖洗、維護到緊急搶修，錡利鑫提供重工業廠房所需的完整液壓工程解決方案。"
          />
        </div>
      </div>
    </section>

    <!-- 服務列表 -->
    <section class="py-16 bg-brand-dark">
      <div class="section-container">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            v-for="service in services"
            :key="service.path"
            :title="service.title"
            :short-description="service.shortDescription"
            :icon="service.icon"
            :slug="service.path?.split('/').pop() ?? ''"
            :industries="service.industries"
          />
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>
