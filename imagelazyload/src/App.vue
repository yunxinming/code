<template>
  <main ref="root">
    <img src="../public/loading.gif" data-src="http://test.yingming.xyz/static/mishow.jpeg" alt="" />
    <img src="../public/loading.gif" data-src="http://test.yingming.xyz/static/mishow.jpeg" alt="" />
    <img src="../public/loading.gif" data-src="http://test.yingming.xyz/static/mishow.jpeg" alt="" />
    <img src="../public/loading.gif" data-src="http://test.yingming.xyz/static/mishow.jpeg" alt="" />
  </main>
</template>

<script lang="ts" setup>
import { ref } from '@vue/reactivity'

const root = ref()
function loadImage() {
  const H = document.documentElement.clientHeight
  const TOP = document.documentElement.scrollTop || document.body.scrollTop
  const imgs = (root.value as HTMLDivElement).children
  Array.from(imgs).forEach((item) => {
    if ((item as HTMLImageElement).offsetTop < H + TOP) {
      if ((item as HTMLImageElement).src !== (item as HTMLImageElement).getAttribute('data-src'))
        (item as HTMLImageElement).src = (item as HTMLImageElement).getAttribute('data-src')!
    }
  })
}

window.onload = function () {
  const t = debounce(loadImage, 100)
  t()
}

window.onscroll = debounce(loadImage, 100)

function debounce(fun: Function, delay: number) {
  let timer: number = 0
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fun()
    }, delay)
  }
}
</script>

<style>
main {
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

main img {
  margin-bottom: 10px;
}
</style>
