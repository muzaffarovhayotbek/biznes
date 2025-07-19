import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/', // Vercel uchun kerakli bo'lgan asosiy sozlama
})
