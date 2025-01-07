import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    proxy: {
      '/ai': {
        target: 'https://ark.cn-beijing.volces.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ai/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
});
