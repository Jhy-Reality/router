<template>
  <div id="app">
    <div id="nav">
      <!-- 设置按钮与锚点 -->
      <router-link to="/hm">首页</router-link>
      <router-link to="/mv">电影</router-link>
      <router-link to="/mc">音乐</router-link>
    </div>
    <div id="show">
      <!-- 占位符 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="less" scoped>
.router-link-active{
  background: greenyellow;
}
#app{
  width: 600px;
  height: 500px;
  margin: 50px auto;
  #nav{
    width: 500px;
    height: 50px;
    border: 1px solid black;
    line-height: 50px;
    text-align: center;
    a{
      text-decoration: none;
      display: inline-block;
      padding: 0 20px;
    }
  }
  #show{
    width: 500px;
    height: 400px;
    margin-top: 10px;
    border: 1px solid orange;
    text-align: center;
  }
}
</style>

