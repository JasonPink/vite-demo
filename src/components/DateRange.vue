<template>
  <div class="flex">
    <n-radio-group v-model:value="currentIndex" @update:value="handleChange">
      <n-radio-button
        v-for="(item, index) in dateList"
        :key="index"
        type="primary"
        :value="index"
        >{{ item.label }}</n-radio-button
      >
    </n-radio-group>
    <n-date-picker v-model:value="currentDate" type="daterange" clearable />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { lastNday } from '/@/utils/date'
import dayjs from 'dayjs'

export default defineComponent({
  setup() {
    const formatDate = arr => {
      return arr.map(item => dayjs(item).unix() * 1000)
    }
    const dateList = [
      {
        label: '近3天',
        value: formatDate(lastNday(3))
      },
      {
        label: '近7天',
        value: formatDate(lastNday(7))
      },
      {
        label: '近30天',
        value: formatDate(lastNday(30))
      },
      {
        label: '近90天',
        value: formatDate(lastNday(90))
      }
    ]
    const currentIndex = ref(0)
    const currentDate = computed({
      get: () => dateList[currentIndex.value].value,
      set: val => {
        console.log(val)
      }
    })

    // const range = computed({
    //   get: () => (current.value > -1 ? dateList[current.value].value : null),
    //   set: val => {
    //     current.value = dateList.findIndex(item => {
    //       return item.value[0] === val[0] && item.value[1] === val[1]
    //     })
    //   }
    // })
    // let range = reactive(dateList[current.value].value)

    const handleChange = val => {
      console.log(dateList[val].value)
      // range = [dateList[val].value[0], dateList[val].value[1]]
    }
    return {
      currentDate,
      currentIndex,
      dateList,
      handleChange
    }
  }
})
</script>
