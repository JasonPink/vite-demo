<template>
  <p>count: {{ count }}</p>
  <p>倍数： {{ multiple }}</p>
  <div>
    <button @click="increase()">加1</button>
    <button @click="decrease()">减一</button>
  </div>
  <p>
    {{ name }}
  </p>
  <p>{{ age }}</p>
  <div v-for="(item, index) in dayList" :key="index">{{ item }}</div>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  watch
} from 'vue'
import useCount from '/@/hooks/useCount'
import { lastNday } from '/@/utils/date'

export default defineComponent({
  setup() {
    const { count, multiple, increase, decrease } = useCount(10)

    const user: object = reactive({
      name: 'yemeng',
      age: 26
    })
    const dayList: string[] = reactive(lastNday(4, false))
    onBeforeMount(() => {
      console.log(`---onBeforeMount---`)
    })
    onMounted(() => {
      console.log(`---onMounted---`)
    })
    onBeforeUpdate(() => {
      console.log(`---onBeforeUpdate---`)
    })
    onUpdated(() => {
      console.log(`---onUpdated---`)
    })
    onBeforeUnmount(() => {
      console.log(`---onBeforeUnmount---`)
    })
    onUnmounted(() => {
      console.log(`---onUnmounted---`)
    })
    watch(
      () => user.age,
      (curAge, preAge) => {
        console.log('新值:', curAge, '老值:', preAge)
      }
    )

    return {
      count,
      multiple,
      increase,
      decrease,
      dayList,
      ...toRefs(user)
    }
  }
})
</script>

<style lang="scss" scoped>
a {
  color: green;
}
.name {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  line-height: 100px;
  border-radius: 10px;
  color: #fff;
  font-size: 26px;
  background: #4098fc;
}
</style>
