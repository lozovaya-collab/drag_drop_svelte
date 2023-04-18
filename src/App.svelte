<script>
  import Router from 'svelte-spa-router';
  import HomePage from './routes/HomePage.svelte';
  import AuthPage from './routes/AuthPage.svelte';

  const routes  = { '/auth': AuthPage, '/*' : HomePage}
</script>

<main>
  <Router {routes}/>

  <!-- <svelte:component this={component}/> -->
</main>