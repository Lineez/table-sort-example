<template>
  <div class="table-filter">
    <div class="table-filter__name">Фильтр</div>

    <div class="table-filter__list">
      <table-filter-item
        :field="field"
        :value="searchQuery"
        @updateValue="setSearchQuery"
        class="table-filter__item"
      />
      <ui-select
        @updateValue="setSelectedOption($event)"
        :value="selectedOption"
        :options="typeOrderOptions"
        :show-name="true"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import UiSelect from '@/components/uiSelect.vue';
import tableFilterItem from './tableFilterItem.vue';

export default {
  data() {
    return {
      field: {
        name: 'Номер накладной:',
        placeholder: 'Введите фрагмент',
      },
    };
  },
  components: { tableFilterItem, UiSelect },
  computed: {
    ...mapState({
      searchQuery: (state) => state.table.searchQuery,
      typeOrderOptions: (state) => state.table.typeOrderOptions,
      selectedOption: (state) => state.table.selectedOption,
    }),
  },
  methods: {
    ...mapMutations({
      setSearchQuery: 'table/setSearchQuery',
      setSelectedOption: 'table/setSelectedOption',
    }),
  },
};
</script>

<style lang="scss">
  .table-filter {
    // .table-filter__name
    &__name {
      padding: 8px 16px;
      font-size: 16px;
      line-height: calc(19 / 16 * 100%);
      font-weight: 700;
      color: var(--color-main-dark);
      border-bottom: 1px solid #f8f8f8;
    }
    // .table-filter__list
    &__list {
      padding: 16px;
    }
    // .table-filter__item
    &__item {
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }
</style>
