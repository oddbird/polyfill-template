import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Polyfill',
      // the proper extensions will be added
      fileName: 'polyfill',
    },
    target: 'es6',
    sourcemap: true,
  },
});
