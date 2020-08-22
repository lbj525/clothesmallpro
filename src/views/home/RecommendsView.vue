<template>
  <div class="recommends">
    <div class="recommends-item" v-for="(item,index) in recommends" :key="index">
      <img :src="item.image" alt />
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
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
.recommends {
  display: flex;
  width: 100px;
  text-align: center;
  padding: 15px 0 30px 18px;
  border-bottom: 8px solid #eee;
}

.recommends-item {
  flex: 1;
}

.recommends img {
  width: 85px;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
