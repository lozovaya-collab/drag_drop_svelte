<script>
    import TextInput from "./UI/TextInput.svelte";
    import TextArea from "./UI/TextArea.svelte";
    import Combobox from "./UI/Combobox.svelte";

    export let task;
    export let statusId;
    
    let statuses =  [
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
</script>

<div class="content-task">
    <Combobox
      bind:value={task.status_id}
      list={statuses}
    />
    <TextInput
      bind:value={task.title}
      placeholder={'название'}
    />
    <TextArea
      bind:value={task.description}
      placeholder={'описание'}
    />
  </div>

  <style lang="scss">
    .content-task {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
  </style>