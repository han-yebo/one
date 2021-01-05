<template>
  <div>
    <header>
      <van-icon name="arrow-left" @click="$router.go(-1)" />
      <p>我的学习</p>
    </header>
    <div class="content">
      <van-tabs>
        <van-tab :title="item.name" v-for="(item,key) in list" :key="key"></van-tab>
      </van-tabs>
      <van-empty description="还没有课程，快去选择课程">
        <van-button type="danger" class="bottom-button" @click="$router.push('/home/culum')">选择课程</van-button>
      </van-empty>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.get();
  },
  methods: {
    get() {
      this.$http.myStudy().then(res => {
        console.log(res);
        this.list = res.data.data.typeNum;
      });
    }
  }
};
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
.van-tab {
  font-size: 0.3rem;
}
</style>