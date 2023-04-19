<script>
    import Button from "./UI/Button.svelte";
    import Popup from "./UI/Popup.svelte";
    import ContentPopup from "./ContentPopup.svelte";

    export let statusId;
    export let isOpen = false;

    let task = {title: null, description: null, status_id: statusId}
</script>


<Popup bind:dialog={isOpen}>
    <svelte:fragment  slot="title"> Создать задачу </svelte:fragment>
    <svelte:fragment  slot="content">
        <ContentPopup bind:task />
    </svelte:fragment>
    <svelte:fragment slot="actions">
        <Button :type="'text'">ОТМЕНА</Button>
        <Button>СОХРАНИТЬ</Button>
    </svelte:fragment>
</Popup>




