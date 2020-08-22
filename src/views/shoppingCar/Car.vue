<template>
  <div id="shoppingCar">
    <navbar id="car-slot">
      <header slot="center">购物车</header>
    </navbar>
  </div>
</template>

<script>
import navbar from "components/common/navbar/Navbar";

export default {
  name: "car",
  template: "",
  data() {
    return {};
  },
  components: {
    navbar,
  },
};
</script>

<style  scoped>
#car-slot {
  color: red;
  background-color: #fff;
}
</style>
