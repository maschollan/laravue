import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Book from "./pages/Book.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    linkExactActiveClass: 'active',
    routes: [
        {
            path: "/",
            name: 'home',
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/book",
            name: "book",
            component: Book
        },
    ]
})

export default router;