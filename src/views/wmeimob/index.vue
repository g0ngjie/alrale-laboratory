<template>
  <div class="wmeimob-container">
    <iframe
      src="https://www.wmeimob.com"
      height="667"
      width="375"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";
.wmeimob-container {
  @include set_w_h;
  @include flex_center;
}
</style>
