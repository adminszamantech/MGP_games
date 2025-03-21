// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/templates/home/Home.vue"),
  },

  {
    path: '/deposit',
    name: 'Deposit',
    component: () => import("@/views/templates/deposit/DepositPage.vue"),
  },

  {
    path: '/withdraw',
    name: 'Withdraw',
    component: () => import("@/views/templates/withdraw/WithdrawPage.vue"),
  },

  {
    path: '/transections',
    name: 'Transections',
    component: () => import("@/views/templates/transections/TransectionsPage.vue"),
  },

  {
    path: '/kyc',
    name: 'KYC',
    component: () => import("@/views/templates/kyc/kYCpage.vue"),
  },
  {
    path: '/game-history',
    name: 'GameHistory',
    component: () => import("@/views/templates/game_history/GameHistoryPage.vue"),
  },
  {
    path: '/my-invitation',
    name: 'MyInvitation',
    component: () => import("@/views/templates/invitation/MyInvitationPage.vue"),
  },
  {
    path: '/my-wallet',
    name: 'Wallet',
    component: () => import("@/views/templates/mywallet/WalletPage.vue"),
  },

  {
    path: '/player',
    name: 'PlayZone',
    component: () => import("@/views/templates/player_zone/PlayZone.vue"),
  },

  {
    path: '/promotions',
    name: 'Promotions',
    component: () => import("@/views/templates/promotions/PromotionPage.vue"),
  },
 
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: () => import("@/views/templates/contactus/ContactPage.vue"),
  },

  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import("@/views/templates/privacy_policy/PrivacyPolicyPage.vue"),
  },

  {
    path: '/terms-conditions',
    name: 'TermsConditions',
    component: () => import("@/views/templates/termsCondistions/TermsConditionPage.vue"),
  },

  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: () => import("@/views/templates/login/LoginPage.vue"),
  // },
  {
    path: '/sign-up',
    name: 'SignUpPage',
    component: () => import("@/views/templates/sign-up/SignUpPage.vue"),
  }

];



// Create and export the router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
