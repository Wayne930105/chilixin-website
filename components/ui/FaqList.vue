<script setup lang="ts">
const props = withDefaults(defineProps<{
  items: Array<{ q: string; a: string }>
  title?: string
}>(), {
  title: '常見問題',
})

// Schema.org FAQPage：問答格式最容易被搜尋引擎與 AI 摘要直接引用
useSchemaOrg([
  {
    '@type': 'FAQPage',
    'mainEntity': props.items.map(item => ({
      '@type': 'Question',
      'name': item.q,
      'acceptedAnswer': { '@type': 'Answer', 'text': item.a },
    })),
  },
])
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold text-brand-light pb-2 mb-6 border-b border-slate-200">{{ title }}</h2>
    <div class="space-y-3">
      <!-- 用 details 讓答案保留在 HTML 中，爬蟲不需執行 JS 即可讀取 -->
      <details
        v-for="(item, i) in items"
        :key="item.q"
        class="group bg-white border border-slate-200 rounded-sm shadow-sm"
        :open="i === 0"
      >
        <summary class="flex items-start justify-between gap-4 cursor-pointer list-none p-5 font-bold text-brand-light [&::-webkit-details-marker]:hidden">
          <span>{{ item.q }}</span>
          <svg class="w-5 h-5 flex-shrink-0 mt-0.5 text-brand-blue transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <p class="px-5 pb-5 -mt-1 text-brand-steel leading-relaxed">{{ item.a }}</p>
      </details>
    </div>
  </div>
</template>
