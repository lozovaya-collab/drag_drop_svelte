import HomePage from './HomePage.svelte';
import AuthPage from './AuthPage.svelte';

const routes = [{
        path: '/',
        component: HomePage,
        props: {
            name: 'John',
        },
    },
    {
        path: '/about',
        component: AuthPage,
    },
];

export default routes;