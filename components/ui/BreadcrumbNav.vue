<script setup lang="ts">
import { withTrailingSlash } from 'ufo'

const props = defineProps<{
  items: Array<{ label: string; path: string }>
}>()

// Schema.org BreadcrumbList（網址由 site config 自動補成絕對路徑）
useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: '首頁', item: '/' },
      ...props.items.map(item => ({ name: item.label, item: withTrailingSlash(item.path) })),
    ],
  }),
])
</script>

<template>
  <nav aria-label="麵包屑導覽" class="flex items-center gap-2 text-sm text-brand-steel">
    <NuxtLink to="/" class="hover:text-brand-cyan transition-colors">首頁</NuxtLink>
    <template v-for="(item, i) in items" :key="item.path">
      <svg class="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>
      <NuxtLink
        v-if="i < items.length - 1"
        :to="item.path"
        class="hover:text-brand-cyan transition-colors"
      >
        {{ item.label }}
      </NuxtLink>
      <span v-else class="text-brand-light font-medium">{{ item.label }}</span>
    </template>
  </nav>
</template>
