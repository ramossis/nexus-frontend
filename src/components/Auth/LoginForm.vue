<template>
  <v-container class="fill-height justify-center" fluid>
    <v-card max-height="600" class="pa-10 mx-auto" elevation="24" rounded="xl" theme="light">
      <v-card-item class="text-center mb-4">
        <v-card-title class="text-h5 font-weight-bold text-indigo-darken-3">
          Iniciar Sesion en Nexus
        </v-card-title>
        <v-card-subtitle> Ingresa tus credenciales para continuar </v-card-subtitle>
      </v-card-item>
      <v-form>
        <v-text-field
          label="Correo Electronico"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          color="indigo"
          class="mb-2"
          :rules="[
            (v) => !!v || 'El Correro es Obligatorio',
            (v) => /.+@.+\..+/.test(v) || 'E-mail no valido',
          ]"
        >
        </v-text-field>
        <v-text-field
          label="Contraseña"
          prepend-inner-icon="mdi-lock-outline"
          placeholder="Contraseña"
          variant="outlined"
          color="indigo"
          class="mb-2"
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
        >
          Iniciar Sesión
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup></script>

<style lang="scss" scoped></style>
