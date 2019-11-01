import {Page1, Page2} from './index';

export default function Route(path = '/module') {
    return {
        path: path,
        component: () => import('./module.vue'),
        children: [
            {
                path: 'page1',
                name: 'page1',
                component: Page1
            },
            {
                path: 'page2',
                name: 'page2',
                component: Page2
            }
        ]
    };
}

Route.defalutPath = 'page1';
