<script>
    export let value = -1;
    export let list = [];

    let defaultOption = {
        id: -1,
        name: "Выберите один из вариантов",
    }


</script>

<div class="combobox">
    <select class="combobox_select" bind:value>
        <option disabled value={defaultOption}> Выберите один из вариантов </option>
		{#each list as option}
			<option value={option.id}>
				{option.name}
			</option>
		{/each}
	</select>
</div>

<style lang="scss">
@import "../../assets/scss/main.scss";

.combobox {
  outline: none;
  border: 2px solid $purple;
  box-sizing: border-box;
  padding: 0 10px;
  width: 100%;
  height: 50px;
  background-color: $white !important;
  border-radius: 15px;
  &_select {
    @include text($black);
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
  }
}
</style> 
