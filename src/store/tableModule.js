export default {
  namespaced: true,
  state: () => ({
    searchQuery: '',
    selectedOption: 'all',
    selectedSort: '',
    typeOrderOptions: [
      {
        name: 'Все',
        value: 'all',
      },
      {
        name: 'Самовывоз',
        value: 'Pickup',
      },
      {
        name: 'Курьерская доставка',
        value: 'Delivery',
      },
      {
        name: 'Доставка в пункт выдачи',
        value: 'Pick-point',
      },
    ],
    sortOrderOptions: [
      {
        name: 'Номер накладной',
        value: 'toMin',
      },
      {
        name: 'Номер накладной',
        value: 'toMax',
      },
    ],
    orders: [
      {
        id: '01-ОБ/2022',
        number: '159-F',
        type: 'Pickup',
        creationDate: '2022-07-15T10:21:35.315271',
      },
      {
        id: '02-ОБ/2022',
        number: 'a-35',
        type: 'Delivery',
        creationDate: '2022-07-25T15:37:45.084291',
      },
      {
        id: '03-ОБ/2022',
        number: 'B-411',
        type: 'Pick-point',
        creationDate: '2022-08-01T09:11:26.264541',
      },
      {

        id: '04-ОБ/2022',
        number: '35-Ad',
        type: 'Pickup',
        creationDate: '2022-08-01T21:41:19.353652',
      },
      {
        id: '05-ОБ/2022',
        number: 'Ah-510',
        type: 'Pick-point',
        creationDate: '2022-08-12T18:01:51.526705',
      },
    ],
  }),
  getters: {
    searchedOrders(state) {
      return state.orders.filter((order) => order.number.toLowerCase()
        .includes(state.searchQuery.toLowerCase()));
    },
    searchedAndFilteredOrders(state, getters) {
      if (state.selectedOption === 'all') return getters.searchedOrders;
      return getters.searchedOrders.filter((order) => order.type === state.selectedOption);
    },
    searchedFilteredAndSortedOrders(state, getters) {
      const result = [...getters.searchedAndFilteredOrders]
        .sort((a, b) => a.number?.localeCompare(
          b.number,
        ));

      if (state.selectedSort === 'toMax') {
        return result.reverse();
      }
      return result;
    },
  },
  mutations: {
    deleteOrderById(state, id) {
      state.orders = state.orders.filter((order) => order.id !== id);
    },
    setSearchQuery(state, str) {
      state.searchQuery = str;
    },
    setSelectedOption(state, str) {
      state.selectedOption = str;
    },
    setSelectedSort(state, str) {
      state.selectedSort = str;
    },
  },
};
