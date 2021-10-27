<template>
  <div class="nav">
    <a href="/">PC</a>
    <a href="/wap">移动端</a>
  </div>
  <div class="container flex justify-between">
    <template v-for="(item, index) in data" :key="index">
      <div @mouseover="handle(index)">
        <Card :data="item" :show="showIndex == index"></Card>
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

function handle(index: number) {
  showIndex.value = index
}

function delay(fun: Function, awit: number) {
  let timer: number | null
  return function (value: number) {
    if (!timer) {
      timer = setTimeout(function () {
        fun(value)
        timer = null
      }, awit)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

.nav {
  width: 1200px;
  height: 100px;
  margin: 0 auto;
  text-align: center;
  line-height: 100px;
  a {
    color: #333;
    margin-left: 10px;
    font-family: '微软雅黑';
    &:hover {
      color: red;
    }
  }
}
</style>
