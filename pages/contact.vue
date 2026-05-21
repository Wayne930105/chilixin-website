<script setup lang="ts">
useSeoMeta({
  title: '聯絡我們 | 錡利鑫實業有限公司 | 油壓工程詢問',
  description: '聯絡錡利鑫實業，詢問油壓配管、液壓維護、焊接工程服務報價。電話：04-26996011，地址：台中市大肚區博愛街52巷17號。',
  ogTitle: '聯絡錡利鑫實業 | 液壓工程詢問',
  ogImage: '/images/og-image.png',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: '聯絡錡利鑫實業有限公司',
        url: 'https://www.chilixin.com.tw/contact',
        publisher: {
          '@type': 'Organization',
          name: '錡利鑫實業有限公司',
          url: 'https://www.chilixin.com.tw',
        },
      }),
    },
  ],
})

const form = reactive({
  company: '',
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
  honeypot: '', // 防垃圾機器人
})

const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')
const errorMsg = ref('')

async function handleSubmit() {
  if (form.honeypot) return // 機器人偵測

  status.value = 'sending'
  try {
    const res = await $fetch('https://formspree.io/f/xlgvjyrz', {
      method: 'POST',
      body: {
        company: form.company,
        name: form.name,
        phone: form.phone,
        email: form.email,
        service: form.service,
        message: form.message,
      },
      headers: { Accept: 'application/json' },
    })
    status.value = 'success'
  }
  catch {
    status.value = 'error'
    errorMsg.value = '傳送失敗，請直接來電或 Email 聯絡我們。'
  }
}

