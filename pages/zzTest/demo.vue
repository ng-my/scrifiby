<template>
  <div class="bg-gradient-to-r from-purple-50 to-blue-50">
    <HeadNavbar />

    <!-- Hero Section -->
    <section class="py-20 grid-background" id="home">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="flex items-center gap-4 mb-6">
              <h2 class="text-5xl font-bold">{{ $t('demo.title') }}</h2>
            </div>
            <p class="text-xl text-gray-600 mb-8 min-h-[3em]">
              {{ displayedDescription }}
            </p>
            <div class="flex gap-4">
              <button @click="openGithub"
                class="bg-black text-white px-16 py-5 rounded-full relative overflow-hidden group hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300">
                <span
                  class="absolute w-64 h-64 mt-12 group-hover:-rotate-45 group-hover:-mt-24 transition-all duration-500 ease-out bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20"></span>
                <span class="relative group-hover:scale-110 transition-transform duration-300">{{ $t('demo.startLink')
                }}</span>
              </button>
              <!-- <button @click="openGithub" class="border-2 border-black px-8 py-3 rounded-full hover:bg-gray-50">{{ $t('demo.thirdPartyLink') }}</button> -->
            </div>

          </div>
          <div class="relative">
            <div class="bg-white p-3 rounded-xl shadow-lg">
              <img src="/assets/images/nation/Afrikaans.png" alt="NuxtPro Template Preview"
                class="w-full h-auto rounded-md">
              <div class="bg-white p-6 rounded-lg mt-6 border border-gray-100">
                <h3 class="text-lg font-semibold mb-3 text-gray-800">{{ $t('demo.waitlist.cardTitle') }}</h3>
                <form @submit.prevent="joinWaitlist" class="flex flex-col sm:flex-row gap-3">
                  <input type="email" v-model="waitlistEmail" :placeholder="$t('demo.waitlist.placeholder')" required
                    class="flex-grow px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-sm">
                  <button type="submit"
                    class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-sm whitespace-nowrap">
                    {{ $t('demo.waitlist.button') }}
                  </button>
                </form>
              </div>
              <p class="text-sm text-gray-500 mt-3 text-center">
                <i18n-t keypath="demo.waitlist.joinCountMessage" tag="span">
                  <template #count>
                    <strong class="text-purple-600 font-bold text-base">{{ dynamicJoinCount }}</strong>
                  </template>
                </i18n-t>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Add Copyright Section -->
    <AppFooter />

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { $fetch } from 'ofetch'; // 确保导入 $fetch

const { t } = useI18n()

const config = useRuntimeConfig();
//import Paddle from 'paddle-sdk';
const { stripe, loadStripe } = useClientStripe();
stripe.value = await loadStripe('config.public.stripe.key');

const waitlistEmail = ref('');

// --- Typing Effect State ---
const typingSpeed = 75; // Milliseconds per character
const fullDescription = computed(() => t('demo.description'));
const displayedDescription = ref('');
const charIndex = ref(0);
const typingInterval = ref(null);
// -------------------------

// --- Waitlist Join Count State ---
const baseJoinCount = 2001; // Starting count
const dynamicJoinCount = ref(baseJoinCount);
const countInterval = ref(null);
const minUpdateInterval = 10000; // Minimum milliseconds between updates (Changed to 5s)
const maxUpdateInterval = 30000; // Maximum milliseconds between updates (Changed to 10s)

// --- Success Modal State ---
const showSuccessModal = ref(false);
// -------------------------

// SEO metadata
const title = computed(() => t('demo.seo.title') || 'NuxtPro:Open-Source Nuxt3 SaaS Boilerplate | Multilingual, Payments & SEO Ready (Nuxt3)');
const description = computed(() => t('demo.seo.description') || 'The NuxtJS boilerplate with all the stuff you need to get your product in front of customers. From idea to production in 3 days.');

// Use useSeoMeta for comprehensive SEO setup
useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://img.com/nuxtpro/og/nuxtproOg.png', // Make sure this image exists in your public folder
  ogUrl: config.public.baseUrl || 'https://www.scribify.ai/',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterSite: config.public.baseUrl || 'https://www.scribify.ai/',
  twitterImage: 'https://img.com/nuxtpro/og/nuxtproOg.png', // Make sure this image exists in your public folder
})

useHead({
  link: [
    { rel: 'canonical', href: config.public.baseUrl || 'https://www.scribify.ai/' }
  ]
})

useHead({
  title: 'OpenSource Nuxt SaaS Boilerplate | NuxtPro',
  meta: [
    {
      name: 'description',
      content: 'The NuxtJS boilerplate with all the stuff you need to get your product in front of customers. From idea to production in 5 minutes.'
    },
    {
      name: 'keywords',
      content: 'NuxtPro, NuxtJS boilerplate, NuxtJS starter, NuxtJS template, NuxtJS, Vue, Nuxt3,,Open-Source'

    }
  ]
})


