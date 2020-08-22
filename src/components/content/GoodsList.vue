<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" :key="index" :listItem="item" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "goodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  components: {
    GoodsListItem,
  },
};
</script>

<style  scoped>
.goods {
  display: flex;
  /*换行*/
  flex-wrap: wrap;
  /*均等分*/
  justify-content: space-around;

  padding: 5px;
}
</style>
