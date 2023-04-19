<script>
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
</script>

<div class="todo-app">
    {#each statuses as status (status.id)}
        <Desk title={status.name} statusID={status.id} bind:tasks />
    {/each}
</div>



