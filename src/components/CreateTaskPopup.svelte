<script>
    import { apiService } from "../shared/api/swagger/swagger";

    import Button from "./UI/Button.svelte";
    import Popup from "./UI/Popup.svelte";
    import ContentPopup from "./ContentPopup.svelte";

    export let statusId;
    export let isOpen = false;
    export let tasks;

    let task = {title: null, description: null, status_id: statusId}

    const closePopup = () => {
        task = null;
        isOpen = false;
    }

    const saveTask = () => {
        apiService.tasks.Create(task).then(() => {
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
</script>


<Popup bind:dialog={isOpen}>
    <svelte:fragment  slot="title"> Создать задачу </svelte:fragment>
    <svelte:fragment  slot="content">
        <ContentPopup bind:task />
    </svelte:fragment>
    <svelte:fragment slot="actions">
        <Button :type="'text'" on:click={closePopup}>ОТМЕНА</Button>
        <Button on:click={saveTask}>СОХРАНИТЬ</Button>
    </svelte:fragment>
</Popup>




