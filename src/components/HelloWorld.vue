<script>
import { ref, defineComponent, defineProps } from 'vue'
import { NButton } from 'naive-ui'
import test from './test.jsx'

defineProps({
  msg: String,
})

const count = ref(0)
export default defineComponent({
  components: {
    NButton,
  },
})
</script>

<template>
  <h1>{{ msg }}</h1>
  <n-button type="info">naive-ui</n-button>
  <test></test>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

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
