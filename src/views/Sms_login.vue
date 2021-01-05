<template>
  <div class="login">
    <header>
      <van-icon name="arrow-left" />
    </header>
    <div class="banner">
      <img src="/img/login1.png" alt class="img1" />
      <img src="/img/login2.png" alt class="img2" />
    </div>
    <div class="box">
      <van-field v-model="sms" center clearable placeholder="请输入手机号">
        <template #button>
          <van-button size="small" type="primary" @click="s">发送验证码</van-button>
        </template>
      </van-field>
      <van-form>
        <van-field
          v-model="yz"
          name="用户名"
          placeholder="请输入验证码"
          :rules="[{ required: true, message: '请输入验证码' }]"
        />
        <div class="box1">
          <p>未注册的手机号将自动注册</p>
          <p @click="$router.push('/login')">使用密码登录</p>
        </div>
        <div style="margin: 16px;">
          <van-button round block color="linear-gradient(to right, #ff6034, #ee0a24)" @click="login">登录</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag:false,
      // time: 60,
      sms: "",
      value: "",
      yz:""
    };
  },
  methods:{
    s(){
      var obj = {mobile:this.sms,sms_type:"login"}
      this.$http.send(obj).then( (res) => {
        console.log(res)
        // this.flag=true


      })
    },
    login(){
      var obj = {mobile:this.sms,	sms_code:this.yz,type:2}
      this.$http.login(obj).then(res => {
        console.log(res)
        let code = res.data.code
        // console.log(code)
        if(code == 200){
          var token = res.data.data.remember_token
          // console.log(token)
          localStorage.setItem('token',token)
          this.$router.push('/home/my')
        }
      })
    }
  },
};
</script>
<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
}
header {
  height: 1rem;
  display: flex;
  justify-content: flex-start;
  padding: 0.2rem;
  margin-bottom: 0.94rem;
  i {
    font-size: 0.45rem;
  }
}
.banner {
  display: flex;
  width: 100%;
  height: 1.64rem;
  // padding: 0 61px 0 56px;
  justify-content: center;
  align-items: center;
  .img1 {
    width: 1.54rem;
    margin-right: 0.26rem;
  }
  .img2 {
    width: 3.32rem;
    height: 0.82rem;
  }
}
.box {
  padding: 0 35px;
  margin: 66px 0 0 0;
}
.box1 {
  padding: 0 0.3rem;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 0.25rem;
    color: #ccc;
  }
}
</style>