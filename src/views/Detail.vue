<template>
  <div class="detail">
    <header>
      <van-icon name="arrow-left" />
      <p class="p1">讲师详情</p>
    </header>
    <div class="content">
      <div class="box">
        <p>ddd</p>
      </div>
      <van-tabs >
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
      </van-tabs>
      <van-button type="warning" block class="btn">立即预约</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: 0
    };
  },
  methods: {},
  mounted() {
    this.id = this.$route.query.id;
    // console.log(this.id)
    // var obj = { basis_id: this.id };
    this.$http.teacher(this.id).then(res => {
      console.log(res);
    });
  }
};
</script>
<style scoped lang="scss">
.detail {
  width: 100%;
  height: 100%;
}
header {
  height: 2rem;
  background: #5ca3f5;
  color: #fff;
  text-align: center;
  padding-top: 0.2rem;
  position: relative;
  .p1 {
    font-size: 0.35rem;
  }
  i {
    font-size: 0.5rem;
    position: absolute;
    left: 0.2rem;
  }
}
.content {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
}
.box {
  background: #fff;
  border-radius: 0.1rem;
  padding: 0.2rem;
  width: 6.9rem;
  margin-left: 0.3rem;
  transform: translateY(-1.2rem);
  font-size: 0;
}
.btn {
  position: fixed;
  bottom: 0;
}
</style>