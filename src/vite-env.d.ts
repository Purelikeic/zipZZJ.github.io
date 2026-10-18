/// <reference types="vite/client" />

import 'vue'

declare module 'vue' {
  interface ComponentCustomProperties {
    $t: (key: string, ...args: unknown[]) => string
  }
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
