<script setup lang="ts">
useSeoMeta({
  title: '工程案例 | 錡利鑫實業有限公司 | 液壓配管・焊接工程實績',
  description: '錡利鑫實業工程實績案例，涵蓋鋼鐵廠液壓沖洗、精密機械配管改造、整廠配管工程等，服務台灣各大重工業廠商。',
  ogTitle: '工程案例 | 錡利鑫實業有限公司',
  ogImage: '/images/og-image.png',
})

const { data: projects } = await useAsyncData('projects-list', () =>
  queryCollection('projects').order('year', 'DESC').all()
)
</script>

<template>
  <div>
    <section class="py-20 bg-brand-navy relative overflow-hidden">
      <div class="absolute inset-0 bg-grid-industrial opacity-30" />
      <div class="relative section-container">
        <BreadcrumbNav :items="[{ label: '工程案例', path: '/projects' }]" />
        <div class="mt-6 max-w-2xl">
          <SectionHeading
            tag="h1"
            eyebrow="工程實績"
            title="歷年工程案例"
            subtitle="二十餘年來服務台灣各大重工業廠房，每一件工程都以品質與準時交付為核心承諾。"
          />
        </div>
      </div>
    </section>

    <section class="py-16 bg-brand-dark">
      <div class="section-container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            v-for="project in projects"
            :key="project.path"
            :title="project.title"
            :description="project.description"
            :client-industry="project.clientIndustry"
            :year="project.year"
            :cover-image="project.coverImage"
            :path="project.path"
            :tags="project.tags"
          />
        </div>
        <p v-if="!projects?.length" class="text-center text-brand-steel py-20">
          案例資料建置中，敬請期待。
        </p>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>
