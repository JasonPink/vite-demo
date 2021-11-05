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
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onBeforeMount, onMounted, watch } from 'vue'
import useCount from '/@/hooks/useCount'

export default defineComponent({
  setup() {
    const { count, multiple, increase, decrease } = useCount(10)
    // const count: number = ref(1)
    const user: object = reactive({
      name: 'yemeng',
      age: 26
    })
    onBeforeMount(() => {
      console.log(`---onBeforeMount---`)
    })
    onMounted(() => {
      console.log(`---onMounted---`)
    })
    watch(
      () => user.age,
      (curAge, preAge) => {
        console.log('新值:', curAge, '老值:', preAge)
      }
    )

    setInterval(() => {
      user.age++
    }, 1000)
    return {
      count,
      multiple,
      increase,
      decrease,
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
