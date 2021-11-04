<template>
  <button type="button" @click="count++">count is: {{ count }}</button>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const count: number = ref(1)
    return {
      count
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
