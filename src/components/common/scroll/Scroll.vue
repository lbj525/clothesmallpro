<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "scroll",
  props: {
    probeType: {
      type: Number,
      default: 1,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    // this.$nextTick(() => {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    // console.log(this.scroll);
    //实时监听
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });

    //上拉刷新
    this.scroll.on("pullingUp", () => {
      this.$emit("scrollToEnd", this.scroll);
    });
    // });
  },
  methods: {
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
  },
};
</script>

<style  scoped>
</style>
