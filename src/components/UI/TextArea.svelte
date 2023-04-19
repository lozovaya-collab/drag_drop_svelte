<script>
    export let value;
    export let placeholder = "";
</script>

<textarea class="text-area" bind:value {placeholder}></textarea>

<style lang="scss" >
    @import "../../assets/scss/main.scss";
    .text-area {
        @include text($black);
        outline: none;
        border: 2px solid $purple;
        box-sizing: border-box;
        padding: 15px 20px;
        width: 100%;
        height: 150px;
        background-color: $white !important;
        border-radius: 15px;
    }
</style> 
