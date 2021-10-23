<template>
  <div class="container flex justify-between">
    <template v-for="(item, index) in data" :key="index">
      <div @mouseover="handleClick(index)">
        <Card :data="item" :show="index == showIndex"></Card>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { GetData } from '../api'
import Card, { DataType } from '../components/Card.vue'
import { ref } from '@vue/reactivity'

interface zfType {
  title: string
  subtitle: string
  recommend: Array<DataType>
}

const data = ref()
GetData('1').then((result) => {
  data.value = (result as zfType).recommend
})

const showIndex = ref(0)

function handleClick(index: number) {
  showIndex.value = index
}
</script>

<style lang="less" scoped>
.container {
  width: 1200px;
  margin: 0 auto;
  transition: all 0.3 linear;
}
</style>
