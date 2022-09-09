<template>
  <div class="head-order">
    <div class="head-order__sort">
      <div class="head-order__field">
        <ui-select
          @updateValue="setSelectedSort"
          :value="selectedSort"
          :options="sortOrderOptions"
        />
      </div>
    </div>

    <div class="head-order__toggle">
      <button
        @click="selectTab('card')"
        class="head-order__button head-order__button_left"
        :class="{ _active: currentTab === 'card' }"
      >
        <icon-card-view />
      </button>

      <button
        @click="selectTab('table')"
        class="head-order__button head-order__button_right"
        :class="{ _active: currentTab === 'table' }"
      >
        <icon-line-view />
      </button>
    </div>
  </div>
</template>

<script>
import IconLineView from '@/components/icons/iconLineView.vue';
import UiSelect from '@/components/uiSelect.vue';
import { mapMutations, mapState } from 'vuex';
import iconCardView from '../icons/iconCardView.vue';

export default {
  components: { iconCardView, IconLineView, UiSelect },
  data() {
    return {
      selectedOption: '',
      options: [
        {
          name: 'Номер накладной',
          value: 'toMin',
        },
        {
          name: 'Номер накладной',
          value: 'toMax',
        },
      ],
    };
  },
  computed: {
    ...mapState({
      selectedSort: (state) => state.table.selectedSort,
      sortOrderOptions: (state) => state.table.sortOrderOptions,
    }),
  },
  methods: {
    ...mapMutations({
      setSelectedSort: 'table/setSelectedSort',
    }),
    selectTab(name) {
      this.$emit('updateCurrentTab', name);
    },
  },
  props: {
    currentTab: {
      type: String,
      default: '',
      reqired: true,
    },
  },
};
</script>

<style lang="scss">
  .head-order {
    display: flex;
    align-items: center;
    column-gap: 17px;
    // .head-order__sort
    &__sort {
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      height: 64px;
      padding: 0 16px;
      background: var(--color-white);
      border-radius: 3px;
    }
    // .head-order__field
    &__field {
      width: 232px;
    }
    // .head-order__select
    &__select {
    }
    // .head-order__option
    &__option {
    }
    // .head-order__toggle
    &__toggle {
      flex: 0 0 80px;
      display: flex;
    }
    // .head-order__button
    &__button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border: 1px solid #647a8c;
      cursor: pointer;
      &_left {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }
      &_right {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }

      &._active {
        background: #e5e9ec;
      }
    }
  }
</style>
