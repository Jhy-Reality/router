<template>
    <div>
        <h1>音乐内容</h1>
        <div id="mcShow">
        <p>
            <router-link to='/mc/gudian'>古典</router-link>
            <router-link to='/mc/liuxing'>流行</router-link>
            <router-link to='/mc/shanggan'>伤感</router-link>
        </p>
        <p>
            <router-view></router-view>
        </p>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.router-link-active{
  background: rgb(235, 9, 216);
}
p{
    a{
        text-decoration: none;
        display: inline-block;
        margin: 0 10px;
    }
}
#mcShow{
    margin: 0 auto;
    width: 350px;
    height: 270px;
    border: 1px solid pink;
}
</style>
