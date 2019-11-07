<template>
    <div>
      <h1>登录系统</h1>
      用户名：<input type="text" name="username" v-model="name">
      <p>密 码：<input type="password" name="password" v-model="psd"></p>
      <button type="button" @click="login">登录</button>
    </div>
</template>

<script>
export default {
  data(){
    return{
      name:'',
      psd:'',
    }
  },
  methods:{
    login(){
      if(this.name.trim().length !==0 && this.psd.trim().length !==0){
        window.sessionStorage.setItem('token','d5saa$3sda%d5ds#s9asd')
        this.$router.push('/hm');
      }else{
        alert('用户名或密码不能为空');
        this.name = '';
        this.psd = '';
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
