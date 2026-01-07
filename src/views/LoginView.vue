<template>
  <v-row no-gutters class="fill-height" align="center" justify="center">
    <v-col cols="12" sm="8" md="4" lg="4" xl="3">
      <div class="text-center mb-8">
        <v-img
          src="../src/assets/logo-nexus.png"
          alt="nexus-support-logo"
          max-height="100"
          contain
          class="mx-auto"
        />
      </div>
      <LoginForm />
      <p class="text-center mt-4">
        No tienes cuenta?
        <router-link to="/register" class="text-blue-lighten-3 font-weight-bold">
          Registrate
        </router-link>
      </p>
    </v-col>
  </v-row>
  <div></div>
</template>
<script setup>
import LoginForm from '@/components/Auth/LoginForm.vue'
</script>

<style scoped>
.v-img {
  filter: drop-shadow(0px 4px rgba(0, 0, 0, 0.3));
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
}
</style>
