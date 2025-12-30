<template>
  <v-row no-gutters class="fill-height" align="center" justify="center">
    <v-col cols="12" sm="8" md="4">
      <div class="text-center my-5">
        <v-img
          src="../src/assets/logo-nexus.png"
          alt="nexus support-logo"
          max-height="100"
          contain
          class="mx-auto"
        />
      </div>
      <RegisterForm />
      <p class="text-center mt-4">
        Ya tienes cuenta?
        <router-link to="/login" class="text-blue-lighten-3 font-weight-bold"
          >Inicia Sesion</router-link
        >
      </p>
    </v-col>
  </v-row>
</template>

<script setup>
import RegisterForm from '@/components/Auth/RegisterForm.vue'
</script>

<style lang="scss" scoped></style>
