import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['lucide-react'],
          form: ['formik', 'yup'],
          pdf: ['react-pdf', 'pdfjs-dist'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    minify: 'esbuild',
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 3000,
    host: true,
  },
  preview: {
    port: 3000,
    host: true,
  },
});