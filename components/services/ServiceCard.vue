<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  shortDescription: string
  icon?: string
  path: string
  tags?: string[]
  headingTag?: 'h2' | 'h3'
}>(), {
  headingTag: 'h2',
})
</script>

<template>
  <!-- 手機版：圖示在左、文字在右的精簡橫向卡片；sm 以上：直向完整卡片 -->
  <NuxtLink :to="path" class="card-industrial group p-4 sm:p-6 flex sm:flex-col items-start gap-4">
    <div
      class="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center bg-brand-blue/10 border border-brand-blue/20 rounded-sm text-xl sm:text-2xl group-hover:bg-brand-blue/20 transition-colors"
      aria-hidden="true"
    >
      {{ icon ?? '⚙️' }}
    </div>

    <div class="flex-1 min-w-0 self-stretch flex flex-col gap-1.5 sm:gap-4">
      <component
        :is="headingTag"
        class="text-base sm:text-lg font-bold text-brand-light group-hover:text-brand-blue transition-colors leading-snug"
      >
        {{ title }}
      </component>
      <p class="text-sm text-brand-steel leading-relaxed line-clamp-2 sm:line-clamp-none sm:flex-1">
        {{ shortDescription }}
      </p>
      <div v-if="tags?.length" class="hidden sm:flex flex-wrap gap-1.5">
        <span
          v-for="tag in tags.slice(0, 3)"
          :key="tag"
          class="text-xs px-2 py-0.5 bg-slate-50 border border-slate-200 text-brand-steel rounded-sm"
        >
          {{ tag }}
        </span>
      </div>
      <div class="hidden sm:flex items-center gap-1 text-xs font-bold text-brand-blue group-hover:text-brand-blue/70 transition-colors pt-2 border-t border-slate-200">
        了解詳情
        <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </div>
    </div>

    <!-- 手機版箭頭 -->
    <svg class="sm:hidden w-4 h-4 flex-shrink-0 self-center text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
    </svg>
  </NuxtLink>
</template>
