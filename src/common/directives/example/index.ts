import {VNodeDirective, VNode} from 'vue';

export const Example = {
    bind: function(el: HTMLElement, binding: VNodeDirective, vnode: VNode) {
        console.log('example directive bind');
    }
};
