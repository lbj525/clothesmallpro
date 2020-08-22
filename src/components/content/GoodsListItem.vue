<template>
  <div class="list-item">
    <img :src="listItem.show.img" alt />
    <div class="list-item-text">
      <p class="item-title">{{listItem.title}}</p>
      <span class="item-price">{{listItem.price}}</span>
      <span class="item-collect">{{listItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsListItem",
  props: {
    listItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  components: {},
};
</script>

<style  scoped>
.list-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.list-item img {
  width: 100%;
  border-radius: 5px;
}

.list-item-text {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.list-item-text p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.list-item-text .item-price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.list-item-text .item-collect {
  position: relative;
}
.list-item-text .item-collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
