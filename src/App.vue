<template>
  <div id="app">
    <keep-alive>
      <!-- keep-alive表示当页面加载过一次路由，下次再使用时就可以从内存中直接使用 keep-alive会在vue中增加一个生命周期函数activated-->
    <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
