<script>
  import { push } from 'svelte-spa-router';

  import { apiService } from '../shared/api/swagger/swagger';

  import Button from "../components/UI/Button.svelte";

  const logout = () => {
      apiService.logout.Logout();

      push('/auth/');

      localStorage.removeItem('user')
    }
</script>


<div class="header">
    <h1>TO DO APP (SVELTE)</h1>
    <Button on:click={logout}> ВЫХОД </Button>
</div>
