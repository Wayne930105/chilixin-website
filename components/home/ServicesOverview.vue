<script setup lang="ts">
const { data: services } = await useServices()
</script>

<template>
  <section class="py-20 bg-brand-dark" aria-labelledby="services-heading">
    <div class="section-container">
      <SectionHeading
        id="services-heading"
        eyebrow="核心服務"
        title="專業油壓工程服務"
        subtitle="專注重工業液壓工程，提供從管路設計、施工、維護到緊急搶修的全方位液壓工程解決方案。"
      />

      <div class="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        <ServiceCard
          v-for="service in services"
          :key="service.path"
          heading-tag="h3"
          :title="service.title"
          :short-description="service.shortDescription"
          :icon="service.icon"
          :path="service.path"
          :tags="service.tags"
        />
      </div>

      <div class="mt-10 text-center">
        <NuxtLink to="/services" class="btn-outline">
          查看所有服務項目
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
