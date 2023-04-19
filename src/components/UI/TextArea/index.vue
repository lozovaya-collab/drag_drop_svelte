<!-- <template>
  <textarea v-model="description" class="text-area" :placeholder="placeholder"></textarea>
</template>

<script>
export default {
  name: "TextArea",
  props: ["modelValue", "placeholder"],
  emits: ["update:modelValue"],
  computed: {
    description: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
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
</style> -->
