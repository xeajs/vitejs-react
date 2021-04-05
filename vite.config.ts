/** @See https://vitejs.dev/config/ */
import { defineConfig } from 'vite';
import fs from 'fs';
import lessToJS from 'less-vars-to-js';
import path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';
import vitePluginImp from 'vite-plugin-imp';

const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, './src/assets/css/antd/index.less'), 'utf8'));

export default defineConfig({
  plugins: [
    reactRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/lib/${name}/style/index.less`
        }
      ]
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        /** 支持内联 JavaScript */
        javascriptEnabled: true,
        modifyVars: themeVariables
      }
    }
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'), // 根路径
      '@': path.resolve(__dirname, 'src'), // src 路径
      src: path.resolve(__dirname, 'src') // src 路径
    }
  },
  build: {
    manifest: true
  }
});
