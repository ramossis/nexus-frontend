import LoginView from '@/views/LoginView.vue'
import RegisterForm from '@/views/RegsiterView.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/register', name: 'Register', component: RegisterForm },
    { path: '/login', name: 'Login', component: LoginView },
  ],
})

export default router
