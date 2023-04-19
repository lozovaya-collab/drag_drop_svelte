<script>
  import MainHeader from "./layouts/MainHeader.svelte";
  import MainContent from "./layouts/MainContent.svelte";
</script>

<svelte:head>
  <title>Svelte To Do App</title>
  <html lang="ru" />
</svelte:head>
<main>
  <MainHeader/>
  <MainContent/>
</main>

<style global lang="scss">
  @import "./assets/scss/main.scss";
</style>
