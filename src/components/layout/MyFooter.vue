<template>
  <div class="container">
    <div class="footer-header">
      <img
        src="https://shopdunk.com/wp-content/uploads/2022/04/Property-1White_mobile.svg"
        alt=""
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, hic atque
        eligendi suscipit molestias sit illo magnam ullam excepturi praesentium
        numquam nulla non modi cupiditate, facere dolorum fuga id explicabo.
      </p>
    </div>

    <v-expansion-panels dark accordion>
      <v-expansion-panel v-for="(item, i) in 5" :key="i">
        <v-expansion-panel-header> Item </v-expansion-panel-header>
        <v-expansion-panel-content>
          <router-link :to="{name: 'ProductList'}">Product List</router-link>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <div class="social-list mt-2 border text-center" style="color:white">
        <div class="row">
            <div class="col">
                <a href="facebook.com">
                    <b-icon icon="facebook" font-scale="2"></b-icon>
                </a>
            </div>
            <div class="col">
                <a href="youtube.com">
                    <b-icon icon="youtube" font-scale="2" style="color:red"></b-icon>
                </a>
            </div>
            <div class="col">
                <a href="instagram.com">
                    <b-icon icon="instagram" font-scale="2" style="color:rgb(64, 93, 230)"></b-icon>
                </a>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: black;
  height: calc(100% - 120px);
}
.footer-header p {
  color: white;
  margin: 10px 0px;
}
.social-list .row .col{
  margin: 10px 0px;
}
</style>
