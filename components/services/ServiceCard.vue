<script setup lang="ts">
defineProps<{
  title: string
  shortDescription: string
  icon?: string
  slug: string
  industries?: string[]
}>()
</script>

<template>
  <NuxtLink :to="`/services/${slug}`" class="card-industrial group p-6 flex flex-col gap-4">
    <div class="w-12 h-12 flex items-center justify-center bg-brand-blue/10 border border-brand-blue/20 rounded-sm text-2xl group-hover:bg-brand-blue/20 transition-colors">
      {{ icon ?? '⚙️' }}
    </div>
    <h2 class="text-lg font-bold text-brand-light group-hover:text-brand-cyan transition-colors leading-snug">
      {{ title }}
    </h2>
    <p class="text-sm text-brand-steel leading-relaxed flex-1">
      {{ shortDescription }}
    </p>
    <div v-if="industries?.length" class="flex flex-wrap gap-1.5">
      <span
        v-for="ind in industries.slice(0, 3)"
        :key="ind"
        class="text-xs px-2 py-0.5 bg-slate-50 border border-slate-200 text-brand-steel rounded-sm"
      >
        {{ ind }}
      </span>
    </div>
    <div class="flex items-center gap-1 text-xs font-bold text-brand-blue group-hover:text-brand-blue/70 transition-colors pt-2 border-t border-slate-200">
      了解詳情
      <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>
    </div>
  </NuxtLink>
</template>
