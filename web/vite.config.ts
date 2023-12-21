import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const port = Number(process.env.FRONTEND_PORT) || Number(env.FRONTEND_PORT);
  return {
    plugins: [react()],
    server: {
      port,
      host: '0.0.0.0',
    },
    preview: {
      port,
    },
  };
});
