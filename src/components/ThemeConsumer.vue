<template>
  <div class="bg-white p-4 rounded-lg shadow">
    <h2 class="text-xl font-semibold mb-4">Provide/Inject демонстрация</h2>
    <p class="mb-4">
      Текущая тема: <strong>{{ theme }}</strong>
    </p>
    <button
      @click="toggleTheme"
      class="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
    >
      Переключить тему
    </button>
  </div>
</template>

<script setup lang="ts">
import { inject, type Ref } from 'vue'

// Получаем данные от родительского компонента
const { theme, toggleTheme } = inject<{
  theme: Ref<'light' | 'dark'>
  toggleTheme: () => void
}>('theme')!
</script>
