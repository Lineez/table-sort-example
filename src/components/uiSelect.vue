<template>
  <div class="ui-select">
    <div v-if="showName" class="ui-select__name">Тип заказа:</div>
    <select
      @input="updateValue($event)"
      :selected="value"
      class="ui-select__select"
    >
      <option disabled selected>Выберите из списка</option>
      <option
        v-for="option of options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
    <icon-select-arrow class="ui-select__select-icon" :class="{_small: !showName}" />
  </div>
</template>

<script>
import iconSelectArrow from '@/components/icons/iconSelectArrow.vue';

export default {
  components: { iconSelectArrow },
  props: {
    options: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
    value: {
      type: String,
      required: true,
      default: '',
    },
    showName: {
      type: Boolean,
      required: false,
      default: false,
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
  .ui-select {
    position: relative;
    &__name {
      margin-bottom: 4px;
      font-size: 14px;
      line-height: calc(16 / 14 * 100%);
      font-weight: 700;
    }
    &__select {
      display: flex;
      align-items: center;
      width: 100%;
      height: 32px;
      padding: 0 12px;
      font-size: 14px;
      line-height: calc(16 / 14 * 100%);
      color: var(--color-main-gray);
      border: 1px solid #d9d9d9;
      border-radius: 2px;
      appearance: none;
      &::placeholder {
        color: var(--color-main-gray);
      }
      option {
        color: var(--color-main-dark);
        &:disabled {
          display: none;
        }
      }
    }
    &__select-icon {
      position: absolute;
      top: 32px;
      right: 15px;
      &._small {
        top: 15px;
      }
    }
  }
</style>
