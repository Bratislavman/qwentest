import type { App, Plugin, InjectionKey } from 'vue'

interface MyPluginOptions {
  prefix?: string
}

interface MyPluginInstance {
  getMessage: () => string
  formatDate: (date: Date) => string
  generateId: () => string
  version: string
  prefix: string
}

// Создаём InjectionKey для типобезопасности
export const myPluginKey: InjectionKey<MyPluginInstance> = Symbol('myPlugin')

// Самописный плагин для Vue
export const myCustomPlugin: Plugin = {
  install(app: App, options: MyPluginOptions = {}) {
    const prefix = options.prefix || 'MyPlugin'

    // Создаём экземпляр плагина
    const pluginInstance: MyPluginInstance = {
      getMessage: () => `${prefix}: Привет из самописного плагина!`,
      formatDate: (date: Date) => {
        return new Intl.DateTimeFormat('ru-RU').format(date)
      },
      generateId: () => {
        return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      },
      version: '1.0.0',
      prefix,
    }

    // Добавляем через provide для использования в компонентах
    app.provide(myPluginKey, pluginInstance)

    // Также добавляем как глобальное свойство (для Options API)
    app.config.globalProperties.$myPlugin = pluginInstance

    console.log(`${prefix} плагин установлен`)
  },
}

// Расширяем типы Vue для Options API
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $myPlugin: MyPluginInstance
  }
}
