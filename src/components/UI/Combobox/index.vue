<!-- <template>
  <div class="combobox">
    <select class="combobox_select" v-model="selectedValue">
      <option disabled :value="defaultOption.id">Выберите один из вариантов</option>
      <option v-for="option in list" :key="option.id" :value="option.id">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Combobox",
  props: ["selected", "list"],
  emits: ["update:selected"],
  data() {
    return {
      defaultOption: {
        id: -1,
        name: "Выберите один из вариантов",
      },
    };
  },
  computed: {
    selectedValue: {
      get() {
        return this.selected || this.defaultOption.id;
      },
      set(val) {
        this.$emit("update:selected", val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
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
</style> -->
