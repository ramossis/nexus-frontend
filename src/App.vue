<script setup>
import { ref } from 'vue'
const snackbar = ref(false)
const message = ref('')
const color = ref('success')
</script>

<template>
  <v-app>
    <v-main class="bg-grey-darken-4">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>

    <v-snackbar v-model="snackbar" :color="color" timeout="3000">
      {{ message }}
    </v-snackbar>
  </v-app>
</template>

<style></style>
