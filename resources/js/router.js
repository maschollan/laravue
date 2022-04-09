import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Book from "./pages/Book.vue";
import AddBook from "./pages/AddBook.vue"
import EditBook from "./pages/EditBook.vue"

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
        {
            path: "/add-book",
            name: "add-book",
            component: AddBook
        },
        {
            path: "/edit-book",
            name: "edit-book",
            component: EditBook
        },
    ]
})

export default router;