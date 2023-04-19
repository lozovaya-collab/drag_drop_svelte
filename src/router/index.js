import HomePage from '../pages/HomePage.svelte';
import AuthPage from '../pages/AuthPage.svelte';

const routes = {
    "/": HomePage,
    "/auth/": AuthPage,
};

export default routes;