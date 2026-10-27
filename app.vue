<script setup lang="ts">
const route = useRoute()
const site = useSiteConfig()
const canonicalUrl = withSiteUrl(computed(() => route.path), { canonical: true })

useHead({
  // 標題未含公司名稱時自動補上後綴
  titleTemplate: (title?: string) =>
    !title ? site.name : title.includes(site.name) ? title : `${title} | ${site.name}`,
  link: [{ rel: 'canonical', href: canonicalUrl }],
})

useSeoMeta({
  ogUrl: canonicalUrl,
  ogSiteName: site.name,
  ogLocale: 'zh_TW',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
