<template>
  <h1>home！！！！{{ userStore.name }}</h1>
  <h1>{{ name1 }}</h1>
  <h2>{{ userStore.fullName }} 23</h2>
  <HelloWorld />
  <DateRange />
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '/@/store/user'
import HelloWorld from '/@/components/HelloWorld.vue'
import DateRange from '/@/components/DateRange.vue'

export default defineComponent({
  components: {
    HelloWorld,
    DateRange
  },
  setup() {
    const userStore = useUserStore()
    setTimeout(() => {
      userStore.updateName('冰冰')
    }, 1000)
    const name1 = computed(() => userStore.name.toUpperCase())
    // 解构会使state失去响应式
    const { name } = storeToRefs(userStore)
    return {
      userStore,
      name1,
      name
    }
  }
})
</script>
