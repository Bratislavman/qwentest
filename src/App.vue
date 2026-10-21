<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <router-link to="/" class="flex items-center px-2 py-2 text-gray-900 font-medium">
              Главная
            </router-link>
            <router-link to="/users" class="flex items-center px-2 py-2 text-gray-900 font-medium">
              Пользователи
            </router-link>
            <router-link to="/form" class="flex items-center px-2 py-2 text-gray-900 font-medium">
              Форма
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- KeepAlive для кеширования компонентов -->
      <router-view v-slot="{ Component }">
        <keep-alive :include="['UsersView', 'FormView']">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </main>

    <!-- Teleport для модального окна -->
    <Teleport to="body">
      <Modal v-if="showModal" @close="showModal = false">
        <h2 class="text-xl font-bold mb-4">Модальное окно</h2>
        <p>Это модальное окно использует Teleport</p>
      </Modal>
    </Teleport>

    <button
      class="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600"
      @click="showModal = true"
    >
      Открыть модальное окно
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'

const showModal = ref(false)
</script>
