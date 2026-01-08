import { defineConfig } from 'vitest/config'

/// <reference types="vitest/config" />
export default defineConfig({
  test: {
    globals: true, // Optional: makes test, expect, etc. global
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.js'], // Path to your setup file
  }
})