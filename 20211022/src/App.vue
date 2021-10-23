<template>
  <div>
    <keep-alive include="Pc,Wap">
      <component :is="CurrentComponent"></component>
    </keep-alive>
  </div>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity'
import Pc from './pages/Pc.vue'
import Wap from './pages/Wap.vue'
import NotFoundComponent from './pages/NotFound.vue'

document.title = '面试题'

const routes = {
  '/': Pc,
  '/wap': Wap,
}

const currentRoute = window.location.pathname

const CurrentComponent = computed(() => routes[currentRoute as keyof typeof routes] || NotFoundComponent)
</script>

<style lang="less">
@list: flex, grid, none, block;
@flex-items: center, start, end;
@flex-direction: row, row-reverse, col, col-reverse;
@justify: center, end, start, between, around, evenly;

body{
  background-color: powderblue;
}
div{
  box-sizing: border-box;
}

.flex(@array, @i: 0) when (@i =< length(@array)) {
  @v: extract(@array, @i);
  .@{v} {
    display: @v;
  }
  .flex(@array, (@i + 1));
}

.items(@array, @i:0) when (@i =< length(@array)) {
  @value: extract(@array, @i);
  .end(@v) when (@v = end) {
    .items-@{v} {
      @prefix: flex;
      align-items: e('@{prefix}-@{v}');
    }
  }

  .start(@v) when (@v = start){
    .items-@{v}{
      @prefix: flex;
      align-items: e('@{prefix}-@{v}');
    }
  }

  .center(@v) when (@v = center){
    .items-@{v}{
      align-items: @v;
    }
  }

  .start(@value);
  .end(@value);
  .center(@value);

  .items(@array, (@i + 1));
}

.direction(@array, @i: 0) when (@i =< length(@array)){
  @value: extract(@array, @i);
  .other(@v) when (@v = row),(@v = row-reverse){
    .flex-@{v} {
      flex-direction: @v;
    }
  }

  .col(@v) when (@v = col){
    .flex-@{v}{
      flex-direction: column;
    }
  }

  .colReveres(@v) when (@v = col-reverse){
    .flex-@{v}{
      flex-direction: column-reverse;
    }
  }

  .other(@value);
  .col(@value);
  .colReveres(@value);
  .direction(@array, (@i + 1));
}

.flex-justify(@array, @i: 0) when (@i =< length(@array)){
  @value: extract(@array, @i);
  .center(@v) when (@v = center){
    .justify-@{v} {
      justify-content: @v;
    }
  }
  .end-start(@v) when (@v = end), (@v = start){
    .justify-@{v} {
      justify-content: e('flex-@{v}');
    }
  }
  .bae(@v) when (@v = between), (@v = around), (@v = evenly){
    .justify-@{v}{
      justify-content: e('space-@{v}');
    }
  }

  .bae(@value);
  .center(@value);
  .end-start(@value);
  .flex-justify(@array, (@i + 1));
}

.flex(@list);
.items(@flex-items);
.flex-justify(@justify);
.direction(@flex-direction);
</style>
