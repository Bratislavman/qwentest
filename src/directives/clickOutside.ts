import type { Directive, DirectiveBinding } from 'vue'

interface ClickOutsideElement extends HTMLElement {
  _clickOutsideHandler?: (event: MouseEvent) => void
}

// Самописная директива для обработки клика вне элемента
export const vClickOutside: Directive = {
  mounted(el: ClickOutsideElement, binding: DirectiveBinding) {
    const handler = (event: MouseEvent) => {
      const target = event.target as Node

      // Проверяем, был ли клик вне элемента
      if (!el.contains(target) && typeof binding.value === 'function') {
        binding.value(event)
      }
    }

    // Сохраняем обработчик для последующего удаления
    el._clickOutsideHandler = handler

    // Добавляем обработчик с задержкой, чтобы избежать срабатывания на текущий клик
    setTimeout(() => {
      document.addEventListener('click', handler)
    }, 0)
  },

  unmounted(el: ClickOutsideElement) {
    // Удаляем обработчик при размонтировании
    if (el._clickOutsideHandler) {
      document.removeEventListener('click', el._clickOutsideHandler)
      delete el._clickOutsideHandler
    }
  },
}
