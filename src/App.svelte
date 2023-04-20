<script>
  import { onMount } from "svelte";

  import MainHeader from "./layouts/MainHeader.svelte";
  import MainContent from "./layouts/MainContent.svelte";

  import { push, location } from 'svelte-spa-router';
  import { apiService } from "./shared/api/swagger/swagger";

  onMount(async () => {
    try {
        await apiService.me.Me().then(res => {
            localStorage.setItem('user', JSON.stringify(res.data))
        })
    } catch (err) {
      console.log("Ошибка:", err.message)
      if(err.response.status === 401) push('#/auth/')
    }
  });
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
