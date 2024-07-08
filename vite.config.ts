import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    define: {
      _global: {},
    },
    plugins: [react(), tsconfigPaths(), svgr()],
    server: {
      port: 3000,
      proxy: {
        '/pothole': {
          target: env.VITE_API_PROXY_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/pothole/, ''),
        },
      },
    },
  };
});
