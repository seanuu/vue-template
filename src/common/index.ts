import {PluginFunction, VueConstructor, Component, DirectiveOptions} from 'vue';

import * as Components from './components';
import * as Directives from './directives';
import * as Filters from './filters';
import * as Utils from './utils';

const install: PluginFunction<any> = (Vue: VueConstructor, options: any) => {
    const components: Record<string, Component> = Components;
    const directives: Record<string, DirectiveOptions> = Directives;
    const filters: Record<string, Function> = Filters;

    for (const key in components) {
        let component = components[key];
        Vue.component(key, component as typeof Vue);
    }

    for (const key in directives) {
        const directive = directives[key];
        Vue.directive(key, directive);
    }

    for (const key in filters) {
        const filter = filters[key];
        Vue.filter(key, filter);
    }

    Vue.prototype.$utils = Utils;
};

export default {
    install: install
};

declare module 'vue/types/vue' {
    interface Vue {
        $utils: typeof Utils;
    }
}
