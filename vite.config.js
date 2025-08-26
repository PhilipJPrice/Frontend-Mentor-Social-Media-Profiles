import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
	base: '/Frontend-Mentor-Social-Media-Profiles/',
  plugins: [
		react(),
		tailwindcss(),
	],
})
