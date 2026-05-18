import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/quadlock/', // GitHub Pages 배포를 위한 base 경로 설정
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
