<template>
    <div class="container">
        <div class="row">
            <div class="p-3 col-lg-4 col-sm-12">
                <img src="https://shopdunk.com/wp-content/uploads/2022/06/AirPods-MB.jpg" alt="" class="poster">
            </div>
            <div class="p-3 col-lg-4 col-sm-12">
                <img src="https://shopdunk.com/wp-content/uploads/2022/06/Pencil-MB.jpg" alt="" class="poster">
            </div>
            <div class="p-3 col-lg-4 col-sm-12">
                <img src="https://shopdunk.com/wp-content/uploads/2022/06/Care-MB.jpg" alt="" class="poster">
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            posterList: null
        }
    }
}
</script>
<style scoped>
.poster{
    max-width: 100%;
    max-height: 100%;
}
</style>