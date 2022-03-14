import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

// export const useStore = defineStore('main', {

// })

const store = createPinia()
store.use(piniaPluginPersist)
export default store
