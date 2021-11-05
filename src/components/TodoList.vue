<template>
  <n-input v-model:value="value" placeholder="邮箱" @keypress.enter="handleAdd" />
  <ul>
    <li v-for="(item, index) in list" :key="item" @click="handleDel(index)"> {{ item }}</li>
  </ul>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  setup() {
    const valueRef = ref('')
    const list = reactive([1])

    const handleAdd = () => {
      list.push(valueRef.value)
      valueRef.value = ''
    }
    const handleDel = index => {
      list.splice(index, 1)
    }
    return {
      value: valueRef,
      list,
      handleAdd,
      handleDel
    }
  }
})
</script>
