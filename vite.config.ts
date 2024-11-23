import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@challenges': path.resolve(__dirname, './challenges')
    }
  }
})
