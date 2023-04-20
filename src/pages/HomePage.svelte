<script>
  import {onMount} from "svelte";

  import { apiService } from '../shared/api/swagger/swagger'

  import Desk from "../components/Desk.svelte";

  const statuses = [
    {
      id: 1,
      name: "сделать",
    },
    {
      id: 2,
      name: "в процессе",
    },
    {
      id: 3,
      name: "закончено",
    },
  ];
  let tasks = [];
  let users = [];

  onMount(async () => {
    apiService.tasks.Get().then((res) => {
      tasks = res.data;
    });

    apiService.users.Get().then((res) => {
       users = res.data;
    });
  });
</script>

<div class="todo-app">
    {#each statuses as status (status.id)}
        <Desk title={status.name} statusID={status.id} bind:tasks bind:users/>
    {/each}
</div>



