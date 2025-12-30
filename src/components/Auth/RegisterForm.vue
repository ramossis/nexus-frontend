<template>
  <v-container class="fill-height justify-center" fluid>
    <v-card max-width="500" class="pa-10 mx-auto" elevation="24" rounded="xl" theme="light">
      <v-card-item class="text-center mb-4">
        <v-card-tilte class="text-h5 font-weight-bold text-indigo-darken-3">
          Crear Cuenta Nexus
        </v-card-tilte>
        <v-card-subtitle> Ingresa tus datos para comenzar </v-card-subtitle>
      </v-card-item>

      <v-form>
        <v-text-field
          label="Nombre Completo"
          prepend-inner-icon="mdi-account"
          variant="outlined"
          density="comfortable"
          color="primary"
          :rules="[(v) => !!v || 'El Nombre es obligatorio']"
        ></v-text-field>
        <v-text-field
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
          label="Contrasenia"
          placeholder="Contrasenia"
          prepend-inner-icon="mdi-lock"
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
          label="Tipo de Usuario"
          item-title="text"
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
        >
          REGISTRARSE
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script setup></script>

<style lang="scss" scoped></style>
