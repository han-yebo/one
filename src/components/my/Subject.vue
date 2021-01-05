<template>
  <div class="big">
    <header>
      <van-icon name="arrow-left" @click="$router.go(-1)" />
      <p>修改个人信息</p>
      <p @click="preservation">保存</p>
    </header>
    <div class="content">
      <div class="box">
        <van-checkbox-group v-model="list">
          <van-checkbox :name="item.id" v-for="(item,key) in list" :key="key" shape="square" @click="x(item.id)">
            <p class="p1">{{item.name}}</p>
          </van-checkbox>
        </van-checkbox-group>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr:[],
      list: []
    };
  },
  methods: {
    get() {
      this.$http.attribute(2).then(res => {
        console.log(res);
        this.list = res.data.data[1].value;
      });
    },
    preservation() {
      let obj = {user_attr:[{"attr_id":2,"attr_val_id":this.arr[0]},{"attr_id":2,"attr_val_id":this.arr[1]}]}
      this.$http.users(obj).then( (res) => {
        console.log(res)
      })
    },
    x(id){
      this.arr.push(id)
      console.log(this.arr)
    }
  },
  mounted() {
    let a = this.$route.query.value;
    // this.value = a
    console.log(a);
    this.get();
  }
};
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
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  padding: 0 0.2rem;
  .van-icon {
    font-size: 0.46rem;
  }
  p {
    font-size: 0.33rem;
  }
}
.content {
  flex: 1;
  background: #f0f2f5;
  overflow: auto;
}
.box {
  margin-top: 0.3rem;
  background: #fff;
  padding: 0 0.35rem;
}
.p1 {
  font-size: 0.32rem;
  padding: 0.36rem 0;
}
.van-checkbox-group {
  display: block;
}
</style>