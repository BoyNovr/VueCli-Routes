<template>
    current props : {{ nama }}
    <br>
    <router-link to="/articles/3">Go to a different article </router-link>
    <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
        <div class="col-md-6 px-0">
            <h1 class="display-4 fst-italic">Incididunt ut labore et dolore magna aliqua</h1>
            <p class="lead my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
    </div>

    <div class="row g-5">
        <div class="col-md-8">
            <h3 class="pb-4 mb-4 fst-italic border-bottom">{{ article.title }}</h3>

            <article class="blog-post">
                <p class="blog-post-meta">{{ article.date }} <strong>{{ article.author }}</strong></p>
               <div v-html="article.content"></div>
            </article>
        </div>

        <div class="col-md-4">
            <div class="position-sticky" style="top:2rem;">
            <div class="p-4 mb-3 bg-light rounded">
                <h4 class="fst-italic">About</h4>
                <p class="mb-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditis praesentium voluptatum delenit</p>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default{
    // props:['articleId'],
    props:['nama'],
    data(){
        return{
            article:{}
        }
    },

    mounted(){
        this.loadArticledata(this.$route.params.articleId)
    },
    methods:{
        loadArticledata(articleId){
        axios.get(`http://localhost:3004/articles/${articleId}`)
        .then(response =>{
            this.article=response.data
        })
        }
    },
    watch:{
        $route(to){
            this.loadArticledata(to.params.articleId)
        }
    }
  
}
</script>