import HomePage from "@/modules/landing/pages/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
       {
        path:"/",
        name:"landing",
        component:()=>import("@/modules/landing/layouts/LandingLayout.vue"),
        children:[
            {
                path:'/',
                name:'home',
                component:HomePage
            },
            {
                path:'/feature',
                name:'features',
                component:()=>import("@/modules/landing/pages/FeaturesPage.vue")
            },
            {
                path:'/pricing',
                name:'pricing',
                component:()=>import("@/modules/landing/pages/PrincingPage.vue")
            },
            {
                path:'/contact',
                name:'contact',
                component:()=>import("@/modules/landing/pages/ContactPage.vue")
            },
        ]
       },

        //auth
        {
            path:"/auth",
            component:()=>import("@/modules/auth/pages/LoginPage.vue")
        }
    ]
})

export default router;
