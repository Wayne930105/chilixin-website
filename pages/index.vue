<script setup lang="ts">
useSeoMeta({
  title: '錡利鑫實業有限公司 | 油壓配管・液壓維護・焊接工程專家',
  description: '台中專業油壓高壓管路配管、油壓管路油洗、液壓設備維護、液壓機械門製作、焊接工程與配管工程服務。服務台灣各大精密機械、金屬加工、重工業廠房，20年以上工程經驗。',
  ogTitle: '錡利鑫實業有限公司 | 油壓配管・液壓維護・焊接工程',
  ogDescription: '台中專業液壓工程公司，提供高壓配管、管路油洗、設備維護、焊接配管一條龍服務。',
  ogImage: '/images/og-image.png',
  ogType: 'website',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': 'https://www.chilixin.com.tw/#organization',
            name: '錡利鑫實業有限公司',
            alternateName: 'Chilixin Industrial Co., Ltd.',
            url: 'https://www.chilixin.com.tw',
            telephone: '+886-4-26996011',
            email: 'qilixin17@gmail.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '博愛街52巷17號',
              addressLocality: '大肚區',
              addressRegion: '台中市',
              postalCode: '432',
              addressCountry: 'TW',
            },
            description: '台灣專業液壓工程公司，提供油壓高壓配管、管路油洗、液壓設備維護、液壓機械門製作、焊接工程與配管工程服務。',
          },
          {
            '@type': 'WebSite',
            '@id': 'https://www.chilixin.com.tw/#website',
            name: '錡利鑫實業有限公司',
            url: 'https://www.chilixin.com.tw',
            publisher: { '@id': 'https://www.chilixin.com.tw/#organization' },
          },
        ],
      }),
    },
  ],
})
</script>

<template>
  <div>
    <HeroSection />
    <ServicesOverview />
    <AboutSnippet />
    <ProjectsHighlight />
    <CtaBanner />
  </div>
</template>
