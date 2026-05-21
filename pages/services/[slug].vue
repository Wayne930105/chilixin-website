<script setup lang="ts">
const route = useRoute()

const { data: service } = await useAsyncData(`service-${route.params.slug}`, () =>
  queryCollection('services')
    .path(`/services/${route.params.slug}`)
    .first()
)

if (!service.value) {
  throw createError({ statusCode: 404, statusMessage: '服務項目不存在' })
}

useSeoMeta({
  title: () => `${service.value?.title} | 錡利鑫實業有限公司`,
  description: () => service.value?.shortDescription ?? '',
  ogTitle: () => `${service.value?.title} | 錡利鑫實業`,
  ogImage: () => service.value?.coverImage ?? '/images/og-image.png',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: computed(() => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.value?.title ?? '',
        description: service.value?.shortDescription ?? '',
        serviceType: '液壓工程',
        areaServed: 'TW',
        provider: {
          '@type': 'Organization',
          name: '錡利鑫實業有限公司',
          url: 'https://www.chilixin.com.tw',
          telephone: '+886-4-26996011',
        },
      })),
    },
  ],
})
</script>

<template>
  <div v-if="service">
    <!-- 頁面 Hero -->
    <section class="py-20 bg-brand-navy relative overflow-hidden">
      <div class="absolute inset-0 bg-grid-industrial opacity-30" />
      <div class="relative section-container">
        <BreadcrumbNav :items="[
          { label: '服務項目', path: '/services' },
          { label: service.title, path: route.path },
        ]" />
        <div class="mt-6 flex items-start gap-5">
          <div class="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-brand-blue/10 border border-brand-blue/20 rounded-sm text-3xl">
            {{ service.icon ?? '⚙️' }}
          </div>
          <div class="max-w-2xl">
            <SectionHeading
              tag="h1"
              :eyebrow="service.titleEn"
              :title="service.title"
              :subtitle="service.shortDescription"
            />
          </div>
        </div>

        <!-- 適用產業標籤 -->
        <div v-if="service.industries?.length" class="mt-6 flex flex-wrap gap-2">
          <span class="text-xs text-brand-steel uppercase tracking-widest mr-2">適用產業：</span>
          <span
            v-for="ind in service.industries"
            :key="ind"
            class="text-xs px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 text-brand-cyan rounded-sm"
          >
            {{ ind }}
          </span>
        </div>
      </div>
    </section>

    <!-- 封面圖 -->
    <div v-if="service.coverImage" class="aspect-[21/6] overflow-hidden">
      <NuxtImg
        :src="service.coverImage"
        :alt="`${service.title}現場施工`"
        class="w-full h-full object-cover"
        loading="lazy"
        format="webp"
        :width="1440"
        :height="412"
      />
    </div>

    <!-- 內文 -->
    <section class="py-16 bg-brand-dark">
      <div class="section-container">
        <div class="max-w-4xl mx-auto">
          <div class="prose prose-lg max-w-none
            prose-headings:text-brand-light prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-slate-200
            prose-h3:text-xl prose-h3:text-brand-blue
            prose-p:text-brand-steel prose-p:leading-relaxed
            prose-strong:text-brand-light
            prose-a:text-brand-blue prose-a:no-underline hover:prose-a:text-brand-blue/70
            prose-table:border-collapse prose-th:bg-slate-50 prose-th:text-brand-light prose-th:p-3 prose-th:text-left prose-th:border prose-th:border-slate-200
            prose-td:border prose-td:border-slate-200 prose-td:p-3 prose-td:text-brand-steel
            prose-li:text-brand-steel prose-ul:space-y-1
          ">
            <ContentRenderer :value="service" />
          </div>
        </div>
      </div>
    </section>

    <!-- 其他服務推薦 -->
    <section class="py-12 bg-brand-navy">
      <div class="section-container text-center">
        <p class="text-sm text-brand-steel mb-4">需要其他服務？</p>
        <div class="flex flex-wrap gap-3 justify-center">
          <NuxtLink to="/services" class="btn-outline text-sm py-2">查看所有服務</NuxtLink>
          <NuxtLink to="/contact" class="btn-primary text-sm py-2">立即詢問報價</NuxtLink>
        </div>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>
