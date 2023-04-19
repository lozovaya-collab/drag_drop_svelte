<!-- <template>
  <input v-model="text" class="text-input" :type="type" :placeholder="placeholder" />
</template>

<script>
export default {
  name: "TextInput",
  props: ["type", "placeholder", "modelValue"],
  emits: ["update:modelValue"],
  data() {
    return {
      value: null,
    };
  },
  computed: {
    text: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
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
</style> -->
