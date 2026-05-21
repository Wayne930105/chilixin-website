<script setup lang="ts">
const services = [
  {
    slug: 'hydraulic-piping',
    icon: '🔧',
    title: '液壓高壓配管工程',
    desc: '依規格設計、製作與安裝各式液壓高壓管路系統，確保承壓安全與流量效率。',
    tags: ['高壓管路', '油路設計', '壓力測試'],
  },
  {
    slug: 'hydraulic-flushing',
    icon: '💧',
    title: '油壓管路油洗',
    desc: '精密循環沖洗技術，有效去除管路內鐵屑、污染物，達到清潔度標準，保護液壓元件。',
    tags: ['循環沖洗', '清潔度檢測', '污染控制'],
  },
  {
    slug: 'hydraulic-maintenance',
    icon: '⚙️',
    title: '油壓設備維護',
    desc: '定期保養與故障排除，涵蓋液壓泵、閥件、缸體等全系統維修，延長設備使用壽命。',
    tags: ['定期保養', '故障排除', '元件更換'],
  },
  {
    slug: 'door-fabrication',
    icon: '🚪',
    title: '液壓機械門製作',
    desc: '客製化液壓機械門設計與製作，適用於重型廠房、倉儲物流中心，確保開關動作穩定可靠。',
    tags: ['客製設計', '廠房應用', '安全認證'],
  },
  {
    slug: 'welding-engineering',
    icon: '🔥',
    title: '焊接工程',
    desc: '承接各類鋼構、管路焊接工程，具備氬焊、電焊等多種工法，品質符合工業規範。',
    tags: ['氬焊', '鋼構焊接', '管路焊接'],
  },
  {
    slug: 'piping-engineering',
    icon: '🏗️',
    title: '配管工程',
    desc: '工業廠房各類管路系統規劃與施工，包含氣壓、液壓、冷卻水等多種管路系統整合。',
    tags: ['廠房配管', '系統整合', '壓力試驗'],
  },
]
</script>

<template>
  <section class="py-20 bg-brand-dark" aria-labelledby="services-heading">
    <div class="section-container">
      <SectionHeading
        id="services-heading"
        eyebrow="核心服務"
        title="專業油壓工程服務"
        subtitle="深耕重工業領域二十餘年，提供從管路設計、施工、維護到緊急搶修的全方位液壓工程解決方案。"
      />

      <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="service in services"
          :key="service.slug"
          :to="`/services/${service.slug}`"
          class="card-industrial group p-6 flex flex-col gap-4"
        >
          <!-- 圖標 -->
          <div class="w-12 h-12 flex items-center justify-center bg-brand-blue/10 border border-brand-blue/20 rounded-sm text-2xl group-hover:bg-brand-blue/20 transition-colors">
            {{ service.icon }}
          </div>

          <!-- 標題 -->
          <h3 class="text-lg font-bold text-brand-light group-hover:text-brand-cyan transition-colors">
            {{ service.title }}
          </h3>

          <!-- 描述 -->
          <p class="text-sm text-brand-steel leading-relaxed flex-1">
            {{ service.desc }}
          </p>

          <!-- 標籤 -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in service.tags"
              :key="tag"
              class="text-xs px-2 py-1 bg-slate-50 border border-slate-200 text-brand-steel rounded-sm"
            >
              {{ tag }}
            </span>
          </div>

          <!-- 箭頭 -->
          <div class="flex items-center gap-1 text-xs font-bold text-brand-blue group-hover:text-brand-blue/70 transition-colors mt-auto pt-2 border-t border-slate-200">
            了解詳情
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </NuxtLink>
      </div>

      <div class="mt-10 text-center">
        <NuxtLink to="/services" class="btn-outline">
          查看所有服務項目
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
