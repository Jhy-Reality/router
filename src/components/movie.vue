<template>
    <div>
        <h1>电影内容</h1>
        <p>
            <router-link tag="p" v-for="item in movielist" :key="item.id" :to="`/mvl/${item.id}/${item.name}`">
                {{item.name}}
            </router-link>
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            movielist:[
                { id:101,name:'死神来了' },
                { id:102,name:'电锯惊魂' },
                { id:103,name:'极速快递' },
            ]
        }
    }
}
</script>

<style lang="less" scoped>

</style>
