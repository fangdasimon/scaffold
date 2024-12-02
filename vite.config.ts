import type { ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
  return {
    plugins: [vue()],
  }
}
