<template>
  <div class="gj-container">
    <iframe
      src="http://www.g0ngjie.com"
      height="100%"
      width="100%"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";
.gj-container {
  @include set_w_h;
  @include flex_center;
}
</style>
