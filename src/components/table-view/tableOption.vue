<template>
  <div @click.prevent>
    <icon-option />
    <div v-show="show" class="option-order">
      <button @click="deleteItem" class="option-order__del">
        <icon-del />
        удалить
      </button>
    </div>
  </div>
</template>

<script>
import iconOption from '@/components/icons/iconOption.vue';
import IconDel from '@/components/icons/iconDel.vue';

export default {
  components: { iconOption, IconDel },
  props: {
    show: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  methods: {
    deleteItem() {
      this.$emit('deleteItem');
    },
  },
};
</script>

<style lang="scss">
  .option-order {
    position: absolute;
    top: 100%;
    right: 50%;
    display: flex;
    flex-direction: column;
    min-width: 148px;
    padding: 8px;
    border-radius: 2px;
    box-shadow: 0px 4px 4px rgba(182, 182, 182, 0.25);
    background: var(--color-white);

    &:hover {
      cursor: pointer;
      color: #045da7;
    }
    // .option-order__del
    &__del {
      display: flex;
      align-items: center;
      column-gap: 11px;
    }
  }
</style>
