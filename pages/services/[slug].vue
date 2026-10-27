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
  title: () => service.value?.title,
  description: () => service.value?.shortDescription ?? '',
  ogTitle: () => `${service.value?.title} | 錡利鑫實業`,
  ogDescription: () => service.value?.shortDescription ?? '',
  ogImage: () => `https://chilixin.com${service.value?.coverImage ?? '/images/og-image.jpg'}`,
})

// @unhead/schema-org 的 Vue 版未提供 defineService，以一般節點描述並引用全站 identity
useSchemaOrg([
  {
    '@type': 'Service',
    'name': service.value.title,
    'description': service.value.shortDescription,
    'image': service.value.coverImage ? `https://chilixin.com${service.value.coverImage}` : undefined,
    'serviceType': '液壓工程',
    'areaServed': 'TW',
    'provider': { '@id': 'https://chilixin.com/#identity' },
  },
])

// 施工實景照片：封面（完整比例）＋ gallery
const photos = computed(() => [
  ...(service.value?.coverImage ? [service.value.coverImage] : []),
  ...(service.value?.gallery ?? []),
])
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
        <div class="mt-6 flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
          <div class="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center bg-brand-blue/10 border border-brand-blue/20 rounded-sm text-brand-blue">
            <AppIcon :name="service.icon" class="w-6 h-6 sm:w-7 sm:h-7" />
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
        <div v-if="service.industries?.length" class="mt-6 flex flex-wrap items-center gap-2">
          <span class="w-full sm:w-auto text-xs text-brand-steel tracking-widest sm:mr-2">適用產業：</span>
          <span
            v-for="ind in service.industries"
            :key="ind"
            class="text-xs px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue rounded-sm"
          >
            {{ ind }}
          </span>
        </div>
      </div>
    </section>

    <!-- 封面圖 -->
    <div v-if="service.coverImage" class="aspect-video sm:aspect-[21/6] overflow-hidden">
      <NuxtImg
        :src="service.coverImage"
        :alt="`${service.title}現場施工`"
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

          <!-- 施工實景照片 -->
          <div v-if="photos.length > 1" class="mt-14">
            <h2 class="text-2xl font-bold text-brand-light pb-2 mb-6 border-b border-slate-200">施工實景</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                v-for="(photo, i) in photos"
                :key="photo"
                class="aspect-video overflow-hidden rounded-sm bg-brand-navy border border-slate-200"
              >
                <NuxtImg
                  :src="photo"
                  :alt="`${service.title}施工實景 ${i + 1}`"
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
