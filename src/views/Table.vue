<template>
  <div>
    <div class="banner">Тестовое задание</div>
    <div class="order-view">
      <table-filter class="order-view__filter"></table-filter>

      <div class="order-view__table-view">
        <table-head
          @updateCurrentTab="setCurrentTab($event)"
          class="order-view__head"
          :currentTab="currentTab"
        ></table-head>
        <component :is="currentTabComponent"></component>
      </div>
    </div>
  </div>
</template>

<script>
import TableView from '@/components/table-view/tableView.vue';
import CardView from '@/components/table-view/cardView.vue';
import tableFilter from '../components/table-view/tableFilter.vue';
import TableHead from '../components/table-view/tableHead.vue';

export default {
  components: {
    tableFilter,
    TableHead,
    TableView,
    CardView,
  },
  data() {
    return {
      currentTab: 'table',
    };
  },
  computed: {
    currentTabComponent() {
      return `${this.currentTab}-view`;
    },
  },
  methods: {
    setCurrentTab(name) {
      this.currentTab = name;
    },
  },
};
</script>

<style lang="scss">
  .banner {
    display: flex;
    align-items: center;
    height: 260px;
    padding: 0 110px;
    margin-bottom: 32px;
    font-size: 36px;
    line-height: calc(42 / 36 * 100%);
    font-weight: 700;
    color: var(--color-white);
    background: linear-gradient(
      267.21deg,
      #900793 0.16%,
      rgba(134, 4, 137, 0.785707) 0.16%,
      rgba(159, 12, 162, 0.762269) 43.22%,
      rgba(5, 1, 190, 0.734375) 98.12%,
      rgba(0, 28, 126, 0.619792) 100.15%,
      rgba(6, 77, 142, 0.447917) 102.03%,
      rgba(1, 0, 60, 0) 102.73%
    );
  }
  .order-view {
    display: flex;
    padding: 0 116px;
    column-gap: 17px;
    // .order-view__filter
    &__filter {
      flex: 0 0 280px;
      align-self: flex-start;
      filter: drop-shadow(0px 4px 8px rgba(179, 178, 178, 0.25));
      background: var(--color-white);
    }
    // .order-view__table-view
    &__table-view {
      flex: 1 1 auto;
    }
    // .order-view__head
    &__head {
      margin-bottom: 16px;
    }
  }
</style>
