<template>
  <div class="my-tab">
    <van-tabs v-model:active="active" animated title-active-color="#9c1d22" color="#eeeeee" background="#eeeeee">
      <van-tab v-for="item in data">
        <template #title>
          <div class="tab-title">{{ item.title }}</div>
        </template>
        <div class="content">
          <van-grid :column-num="3" :border="false">
            <van-grid-item v-for="value in item.content" :key="value" :url="value.url">
              <van-image width="70" height="70" round fit="cover" :src="value.pic" :alt="value.title" />
              <h5>{{ value.title }}</h5>
            </van-grid-item>
          </van-grid>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts" setup>
import { GetData } from '../api'
import { ref } from '@vue/reactivity'
import { DataType } from '../components/Card.vue'

const active = ref(0)
interface zfType {
  title: string
  subtitle: string
  recommend: Array<DataType>
}

const data = ref<Array<DataType>>()
GetData('1').then((result) => {
  data.value = (result as zfType).recommend
})
</script>

<style lang="less" scoped>
.my-tab {
  &:deep(.van-tabs__line) {
    display: none;
  }
  &:deep(.van-tab--active) {
    background-color: #fff;
  }

  .content {
    background-color: #fff;
    h5 {
      margin: 10px 0 0 0;
    }
  }
}
</style>
