<template>
    <div :class="'product-inner ' + product.color">
      <div class="product-text-wrap">
        <h2 class="bg-text">Apple</h2>
      </div>
      <div class="product-image-wrap" @mouseover="changeImage" @mouseleave="changeImage2">
        <img :src="image" class="image" />
      </div>
      <div class="product-detail">
        <h2>{{ product.title }}</h2>
        <p>{{product.price | priceFormat}}</p>
      </div>
    </div>
</template>

<script>
import config from '../../config'
export default {
  props: ['product'],
  data(){
    return{
      thumbURL: config.thumbURL,
      productImages: null,
      image: null
    }
  },
  filters:{
    priceFormat(value){
      return new Intl.NumberFormat('it-IT', {style : 'currency', currency : 'VND'}).format(value);
    }
  },
  methods:{
    changeImage(){
      this.image = this.productImages[1]
    },
    changeImage2(){
      this.image = this.product.src
    }
  },
  mounted(){
    this.productImages = this.product.images
    this.image = this.product.src
  }
}
</script>

<style>
  .product-inner {
    position: relative;
    padding: 25px;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    width: 100%;
    border-radius: 5px;
  }
  .product-inner.green {
    background-image: linear-gradient(to bottom right, #24D484, #116432);
  }
  .product-inner.blue {
    background-image: linear-gradient(to bottom left, #24D484, #2474C4 70%);
  }
  .product-inner.pink {
    background-image: linear-gradient(to bottom right, #F444A4, #1168D4);
  }
  .product-text-wrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    overflow: hidden;
    height: 290px;
  }
  
  .product-text-wrap h2 {
    color: #313131;
    font-size: 50px;
    font-weight: 900;
    opacity: 0.2;
    transform-origin: center;
  }
  .product-image-wrap {
    position: relative;
    z-index: 1;
    transform-origin: center;
  }
  .product-image-wrap .image {
    width: 100%;
    filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.25));
  }
  .product-detail {
    background-color: #FFF;
    padding: 25px;
    margin: 0px -25px -25px;
  } 
  .product-detail h2 {
    font-size: 24px;
    font-weight: 700;
    color: #676767;
    margin-bottom: 15px;
    height: 90px;
  }
  .product-detail p {
    font-weight: bold;
    font-size: 14px;
    line-height: 1.5;
    color: #676767;
  }
</style>