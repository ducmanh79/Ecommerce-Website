<template>
    <div id="nav">
        <div id="main-nav">
            <span @click="showMenu = !showMenu"  style="color:white;">
                    <b-icon icon="list" font-scale="1.5"></b-icon>
            </span>
            <router-link :to="{name: 'MyLandingPage'}">
                <img src="https://shopdunk.com/wp-content/uploads/2022/04/Property-1White_mobile.svg" alt="" width="131" height="34">
            </router-link>
            <b-icon-cart font-scale="1.5" id="icon-cart"></b-icon-cart>
        </div>
        <div id="second-nav" v-show="showMenu == false">
            <div class="row">
                <div class="col">
                    <a href="#">Iphone</a>
                </div>
                <div class="col" >
                    <a href="#">Ipad</a>
                </div>
                <div class="col">
                    <a href="#">mac</a>
                </div>
                <div class="col">
                    <a href="#">Accessories</a>
                </div>
                <div class="col">
                    <a href="#">Apple Watch</a>
                </div>                                                                                                 
            </div>
        </div>     
        <Transition name="slide-fade">
            <div id="mobile-nav" v-if="showMenu">
                <span @click="showMenu = !showMenu" v-show="showMenu == true">
                    <b-icon-x-lg></b-icon-x-lg>
                </span>
                <b-list-group id="mobile-nav">
                    <b-list-group-item>
                    <b-input-group size="sm" class="mb-2">
                    <b-input-group-prepend is-text>
                        <b-icon icon="search"></b-icon>
                    </b-input-group-prepend>
                    <b-form-input type="search" placeholder="Tim kiem san pham"></b-form-input>
                    </b-input-group>
                    </b-list-group-item>
                    <b-list-group-item>
                        <a href="#">Dich vu</a>
                    </b-list-group-item>
                    <b-list-group-item>
                        <a href="#">Khuyen mai</a>
                    </b-list-group-item>
                    <b-list-group-item>
                        <a href="#">Tra gop</a>
                    </b-list-group-item>
                    <b-list-group-item>
                        <a href="#">He thong cua hang</a>
                    </b-list-group-item>
                    <b-list-group-item>
                        <p>Lien he</p>
                        <b-list-group>
                            <b-list-group-item>
                                <span>Mua hang: <a href="#">1900.6626</a></span>
                            </b-list-group-item>
                            <b-list-group-item>
                                <span>Khieu nai: <a href="#">1900.6626</a></span>
                            </b-list-group-item>
                            <b-list-group-item>

                                <span>Doanh nghiep va Doi tac <a href="#">1900.6626</a></span>
                            </b-list-group-item>
                        </b-list-group>
                    </b-list-group-item>
                </b-list-group>
            </div>
        </Transition>
    </div>

</template>

<script>
export default {
    data(){
        return{
            showMenu: false
        }
    }
}
</script>

<style scoped>
#main-nav{
    display: flex;
    justify-content: space-between;
    height: 57px;
    background-color: #515154;
}
#main-nav img{
    margin: 10px 0px;
}

#main-nav #icon-cart{
    margin: 15px 0px;
    margin-right: 15px;
    color: white;
}

#main-nav span{
    padding: 15px 0px;
    padding-left: 15px;
}

#second-nav{
    padding: 0px 15px;
}
#second-nav .row .col {
    text-align: center;
}
#second-nav .row .col a{
    white-space: nowrap;
    color: black;
    text-decoration: none;
}
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

#mobile-nav{
    width: 100%;
    text-align: left;
}
</style>