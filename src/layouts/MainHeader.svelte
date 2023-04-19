<script>
  import Button from "../components/UI/Button.svelte";
  import { push } from 'svelte-spa-router';
</script>


<div class="header">
    <h1>TO DO APP (SVELTE)</h1>
    <Button on:click={() => push('#/auth/')}> ВЫХОД </Button>
</div>
