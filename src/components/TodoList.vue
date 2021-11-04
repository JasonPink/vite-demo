<template>
  <n-input v-model:value="value" placeholder="邮箱" @keypress.enter="handleBlur" />
  <ul>
    <li v-for="item in list" :key="item">{{ item }}</li>
  </ul>
</template>

<script>
import { defineComponent, ref, reactive, computed } from 'vue'

export default defineComponent({
  setup() {
    let valueRef = ref('')
    const list = reactive([1])
    const handleBlur = () => {
      const str = valueRef
      list.push(str)
      valueRef = ''
    }
    return {
      value: valueRef,
      list,
      options: computed(() => {
        return ['@gmail.com', '@163.com', '@qq.com'].map(suffix => {
          const prefix = valueRef.value.split('@')[0]
          return {
            label: prefix + suffix,
            value: prefix + suffix
          }
        })
      }),
      handleBlur
    }
  }
})
</script>
