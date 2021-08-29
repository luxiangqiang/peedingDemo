import {
	Button,
	Input
} from 'ant-design-vue'

import type { App } from 'vue'

export default (app: App) =>
	app.use(Button)
		.use(Input)
