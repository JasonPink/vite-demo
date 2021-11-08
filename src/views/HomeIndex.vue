<template>
  <h1>home！！！！</h1>
  <HelloWorld />
  <DateRange />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '/@/components/HelloWorld.vue'
import DateRange from '/@/components/DateRange.vue'

export default defineComponent({
  components: {
    HelloWorld,
    DateRange
  }
})
</script>
