<template id=''>
  <div class="nav-bar">
    <div class="left-slot">
      <slot name="left"></slot>
    </div>
    <div class="center-slot">
      <slot name="center"></slot>
    </div>
    <div class="right-slot">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  template: "",
  data() {
    return {};
  },
  components: {},
};
</script>

<style  scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.2);
}

.left-slot,
.right-slot {
  width: 60px;
}

.center-slot {
  flex: 1;
}
</style>
