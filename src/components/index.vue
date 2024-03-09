<template>
    <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Inventore veritatis et</h1>
            <p class="col-md-8" fs-4>Sed ut perspiciatis unde omnis iste natus error sit voliptatem accusantium qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</p>
            <button 
            class="btn btn-primary btn-lg" 
            type="button"
            @click="goToArticle()"
            >Read more</button>
        </div>
    </div>

    <div class="row align-items-md-stretch">
        <div class="col-md-6">
            <div class="h-100 p-5 text-white bg-dark rounded-3">
                <h2>Et harum quidem rerum facilis est et</h2>
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                <button class="btn btn-outline-light" type="button">Read more</button>
            </div>
        </div>

        <div class="col-md-6">
            <div class="h-100 p-5 text-white bg-dark rounded-3">
                <h2>Et harum quidem rerum facilis est et</h2>
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                <button class="btn btn-outline-light" type="button">Read more</button>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    mounted(){
        console.log(this.$router)
    },
    methods:{
        goToArticle(){
            this.$router.push('/articles')
        }
    }
}
</script>