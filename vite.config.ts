import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  build: {
    cssCodeSplit: false,
    lib: {
      name: 'ElevatorNavigation',
      entry: path.resolve(__dirname, './src/index.ts'),
      fileName: '[format]/[name]',
      formats: ['es', 'umd', 'cjs', 'iife'],
    },
    rollupOptions: {
      external: ['vue', 'lodash'],
      output: {
        globals: {
          vue: 'Vue',
        }
      }
    }
  },
})
