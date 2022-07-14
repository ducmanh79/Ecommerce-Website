<template>
  <div id="main">
    <MyNavigation />
    <div class="container">
      <h3>Your order detail</h3>
      <p>Products</p>
      <div v-for="(product, index) in orders" :key="index">
        <div class="row">
          <div class="col">
            <img style="width: 100%" :src="product.thumbnail" alt="" />
          </div>
          <div class="col">
            <p>{{ product.title }} x {{ product.quantity }}</p>
            <p>Color selected: {{ product.color }}</p>
            <p>Memory selected: {{ product.memory }}</p>
          </div>
        </div>
      </div>
      <hr />
      <v-app style="max-height: 500px;">
        <v-main style="width: 100%">
          <div class="card">
            <div class="card-header">Payment detail</div>
            <div class="card-body">
              <v-form ref="myForm" method="post" v-model="valid" lazy-validation action="http://mercury.swin.edu.au/it000000/formtest.php" autocomplete="off">
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
                  <v-btn
                    type="submit"
                    color="primary"
                    >Process payment
                  </v-btn>
                  <button class="btn btn-danger mt-3" @click="clearOrders">
                    Clear Cart
                  </button>
                </div>
              </v-form>
            </div>
          </div>
        </v-main>
      </v-app>
    </div>
    <MyFooter />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import MyNavigation from "../layout/MyNavigation.vue";
import MyFooter from "../layout/MyFooter.vue";
import config from "../../config";
export default {
  props: ["product"],
  components: {
    MyNavigation,
    MyFooter,
  },
  data() {
    return {
      baseURL: config.baseURL,
      thumbURL: config.thumbURL,
      payment: 0,
      valid: true,
      cusName: '', cusAddress: '', cusPhoneNumber: '', cusEmail: '',
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && /^[a-zA-Z0-9_ ]*$/.test(v)) || "Name must only be letters",
      ],
      addressRules: [
        (v) => !!v || 'Address is required',
        (v) => (v && v.length <= 40) || "Address can be no longer than 40 characters",
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
        this.payment += parseInt(element.price);
      });
    },
    validate() {
      this.$refs.myForm.validate();
      console.log('submit');
    },
  },
  mounted() {
    console.log(this.orders);
    this.orders.splice(0, 1), this.calculatePayment();
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

<style></style>
