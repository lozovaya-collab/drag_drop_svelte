<script>
  import MainHeader from "./layouts/MainHeader.svelte";
  import MainContent from "./layouts/MainContent.svelte";

  import {location} from 'svelte-spa-router'
</script>

<svelte:head>
  <title>Svelte To Do App</title>
  <html lang="ru" />
</svelte:head>
<main>
  {#if $location !== '/auth/'}
    <MainHeader />
  {/if}
  <MainContent/>
</main>

<style global lang="scss">
  @import "./assets/scss/main.scss";
</style>
