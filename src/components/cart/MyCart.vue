<template>
  <div id="main">
    <MyNavigation />
    <div class="container container1" >
      <h3>Your order detail</h3>
      <p>Products</p>
      <div class="product" v-for="(product, index) in orders" :key="index">
        <div class="row" v-if="product.title != null">
          <div class="col product-img">
            <img style="width: 100%" :src="product.thumbnail" alt="" />
          </div>
          <div class="col product-info">
            <p>{{ product.title }} x {{ product.quantity }}</p>
            <p>Color selected: {{ product.color }}</p>
            <p>Memory selected: {{ product.memory }}</p>
          </div>
        </div>
      </div>
      <hr />
      <v-app style="max-height: 500px">
        <v-main style="width: 100%">
          <div class="card">
            <div class="card-header">Payment detail</div>
            <div class="card-body">
              <v-form
                ref="myForm"
                method="post"
                v-model="valid"
                lazy-validation
                action="http://mercury.swin.edu.au/it000000/formtest.php"
                autocomplete="off"
              >
                <v-text-field
                  label="Name"
                  name="cusName"
                  v-model="cusName"
                  :rules="nameRules"
                  required
                ></v-text-field>
                <v-text-field
                  label="Address"
                  name="cusAddress"
                  v-model="cusAddress"
                  :rules="addressRules"
                  required
                ></v-text-field>
                <v-text-field
                  label="Phone number"
                  name="cusPhoneNumber"
                  v-model="cusPhoneNumber"
                  :rules="mobileNumberRules"
                  required
                ></v-text-field>
                <v-text-field
                  label="Email"
                  name="cusEmail"
                  v-model="cusEmail"
                  :rules="emailRules"
                  required
                ></v-text-field>
                <div class="row">
                  <div class="col">Total:</div>
                  <div class="col">
                    {{ payment | priceFormat }}
                  </div>
                </div>
                <div class="row">
                  <v-btn type="submit" :disabled="!valid" color="primary" @click="validate">Process payment </v-btn>
                  <button type="button" class="btn btn-danger mt-3" @click="clearOrders">
                    Clear Cart
                  </button>
                </div>
              </v-form>
            </div>
          </div>
        </v-main>
      </v-app>
    </div>
    <div class="container mt-4">
      <div class="row text-center">
        <h4 v-rainbow>Subscribe to our latest news</h4>
        <p>Special information</p>
      </div>
      <div class="row">
        <div class="col" style="display: flex">
          <b-form-input class="w-75" placeholder="Enter your name"></b-form-input>
          <button class="btn btn-primary w-25 ms-3">Subscribe</button>
        </div>
      </div>
    </div>
    <MyFooter />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import MyNavigation from "../layout/MyNavigation.vue";
import MyFooter from "../layout/MyFooter.vue";
export default {
  props: ["product"],
  components: {
    MyNavigation,
    MyFooter,
  },
  data() {
    return {
      payment: 0,
      valid: true,
      cusName: "",
      cusAddress: "",
      cusPhoneNumber: "",
      cusEmail: "",
      ordersReceive: null,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && /^[a-zA-Z0-9_ ]*$/.test(v)) || "Name must only be letters",
      ],
      addressRules: [
        (v) => !!v || "Address is required",
        (v) =>
          (v && v.length <= 40) ||
          "Address can be no longer than 40 characters",
      ],
      mobileNumberRules: [
        (v) => !!v || "Mobile Number is required",
        (v) =>
          (v && v.length == 10) || "Mobiel Number must be exactly 10 digits",
        (v) => /^0/g.test(v) || "Mobile number must start with 04",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) =>
          /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(v) ||
          "E-mail must be valid",
      ],
    };
  },
  methods: {
    ...mapMutations(["clearOrders"]),
    calculatePayment() {
      this.orders.forEach((element) => {
        this.payment += parseInt(element.price) * parseInt(element.quantity);
      });
    },
    validate() {
      this.$refs.myForm.validate()
    },
  },
  mounted() {

    this.calculatePayment();
  },
  computed: {
    ...mapGetters(["orders"]),
  },
  filters: {
    priceFormat(value) {
      return new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "VND",
      }).format(value);
    },
  },
};
</script>

<style scoped>
#main {
  overflow: hidden;
}
.container1 {
  max-width: 500px;
  padding: 0;
}
.product {
  margin-bottom: 50px;
  max-width: 498px;
  background-color: #fff;
}
.product-img {
  max-width: 200px;
  padding: 0;
}
.product-img img {
  max-width: 200px;
}
.product-info {
  padding: 0;
  max-width: 310px;
}
</style>
