<template>
  <div class="big">
    <header>
      <p>约课记录</p>
    </header>
    <van-tabs>
      <van-tab title="待上课" name="a"></van-tab>
      <van-tab title="已上课" name="b"></van-tab>
      <van-tab title="已取消" name="c"></van-tab>
    </van-tabs>
    <van-empty description="还没有上课记录">
      <van-button type="danger" class="bottom-button">立即约课</van-button>
    </van-empty>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
header {
  height: 1rem;
  text-align: center;
  line-height: 1rem;
  p {
    font-size: 0.36rem;
  }
}
</style>