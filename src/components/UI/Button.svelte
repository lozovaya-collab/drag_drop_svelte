<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    
    export let type = "default";
    export let disabled = false;
    export let top = "";

    let clazz;
	export { clazz as class };

    $: classButtonType = type === 'text' ? 'button--text' : '';
    $: classButtonDisabled = disabled;

</script>


<button 
    on:click
    class={`button ${clazz || ''}`}
    class:classButtonType 
    class:classButtonDisabled
    style:top
>
    <slot></slot>
</button>

<style lang="scss">
    @import "../../assets/scss/main.scss";
    .button {
    box-sizing: border-box;
    padding: 5px 10px;
    height: 30px;
    min-width: 130px;
    cursor: pointer;
    border-radius: 5px;
    outline: none;
    border: none;
    background-color: $purple;
    color: $white;
    &--text {
        min-width: 30px;
        background-color: $white;
        color: $purple;
        &:hover {
        text-decoration: underline;
        }
    }
    }
    button:disabled {
    opacity: 0.5;
}
</style>
