<template>
  <v-container class="fill-height justify-center" fluid>
    <v-card max-height="600" class="pa-10 mx-auto" elevation="24" rounded="xl" theme="light">
      <v-card-item class="text-center mb-4">
        <v-card-title class="text-h5 font-weight-bold text-indigo-darken-3">
          Iniciar Sesion en Nexus
        </v-card-title>
        <v-card-subtitle> Ingresa tus credenciales para continuar </v-card-subtitle>
      </v-card-item>
      <v-form v-model="isFormValid" @submit.prevent="handleLogin">
        <v-text-field
          label="Correo Electronico"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          color="indigo"
          class="mb-2"
          v-model="form.email"
          :rules="[
            (v) => !!v || 'El Correro es Obligatorio',
            (v) => /.+@.+\..+/.test(v) || 'E-mail no valido',
          ]"
        >
        </v-text-field>
        <v-text-field
          label="Contraseña"
          :type="showPassword ? 'text' : 'password'"
          prepend-inner-icon="mdi-lock-outline"
          :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="showPassword = !showPassword"
          placeholder="Contraseña"
          variant="outlined"
          color="indigo"
          class="mb-2"
          v-model="form.password"
          :rules="[
            (v) => !!v || 'La Contraseña es obligatoria',
            (v) => v.length >= 6 || 'Minimo 6 caracteres',
          ]"
        >
        </v-text-field>
        <v-btn
          block
          color="indigo-darken-2"
          size="x-large"
          type="submit"
          class="text-none font weight-bold"
          elevation="4"
          :loading="loading"
          :disabled="!isFormValid"
        >
          Iniciar Sesión
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import { storeToRefs } from 'pinia'
import { ref, reactive } from 'vue'
import { toast } from 'vue3-toastify'

const isFormValid = ref(false)
const loading = ref(false)
const showPassword = ref(false)

const authStore = useAuthStore()
const { auth } = storeToRefs(authStore)
const router = useRouter()
const form = reactive({
  email: '',
  password: '',
})

const handleLogin = async () => {
  if (!isFormValid) return
  loading.value = true
  await authStore.loginUser(form)
  if (auth.value.success) {
    toast.success(auth.value.message)
    router.push('/dashboard')
  } else {
    toast.error(auth.value.message)
  }
  // console.log('Login Success', auth.value.success)
  loading.value = false
}
</script>

<style lang="scss" scoped></style>
