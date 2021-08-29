/*
 * @Author: xiaolu
 * @Date: 2021-08-22 14:34:41
 * @LastEditors: xiaolu
 * @LastEditTime: 2021-08-25 10:06:51
 * @Description:
 */
import { createApp } from 'vue'
import App from './App.vue'
import Antd from './lib/antd'
import 'km-styles/styles/antd/index.css'
import 'km-styles/styles/index.css'

createApp(App).use(Antd).mount('#app')
