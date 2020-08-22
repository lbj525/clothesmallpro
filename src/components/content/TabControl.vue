<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item,index) in titles"
      :key="index"
      :class="{isActive:currentIndex===index}"
      @click="tabClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
  components: {},
};
</script>

<style  scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  padding: 5px 0 5px 0;
  background-color: #fff;
}
.tab-control-item span {
  padding: 0 0 5px 0;
}
.tab-control-item {
  flex: 1;
}
.isActive span {
  border-bottom: 6px solid pink;
}
</style>
