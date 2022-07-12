<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
    }
  }
}
</script>

<style scoped>
template{
  width: 100%;
}
#app{
  width: 100%;
  background-color: #F5F5F7;
}
</style>
