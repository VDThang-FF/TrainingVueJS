import { createRouter, createWebHistory } from "vue-router";
import LayoutMain from "../layouts/layout-main.vue";
import LayoutAuthen from '../layouts/layout-authen.vue';

const history = createWebHistory();

const router = createRouter({
    history: history,
    routes: [
        {
            path: '/',
            name: 'HomeLayout',
            component: LayoutMain,
            redirect: { name: 'Home' },
            children: [
                {
                    path: '/',
                    name: 'Home',
                    component: () => import("/src/views/home.vue")
                },
                {
                    path: '/dashboard',
                    name: 'Dashboard',
                    component: () => import("/src/views/dashboard.vue")
                }
            ]
        },
        {
            path: '/login',
            name: 'LoginPageLayout',
            component: LayoutAuthen,
            redirect: { name: 'LoginPage' },
            children: [
                {
                    path: '',
                    name: 'LoginPage',
                    component: () => import('/src/pages/login.vue')
                }
            ]
        },
    ]
});

export default router;