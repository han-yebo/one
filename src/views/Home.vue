<template>
  <div class="home">
    <div class="content">
      <router-view />
    </div>
    <footer>
      <van-tabbar route active-color="#EB6100" inactive-color="#B7B7B7">
        <van-tabbar-item replace to="/home/index" icon="wap-home">首页</van-tabbar-item>
        <van-tabbar-item replace to="/home/culum" icon="column">课程</van-tabbar-item>
        <van-tabbar-item replace icon="gift">约课记录</van-tabbar-item>
        <van-tabbar-item replace icon="todo-list">练习</van-tabbar-item>
        <van-tabbar-item replace icon="manager">我的</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
<style scoped lang="scss">
.home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content{
  flex: 1;
}
footer{
  height: 1rem;
}
</style>
