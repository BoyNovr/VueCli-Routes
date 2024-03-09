import { createApp } from 'vue'
import App from './App.vue'
import { createRouter,createWebHistory } from 'vue-router'

import Header  from './components/header_footer/Header.vue';
import Footer from './components/header_footer/Footer.vue';
import Articles from './components/Articles/index.vue';
import Contact from './components/Contact/index.vue';
import Home from './components/index.vue';
import Article from './components/Articles/article.vue';
import notFound from './components/404.vue';
import Login from './components/login.vue';
// import Notify from './components/notify.vue';


const app=createApp(App);

const theData=(route)=>{
    return{
        nama:route.path +' '+ 'boy novriyal'
    }
}

const checkAuth=()=>{
    const isAuth=true;
    if(!isAuth)return '/login'
    return true
}

const isAdmin=()=>{
    const isAuth=true;
    if(!isAuth)return '/login'
    return true
}
const routes=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',component:Home},
        {path:'/articles',meta:{authCheck:true},component:Articles,beforeEnter:[checkAuth,isAdmin]},
        {path:'/contact',component:Contact,name:'kontak'},
        {path:'/articles/:articleId',meta:{authCheck:true},component:Article,props:theData },
        {path:'/login',component:Login},
        // {path:'/contact',redirect:'/'},

        // {path:'/articles/:articleId',component:Article,props:true }
        // {path:'/articles/:articleId',component:Article,props:{
        //     nama:'Boy'
        // } }  

        // {path:'/contact',components:{
        // default:Contact,
        // notify: Notify
        // },name:'kontak'},

        {path:'/:notFound(.*)',component:notFound},
    ],
    linkActiveClass:'active'
});

routes.beforeEach((to,from,next)=>{
    if(to.meta.authCheck){
        const isAuth=true;
        if(to.path !== '/login' && !isAuth) {return next({path:'/login'})}
        if(to.path === '/login' && isAuth){return next({path:'/'})}
        return next() 
    }else{
        next()
    }
})
// routes.beforeEach((to)=>{
//     const isAuth=true;
//     if(to.path !== '/login' && !isAuth) {return '/login'}
//     if(to.path === '/login' && isAuth){return '/'}
//     return true
// })
// routes.beforeEach((to,from,next)=>{
//     const isAuth=false;
//     if(to.path==='/'){
//         next()
//     }else{
//         if(to.path !== '/login' && !isAuth) {return next({path:'/login'})}
//         if(to.path === '/login' && isAuth){return next({path:'/'})}
//         return next()
//     }
   
// })

app.component('app-header',Header);
app.component('app-footer',Footer);
app.use(routes)
app.mount('#app')
