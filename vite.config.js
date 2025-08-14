import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Amazon/',
  // publicDirを明記することで、ビルド時の挙動を安定させる
  publicDir: 'public',
})