<template>
  <div id="home">
    <navbar id="home-slot">
      <header slot="center">潮·商城</header>
    </navbar>
    <scroll class="scroll" :probeLoad="3" ref="scroll" :pullUpLoad="true" @pullingUp="loadMore">
      <home-swiper :banners="banners"></home-swiper>
      <recommends-views :recommends="recommends" />
      <fashion />
      <tab-control class="tab-control" :titles="titles" @tabClick="tabClick" />
      <goods-list :goods="goodsList"></goods-list>
    </scroll>
  </div>
</template>

<script>
//导入子组件
import HomeSwiper from "./banner/HomeSwiper";
import RecommendsViews from "./RecommendsView";
import Fashion from "./Fashion";

//导入公共组件
import navbar from "components/common/navbar/Navbar";
import TabControl from "components/content/TabControl";
import GoodsList from "components/content/GoodsList";
import Scroll from "components/common/scroll/Scroll";

//网络请求
import { getHomeData, getGoodsData } from "network/home";

export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["热门", "新品", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },
  components: {
    navbar,
    HomeSwiper,
    RecommendsViews,
    Fashion,
    TabControl,
    GoodsList,
    Scroll,
  },
  created() {
    this.getHomeData();

    this.getGoodsData("pop");

    this.getGoodsData("new");

    this.getGoodsData("sell");
  },
  mouted() {
    //监听图片加载
    this.$bus.$on("itemImgLOad", () => {
      this.$refs.scroll.refresh();
    });
  },
  methods: {
    //获取home的主要数据
    getHomeData() {
      getHomeData().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    //请求推荐数据的方法
    getGoodsData(type) {
      let page = this.goods[type].page + 1;
      getGoodsData(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page + 1;
      });
    },
    loadMore() {
      this.getGoodsData(this.currentType);
      this.$refs.scroll.scrollTo();
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
  },
  computed: {
    goodsList() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>

<style  scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}

#home-slot {
  color: white;
  background-color: var(--color-tint);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
.scroll {
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
  overflow: hidden;
}
</style>
