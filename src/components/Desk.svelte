<script>
  import Task from "./Task.svelte";
  import Button from "./UI/Button.svelte";

  export let title;
  export let categID;
  export let tasks;

  let currTask = null;

  function onDragStart(event, task) {
    event.dataTransfer.dropEffect = "none";
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("taskId", task.id.toString());
  }
  function onDragOver(event, task) {
    currTask = task;
  }

  function onDrop(event, categoryId) {
    event.dataTransfer.dropEffect = "move";
    const taskId = parseInt(event.dataTransfer.getData("taskId"));
    tasks = tasks.map((x) => {
      if (x.id == taskId) {
        addTaskToArray(currTask, x, tasks);
        x.categoryId = categoryId;
      }
      return x;
    });
  }
  function addTaskToArray(inputTask, pointerTask, arr) {
    const index = arr.findIndex((el) => el.id === pointerTask.id);

    return index !== -1
      ? [...arr.slice(0, index + 1), inputTask, ...arr.slice(index + 1)]
      : arr;
  }

  $: height =
    82 +
    (tasks.filter((item) => item.categoryId === categID).length - 1) * 42 + 42 +
    "px";

  $: top =
    (tasks.filter((item) => item.categoryId === categID).length * 40)+
    "px";
</script>

<div
  class="desk"
  style:height
  on:drop|preventDefault={(event) => onDrop(event, categID)}
  ondragover="return false"
>
  <div class="desk_title">
    <h4>{title}</h4>
  </div>
  <div class="desk_tasks">
    {#each tasks.filter((item) => item.categoryId === categID) as task, ind (task.id)}
      <Task
        on:dragstart={(event) => onDragStart(event, task)}
        on:dragover={(event) => onDragOver(task, event)}
        index={ind}
        name={task.title}
      />
    {/each}
    <Button
      top={top}
      class="desk_action-btn"
      >Добавить задачу</Button
    >
    
  </div>
</div>

