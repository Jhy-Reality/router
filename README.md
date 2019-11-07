# router

## 如果没有安装router需先安装router
> yarn add vue-router
>
> npm install vue-router
## 创建router的五个步骤
1.导入路由模块
```javascript
import VueRouter from 'vue-router'
```
2.导入要使用的功能组件
```javascript
//import 模块名 from '模块路径'
import index from './componets/Home'
```
3.注册路由功能组件
```javascript
// 功能组件 按钮<router-link> 占位符<router-view>
// 路由组件的注册分为单个注册与全部注册两种
//单个注册 
Vue.component('名称',组件模块)
// 全部注册 
Vue.use(VueRouter)
```
4.创建路由对象
```javascript
const router = new VueRouter({
  //注意routes是固定的不可更改
  routes:[
    //配置#锚点与组件的对应关系
    //path:'锚点信息', componet:组件模块
    { path:'/hm', componet:index }
    
  ]
})
```
5.挂载路由
```js
new Vue({
  // 5) 挂载(created window.onhashchange window.location.hash if else if)
  router, // 全写：router:router
  render: h => h(App)
}).$mount('#app')
```
## 重定向
```js
//在路由配置中设置重定向redirect:'锚点信息'
{path:'/',redirect:'/hm'}
```
## 子路由
>App.vue是根基路由（第1级别）内部可以有具体的业务组件（第2级别）业务组件内部还会有具体的内容（第3级别）
```js
//子路由的关键点在于在其父级的路由配置中设置children:[子路由的配置]
{ path: '/hm',component:index,
  children:[
    //配置子路由的信息
    {path:'/hm/zi',component:子路由的模块名}
  ]
}
```
## 路由传参
1.设置路由参数
2.接收路由参数
3.获取路由参数

