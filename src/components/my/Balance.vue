<template>
  <div class="big">
    <header>
      <van-icon name="arrow-left" @click="$router.go(-1)" />
      <p>我的余额</p>
      <p>余额记录</p>
    </header>
    <div class="content">
      <div class="box">
        <p class="sp1">我的余额</p>
        <p class="sp2">0学习币</p>
      </div>
      <div class="box1">
        <div class="xs">
          <p class="p1">30000.00学习币</p>
          <p class="p2">￥30000.00</p>
        </div>
        <div class="xs">
          <p class="p1">20000.00学习币</p>
          <p class="p2">￥20000.00</p>
        </div>
        <div class="xs">
          <p class="p1">10000.00学习币</p>
          <p class="p2">￥10000.00</p>
        </div>
        <div class="xs">
          <p class="p1">8000.00学习币</p>
          <p class="p2">￥8000.00</p>
        </div>
        <div class="xs">
          <p class="p1">5000.00学习币</p>
          <p class="p2">￥5000.00</p>
        </div>
        <div class="xs">
          <p class="p1">3000.00学习币</p>
          <p class="p2">￥3000.00</p>
        </div>
        <div class="xs">
          <p class="p1">0.01学习币</p>
          <p class="p2">￥0.01</p>
        </div>
        <div class="xs">
          <p class="p1">100.00学习币</p>
          <p class="p2">￥100.00</p>
        </div>
      </div>
      <div class="box2">
        <p class="cz">充值说明</p>
        <div class="box3">
          1、学习币是网校中专有的一种虚拟货币，大家可以用学习币购买网校内的任何虚拟商品，比如课程、辅导答疑。
          2、充值后没有使用期限,但无法提现,退款和转赠他人。
          3、如遇到无法充值、充值失败等问题,请联系客服。
        </div>
      </div>
    </div>
    <van-button type="primary" block color="#ccc">立即充值</van-button>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.big {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.3rem;

  .van-icon {
    font-size: 0.46rem;
  }
  p {
    font-size: 0.36rem;
  }
}
.content {
  background: #eee;
  flex: 1;
  overflow: auto;
}
.box {
  background: #fff;
  height: 1rem;
  display: flex;
  line-height: 1rem;
  padding: 0 0.4rem;
  .sp1 {
    font-size: 0.32rem;
    margin-right: 0.3rem;
  }
  .sp2 {
    font-size: 0.32rem;
    color: orange;
  }
}
.box1 {
  padding: 0 0.35rem;
}
.xs {
  display: flex;
  padding: 0.4rem 0.33rem;
  background: #fff;
  border-radius: 0.3rem;
  margin-top: 0.3rem;
  justify-content: space-between;
}
.p1 {
  font-size: 0.32rem;
}
.p2 {
  font-size: 0.32rem;
  color: red;
}
.cz {
  font-size: 0.34rem;
  font-weight: 600;
  padding: 0.3rem 0.3rem;
}
.box2{
  background: #fff;
  margin-top: 0.3rem;
}
.box3{
  font-size: 0.26rem;
  padding: 0 0.42rem;
}
</style>