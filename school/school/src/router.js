import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from './components/HelloWorld.vue'
var router = new VueRouter({ // 创建路由实例对象router
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home, name: 'home' }
    ]
})

export default router // 暴露路由对象属性