const services = [
  '液壓高壓配管工程',
  '油壓管路油洗',
  '油壓設備維護',
  '液壓機械門製作',
  '焊接工程',
  '配管工程',
  '其他',
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="py-20 bg-brand-navy relative overflow-hidden">
      <div class="absolute inset-0 bg-grid-industrial opacity-30" />
      <div class="relative section-container">
        <BreadcrumbNav :items="[{ label: '聯絡我們', path: '/contact' }]" />
        <div class="mt-6 max-w-2xl">
          <SectionHeading
            tag="h1"
            eyebrow="Contact Us"
            title="聯絡錡利鑫實業"
            subtitle="歡迎來電或填寫表單，我們將在一個工作日內回覆您的詢問。"
          />
        </div>
      </div>
    </section>

    <section class="py-16 bg-brand-dark">
      <div class="section-container">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">

          <!-- 聯絡資訊 -->
          <div class="lg:col-span-1 space-y-6">
            <h2 class="text-xl font-bold text-brand-light">聯絡資訊</h2>

            <div v-for="info in [
              {
                icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                label: '電話',
                value: '04-26996011',
                href: 'tel:+886426996011',
              },
              {
                icon: 'M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z',
                label: '傳真',
                value: '04-26996221',
                href: null,
              },
              {
                icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                label: 'Email',
                value: 'qilixin17@gmail.com',
                href: 'mailto:qilixin17@gmail.com',
              },
            ]" :key="info.label" class="flex items-start gap-4">
              <div class="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-brand-blue/10 border border-brand-blue/20 rounded-sm">
                <svg class="w-4 h-4 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="info.icon" />
                </svg>
              </div>
              <div>
                <p class="text-xs text-brand-steel uppercase tracking-widest mb-1">{{ info.label }}</p>
                <a v-if="info.href" :href="info.href" class="text-brand-light hover:text-brand-cyan transition-colors font-medium">
                  {{ info.value }}
                </a>
                <p v-else class="text-brand-light font-medium">{{ info.value }}</p>
              </div>
            </div>

            <!-- 地址 -->
            <div class="flex items-start gap-4">
              <div class="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-brand-blue/10 border border-brand-blue/20 rounded-sm">
                <svg class="w-4 h-4 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <p class="text-xs text-brand-steel uppercase tracking-widest mb-1">地址</p>
                <p class="text-brand-light font-medium leading-relaxed">
                  台中市大肚區<br>博愛街52巷17號
                </p>
              </div>
            </div>

            <!-- 服務時間 -->
            <div class="p-4 bg-brand-card border border-white/5 rounded-sm">
              <p class="text-xs text-brand-steel uppercase tracking-widest mb-2">服務時間</p>
              <p class="text-sm text-brand-light">週一至週五 8:00 – 17:30</p>
              <p class="text-xs text-brand-steel mt-1">緊急維修請直接來電</p>
            </div>
          </div>

          <!-- 詢問表單 -->
          <div class="lg:col-span-2">
            <h2 class="text-xl font-bold text-brand-light mb-6">填寫詢問表單</h2>

            <!-- 成功訊息 -->
            <div v-if="status === 'success'"
              class="p-6 bg-green-900/20 border border-green-500/30 rounded-sm text-green-400 text-center"
            >
              <svg class="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <p class="font-bold text-lg mb-1">詢問已送出！</p>
              <p class="text-sm text-green-400/80">感謝您的詢問，我們將於一個工作日內與您聯繫。</p>
            </div>

            <form v-else @submit.prevent="handleSubmit" class="space-y-5">
              <!-- 隱藏 honeypot 欄位（防機器人） -->
              <input v-model="form.honeypot" type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off" />

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-sm font-medium text-brand-steel mb-1.5" for="company">
                    公司名稱 <span class="text-brand-orange">*</span>
                  </label>
                  <input
                    id="company"
                    v-model="form.company"
                    type="text"
                    required
                    placeholder="請輸入貴公司名稱"
                    class="w-full px-4 py-3 bg-brand-card border border-white/10 rounded-sm text-brand-light placeholder-brand-steel/50
                           focus:outline-none focus:border-brand-blue transition-colors text-sm"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-steel mb-1.5" for="name">
                    聯絡人姓名 <span class="text-brand-orange">*</span>
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="請輸入您的姓名"
                    class="w-full px-4 py-3 bg-brand-card border border-white/10 rounded-sm text-brand-light placeholder-brand-steel/50
                           focus:outline-none focus:border-brand-blue transition-colors text-sm"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-sm font-medium text-brand-steel mb-1.5" for="phone">
                    聯絡電話 <span class="text-brand-orange">*</span>
                  </label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    required
                    placeholder="02-XXXXXXXX 或 09XX-XXXXXX"
                    class="w-full px-4 py-3 bg-brand-card border border-white/10 rounded-sm text-brand-light placeholder-brand-steel/50
                           focus:outline-none focus:border-brand-blue transition-colors text-sm"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-brand-steel mb-1.5" for="email">
                    電子郵件
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    placeholder="your@company.com"
                    class="w-full px-4 py-3 bg-brand-card border border-white/10 rounded-sm text-brand-light placeholder-brand-steel/50
                           focus:outline-none focus:border-brand-blue transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-brand-steel mb-1.5" for="service">
                  詢問服務項目
                </label>
                <select
                  id="service"
                  v-model="form.service"
                  class="w-full px-4 py-3 bg-brand-card border border-white/10 rounded-sm text-brand-light
                         focus:outline-none focus:border-brand-blue transition-colors text-sm appearance-none"
                >
                  <option value="" disabled>請選擇服務項目</option>
                  <option v-for="s in services" :key="s" :value="s">{{ s }}</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-brand-steel mb-1.5" for="message">
                  詢問內容 <span class="text-brand-orange">*</span>
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  placeholder="請描述您的需求，例如：設備型號、管路規格、緊急程度等，我們將盡快評估並回覆。"
                  class="w-full px-4 py-3 bg-brand-card border border-white/10 rounded-sm text-brand-light placeholder-brand-steel/50
                         focus:outline-none focus:border-brand-blue transition-colors text-sm resize-none"
                />
              </div>

              <div v-if="status === 'error'" class="p-3 bg-red-900/20 border border-red-500/30 rounded-sm text-red-400 text-sm">
                {{ errorMsg }}
              </div>

              <button
                type="submit"
                :disabled="status === 'sending'"
                class="btn-primary w-full justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <svg v-if="status === 'sending'" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                <span>{{ status === 'sending' ? '傳送中...' : '送出詢問' }}</span>
              </button>

              <p class="text-xs text-brand-steel text-center">
                您也可以直接來電 <a href="tel:+886426996011" class="text-brand-blue hover:text-brand-cyan">04-26996011</a>
                或 Email 至 <a href="mailto:qilixin17@gmail.com" class="text-brand-blue hover:text-brand-cyan">qilixin17@gmail.com</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
