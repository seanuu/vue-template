import 'normalize.css';
import Vue from 'vue';
import Common from '../common';

Vue.use(Common);

function importAll(r: any) {
    r.keys().forEach(r);
}

importAll(require.context('../assets/svg-icons', false, /\.svg$/));
