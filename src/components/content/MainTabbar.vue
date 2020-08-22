<template id=''>
  <div id="main-tab-bar">
    <tabbar>
      <tabbaritems path="/home" activeColor="blue">
        <img slot="item-img" src="~assets/img/tabbar/home.svg" />
        <img slot="item-img-active" src="~assets/img/tabbar/home_active.svg" />
        <nav slot="item-text">首页</nav>
      </tabbaritems>
      <tabbaritems path="/sort" activeColor="blue">
        <img slot="item-img" src="~assets/img/tabbar/category.svg" alt />
        <img slot="item-img-active" src="~assets/img/tabbar/category_active.svg" alt />
        <nav slot="item-text">分类</nav>
      </tabbaritems>
      <tabbaritems path="/car" activeColor="blue">
        <img slot="item-img" src="~assets/img/tabbar/shopcart.svg" alt />
        <img slot="item-img-active" src="~assets/img/tabbar/shopcart_active.svg" alt />
        <nav slot="item-text">购物车</nav>
      </tabbaritems>
      <tabbaritems path="/profile" activeColor="blue">
        <img slot="item-img" src="~assets/img/tabbar/profile.svg" alt />
        <img slot="item-img-active" src="~assets/img/tabbar/profile_active.svg" alt />
        <nav slot="item-text">我的</nav>
      </tabbaritems>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "components/common/Tabbar";
import tabbaritems from "components/common/TabbarItems";
export default {
  name: "maintabbar",
  data() {
    return {};
  },
  components: {
    tabbar,
    tabbaritems,
  },
};
</script>

<style  scoped>
</style>
