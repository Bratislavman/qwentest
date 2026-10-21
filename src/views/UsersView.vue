<template>
  <div class="space-y-6">
    <h1 class="text-3xl font-bold">Пользователи (TanStack Query)</h1>

    <div v-if="isLoading" class="text-center py-8">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      <p class="mt-2 text-gray-600">Загрузка...</p>
    </div>

    <div v-else-if="isError" class="bg-red-100 text-red-700 p-4 rounded-lg">
      <p>Ошибка: {{ error?.message }}</p>
      <button
        class="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        @click="() => refetch()"
      >
        Повторить
      </button>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="user in users"
        :key="user.id"
        class="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
      >
        <h3 class="text-lg font-semibold">{{ user.name }}</h3>
        <p class="text-gray-600">{{ user.email }}</p>
        <p class="text-sm text-gray-500">{{ user.company.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { fetchUsers } from '@/composables/useUsers'

const {
  data: users,
  isLoading,
  isError,
  error,
  refetch,
} = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
  staleTime: 1000 * 60 * 5,
})
</script>
