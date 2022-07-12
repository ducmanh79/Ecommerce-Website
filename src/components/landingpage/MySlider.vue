<template>
  <div>
    <agile v-if="datas">
      <div class="slide" v-for="item in datas" :key="item">
        <img :src="item" alt="" class="slide-img" />
      </div>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";
export default {
  components: {
    agile: VueAgile,
  },
  data() {
    return {
      datas: [
        "https://shopdunk.com/wp-content/uploads/2022/07/Banner-PC-shopdunk-care.jpg",
        "https://shopdunk.com/wp-content/uploads/2022/06/Banner-PC-macbook-air-New.jpg",
        "https://shopdunk.com/wp-content/uploads/2022/06/vnpayWeb.jpg", 
      ],
    };
  }
};
</script>
<style scoped>
.slide-img {
  max-width: 100%;
}
.slide{
  touch-action: none;
}
</style>
