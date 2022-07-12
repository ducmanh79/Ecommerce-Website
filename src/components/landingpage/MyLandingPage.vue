<template>
  <div>
    <MyNavigation />
    <MySlider />
    <MyPoster />
    <div class="container">
      <div class="row">
        <h2 class="text-center">iPhone</h2>
        <div class="p-3 col-6 col-sm-3" v-for="(product, index) in products" :key="index">
          <MyProductGrid :product="product"/>
        </div>
      </div>
      <div class="row">
        <h2 class="text-center">iPad</h2>
        <div class="p-3 col-6 col-sm-3" v-for="(product, index) in products" :key="index">
          <MyProductGrid :product="product"/>
        </div>
      </div>
      <div class="row text-center">
        <h4>Subscribe to our latest news</h4>
        <p>Special information</p>
      </div>
      <div class="row">
        <div class="col" style="display:flex">
          <b-form-input class="w-75" placeholder="Enter your name"></b-form-input>
          <button class="btn btn-primary w-25 ms-3">Subscribe</button>
        </div>
      </div>
    </div>
    <MyFooter />
  </div>
</template>

<script>
import MyNavigation from '../layout/MyNavigation.vue'
import MySlider from './MySlider.vue'
import MyPoster from './MyPoster.vue'
import MyProductGrid from './MyProductGrid.vue'
import MyFooter from '../layout/MyFooter.vue'
export default {
  name: 'App',
  data(){
    return{
      products:[
        {
          color : "green", 
          title: "iPhone 13 Pro Max",
          bgtext: "Apple",
          src: require('../../assets/iphone-13-pro-max.png')
        },
        {
          color : "green", 
          title: "iPhone 13 Pro Max",
          bgtext: "Apple",
          src: require('../../assets/iphone-13-pro-max.png')
        },
        {
          color : "green", 
          title: "iPhone 13 Pro Max",
          bgtext: "Apple",
          src: require('../../assets/iphone-13-pro-max.png')
        },
        {
          color : "green", 
          title: "iPhone 13 Pro Max",
          bgtext: "Apple",
          src: require('../../assets/iphone-13-pro-max.png')
        }        
      ]
    }
  },
  components: {
    MyNavigation,
    MySlider,
    MyPoster,
    MyProductGrid,
    MyFooter
  }
}
</script>

<style scoped>
template{
  width: 100%;
}
#app{
  width: 100%;
}
</style>
