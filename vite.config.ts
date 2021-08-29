import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components'
import path from 'path'

export default defineConfig({
	plugins: [
		vue(),
		ViteComponents({
			customComponentResolvers: [AntDesignVueResolver()]
		})
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'km-styles': path.resolve(__dirname, './km-styles')
		}
	}
})
