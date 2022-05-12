import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home // 每个路由都要映射一个组件。访问根路径时，找对应的Home组件。根据import，Home组件在'@/pages/home/Home'中。根路径指的是页面访问url时的路径
    }, {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
