import { defineConfig } from 'vite';
import htmlPurge from 'vite-plugin-purgecss';

export default defineConfig(({ command }) => ({
  plugins: [htmlPurge()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html',
        about: '/pages/how-we-work.html',
        pricing: '/pages/pricing.html',
      },
    },
  },
  base: command === 'serve' ? '/' : '/brandboosters',
}));
