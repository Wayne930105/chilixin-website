<script setup lang="ts">
defineProps<{
  tag?: string
  eyebrow?: string
  title: string
  subtitle?: string
  center?: boolean
}>()
</script>

<template>
  <div :class="center ? 'text-center' : ''">
    <p v-if="eyebrow" class="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange mb-3">
      {{ eyebrow }}
    </p>
    <component
      :is="tag ?? 'h2'"
      class="text-3xl sm:text-4xl font-black text-brand-light leading-tight"
    >
      {{ title }}
    </component>
    <div v-if="!center" class="divider-industrial mt-3 mb-4 h-4" />
    <p v-if="subtitle" class="mt-4 text-base text-brand-steel leading-relaxed max-w-2xl" :class="center ? 'mx-auto' : ''">
      {{ subtitle }}
    </p>
  </div>
</template>
