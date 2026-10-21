import type { User } from '@/types'

// Функция для получения пользователей с JSONPlaceholder API
export async function fetchUsers(): Promise<User[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')

  if (!response.ok) {
    throw new Error('Ошибка при загрузке пользователей')
  }

  return response.json()
}
