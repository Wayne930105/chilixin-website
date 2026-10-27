<script setup lang="ts">
// 未定義的路由一律交給 error.vue 顯示 404 頁面
throw createError({ statusCode: 404, statusMessage: '頁面不存在', fatal: true })
</script>

<template>
  <div />
</template>
