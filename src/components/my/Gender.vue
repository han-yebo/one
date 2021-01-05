<template>
  <div class="big">
    <header>
      <van-icon name="arrow-left" @click="$router.go(-1)" />
      <p>修改个人信息</p>
      <p @click="bao">保存</p>
    </header>
    <div class="content">
      <div class="box">
        <p v-for="(item,key) in option1" :key="key" class="p1" @click="nn(item.value)">{{item.text}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      option1: [
        { text: "男", value: 0 },
        { text: "女", value: 1 }
      ],
      value: "",
      sex: ""
    };
  },
  mounted() {
    let a = this.$route.query.value;
    this.value = a;
  },
  methods: {
    bao() {
      let obj = {sex:this.sex}
      this.$http.users(obj).then(res => {
        // console.log(res);
        let code = res.data.code
        if(code == 200){
          this.$router.push('/mydetail')
        }
      });
    },
    nn(a){
      this.sex = a
      // console.log(this.sex)
    }
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
  // height: 3rem;
  background: #fff;
  // padding: 0 0.3rem;
  .p1 {
    font-size: 0.3rem;
    padding: 0.3rem;
    border-bottom: 0.01rem solid #f0f2f5;
  }
  p:hover{
    background: orange;
    color: #fff;
  }
}
</style>