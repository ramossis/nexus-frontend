import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import api from '../services/api'
export const useAuthStore = defineStore('authStore', () => {
  const token = ref(localStorage.getItem('token') || null)
  const user = ref(JSON.parse(localStorage.getItem('user')) || null)
  const auth = ref(null)

  const registerUser = async (form) => {
    try {
      const { data } = await api.post('auth/register', form)

      token.value = data.token
      user.value = { name: data.name, id: data.userId }

      auth.value = {
        success: true,
        message: data.message || '¡Registro exitoso!',
        user: data.userId,
        token: data.token,
      }

      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(user.value))
    } catch (error) {
      const serverError =
        error.response?.data?.message ||
        error.response?.data?.error ||
        'Error al procesar la solicitud'
      auth.value = {
        success: false,
        message: serverError,
      }
    }
  }
  const login = async (email, password) => {
    try {
      const { data } = await api.post('auth/login', { email, password })
    } catch (error) {}
  }
  return { auth, login, registerUser }
})
