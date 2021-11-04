import { createApp } from 'vue'
import App from './App.vue'
import router from '/@/router/index'
import store from '/@/store/index'
import naive from '/@/plugins/naive'

import './style/index.scss'

createApp(App).use(router).use(store).use(naive).mount('#app')
