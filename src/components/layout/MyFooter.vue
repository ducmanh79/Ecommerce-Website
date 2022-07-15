<template>
  <div id="main">
    <div class="container">
      <div class="footer-header">
        <img
          src="https://shopdunk.com/wp-content/uploads/2022/04/Property-1White_mobile.svg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, hic
          atque eligendi suscipit molestias sit illo magnam ullam excepturi
          praesentium numquam nulla non modi cupiditate, facere dolorum fuga id
          explicabo.
        </p>
      </div>
      <div id="accordion">
        <v-expansion-panels dark accordion>
          <v-expansion-panel v-for="(item, i) in 5" :key="i">
            <v-expansion-panel-header> Item </v-expansion-panel-header>
            <v-expansion-panel-content>
              <router-link :to="{ name: 'ProductList' }"
                >Product List</router-link
              >
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>

      <div class="social-list mt-2 text-center" style="color: white">
        <div class="row">
          <div class="col">
            <a href="facebook.com">
              <b-icon icon="facebook" font-scale="2"></b-icon>
            </a>
          </div>
          <div class="col">
            <a href="youtube.com">
              <b-icon icon="youtube" font-scale="2" style="color: red"></b-icon>
            </a>
          </div>
          <div class="col">
            <a href="instagram.com">
              <b-icon
                icon="instagram"
                font-scale="2"
                style="color: rgb(64, 93, 230)"
              ></b-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#main {
  background: black;
}
.container {
  background-color: black;
  display: flex;
  justify-content: space-between;
}
.footer-header p {
  color: white;
  margin: 10px 0px;
}
.footer-header {
  max-width: 40%;
}
#accordion {
  max-width: 40%;
}
.social-list {
  max-width: 20%;
}
.social-list .row {
  display: block;
}
.social-list .row .col {
  margin: 10px 0px;
}
@media screen and (max-width: 800px) {
  .container {
    display: block;
  }
  .social-list{
    border: 1px solid white;
    max-width: 100%;
  }
  .social-list .row {
    display: flex;
  }
  .social-list .row .col {
    margin: 10px 0px;
  }

  .footer-header {
    max-width: 100%;
  }
  #accordion {
    max-width: 100%;
  }
}
</style>
