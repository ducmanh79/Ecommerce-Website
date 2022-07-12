<template>
  <div id="main">
    <MyNavigation />
    <div class="container text-center">
      <h2>Iphone</h2>
      <MySlider />
      <div class="row mt-2">
        <div
          class="p-3 col-6 col-sm-3"
          v-for="(product, index) in data"
          :key="index"
        >
          <MyProductGrid :product="product" />
        </div>
      </div>
      <div class="container">
        <div class="row mt-2 gap-2">
          <div class="col-sm-6">
            <div
              class="row border rounded-3 shadow"
              style="background-color: #fff"
            >
              <div class="col">
                <img
                  src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-8e3a1d8/wp-content/uploads/elementor/thumbs/Image-Standard-poarz4misqzg6twg7xszvw3tdbaevlod3cps91fz72.png"
                  style="height: 120px"
                  alt=""
                />
              </div>
              <div class="col">
                <p>Find the best iPhone for you</p>
                <a href="#" style="text-decoration: none">Compare</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="row border rounded-3 shadow"
              style="background-color: #fff"
            >
              <div class="col">
                <img
                  src="https://cdn-dgcei.nitrocdn.com/QaFavQVnaqgHtiSsAelwGDKVguOuACXM/assets/static/optimized/rev-8e3a1d8/wp-content/uploads/elementor/thumbs/Image-Standard-poarz4misqzg6twg7xszvw3tdbaevlod3cps91fz72.png"
                  style="height: 120px"
                  alt=""
                />
              </div>
              <div class="col">
                <p>Find the best iPhone for you</p>
                <a href="#" style="text-decoration: none">Compare</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="container text-start mt-4 shadow rounded-3"
        style="background-color: #fff"
      >
        <h3>1. History of iPhone formation and development</h3>
        <p>
          iPhone is a line of smart phones developed from Apple Inc., first
          launched by Steve Jobs and opened for sale in 2007. Besides the
          features of a regular phone, the iPhone is also equipped with a touch
          screen. , camera, ability to play music and movies, web browser, etc.
          The second version is iPhone 3G launched in July 2008, equipped with a
          global positioning system, high-speed 3G network.
        </p>
        <p>
          Over the past 15 years, 34 iPhone models have been produced from the
          2G series to the iPhone 13 Pro Max and Apple is one of the most loved
          and used phone brands in the world.
        </p>

        <h3>2. What device codes does iPhone have?</h3>
        <p>
          The iPhones distributed by Apple in any country will carry the code of
          that country.
        </p>

        <p>2. What device codes does iPhone have?</p>
        <ul>
          <li>LL: USA</li>
          <li>ZA: Singapore</li>
          <li>TH: Thailand</li>
          <li>JA: Japand</li>
        </ul>
        <p>
          These codes appearing in Vietnam are all hand-carried and imported
          goods. In Vietnam, the iPhone will carry the VN/A code. All these
          codes are genuine Apple distribution. The advantage when you use
          iPhone code VN/A is a better warranty with 12 months according to
          Apple's standards.
        </p>
        <p>
          Your iPhone will be warranted at all Apple service centers in Vietnam,
          some international codes are denied warranty and must be taken to
          Apple service centers abroad. Very complicated, right?
        </p>
        <div class="text-center">
            <button
            class="btn btn-outline-primary"
            @click="fullScript = !fullScript"
            v-show="!fullScript"
            >
            View more
            </button>
        </div>
        <Transition appear>
          <div v-show="fullScript">
            <h3>3. Which iPhone lines did Apple kill?</h3>
            <p>
              Up to now, Apple has stopped (discontinued production) the old
              iPhone lines including: iPhone 2G, iPhone 3G, iPhone 4, iPhone 5
              series, iPhone 6 series, iPhone 7 series, iPhone 8 series, iPhone
              X series, iPhone SE (1st generation), iPhone SE (2nd generation),
              iPhone 11 Pro, iPhone 11 Pro Max, iPhone 12 Pro, iPhone 12 Pro
              Max.
            </p>

            <h3>4. What iPhone lines does ShopDunk provide?</h3>
            <p>
              ShopDunk is one of the retail brands authorized by Apple in
              Vietnam, meeting the strict requirements from Apple such as:
              business services, customer care services, store locations, etc.
            </p>

            <p>
              The iPhones distributed by Apple Vietnam in our country all carry
              the VN/A code and are warranted for 12 months as standard at Apple
              service centers. The iPhone lines offered at ShopDunk include:
              iPhone 11, iPhone 12, iPhone 12 mini, iPhone 13 series, iPhone SE
              3 (2022).
            </p>
          </div>
        </Transition>

      </div>
      <div class="container mt-5">
        <div class="row text-center">
            <h4>Subscribe to our latest news</h4>
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
    </div>
    <MyFooter />
  </div>
</template>

<script>
import MyNavigation from "../layout/MyNavigation.vue";
import MyFooter from "../layout/MyFooter.vue";
import BaseRequest from "../../store/BaseRequest";
import config from "../../config";
import MySlider from "../landingpage/MySlider.vue";
import MyProductGrid from "../landingpage/MyProductGrid.vue";
export default {
  components: {
    MyNavigation,
    MyFooter,
    MySlider,
    MyProductGrid,
  },
  data() {
    return {
      data: null,
      baseURL: config.baseURL,
      thumbURL: config.thumbURL,
      fullScript: false,
    };
  },
  mounted() {
    this.getProductList();
  },
  methods: {
    getProductList() {
      BaseRequest.get("/products").then((response) => {
        this.data = response.data.products;
      });
    },
  },
};
</script>

<style scoped>
#main{
  height: 100%;
}
</style>
