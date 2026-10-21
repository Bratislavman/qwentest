<template>
  <div class="space-y-6">
    <h1 class="text-3xl font-bold">Форма (Vueform)</h1>

    <div class="bg-white p-6 rounded-lg shadow">
      <Vueform v-model="submittedData" @submit="handleSubmit" :endpoint="false">
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

        <ButtonElement name="submit" button-label="Отправить" button-type="submit" submits />
      </Vueform>
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

const formData = {
  name: '',
  email: '',
  bio: '',
}

type FormDataType = typeof formData

const submittedData = ref<FormDataType | undefined>({
  ...formData,
})

const handleSubmit = () => {
  console.log(submittedData.value, 'result')
}
</script>
