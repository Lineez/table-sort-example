<template>
  <div class="card-view">
    <div
      v-for="order of searchedFilteredAndSortedOrders"
      :key="order.id"
      class="card-view__item item-card-view"
    >
      <div class="item-card-view__head">
        <span>
          {{ order.id }}
        </span>
        <button class="item-card-view__head-button" @click="toggleOption(order.id, true)">
          <table-option
            :show="showOption && showOptionName == order.id"
            @deleteItem="deleteOrderById(order.id)"
          />
        </button>
      </div>

      <div class="item-card-view__body">
        <div class="item-card-view__row">
          <span class="item-card-view__name">Номер накладной:</span>
          <span class="item-card-view__value">{{ order.number }}</span>
        </div>
        <div class="item-card-view__row">
          <span class="item-card-view__name">Тип заказа:</span>
          <span class="item-card-view__value">{{ order.type }}</span>
        </div>
        <div class="item-card-view__row">
          <span class="item-card-view__name">Дата создания:</span>
          <span class="item-card-view__value">{{
            dateFormat(order.creationDate)
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tableOption from '@/components/table-view/tableOption.vue';
import { mapGetters, mapMutations } from 'vuex';
import dateFormatter from '@/utils/getFormattedDate';

export default {
  components: { tableOption },
  data() {
    return {
      showOption: false,
      showOptionName: '',
    };
  },
  computed: {
    ...mapGetters({
      searchedFilteredAndSortedOrders: 'table/searchedFilteredAndSortedOrders',
    }),
  },
  methods: {
    ...mapMutations({
      deleteOrderById: 'table/deleteOrderById',
    }),
    dateFormat(date) {
      return dateFormatter(date);
    },
    toggleOption(name, value) {
      if (this.showOption && this.showOptionName === name) {
        this.showOption = false;
        return;
      }
      this.showOption = value;
      this.showOptionName = name;
    },
  },
};
</script>

<style lang="scss">
  .card-view {
    display: grid;
    grid-template-columns: repeat(3, minmax(290px, 1fr));
    gap: 16px;
    // .card-view__item
    &__item {
    }
  }
  .item-card-view {
    // .item-card-view__head
    &__head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 40px;
      padding: 0 16px;
      font-size: 14px;
      line-height: calc(16 / 14 * 100%);
      font-weight: 400;
      background: rgba(237, 232, 245, 0.5);
    }
    // .item-card-view__head-button
    &__head-button {
      position: relative;
      width: 16px;
      height: 16px;
    }
    // .item-card-view__body
    &__body {
      padding: 8px 16px;
      background: #f6fafb;
      box-shadow: 0px 4px 12px #ebebeb;
    }
    // .item-card-view__row
    &__row {
      display: grid;
      grid-template-columns: 123px 1fr;
      column-gap: 8px;
      min-height: 32px;
    }
    &__name,
    &__value {
      font-size: 14px;
      line-height: calc(16 / 14 * 100%);
    }
    // .item-card-view__name
    &__name {
      font-weight: 700;
      color: #647a8c;
    }
    // .item-card-view__value
    &__value {
      font-weight: 400;
    }
  }
</style>
