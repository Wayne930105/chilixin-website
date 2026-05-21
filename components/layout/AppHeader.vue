<script setup lang="ts">
const route = useRoute()
const mobileOpen = ref(false)

const navLinks = [
  { label: '首頁', path: '/' },
  { label: '服務項目', path: '/services' },
  { label: '工程案例', path: '/projects' },
  { label: '關於我們', path: '/about' },
  { label: '聯絡我們', path: '/contact' },
]

watch(() => route.path, () => { mobileOpen.value = false })
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
    <div class="section-container">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3 group" aria-label="錡利鑫實業有限公司 首頁">
          <NuxtImg
            src="/images/logo/logo-icon.png"
            alt="CLX 錡利鑫實業"
            class="h-10 w-auto object-contain"
            width="40"
            height="40"
          />
          <div class="flex flex-col leading-none">
            <span class="text-lg font-black text-brand-light tracking-wider">CLX</span>
            <span class="text-xs text-brand-steel font-medium tracking-widest">錡利鑫實業</span>
          </div>
        </NuxtLink>

        <!-- 桌面導覽 -->
        <nav class="hidden md:flex items-center gap-8" aria-label="主要導覽">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="nav-link pb-1"
            :class="{ active: route.path === link.path || (link.path !== '/' && route.path.startsWith(link.path)) }"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <!-- 桌面 CTA -->
        <div class="hidden md:flex items-center gap-4">
          <a href="tel:+886426996011" class="flex items-center gap-2 text-sm text-brand-steel hover:text-brand-cyan transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            04-26996011
          </a>
          <NuxtLink to="/contact" class="btn-primary text-sm py-2">
            立即詢問
          </NuxtLink>
        </div>

        <!-- 手機漢堡 -->
        <button
          class="md:hidden flex flex-col gap-1.5 p-2 rounded"
          :aria-expanded="mobileOpen"
          aria-label="開啟選單"
          @click="mobileOpen = !mobileOpen"
        >
          <span class="block w-6 h-0.5 bg-brand-light transition-all duration-300"
            :class="mobileOpen ? 'rotate-45 translate-y-2' : ''" />
          <span class="block w-6 h-0.5 bg-brand-light transition-all duration-300"
            :class="mobileOpen ? 'opacity-0' : ''" />
          <span class="block w-6 h-0.5 bg-brand-light transition-all duration-300"
            :class="mobileOpen ? '-rotate-45 -translate-y-2' : ''" />
        </button>
      </div>
    </div>

    <!-- 手機選單 -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileOpen" class="md:hidden bg-white border-t border-slate-200 shadow-lg">
        <nav class="section-container py-4 flex flex-col gap-1" aria-label="手機導覽">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="px-3 py-3 text-sm font-medium rounded-sm transition-colors"
            :class="route.path === link.path || (link.path !== '/' && route.path.startsWith(link.path))
              ? 'text-brand-blue bg-brand-blue/10'
              : 'text-slate-600 hover:text-brand-light hover:bg-slate-50'"
          >
            {{ link.label }}
          </NuxtLink>
          <div class="pt-3 mt-2 border-t border-slate-200 flex flex-col gap-3">
            <a href="tel:+886426996011" class="flex items-center gap-2 px-3 text-sm text-brand-steel">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              04-26996011
            </a>
            <NuxtLink to="/contact" class="btn-primary text-sm justify-center mx-3">
              立即詢問
            </NuxtLink>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>
