/// <reference types="vite/client" />

// Декларации для Vue-компонентов
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Декларации для CSS-файлов
declare module '*.css' {
  const content: string
  export default content
}

// Декларации для изображений
declare module '*.png' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.gif' {
  const src: string
  export default src
}

declare module '*.svg' {
  const src: string
  export default src
}

declare module '*.webp' {
  const src: string
  export default src
}

// Декларации для шрифтов
declare module '*.woff' {
  const src: string
  export default src
}

declare module '*.woff2' {
  const src: string
  export default src
}

declare module '*.ttf' {
  const src: string
  export default src
}

// Декларации для JSON
declare module '*.json' {
  const value: any
  export default value
}
