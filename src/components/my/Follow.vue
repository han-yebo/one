<template>
  <div>
    <header>
      <van-icon name="arrow-left" @click="$router.go(-1)" />
      <p>我的关注</p>
    </header>
    <div class="content">
      <van-empty description="暂无关注" />
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang="scss">
header {
  height: 1rem;
  display: flex;
  line-height: 1rem;
  justify-content: center;
  position: relative;
  .van-icon {
    font-size: 0.46rem;
    position: absolute;
    top: 0.25rem;
    left: 0.2rem;
  }
  p {
    font-size: 0.36rem;
  }
}
</style>