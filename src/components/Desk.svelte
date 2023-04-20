<script>
  import { apiService } from "../shared/api/swagger/swagger";

  import Task from "./Task.svelte";
  import Button from "./UI/Button.svelte";
  import CreateTaskPopup from "./CreateTaskPopup.svelte";
  import EditTaskPopup from "./EditTaskPopup.svelte";

  export let title;
  export let statusID;
  export let tasks;
  export let users;

  let currTask = null;
  let selectedStatus = null;
  let selectedTaskId = null;

  const currentUser = localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));
  
  function openCreateTask(statusId) {
      selectedStatus = statusId;
      selectedTaskId = null;
  }

  function openEditPopup(event) {
      selectedStatus = null;
      selectedTaskId = event.detail.id;
  }

  function deleteTask(event) {
    const id = event.detail.id;

    if (id)
        apiService.tasks.Delete(id).then(() => {
          apiService.tasks.Get().then((res) => {
            tasks = res.data;
          });
        });
  }

  function onDragStart(event, task) {
    event.dataTransfer.dropEffect = "none";
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("taskId", task.id.toString());
  }

  function onDragOver(event, task) {
    currTask = task;
  }

  function onDrop(event, statusId) {
    event.dataTransfer.dropEffect = "move";
    const taskId = parseInt(event.dataTransfer.getData("taskId"));
    tasks = tasks.map((x) => {
      if (x.id == taskId) {
        addTaskToArray(currTask, x, tasks);
        x.status_id = statusId;

        apiService.tasks.Update(x.id, {
            status_id: x.status_id,
            description: x.description,
            title: x.title,
        });
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
    (tasks.filter((item) => item.status_id === statusID).length - 1) * 42 + 42 +
    "px";

  $: top =
    (tasks.filter((item) => item.status_id === statusID).length * 40)+
    "px";
</script>

<div
  class="desk"
  style:height
  on:drop|preventDefault={(event) => onDrop(event, statusID)}
  ondragover="return false"
>
  <div class="desk_title">
    <h4>{title}</h4>
  </div>
  <div class="desk_tasks">
    {#each tasks.filter((item) => item.status_id === statusID) as task, ind (task.id)}
      <Task
        on:dragstart={(event) => onDragStart(event, task)}
        on:dragover={(event) => onDragOver(task, event)}
        on:deleteTask={(event) => deleteTask(event)}
        on:edit={(event) => openEditPopup(event)}
        userLogin={task.author_id === currentUser.id ? 
          -1 
          : 
          users.find((item) => item.id === task.author_id) &&
          users.find((item) => item.id === task.author_id).login}
        index={ind}
        task={task}
      />
    {/each}
    <Button
      top={top}
      class="desk_action-btn"
      on:click={openCreateTask(statusID)}
      >Добавить задачу</Button
    >
    
  </div>
</div>
{#if !!selectedStatus}
  <CreateTaskPopup 
      bind:isOpen={selectedStatus}
      statusId={selectedStatus}
      bind:tasks/>
{/if}
{#if !!selectedTaskId}
  <EditTaskPopup 
      bind:isOpen={selectedTaskId}
      taskId={selectedTaskId}
      bind:tasks
      bind:user={currentUser.id}/>
{/if}


