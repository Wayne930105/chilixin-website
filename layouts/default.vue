<template>
  <div class="min-h-screen flex flex-col bg-brand-dark bg-grid-industrial">
    <AppHeader />
    <main class="flex-1 pt-16">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
