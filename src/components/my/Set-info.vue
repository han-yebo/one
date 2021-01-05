<template>
  <div class="big">
    <header>
      <van-icon name="arrow-left" @click="$router.go(-1)" />
      <p>修改个人信息</p>
      <p @click="preservation">保存</p>
    </header>
    <div class="content">
      <van-cell-group>
        <van-field v-model="value" placeholder="请输入用户名" />
      </van-cell-group>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      value:''
    }
  },
  mounted(){
    // console.log(nickname)
    let a = this.$route.query.value
    this.value = a
    // console.log(a)
  },
  methods:{
    preservation(){
      let obj = {nickname:this.value}
      this.$http.users(obj).then( (res) => {
        // console.log(res)
        let code = res.data.code
        if(code == 200){
          this.$router.push('/mydetail')
          
        }
      })
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
.van-cell-group{
  margin-top: 0.3rem;
}
</style>