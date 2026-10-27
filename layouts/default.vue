<template>
  <!-- 手機版底部預留聯絡列的高度，避免遮住頁尾 -->
  <div class="min-h-screen flex flex-col bg-brand-dark bg-grid-industrial pb-[calc(3.5rem+env(safe-area-inset-bottom))] md:pb-0">
    <AppHeader />
    <main class="flex-1 pt-16">
      <slot />
    </main>
    <AppFooter />
    <MobileContactBar />
  </div>
</template>
