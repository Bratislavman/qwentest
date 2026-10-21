<template>
  <div :class="themeClass">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, ref, computed } from 'vue'

// Демонстрация provide/inject
const theme = ref<'light' | 'dark'>('light')

const themeClass = computed(() => {
  return theme.value === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
})

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

// Предоставляем данные дочерним компонентам
provide('theme', {
  theme,
  toggleTheme,
})
</script>
