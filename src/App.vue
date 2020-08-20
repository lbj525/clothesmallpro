<template>
  <div id="app">
    <maintabbar></maintabbar>
    <router-view></router-view>
  </div>
</template>

<script>
// import tabbar from "components/Tabbar.vue";
// import tabbaritem from "components/TabbarItems";
import maintabbar from "components/content/MainTabbar";
export default {
  name: "App",
  components: {
    // tabbar,
    // tabbaritem,
    maintabbar,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
