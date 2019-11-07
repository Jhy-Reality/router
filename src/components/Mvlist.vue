<template>
    <div>
      <h3>展示电影详情页面</h3>
      <p>{{$route.params.mid}}---{{$route.params.name}}</p>
      <button @click="$router.push('/mv')">返回列表</button>
    </div>
</template>

<script>
export default {
  // methods:{
  //   exit(){
  //     this.$router.go(1);
  //   }
  // }
}
</script>

<style lang="less" scoped>
</style>
