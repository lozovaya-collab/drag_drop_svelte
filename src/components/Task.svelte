<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let name;
  export let index;

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
  <h5>{name}</h5>
</div>

<style>
</style>
