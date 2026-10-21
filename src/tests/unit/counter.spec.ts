import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from '@/stores/counter'

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('initializes with correct values', () => {
    const store = useCounterStore()
    expect(store.count).toBe(0)
    expect(store.name).toBe('Pinia Store')
  })

  it('increments count', () => {
    const store = useCounterStore()
    store.increment()
    expect(store.count).toBe(1)
  })

  it('decrements count', () => {
    const store = useCounterStore()
    store.decrement()
    expect(store.count).toBe(-1)
  })

  it('resets count', () => {
    const store = useCounterStore()
    store.increment()
    store.increment()
    store.reset()
    expect(store.count).toBe(0)
  })

  it('computes double count', () => {
    const store = useCounterStore()
    store.increment()
    store.increment()
    expect(store.doubleCount).toBe(4)
  })

  it('generates greeting', () => {
    const store = useCounterStore()
    expect(store.greeting).toBe('Привет, Pinia Store! Счётчик: 0')
  })

  it('updates name', () => {
    const store = useCounterStore()
    store.setName('Новое имя')
    expect(store.name).toBe('Новое имя')
    expect(store.greeting).toBe('Привет, Новое имя! Счётчик: 0')
  })
})
