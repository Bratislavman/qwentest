import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  // State
  const count = ref(0)
  const name = ref('Pinia Store')

  // Getters
  const doubleCount = computed(() => count.value * 2)
  const greeting = computed(() => `Привет, ${name.value}! Счётчик: ${count.value}`)

  // Actions
  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  function reset() {
    count.value = 0
  }

  function setName(newName: string) {
    name.value = newName
  }

  return {
    count,
    name,
    doubleCount,
    greeting,
    increment,
    decrement,
    reset,
    setName,
  }
})
