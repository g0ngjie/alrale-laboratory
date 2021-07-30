<template>
  <div class="home-container">
    <div id="container" />
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    require("@/utils/dashboard");
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";
.home-container {
  @include set_w_h;
  @include flex_center;
  #container {
    @include set_w_h;
  }
}
</style>
