<template>
  <!-- 手機版固定在畫面底部的聯絡列（md 以上隱藏） -->
  <div
    class="md:hidden fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 bg-white border-t border-slate-200 shadow-[0_-4px_12px_rgba(15,23,42,0.08)] pb-[env(safe-area-inset-bottom)]"
  >
    <a
      href="tel:+886426996011"
      class="flex items-center justify-center gap-2 h-14 bg-brand-orange text-white text-sm font-bold active:brightness-95"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
      </svg>
      撥打電話
    </a>
    <a
      :href="LINE_URL"
      target="_blank"
      rel="noopener"
      class="flex items-center justify-center gap-2 h-14 bg-line text-white text-sm font-bold active:brightness-95"
    >
      <LineIcon class="w-5 h-5" />
      LINE 詢問
    </a>
  </div>
</template>
