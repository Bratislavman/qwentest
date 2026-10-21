<template>
  <div class="space-y-6">
    <h1 class="text-3xl font-bold">Демонстрация возможностей Vue 3</h1>

    <!-- v-once для статического контента -->
    <div v-once class="bg-yellow-100 p-4 rounded-lg">
      <h2 class="text-xl font-semibold mb-2">Статический контент (v-once)</h2>
      <p>Этот текст не будет обновляться: {{ staticText }}</p>
      <p>Текущее время при первой отрисовке: {{ currentTime }}</p>
    </div>

    <!-- v-memo для оптимизации списка -->
    <div class="bg-white p-4 rounded-lg shadow">
      <h2 class="text-xl font-semibold mb-4">Оптимизированный список (v-memo)</h2>
      <div class="space-y-2">
        <div
          v-for="item in items"
          :key="item.id"
          v-memo="[item.isSelected, selectedCount]"
          class="p-3 border rounded"
          :class="{ 'bg-blue-50': item.isSelected }"
          :data-cy="`list-item-${item.id}`"
        >
          <label class="flex items-center cursor-pointer">
            <input
              type="checkbox"
              v-model="item.isSelected"
              class="mr-2 h-4 w-4"
              :data-cy="`checkbox-${item.id}`"
            />
            <span>{{ item.name }}</span>
            <span class="ml-auto text-sm text-gray-500" data-cy="selected-count">
              Выбрано: {{ selectedCount }}
            </span>
          </label>
        </div>
      </div>
    </div>

    <!-- Демонстрация provide/inject -->
    <ThemeProvider>
      <ThemeConsumer />
    </ThemeProvider>

    <!-- Демонстрация самописной директивы -->
    <div class="bg-white p-4 rounded-lg shadow">
      <h2 class="text-xl font-semibold mb-4">Самописная директива v-click-outside</h2>
      <div
        v-click-outside="handleClickOutside"
        class="p-4 border-2 border-dashed border-gray-300 rounded"
      >
        <p>Кликните вне этого блока</p>
        <p class="text-sm text-gray-500">Событий вне: {{ outsideClicks }}</p>
      </div>
    </div>

    <!-- Демонстрация самописного плагина -->
    <div class="bg-white p-4 rounded-lg shadow">
      <h2 class="text-xl font-semibold mb-4">Самописный плагин</h2>
      <p>{{ pluginMessage }}</p>
      <p class="text-sm text-gray-500">Версия: {{ myPlugin?.version }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive, inject } from 'vue'
import ThemeProvider from '@/components/ThemeProvider.vue'
import ThemeConsumer from '@/components/ThemeConsumer.vue'
import { myPluginKey } from '@/plugins/myCustomPlugin'

// Получаем плагин через inject
const myPlugin = inject(myPluginKey)

// v-once: статический текст
const staticText = 'Это значение не изменится'
const currentTime = new Date().toLocaleTimeString()

// v-memo: оптимизированный список
const items = reactive([
  { id: 1, name: 'Элемент 1', isSelected: false },
  { id: 2, name: 'Элемент 2', isSelected: false },
  { id: 3, name: 'Элемент 3', isSelected: false },
  { id: 4, name: 'Элемент 4', isSelected: false },
])

const selectedCount = computed(() => items.filter((item) => item.isSelected).length)

// Демонстрация директивы
const outsideClicks = ref(0)
const handleClickOutside = () => {
  outsideClicks.value++
}

// Демонстрация плагина
const pluginMessage = computed(() => {
  return myPlugin?.getMessage() || 'Плагин не загружен'
})
</script>
