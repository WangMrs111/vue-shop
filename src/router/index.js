import {
    createRouter,
    createWebHashHistory
} from "vue-router"

import Home from '../pages/home.vue'
import HelloWorld from '../pages/HelloWorld.vue'
import NotFound from  '../pages/404.vue'

const router=  createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/',component:Home},
        {path:'/h',component:HelloWorld},
        {path:'/N',component:NotFound}
    ]
})


export default router