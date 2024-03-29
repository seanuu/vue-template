import Vue from 'vue';
import VueRouter from 'vue-router';

import ModuleRoute from './module/module.route';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [ModuleRoute('/module'), {path: '**', redirect: {name: ModuleRoute.defalutPath}}]
});

export default router;
