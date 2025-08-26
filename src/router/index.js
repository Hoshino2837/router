import { createRouter,createWebHashHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';

const routes =[
    {
        path : "/",
        name:'home',
        component:HomeView
        
    },
    {
        path : "/about",
        name:"about",
        component:()=> import('../views/AboutView.vue')  
    },
    {
        path:"/news",
        name:"news",
        component:()=> import('../views/NewsView.vue')
    },
    {
        path : '/NewsDetails1',
        name : "newdetails1",
        component:()=> import('../views/NewsDetailsView1.vue')
    },
    {
        path : '/NewsDetails2',
        name : "newdetails2",
        component:()=> import('../views/NewsDetailsView2.vue')
    },
    {
        path : '/NewsDetails3',
        name : "newdetails3",
        component:()=> import('../views/NewsDetailsView3.vue')
    },
    {
        path : '/NewsDetails4',
        name : "newdetails4",
        component:()=> import('../views/NewsDetailsView4.vue')
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default router;