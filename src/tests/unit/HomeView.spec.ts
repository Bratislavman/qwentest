import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('HomeView', () => {
  it('renders properly', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.text()).toContain('Демонстрация возможностей Vue 3')
  })

  it('displays static content with v-once', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.text()).toContain('Статический контент (v-once)')
  })

  it('displays optimized list with v-memo', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.text()).toContain('Оптимизированный список (v-memo)')
  })

  it('counts items correctly', () => {
    const wrapper = mount(HomeView)
    const items = wrapper.findAll('input[type="checkbox"]')
    expect(items.length).toBe(4)
  })
})
