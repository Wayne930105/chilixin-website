<script setup lang="ts">
const { data: projects } = await useAsyncData('featured-projects', () =>
  queryCollection('projects')
    .where('featured', '=', true)
    .order('year', 'DESC')
    .limit(3)
    .all()
)
</script>

<template>
  <section class="py-20 bg-brand-dark" aria-labelledby="projects-heading">
    <div class="section-container">
      <SectionHeading
        id="projects-heading"
        eyebrow="工程實績"
        title="精選工程案例"
        subtitle="歷年來服務涵蓋精密機械、金屬加工、鋼鐵製造等重工業領域，每件工程都是品質的見證。"
      />

      <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <NuxtLink
          v-for="project in projects"
          :key="project.path"
          :to="project.path"
          class="card-industrial group overflow-hidden"
        >
          <!-- 封面圖 -->
          <div class="aspect-video overflow-hidden bg-brand-card">
            <NuxtImg
              v-if="project.coverImage"
              :src="project.coverImage"
              :alt="`${project.title} 工程案例`"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              format="webp"
              :width="640"
              :height="360"
            />
            <div v-else class="w-full h-full flex items-center justify-center text-brand-steel/20 bg-grid-industrial">
              <svg class="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
          </div>

          <!-- 內容 -->
          <div class="p-5">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-xs px-2 py-0.5 bg-brand-blue/10 text-brand-blue border border-brand-blue/20 rounded-sm">
                {{ project.clientIndustry }}
              </span>
              <span class="text-xs text-brand-steel">{{ project.year }}</span>
            </div>
            <h3 class="text-base font-bold text-brand-light group-hover:text-brand-blue transition-colors leading-snug">
              {{ project.title }}
            </h3>
            <p v-if="project.description" class="mt-2 text-sm text-brand-steel line-clamp-2">
              {{ project.description }}
            </p>
            <div class="mt-4 flex items-center gap-1 text-xs font-bold text-brand-blue group-hover:text-brand-blue/70 transition-colors">
              查看詳情
              <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- 無資料時的備用顯示 -->
      <div v-if="!projects?.length" class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="i in 3" :key="i" class="card-industrial p-5 space-y-3">
          <div class="aspect-video bg-brand-card rounded-sm animate-pulse" />
          <div class="h-4 bg-brand-card rounded animate-pulse w-3/4" />
          <div class="h-3 bg-brand-card rounded animate-pulse w-full" />
        </div>
      </div>

      <div class="mt-10 text-center">
        <NuxtLink to="/projects" class="btn-outline">
          查看所有工程案例
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
