<template>
  <n-radio-group v-model:value="current" @update:value="handleChange">
    <n-radio-button v-for="(item, index) in dateList" :key="index" type="primary" :value="index">{{
      item.label
    }}</n-radio-button>
  </n-radio-group>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { lastNday } from '/@/utils/date'

export default defineComponent({
  setup() {
    const current = ref(0)
    const dateList = reactive([
      {
        label: '近3天',
        value: lastNday(3)
      },
      {
        label: '近7天',
        value: lastNday(7)
      },
      {
        label: '近30天',
        value: lastNday(30)
      },
      {
        label: '近90天',
        value: lastNday(90)
      }
    ])
    const handleChange = val => {
      console.log(dateList[val].label)
    }
    return {
      current,
      dateList,
      handleChange
    }
  }
})
</script>
