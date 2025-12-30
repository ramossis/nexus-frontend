import RegisterForm from '@/views/RegsiterView.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/register', name: 'Register', component: RegisterForm }],
})

export default router
