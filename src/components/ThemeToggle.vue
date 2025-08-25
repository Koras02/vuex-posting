<template>
  <v-btn @click="toggleTheme" :color="isDark ? 'secondary' : 'primary'">
    {{ isDark ? "다크 모드" : "화이트 모드" }}
  </v-btn>
</template>

<script setup>
import { ref } from "vue";
import vuetify from "../plugins/vuetify";

const isDark = ref(vuetify.theme.global.name.value === "dark");

const toggleTheme = () => {
  const Theme = isDark.value ? "light" : "dark";
  vuetify.theme.change(Theme);
  isDark.value = !isDark.value;
};
</script>
