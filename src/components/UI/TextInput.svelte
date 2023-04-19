<script>
    export let value;
    export let type = "text";
    export let placeholder = "";

    function typeAction(node) {
        node.type = type;
    }
</script>

<input bind:value class="text-input" use:typeAction {placeholder} />

<style lang="scss" scoped>
@import "../../assets/scss/main.scss";
.text-input {
  @include text($black);
  outline: none;
  border: 2px solid $purple;
  box-sizing: border-box;
  padding: 15px 20px;
  width: 100%;
  height: 50px;
  background-color: $white !important;
  border-radius: 15px;
}
</style>
