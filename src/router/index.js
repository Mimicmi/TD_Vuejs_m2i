import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home";
import Contact from "../views/Contact";
import Shop from "../views/Shop";
import AboutUs from "../views/AboutUs";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:"/",
            name:"Home",
            component: Home
        },
        {
            path:"/shop",
            name:"Shop",
            component: Shop
        },
        {
            path:"/contact",
            name:"Contact",
            component: Contact,
            alias: "/contact-us"
        },
        {
            path:"/aboutus",
            name:"AboutUs",
            component: AboutUs
        }
    ]
});

export default router;