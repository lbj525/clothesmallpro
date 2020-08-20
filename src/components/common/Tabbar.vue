<template id=''>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
import tabbaritems from "./TabbarItems";
export default {
  name: "tabbar",
  data() {
    return {};
  },
  components: {
    tabbaritems,
  },
};
</script>

<style  scoped>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  box-shadow: 0 -2px 2px rgba(100, 100, 100, 0.2);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
