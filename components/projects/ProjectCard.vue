<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  clientIndustry?: string
  year?: number
  coverImage?: string
  path: string
  tags?: string[]
}>()
</script>

<template>
  <NuxtLink :to="path" class="card-industrial group overflow-hidden flex flex-col">
    <div class="aspect-video overflow-hidden bg-brand-card">
      <NuxtImg
        v-if="coverImage"
        :src="coverImage"
        :alt="`${title} 工程案例`"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        format="webp"
        :width="640"
        :height="360"
      />
      <div v-else class="w-full h-full flex items-center justify-center">
        <svg class="w-12 h-12 text-brand-steel/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
        </svg>
      </div>
    </div>

    <div class="p-5 flex flex-col gap-3 flex-1">
      <div class="flex items-center gap-2 flex-wrap">
        <span v-if="clientIndustry" class="text-xs px-2 py-0.5 bg-brand-blue/10 text-brand-cyan border border-brand-blue/20 rounded-sm">
          {{ clientIndustry }}
        </span>
        <span v-if="year" class="text-xs text-brand-steel">{{ year }}</span>
      </div>

      <h3 class="text-base font-bold text-brand-light group-hover:text-brand-cyan transition-colors leading-snug">
        {{ title }}
      </h3>

      <p v-if="description" class="text-sm text-brand-steel line-clamp-2 leading-relaxed flex-1">
        {{ description }}
      </p>

      <div v-if="tags?.length" class="flex flex-wrap gap-1.5">
        <span
          v-for="tag in tags.slice(0, 3)"
          :key="tag"
          class="text-xs px-2 py-0.5 bg-brand-card border border-white/5 text-brand-steel rounded-sm"
        >
          #{{ tag }}
        </span>
      </div>

      <div class="flex items-center gap-1 text-xs font-bold text-brand-blue group-hover:text-brand-cyan transition-colors pt-2 border-t border-white/5 mt-auto">
        查看詳情
        <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </div>
    </div>
  </NuxtLink>
</template>
