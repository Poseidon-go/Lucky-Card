import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
  
})

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import { resolve } from 'path';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000, // Hoặc cổng bạn muốn sử dụng
//     open: true, // Mở trình duyệt khi server khởi động
//   },
//   build: {
//     rollupOptions: {
//       input: {
//         main: resolve(__dirname, 'public/index.html'), // Đường dẫn tới file index.html trong thư mục public
//       },
//     },
//   },
//   publicDir: 'public' // Chỉ định thư mục public
// });