const faqs = ref([
  {
    question: '1. What is this product?',
    answer: 'This product is a comprehensive template designed to help SaaS companies monitor their MRR, churn rate, and other key metrics in real-time.'
  },
  {
    question: '2. How do I use this product?',
    answer: 'To use this product, simply sign up for an account, connect your payment platforms, and start tracking your metrics through the intuitive template.'
  },
  {
    question: '3. What are the differences between the free and paid plans?',
    answer: 'The free plan offers basic features for a single platform integration, while the paid plans provide advanced features, multi-platform integrations, and additional analytics tools.'
  },
  {
    question: '4. What advantages does this product have over similar products?',
    answer: 'This product offers real-time metrics, seamless multi-platform integration, and advanced analytics tools, making it a superior choice for SaaS businesses.'
  },
  {
    question: '5. How can I make payments?',
    answer: 'Payments can be made through various platforms such as Stripe, Paddle, and LemonSqueezy, ensuring a secure and convenient transaction process.'
  },
  {
    question: '6. Is there a refund policy?',
    answer: 'Yes, we offer a refund policy within the first 30 days of your subscription if you are not satisfied with the product.'
  },
  {
    question: '7. What are the differences between the free and paid plans?',
    answer: 'The free plan offers basic features for a single platform integration, while the paid plans provide advanced features, multi-platform integrations, and additional analytics tools.'
  },
  {
    question: '8. How can I make payments?',

  }]);

const isOpen = ref(Array(faqs.value.length).fill(false));

// --- Typing Effect Logic ---
const typeWriter = () => {
  if (charIndex.value < fullDescription.value.length) {
    displayedDescription.value += fullDescription.value.charAt(charIndex.value);
    charIndex.value++;
  } else {
    if (typingInterval.value) clearInterval(typingInterval.value);
  }
};

const startTyping = () => {
  // Reset if called again (e.g., on language change, though not handled here explicitly)
  displayedDescription.value = '';
  charIndex.value = 0;
  if (typingInterval.value) clearInterval(typingInterval.value);

  // Start new interval
  typingInterval.value = setInterval(typeWriter, typingSpeed);
};
// -------------------------

// --- Waitlist Join Count Logic ---
const updateJoinCount = () => {
  const increment = Math.floor(Math.random() * 3) + 1; // Add 1, 2, or 3
  dynamicJoinCount.value += increment;

  // Schedule next update with random interval
  const nextInterval = Math.random() * (maxUpdateInterval - minUpdateInterval) + minUpdateInterval;
  if (countInterval.value) clearTimeout(countInterval.value); // Clear previous timeout just in case
  countInterval.value = setTimeout(updateJoinCount, nextInterval);
};

const startJoinCountUpdates = () => {
  if (countInterval.value) clearTimeout(countInterval.value); // Clear existing interval/timeout if any
  // Start the first update after a short delay
  const initialDelay = Math.random() * (maxUpdateInterval - minUpdateInterval) + minUpdateInterval;
  countInterval.value = setTimeout(updateJoinCount, initialDelay);
};
// -----------------------------

// 修改后的 joinWaitlist 函数
const joinWaitlist = async () => { // 添加 async 关键字
  if (waitlistEmail.value && validateEmail(waitlistEmail.value)) { // 添加简单的前端校验
    try {
      // 调用后端 API
      const response = await $fetch('/api/waitlist/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: waitlistEmail.value }),
      });

      // 检查后端返回的成功状态
      if (response.success) {
        console.log('Waitlist join successful:', response);
        // 显示成功模态框并触发庆祝动画
        showSuccessModal.value = true;
        waitlistEmail.value = ''; // 清空输入框
      } else {
        // 如果后端返回 success: false，但也可能是一个已知情况（如已加入）
        console.warn('Waitlist join response indicates potential issue:', response.message);
        // 根据后端返回的消息决定是否提示用户
        // 在这种情况下，邮箱已存在也被视为成功加入，所以仍然显示成功
        showSuccessModal.value = true;
        waitlistEmail.value = ''; // 清空输入框
        // 或者你可以根据 response.message 显示不同的提示
      }
    } catch (error) {
      // 处理 fetch 调用本身的错误
      console.error('Error joining waitlist:', error);
      // 可以尝试从错误中获取更具体的后端消息
      const errorMessage = error.data?.statusMessage || error.message;
      alert(errorMessage);
    }
  } else {
    // 如果邮箱格式无效
    alert('Please enter a valid email address.'); // 添加一个无效邮箱的翻译
  }
};

// 简单的邮箱验证函数 (如果需要可以在前端也加上)
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

const showBottomPopup = ref(true);
let scrollTimeout;
let hasShownPopup = ref(true); // 追踪弹窗是否已经显示过
const minTimeBeforePopup = 7000; // 最少浏览7秒后才可能显示弹窗
let pageLoadTime = Date.now();

const handleScroll = () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    const bottomReached =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

    // 检查是否满足所有显示条件
    if (bottomReached &&
      !hasShownPopup.value &&
      Date.now() - pageLoadTime > minTimeBeforePopup) {

      // 设置50%的概率显示弹窗
      const shouldShow = Math.random() < 0.5;

      if (shouldShow) {
        showBottomPopup.value = true;
        hasShownPopup.value = true;
      }
    }
  }, 100);
};


onMounted(() => {
  pageLoadTime = Date.now();
  window.addEventListener('scroll', handleScroll);
  startTyping(); // Start the typing animation on mount
  startJoinCountUpdates(); // Start the dynamic join count updates
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  clearTimeout(scrollTimeout);
  if (typingInterval.value) clearInterval(typingInterval.value); // Clear typing interval on unmount
  if (countInterval.value) clearTimeout(countInterval.value); // Clear count update interval on unmount
});

const openGithub = () => {
  window.open('https://github.com/PennyJoly/nuxtpro', '_blank');
}

</script>

<style scoped>
.grid-background {
  --grid-size: 80px;
  /* 控制网格大小 - 增大此值使网格更稀疏 */
  --grid-color: rgba(0, 0, 0, 0.05);
  /* 控制网格线颜色和透明度 */
  background-image:
    linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
    linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px);
  background-size: var(--grid-size) var(--grid-size);
  /* 注意：这里不再需要显式包含渐变背景，因为它是由父级 div 提供的 */
}
</style>