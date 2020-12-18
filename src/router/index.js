import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home";
import Contact from "../views/Contact";
import Shop from "../views/Shop";
import AboutUs from "../views/AboutUs";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:"/simon/",
            name:"Home",
            component: Home
        },
        {
            path:"/simon/shop",
            name:"Shop",
            component: Shop
        },
        {
            path:"/simon/contact",
            name:"Contact",
            component: Contact,
            alias: "/contact-us"
        },
        {
            path:"/simon/aboutus",
            name:"AboutUs",
            component: AboutUs
        }
    ]
});

export default router;