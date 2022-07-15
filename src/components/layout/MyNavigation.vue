<template>
  <div id="nav">
    <div class="upper-nav">
      <div class="container" id="main-nav">
        <span @click="showMenu = !showMenu" style="color: white" id="menu-bars" v-show="showMenu == false">
          <b-icon icon="list" font-scale="1.5"></b-icon>
        </span>
        <span @click="showMenu = !showMenu" v-show="showMenu == true">
          <b-icon-x-lg></b-icon-x-lg>
        </span>
        <router-link :to="{ name: 'MyLandingPage' }">
          <img
            src="https://shopdunk.com/wp-content/uploads/2022/04/Property-1White_mobile.svg"
            alt=""
            width="131"
            height="34"
          />
        </router-link>
        <div id="second-nav-desktop" v-show="showMenu == false">
          <ul>
            <li><router-link :to="{name: 'ProductList'}">iPhone</router-link></li>
            <li><router-link :to="{name: 'ProductList'}">iPad</router-link></li>
            <li><router-link :to="{name: 'ProductList'}">iMac</router-link></li>
            <li><router-link :to="{name: 'ProductList'}">Accessories</router-link></li>
            <li><router-link :to="{name: 'ProductList'}">Applewatch</router-link></li>
          </ul>
        </div>
        <router-link :to="{ name: 'Cart' }">
          <b-icon-cart font-scale="1.5" id="icon-cart"></b-icon-cart>
        </router-link>
      </div>
    </div>
    <div id="second-nav" v-show="showMenu == false">
      <div class="row">
        <div class="col">
          <router-link :to="{name: 'ProductList'}">iPhone</router-link>
        </div>
        <div class="col">
          <router-link :to="{name: 'ProductList'}">iPad</router-link>
        </div>
        <div class="col">
          <router-link :to="{name: 'ProductList'}">iMac</router-link>
        </div>
        <div class="col">
          <router-link :to="{name: 'ProductList'}">Accessories</router-link>
        </div>
        <div class="col">
          <router-link :to="{name: 'ProductList'}">Applewatch</router-link>
        </div>
      </div>
    </div>
      <div id="mobile-nav" v-if="showMenu">
        <b-list-group id="mobile-nav">
          <b-list-group-item>
            <b-input-group size="sm" class="mb-2">
              <b-input-group-prepend is-text>
                <b-icon icon="search"></b-icon>
              </b-input-group-prepend>
              <b-form-input
                type="search"
                placeholder="Tim kiem san pham"
              ></b-form-input>
            </b-input-group>
          </b-list-group-item>
          <b-list-group-item>
            <a href="#">Services</a>
          </b-list-group-item>
          <b-list-group-item>
            <a href="#">Promotion</a>
          </b-list-group-item>
          <b-list-group-item>
            <a href="#">Product Installment</a>
          </b-list-group-item>
          <b-list-group-item>
            <a href="#">Shop system</a>
          </b-list-group-item>
          <b-list-group-item>
            <p>Contact</p>
            <b-list-group>
              <b-list-group-item>
                <span>Buy products: <a href="#" class="mobile-num">1900.6626</a></span>
              </b-list-group-item>
              <b-list-group-item>
                <span>Complain: <a href="#" class="mobile-num">1900.6626</a></span>
              </b-list-group-item>
              <b-list-group-item>
                <span>Enterprises and Partners <a href="#" class="mobile-num">1900.6626</a></span>
              </b-list-group-item>
            </b-list-group>
          </b-list-group-item>
        </b-list-group>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

<style scoped>
a{
  text-decoration: none;
  color: black;
}
.mobile-num{
  color: blue;
}
.upper-nav {
  background-color: #515154;
}
#main-nav {
  display: flex;
  justify-content: space-between;
  max-height: 65px;
}
#main-nav img {
  margin: 5px 0px;
}

#main-nav #icon-cart {
  margin: 10px 0px;
  margin-right: 15px;
  color: white;
}

#main-nav span {
  padding: 10px 0px;
  padding-left: 15px;
}
#second-nav {
  display: none;
}
#menu-bars {
  display: none;
}
@media screen and (max-width: 768px) {
  #second-nav-desktop {
    display: none;
  }
  #second-nav {
    padding: 0px 15px;
    display: block;
  }
  #second-nav .row .col {
    text-align: center;
    padding: 15px 5px;
  }
  #second-nav .row .col a {
    white-space: nowrap;
    color: black;
    text-decoration: none;
  }
  #menu-bars {
    display: block;
  }
}
#second-nav-desktop {
  padding: 0px 15px;
  width: 80%;
  margin-bottom: 5px;
}
#second-nav-desktop ul li {
  padding: 15px 5px;
  list-style-type: none;
  text-align: center;
  vertical-align: middle;
}
#second-nav-desktop ul {
  display: flex;
  justify-content: space-between;
}
#second-nav-desktop ul li a {
  white-space: nowrap;
  color: white;
  text-decoration: none;
}
#mobile-nav {
  width: 100%;
  text-align: left;
}
</style>
