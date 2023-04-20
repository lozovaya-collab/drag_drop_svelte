
<script>
    import { onMount } from "svelte";

    import { apiService } from "../shared/api/swagger/swagger";

    import Button from "./UI/Button.svelte";
    import Popup from "./UI/Popup.svelte";
    import ContentPopup from "./ContentPopup.svelte";

    export let taskId;
    export let isOpen = false;
    export let tasks;
    export let user;

    let task = {title: null, description: null, status_id: null}

    const closePopup = () => {
        task = null;
        isOpen = false;
    }

    const saveTask = () => {
        apiService.tasks
            .Update(task.id, {
                status_id: task.status_id,
                description: task.description,
                title: task.title,
            })
            .then(() => {
                apiService.tasks
                    .Get()
                    .then((res) => {
                        tasks = res.data;
                    })
                    .then(() => {
                        closePopup();
                    });
            });
    }

   onMount(async () => {
        apiService.tasks.GetById(taskId).then((res) => {
            task = res.data;
        });
    })

</script>


<Popup bind:dialog={isOpen}>
    <svelte:fragment slot="title"> Редактировать задачу </svelte:fragment>
    <svelte:fragment slot="content">
        <ContentPopup bind:task />
    </svelte:fragment>
    <svelte:fragment slot="actions">
        <Button :type="'text'" on:click={closePopup}>ОТМЕНА</Button>
        {#if task && task.author_id === user}
            <Button on:click={saveTask}>СОХРАНИТЬ</Button>
        {/if}
    </svelte:fragment>
</Popup>


