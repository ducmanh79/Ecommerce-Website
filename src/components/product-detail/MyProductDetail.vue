<template>
  <div id="main">
    <MyNavigation />
    <div class="container">
      <agile v-if="productImages" ref="main" :options="option">
        <div class="slide" v-for="(image, index) in productImages" :key="index">
          <img :src="baseURL + image.image_path" alt="" class="slide-img" />
        </div>
        
      </agile>

      <agile
        v-if="productImages"
        ref="thumbnails"
        :slides-to-show="3"
        :options="option"
      >
        <div class="slide" v-for="(image, index) in productImages" :key="index" @click="changeSlide(index)">
          <img :src="baseURL + image.image_path" alt="" class="slide-img" />
        </div>
      </agile>
      <div class="agile-controller">
        <button @click="handlePrev">Prev</button>
        <button @click="handleNext">Next</button>
      </div>
    </div>
    <div class="container text-start product-information" v-if="data">
      <div class="row">
        <h3>{{data.title}}</h3>
      </div>
      <hr>
      <div class="row">
        <h3 style="font-weight:bold">{{data.price | priceFormat}}</h3>
        <div id="color-selector">
          <p v-if="selected">Selected color: {{productToBeAdd.color}}</p>
          <ul>
            <li id="green" @click="assignColor('green')"><span></span></li>
            <li id="blue" @click="assignColor('blue')"><span></span></li>
            <li id="grey" @click="assignColor('grey')"><span></span></li>
            <li id="black" @click="assignColor('black')"><span></span></li>
            <li id="yellow" @click="assignColor('yellow')"><span></span></li>
          </ul>
        </div>
        <div id="memory-selector" class="mb-2">
          <p v-if="memSelected">Selected memory of {{productToBeAdd.memory}}</p>
          <ul>
            <li><button @click="assignMem('128 GB')" class="btn btn-outline-primary">128 GB</button></li>
            <li><button @click="assignMem('256 GB')" class="btn btn-outline-primary">256 GB</button></li>
            <li><button @click="assignMem('512 GB')" class="btn btn-outline-primary">512 GB</button></li>
            <li><button @click="assignMem('1 TB')" class="btn btn-outline-primary">1 TB</button></li>
          </ul>
          <button class="btn btn-outline-primary" @click="clearProduct">Clear selected product</button>
        </div>
        <hr>
        <div class="input-group mb-3 w-75">
          <input placeholder="quantity" type="text" class="form-control" aria-label="Example text with button addon" aria-describedby="button-addon1">
          <button @click="createProduct(productToBeAdd)">add</button>
          <router-link :to="{name: 'Cart'}">Add to cart</router-link>
        </div>
      </div>
    </div>
    <MyFooter />
  </div>
</template>

<script>
import MyNavigation from "../layout/MyNavigation.vue";
import MyFooter from "../layout/MyFooter.vue";
import BaseRequest from "../../store/BaseRequest";
import config from "../../config";
import { VueAgile } from "vue-agile";
import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
export default {
  components: {
    MyNavigation,
    MyFooter,
    agile: VueAgile
  },
  data() {
    return {
      baseURL: config.baseURL,
      thumbURL: config.thumbURL,
      data: null,
      productImages: null,
      productToBeAdd: {title: null, price: null, color: 'green', memory: '128 GB', thumbnail: null},
      selected: true,
      memSelected: true,
      option: {
        navButtons: false,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots: false,
            },
          },

          {
            breakpoint: 900,
            settings: {
              navButtons: true,
              dots: true,
              infinite: false,
            },
          },
        ],
      },
    };
  },
  methods: {
    getProductDetail(productId) {
      BaseRequest.get("/products/" + productId).then((response) => {
        this.data = response.data.product;
        this.productImages = response.data.images;
        this.productToBeAdd.title = response.data.product.title
        this.productToBeAdd.price = response.data.product.price
        this.productToBeAdd.thumbnail = this.baseURL + response.data.product.thumbnail
      });
    },
    changeSlide(index){
      this.$refs.main.goTo(index)
      this.$refs.thumbnails.goTo(index)
    },
    handlePrev(){
      this.$refs.main.goToPrev()
      this.$refs.thumbnails.goToPrev()
    },
    handleNext(){
      this.$refs.main.goToNext()
      this.$refs.thumbnails.goToNext()
    },
    assignColor(col){
      this.productToBeAdd.color = col;
      this.selected = true;
    },
    assignMem(mem){
      this.productToBeAdd.memory = mem;
      this.memSelected = true;
      console.log(this.productToBeAdd);
    },
    clearProduct(){
      this.selected = false
      this.memSelected = false
    },
    ...mapActions(['createProduct']),
    ...mapMutations(['setNewProduct'])
  },
  mounted() {
    this.getProductDetail(this.$route.params.id);
  },
  computed:{
    ...mapGetters(['orders']),
    ...mapState(['newProduct'])
  },
  filters:{
    priceFormat(value){
      return new Intl.NumberFormat('it-IT', {style : 'currency', currency : 'VND'}).format(value);
    }
  },
};
</script>

<style lang="scss" scoped>
#main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
.slide {
  touch-action: none;
}
.slide-img {
  width: 100%;
}
.agile-controller{
  display: flex;
  justify-content: space-between;
}
#color-selector ul{
  display: flex;
  padding: 0;
  li{
    margin: 0px 5px;
    list-style-type: none;
  }
  #green span{
    height: 25px;
    width: 25px;
    background-color: green;
    border-radius: 50%;
    display: inline-block;
  }

  #blue span{
    height: 25px;
    width: 25px;
    background-color: blue;
    border-radius: 50%;
    display: inline-block;
  }

  #grey span{
    height: 25px;
    width: 25px;
    background-color: grey;
    border-radius: 50%;
    display: inline-block;
  }

  #black span{
    height: 25px;
    width: 25px;
    background-color: black;
    border-radius: 50%;
    display: inline-block;
  }

  #yellow span{
    height: 25px;
    width: 25px;
    background-color: yellow;
    border-radius: 50%;
    display: inline-block;
  }
}
#memory-selector{
  ul{
    display: flex;
    padding: 0;
    li{
      list-style-type: none;
      margin: 0px 5px;
    }
  }
}
.input-group{
  .btn{
    background-color: #0066CC;
    color: white;
  }
}
</style>
