<template>
  <div class="space-y-6">
    <h1 class="text-3xl font-bold">Форма (Vueform)</h1>

    <div class="bg-white p-6 rounded-lg shadow">
      <Vueform @submit="handleSubmit">
        <TextElement
          name="name"
          label="Имя"
          :rules="['required', 'min:2']"
          placeholder="Введите имя"
        />

        <TextElement
          name="email"
          label="Email"
          :rules="['required', 'email']"
          placeholder="example@mail.com"
        />

        <SelectElement name="role" label="Роль" :items="roles" :rules="['required']" />

        <TextareaElement
          name="bio"
          label="О себе"
          :rules="['max:500']"
          placeholder="Расскажите о себе..."
        />

        <ButtonElement name="submit" button-label="Отправить" button-type="submit" />
      </Vueform>

      <div v-if="submittedData" class="mt-6 p-4 bg-green-100 rounded-lg">
        <h3 class="font-semibold mb-2">Отправленные данные:</h3>
        <pre class="text-sm">{{ JSON.stringify(submittedData, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const roles = [
  { value: 'admin', label: 'Администратор' },
  { value: 'user', label: 'Пользователь' },
  { value: 'moderator', label: 'Модератор' },
]

const submittedData = ref<any>(null)

const handleSubmit = (data: any) => {
  submittedData.value = data
}
</script>
