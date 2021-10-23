<template>
  <div class="box flex">
    <div class="left flex justify-center items-center">
      <img v-show="show" :src="data.pic" :alt="data.title" />
      <div class="icon" v-show="!show">
        <img :src="data.icon" :alt="data.title" />
      </div>
      <h4>{{ data.title }}</h4>
    </div>
    <div class="right flex justify-center items-center">
      <ul class="flex justify-center items-center" v-show="show">
        <li v-for="(item, index) in data.content" :key="index">
          <img :src="item.pic" :alt="item.title" />
          <p>{{ item.title }}</p>
          <a :href="item.url">{{ item.url_title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity'

interface OtherType extends DataType {
  url?: string
  url_title?: string
}
export interface DataType {
  title?: string
  pic?: string
  icon?: string
  content?: Array<OtherType>
}

const props = defineProps<{
  data: DataType
  show?: boolean
}>()

const showLine = computed(() => (props.show ? 'none' : 'block'))
const w = computed(() => (props.show ? '650px' : '0'))
</script>

<style lang="less" scoped>
.box {
  height: 460px;
  position: relative;
  .left {
    width: 130px;
    position: relative;
    background-color: white;
    .icon {
      width: 35px;
      height: 35px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -230%);
    }
    img {
      width: 100%;
      height: 100%;
      border: 0;
    }
    h4 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: 0;
      color: #333;
      &::after {
        content: '';
        position: absolute;
        bottom: -20px;
        left: 22px;
        width: 20px;
        height: 2px;
        border-bottom: 3px solid #333;
        display: v-bind('showLine');
      }
    }
  }
  .right {
    width: v-bind('w');
    height: 460px;
    background-color: white;
    box-shadow: 15px 0px 35px rgb(0 0 0 / 20%);
    transition: all 0.12s linear;
    overflow: hidden;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      flex-wrap: wrap;
      li {
        width: 285px;
        height: 125px;
        position: relative;
        margin: 10px;
        box-shadow: 0px 0px 4px #ccc;
        img {
          position: absolute;
          z-index: 1;
        }
        p {
          position: relative;
          z-index: 2;
          padding: 15px;
          font-size: 16px;
          color: #3d3b3b;
        }

        a {
          position: relative;
          z-index: 3;
          color: #9c1d22;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid #9c1d22;
          border-radius: 5px;
          padding: 2px;
          margin-left: 15px;
        }
      }
    }
  }
}
</style>
