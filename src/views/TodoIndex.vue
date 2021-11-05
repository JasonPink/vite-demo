<template>
  <h1>todo</h1>
  <TodoList></TodoList>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import TodoList from '/@/components/TodoList.vue'

export default defineComponent({
  components: {
    TodoList
  }
})
</script>
