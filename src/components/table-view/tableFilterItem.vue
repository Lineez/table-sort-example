<template>
  <div class="item-filter">
    <div class="item-filter__name">{{ field.name }}</div>
    <div class="item-filter__field">
      <input
        @input="updateValue($event)"
        :value="value"
        type="text"
        :placeholder="field.placeholder"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    field: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    updateValue(e) {
      this.$emit('updateValue', e.target.value);
    },
  },
};
</script>

<style lang="scss">
  .item-filter {
    // .item-filter__name
    &__name {
      margin-bottom: 4px;
      font-size: 14px;
      line-height: calc(16 / 14 * 100%);
      font-weight: 700;
    }
    // .item-filter__field
    &__field {
      font-size: 14px;
      line-height: calc(16 / 14 * 100%);
      color: var(--color-main-dark);
      input {
        display: flex;
        align-items: center;
        width: 100%;
        height: 32px;
        padding: 0 12px;
        border: 1px solid #d9d9d9;
        border-radius: 2px;
        &::placeholder {
          color: var(--color-main-gray);
        }
      }
    }
  }
</style>
