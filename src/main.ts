import './styles.scss';
import './plugins';
import './polyfills';

import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './views/router';
import store from './store';
import * as Api from './api';

Vue.prototype.$api = Api;
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

declare module 'vue/types/vue' {
    interface Vue {
        $api: typeof Api;
    }
}
