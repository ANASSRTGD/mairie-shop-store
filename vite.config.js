import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
    // الافتراض: كل شيء في الجذر أو src حسب التنسيق
      // ما ضروري تغير `outDir` إذا بغيتي تتركه dist
      })