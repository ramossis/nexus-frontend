<template>
  <v-container class="fill-height justify-center" fluid>
    <v-card max-width="600" class="pa-10 mx-auto" elevation="24" rounded="xl" theme="light">
      <v-card-item class="text-center mb-4">
        <v-card-title class="text-h5 font-weight-bold text-indigo-darken-3">
          Crear Cuenta Nexus
        </v-card-title>
        <v-card-subtitle> Ingresa tus datos para comenzar </v-card-subtitle>
      </v-card-item>

      <v-form v-model="isFormValid" @submit.prevent="handleRegister">
        <v-text-field
          v-model="form.name"
          label="Nombre Completo"
          prepend-inner-icon="mdi-account"
          variant="outlined"
          density="comfortable"
          color="primary"
          :rules="[(v) => !!v || 'El Nombre es obligatorio']"
        ></v-text-field>
        <v-text-field
          v-model="form.email"
          label="Correo Electronico"
          placeholder="ejemplo@nexus.com"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          color="indigo"
          class="mb-2"
          :rules="[
            (v) => !!v || 'El Correro es Obligatorio',
            (v) => /.+@.+\..+/.test(v) || 'E-mail no valido',
          ]"
        ></v-text-field>
        <v-text-field
          v-model="form.password"
          label="Contrasenia"
          :type="showPassword ? 'text' : 'password'"
          prepend-inner-icon="mdi-lock-outline"
          :apend-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="showPassword = !showPassword"
          placeholder="Contrasenia"
          variant="outlined"
          color="indigo"
          class="mb-2"
          :rules="[
            (v) => !!v || 'La Contrasenia es obligatoria',
            (v) => v.length >= 6 || 'Minimo 6 caracteres',
          ]"
        >
        </v-text-field>
        <v-select
          v-model="form.roleId"
          label="Tipo de Usuario"
          :items="roles"
          item-title="label"
          item-value="value"
          prepend-inner-icon="mdi-shield-account-outline"
          variant="outlined"
          color="indigo"
          class="mb-4"
          :rules="[(v) => !!v || 'Debes seleccionar un rol']"
        >
        </v-select>
        <v-btn
          block
          color="indigo-darken-2"
          size="x-large"
          type="submit"
          class="text-none font-weight-bold"
          :loading="loading"
          :disabled="!isFormValid"
          elevation="4"
        >
          REGISTRARSE
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup>
import { toast } from 'vue3-toastify'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import { storeToRefs } from 'pinia'

const router = useRouter()
const authStore = useAuthStore()
const { auth } = storeToRefs(authStore)
const isFormValid = ref(false)
const loading = ref(false)
const showPassword = ref(false)

// const roles=ref([])

const form = reactive({
  name: '',
  email: '',
  password: '',
  roleId: null,
})
const roles = [
  { label: 'Administrador', value: 1 },
  { label: 'Agente', value: 2 },
  { label: 'Cliente', value: 3 },
]

const handleRegister = async () => {
  if (!isFormValid.value) return
  loading.value = true
  await authStore.registerUser(form)
  if (auth.value.success) {
    toast.success(auth.value.message)
    router.push('/dashboard')
  } else {
    toast.error(auth.value.message)
  }
  loading.value = false
}
</script>

<style lang="scss" scoped></style>
