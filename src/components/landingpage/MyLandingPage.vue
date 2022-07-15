<template>
  <div>
    <MyNavigation />
    <MySlider />
    <MyPoster :posterList="poster" />
    <div class="container">
      <div class="row">
        <h2 class="text-center">iPhone</h2>
        <div
          class="p-3 col-6 col-md-3"
          v-for="(product, index) in products"
          :key="index"
          style="cursor:pointer"
          @click="toProduct(index)"
        >
          <MyProductGrid :product="product" />
        </div>
      </div>
      <div class="row">
        <h2 class="text-center">iPad</h2>
        <div
          class="p-3 col-6 col-sm-6 col-md-3"
          v-for="(product, index) in products"
          :key="index"
          style="cursor:pointer"
          @click="toProduct(index)"
        >
          <MyProductGrid :product="product" />
        </div>
      </div>
      <div class="row text-center">
        <h4 v-rainbow>Subscribe to our latest news</h4>
        <p>Special information</p>
      </div>
      <div class="row">
        <div class="col" style="display: flex">
          <b-form-input
            class="w-75"
            placeholder="Enter your name"
          ></b-form-input>
          <button class="btn btn-primary w-25 ms-3">Subscribe</button>
        </div>
      </div>
    </div>
    <MyFooter />
  </div>
</template>

<script>
import MyNavigation from "../layout/MyNavigation.vue";
import MySlider from "./MySlider.vue";
import MyPoster from "./MyPoster.vue";
import MyProductGrid from "./MyProductGrid.vue";
import MyFooter from "../layout/MyFooter.vue";
export default {
  name: "App",
  data() {
    return {
      products: [
        {
          color: "green",
          title: "iPhone 13 Pro Max",
          bgtext: "Apple",
          price: "26990000",
          category: 'iPhone',
          src: require("../../assets/product_thumb/iPhone13ProMaxthumb.png"),
          images: [
            require("../../assets/product_images/iPhone 13 Pro Max-image-165737423656.png"),
            require("../../assets/product_images/iPhone 13 Pro Max-image-1657374236162.png"),
            require("../../assets/product_images/iPhone 13 Pro Max-image-1657374236307.png"),
            require("../../assets/product_images/iPhone 13 Pro Max-image-1657374236396.png"),
          ],
        },
        {
          color: "blue",
          title: "iPhone 13",
          bgtext: "Apple",
          price: "18990000",
          src: require("../../assets/product_thumb/iPhone13thumb.jpg"),
          category: 'iPhone',
          images: [
            require("../../assets/product_images/iPhone 13-image-1657374272172.jpg"),
            require("../../assets/product_images/iPhone 13-image-1657374272176.jpg"),
            require("../../assets/product_images/iPhone 13-image-1657374272201.jpg"),
            require("../../assets/product_images/iPhone 13-image-1657374272932.jpg"),
          ],
        },
        {
          color: "green",
          title: "iPhone 12",
          bgtext: "Apple",
          price: "15790000",
          src: require("../../assets/product_thumb/iPhone12thumb.png"),
          category: 'iPhone',
          images: [
            require("../../assets/product_images/iPhone 12-image-1657374293277.jpg"),
            require("../../assets/product_images/iPhone 12-image-1657374293285.jpg"),
            require("../../assets/product_images/iPhone 12-image-1657374293395.png"),
            require("../../assets/product_images/iPhone 12-image-1657374293873.jpg"),
          ],
        },
        {
          color: "green",
          title: "iPhone 11",
          bgtext: "Apple",
          price: "10590000",
          src: require("../../assets/product_thumb/iPhone11thumb.png"),
          category: 'iPhone',
          images: [
            require("../../assets/product_images/iPhone 11-image-1657374313307.jpg"),
            require("../../assets/product_images/iPhone 11-image-1657374313391.jpg"),
            require("../../assets/product_images/iPhone 11-image-1657374313859.jpg"),
            require("../../assets/product_images/iPhone 11-image-1657374313962.png"),
          ],
        },
      ],
      poster: [
        require("../../assets/poster/AirPods-MB.jpg"),
        require("../../assets/poster/Care-MB.jpg"),
        require("../../assets/poster/Pencil-MB.jpg"),
      ],
    };
  },
  components: {
    MyNavigation,
    MySlider,
    MyPoster,
    MyProductGrid,
    MyFooter,
  },
  methods: {
    toProduct(index) {
      this.$router.push({ name: "ProductDetail", params: { id: index } });
    },
  },
};
</script>

<style scoped>
template {
  width: 100%;
}
#app {
  width: 100%;
}
</style>
