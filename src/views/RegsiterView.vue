<template>
  <v-row no-gutters class="fill-height" align="center" justify="center">
    <v-col cols="12" sm="8" md="4" lg="4" xl="3">
      <div class="text-center mb-8">
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

<style  scoped>
  .v-img{
    filter: drop-shadow(0px 4px rgba(0,0,0,0.3));
    transition: transform 0.3s ease;

    &:hover{
      transform:(scale(1.05));
    }
  }
</style>
