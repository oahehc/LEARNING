import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../component/home.vue';
import intro from '../component/intro.vue';
import about from '../component/about.vue';

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [{
        path: '/',
        component: home,
    }, {
        path: '/home',
        component: home,
    }, {
        path: '/intro',
        name: 'intro',
        component: intro,
    }, {
        path: '/about',
        name: 'about',
        component: about,
    }, {
        path: '/*',
        redirect: '/home',
    }],
});

export default router;
