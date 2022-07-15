<template>
    <div class="container" >
        <div class="row">
            <div class="p-3 col-md-4" v-for="(poster,index) in posterList" :key="index">
                <img :src="poster" alt="" class="poster">
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props: ['posterList'],
}
</script>
<style scoped>
.poster{
    max-width: 100%;
    max-height: 100%;
}
</style>