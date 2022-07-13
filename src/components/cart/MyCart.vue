<template>
  <div id="main">
    <MyNavigation />
    <MyFooter />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import MyNavigation from "../layout/MyNavigation.vue";
import MyFooter from "../layout/MyFooter.vue";
export default {
    props: ['product'],
    components:{
        MyNavigation,
        MyFooter
    },
    data(){
        return{

        }
    },
    mounted(){
      console.log(this.orders);
    },
    computed:{
        ...mapGetters(['orders'])
    }
}
</script>

<style>

</style>