
<script>
    import { fade } from 'svelte/transition';

    export let dialog = false;
</script>

{#if dialog}
    <div transition:fade class="popup">
        <div class="popup_wrapper">
        <h3 class="popup_title">
            <slot name="title"></slot>
        </h3>
        <div class="popup_content">
            <slot name="content"></slot>
        </div>
        <div class="popup_actions">
            <slot name="actions"></slot>
        </div>
        </div>
    </div>
{/if}


<style lang="scss">
@import "../../assets/scss/main.scss";
.popup {
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.331);
  display: flex;
  justify-content: center;
  &_wrapper {
    position: absolute;
    background-color: $white;
    width: 40%;
    max-width: 450px;
    height: auto;
    min-height: 200px;
    top: 15%;
    border-radius: 15px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  &_title {
    @include title($black);
    text-align: center;
    font-size: 20px;
  }
  &_actions {
    float: right;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
}
</style>
