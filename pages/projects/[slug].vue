<script setup lang="ts">
const route = useRoute()

const { data: project } = await useAsyncData(`project-${route.params.slug}`, () =>
  queryCollection('projects')
    .path(`/projects/${route.params.slug}`)
    .first()
)

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: '工程案例不存在' })
}

// serviceType 存的是服務 slug，查出對應的中文服務名稱
const { data: relatedService } = await useAsyncData(`project-service-${route.params.slug}`, () =>
  project.value?.serviceType
    ? queryCollection('services').path(`/services/${project.value.serviceType}`).select('title', 'path').first()
    : Promise.resolve(null)
)

// 工程現場照片：封面（完整比例）＋ gallery
const photos = computed(() => [
  ...(project.value?.coverImage ? [project.value.coverImage] : []),
  ...(project.value?.gallery ?? []),
])

useSeoMeta({
  title: () => `${project.value?.title} | 工程案例`,
  description: () => project.value?.description ?? '',
  ogTitle: () => `${project.value?.title} | 錡利鑫實業`,
  ogDescription: () => project.value?.description ?? '',
  ogImage: () => `https://chilixin.com${project.value?.coverImage ?? '/images/og-image.jpg'}`,
})
</script>

<template>
  <div v-if="project">
    <!-- Hero -->
    <section class="py-20 bg-brand-navy relative overflow-hidden">
      <div class="absolute inset-0 bg-grid-industrial opacity-30" />
      <div class="relative section-container">
        <BreadcrumbNav :items="[
          { label: '工程案例', path: '/projects' },
          { label: project.title, path: route.path },
        ]" />
        <div class="mt-6 max-w-3xl">
          <div class="flex flex-wrap gap-3 mb-4">
            <span class="text-xs px-3 py-1 bg-brand-blue/10 text-brand-blue border border-brand-blue/20 rounded-sm">
              {{ project.clientIndustry }}
            </span>
            <span class="text-xs px-3 py-1 bg-slate-100 border border-slate-200 text-brand-steel rounded-sm">
              {{ project.year }}
            </span>
            <span v-if="project.duration" class="text-xs px-3 py-1 bg-slate-100 border border-slate-200 text-brand-steel rounded-sm">
              施工期：{{ project.duration }}
            </span>
          </div>
          <h1 class="text-3xl sm:text-4xl font-black text-brand-light leading-tight">
            {{ project.title }}
          </h1>
          <p v-if="project.description" class="mt-4 text-brand-steel leading-relaxed">
            {{ project.description }}
          </p>
        </div>
      </div>
    </section>

    <!-- 封面圖 -->
    <div v-if="project.coverImage" class="aspect-video sm:aspect-[21/7] overflow-hidden">
      <NuxtImg
        :src="project.coverImage"
        :alt="project.title"
        class="w-full h-full object-cover"
        loading="eager"
        fetchpriority="high"
        sizes="sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
        densities="x1"
        format="webp"
        :width="1440"
      />
    </div>

    <!-- 內文 -->
    <section class="py-16 bg-brand-dark">
      <div class="section-container">
        <div class="max-w-4xl mx-auto">
          <!-- 快速資訊 -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 p-6 bg-white border border-slate-200 rounded-sm shadow-sm">
            <div>
              <p class="text-xs text-brand-steel uppercase tracking-widest mb-1">服務類型</p>
              <NuxtLink
                v-if="relatedService"
                :to="relatedService.path"
                class="text-sm font-bold text-brand-blue hover:text-brand-blue/70 transition-colors"
              >
                {{ relatedService.title }}
              </NuxtLink>
              <p v-else class="text-sm font-bold text-brand-light">—</p>
            </div>
            <div>
              <p class="text-xs text-brand-steel uppercase tracking-widest mb-1">客戶產業</p>
              <p class="text-sm font-bold text-brand-light">{{ project.clientIndustry }}</p>
            </div>
            <div>
              <p class="text-xs text-brand-steel uppercase tracking-widest mb-1">完工年份</p>
              <p class="text-sm font-bold text-brand-light">{{ project.year }}</p>
            </div>
            <div v-if="project.duration">
              <p class="text-xs text-brand-steel uppercase tracking-widest mb-1">施工期間</p>
              <p class="text-sm font-bold text-brand-light">{{ project.duration }}</p>
            </div>
          </div>

          <!-- Markdown 內文 -->
          <div class="prose prose-lg max-w-none
            prose-headings:text-brand-light prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-slate-200
            prose-h3:text-xl prose-h3:text-brand-blue
            prose-p:text-brand-steel prose-p:leading-relaxed
            prose-strong:text-brand-light
            prose-li:text-brand-steel prose-ul:space-y-1 prose-ol:space-y-1
            prose-table:border-collapse prose-th:bg-slate-50 prose-th:text-brand-light prose-th:p-3 prose-th:text-left prose-th:border prose-th:border-slate-200
            prose-td:border prose-td:border-slate-200 prose-td:p-3 prose-td:text-brand-steel
          ">
            <ContentRenderer :value="project" />
          </div>

          <!-- 工程現場照片 -->
          <div v-if="photos.length > 1" class="mt-14">
            <h2 class="text-2xl font-bold text-brand-light pb-2 mb-6 border-b border-slate-200">工程現場</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                v-for="(photo, i) in photos"
                :key="photo"
                class="aspect-video overflow-hidden rounded-sm bg-brand-navy border border-slate-200"
              >
                <NuxtImg
                  :src="photo"
                  :alt="`${project.title} 工程現場照片 ${i + 1}`"
                  class="w-full h-full object-cover"
                  loading="lazy"
                  format="webp"
                  sizes="sm:100vw md:50vw lg:50vw xl:448px 2xl:448px"
                  :width="896"
                  :height="504"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 bg-brand-navy">
      <div class="section-container text-center">
        <p class="text-sm text-brand-steel mb-4">對此類工程有興趣？</p>
        <div class="flex flex-wrap gap-3 justify-center">
          <NuxtLink to="/projects" class="btn-outline text-sm py-2">查看更多案例</NuxtLink>
          <NuxtLink to="/contact" class="btn-primary text-sm py-2">立即詢問</NuxtLink>
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>
