<template>
  <table>
    <thead>
      <tr class="order-head">
        <th class="order-head__id">ID</th>
        <th class="order-head__number">Номер накладной</th>
        <th class="order-head__type">Тип заказа</th>
        <th class="order-head__date">Дата создания</th>
        <th class="order-head__empty"></th>
      </tr>
    </thead>
    <tbody>
      <tr class="order" v-for="order of searchedFilteredAndSortedOrders" :key="order.id">
        <td class="order__id">{{ order.id }}</td>
        <td class="order__number">{{ order.number }}</td>
        <td class="order__type">{{ order.type }}</td>
        <td class="order__date">{{ dateFormat(order.creationDate) }}</td>
        <td @click="toggleOption(order.id, true)" class="order__option">
          <table-option
            :show="showOption && showOptionName == order.id"
            @deleteItem="deleteOrderById(order.id)"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import TableOption from '@/components/table-view/tableOption.vue';
import dateFormatter from '@/utils/getFormattedDate';

export default {
  components: { TableOption },
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
    toggleOption(name, value) {
      if (this.showOption && this.showOptionName === name) {
        this.showOption = false;
        return;
      }
      this.showOption = value;
      this.showOptionName = name;
    },
    dateFormat(date) {
      return dateFormatter(date);
    },
  },
};
</script>

<style lang="scss">
  table {
    width: 100%;
    border-left: 1px solid #e6e6e6;
    border-right: 1px solid #e6e6e6;
    border-collapse: collapse;
    thead {
      th {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #e6e6e6;
        height: 40px;
        font-size: 14px;
        line-height: calc(16 / 14 * 100%);
        font-weight: 700;
      }
    }
  }

  .order-head {
    display: grid;
    grid-template-columns:
      minmax(134px, 1fr)
      minmax(244px, 1fr)
      minmax(189px, 1fr)
      minmax(268px, 1fr)
      65px;
    column-gap: 3px;
    height: 40px;

    // .order-head__id
    &__id {
      padding: 0 58px;
    }
    // .order-head__number
    &__number {
      padding: 0 62px;
    }
    // .order-head__type
    &__type {
      padding: 0 51px;
    }
    // .order-head__date
    &__date {
      padding: 0 76px;
    }
    // .order-head__empty
    &__empty {
      padding-right: 65px;
    }
  }

  .order {
    @extend .order-head;
    align-items: center;
    background: var(--color-white);
    border-bottom: 1px solid #e6e6e6;
    // .order__id
    &__id {
      padding-left: 16px;
    }
    // .order__number
    &__number {
    }
    // .order__type
    &__type {
    }
    // .order__date
    &__date {
    }
    // .order__option
    &__option {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      cursor: pointer;
    }
  }
</style>
