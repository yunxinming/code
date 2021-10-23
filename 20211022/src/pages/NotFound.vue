<template>
  <div class="flex flex-col justify-center items-center">
    <h1>404，请访问以下链接</h1>
    <ul>
      <li>
        <a href="/">PC端</a>
      </li>
      <li>
        <a href="/wap">移动端</a>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
div {
  font-family: 楷体;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      cursor: pointer;
      transition: all 0.3s;

      a {
        &:hover {
          color: red;
        }
      }
    }
  }
}
</style>
