<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let name;
  export let index;

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
      <p class="task-wrapper_container__login">
          user
      </p>
    </div>

    <h5 class="task-wrapper_name">{name}</h5>
  
    <div class="task-wrapper_container">
      <img
          class="task-wrapper_container__icon"
          src={src}
          alt="del"
      />
    </div>
  </div> 
</div>

<style>
</style>
