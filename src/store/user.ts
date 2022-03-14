import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => {
    return {
      name: 'yemeng'
    }
  },
  getters: {
    fullName: state => {
      return `${state.name}大屏`
    }
  },
  actions: {
    updateName(name: string) {
      this.name = name
      this.login()
    },
    async login() {
      const api = () => {
        return { data: {} }
      }
      const { data } = await api()
      return data
    }
  },
  // 数据持久化(默认sessionStorage,store的id作为key,默认所有state都会缓存)
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'my_user',
        storage: localStorage,
        paths: ['name'] // 指定需要持久化的字段
      }
    ]
  }
})
