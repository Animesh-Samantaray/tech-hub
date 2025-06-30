// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// })
// module.exports = {
//   darkMode: 'class', // required for manual control
//   content: ['./src/**/*.{js,jsx,ts,tsx}'],
//   theme: { extend: {} },
//   plugins: [],
// };


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
