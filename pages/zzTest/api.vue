<template>
  <div>
    <div>
      <p>google 登录</p>
      <el-button type="primary" @click="oauthSignUp">
        googleBtn
      </el-button>
    </div>
    <div class="border-t border-thirdColor">
      <p>支付{{ 4000056655665556 }}</p>
      <div id="checkout"></div>
    </div>
    <div class="border-t border-thirdColor">
      <p>element 多语言支持</p>
      <el-table mb-1 :data="[]" />
      <el-pagination :total="100" />
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n()
const localePath = useLocalePath()

import { injectGoogleScript, oauthSignUp } from '~/utils/googleOAuth'
injectGoogleScript(useHead)

let stripe = null;
// Fetch Checkout Session and retrieve the client secret
async function initialize() {
  const fetchClientSecret = async () => {
    const response = await fetch("/stripeServer/create-checkout-session", {
      method: "POST",
    });
    const { clientSecret } = await response.json();
    return clientSecret;
  };

  // Initialize Checkout
  const checkoutComponent = await stripe.initEmbeddedCheckout({
    fetchClientSecret,
  });
  window.checkoutComponent = checkoutComponent;

  // Mount Checkout
  window.checkoutComponent.mount('#checkout');
}
onMounted(() => {
  if (window.checkoutComponent) {
    window.checkoutComponent.mount('#checkout');
  } else {
    // Initialize Stripe.js
    // stripe = Stripe('pk_test_51RWYzmQRlLddkQbx7BxT2UKwc5LD8tCiazWmkzTeHmUbECAJXaK3egejgYxkZO9N3j3qQCCOuX9N89mNKhHxXKp300fAeu5a8d');
    // initialize();
  }
})
onBeforeUnmount(() => {
  window.checkoutComponent && window.checkoutComponent.unmount('#checkout');
})
</script>

<style scoped></style>