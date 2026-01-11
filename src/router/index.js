import DashBoardView from '@/views/DashBoardView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterForm from '@/views/RegsiterView.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/register', name: 'Register', component: RegisterForm, meta: { public: true } },
    { path: '/login', name: 'Login', component: LoginView },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashBoardView,
      meta: { requiresAuth: true },
    },
  ],
})
router.beforeEach((to, form, next) => {
  const token = localStorage.getItem('token')
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

  if (requiresAuth && !token) {
    next({ name: 'Login' })
  } else if (token && (to.name === 'Login' || to.name === 'Register')) {
    next({ name: 'Dashboard' })
  } else {
    next()
  }
})
export default router
