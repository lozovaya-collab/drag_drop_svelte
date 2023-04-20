<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let task;
  export let index;
  export let userLogin;

  let src = '../static/delete.png'

  dispatch("dragstart");
  dispatch("dragover");

  $: top = index * 40 + "px";
</script>

<div
  draggable={true}
  style:top
  class="desk_tasks__item"
  on:dragstart
  on:dragover
>
  <div class="task-wrapper">
    <div class="task-wrapper_container">
      {#if userLogin !== -1}
        <p class="task-wrapper_container__login">
            { userLogin }
        </p>
      {/if}
    </div>

    <h5 
      class="task-wrapper_name"
      on:click={() => dispatch('edit', { id: task.id })}
      >{ task.title }</h5>
  
    <div class="task-wrapper_container"
      on:click={() => dispatch('deleteTask', userLogin !== -1 ? null : { id: task.id })}
      >
      {#if userLogin === -1}
        <img
          class="task-wrapper_container__icon"
          src={src}
          alt="del"
        />
      {/if}
    </div>
  </div> 
</div>

<style>
</style>
