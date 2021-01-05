<template>
  <div class="big">
    <header>
      <van-icon name="arrow-left" @click="$router.go(-1)" />
      <p>个人信息</p>
    </header>
    <div class="content">
      <p class="p1" @click="show = true">
        <span>头像</span>
        <img :src="img" alt />
        <van-icon name="arrow" />
      </p>
      <van-cell
        title="昵称"
        is-link
        :value="list.nickname"
        size="large"
        @click="tiao(list.nickname)"
      />
      <van-cell title="手机号" :value="list.mobile" size="large" />
      <van-cell
        title="性别"
        is-link
        value="男"
        size="large"
        v-if="list.sex == 0"
        @click="tiao1(list.sex)"
      />
      <van-cell
        title="性别"
        is-link
        value="女"
        size="large"
        v-else-if="list.sex == 1"
        @click="tiao1(list.sex)"
      />
      <van-cell title="性别" is-link value="保密" size="large" v-else @click="tiao1(list.sex)" />
      <van-cell title="出生日期" is-link :value="list.birthday" size="large" @click="isshow = true" />
      <van-cell title="所在城市" is-link :value="address" size="large" @click="city" />
      <!-- <van-cell title="学科" is-link size="large"  @click="subject(list.attr.attr_id,list.attr.attr_val_id)"/>
      <van-cell title="年级" is-link value="请选择" size="large"/>-->
    </div>
    <!-- 上传头像 -->
    <van-popup v-model="show" position="bottom" :style="{ height: '25%' }">
      <div class="box">
        <p>
          <van-uploader :after-read="afterRead">拍照</van-uploader>
        </p>
        <p>
          <van-uploader>从手机相册选择</van-uploader>
        </p>
        <p @click="show = false">取消</p>
      </div>
    </van-popup>
    <!-- 出生日期 -->
    <van-popup v-model="isshow" position="bottom" :style="{ height: '50%' }">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="qd"
        @cancel="isshow = false"
        @change="endTimeChange"
      />
    </van-popup>
    <!-- 所在城市 -->
    <van-popup v-model="flag" position="bottom" :style="{ height: '50%' }">
      <van-area title="标题" :area-list="sum" @cancel="flag = false" @confirm="ct" />
    </van-popup>
  </div>
</template>
<script>
import city from "../../../public/city";
export default {
  data() {
    return {
      minDate: new Date(1901, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      list: [],
      img: "",
      address: "",
      show: false,
      isshow: false,
      flag: false,
      times: "",
      num: 0,
      sum: [],
      province: "",
      citys: "",
      area: "",
      url: ""
    };
  },
  mounted() {
    this.get();
  },
  methods: {
    get() {
      this.$http.user().then(res => {
        console.log(res);
        this.list = res.data.data;
        this.img = res.data.data.avatar;
        let a = [];
        a.push(
          res.data.data.province_name,
          res.data.data.city_name,
          res.data.data.district_name
        );
        this.address = a.toString();
      });
    },
    go() {
      this.$router.push("/mydetail");
    },
    tiao(val) {
      this.$router.push("/set-info?value=" + val);
    },
    tiao1(sex) {
      this.$router.push("/gender?value=" + sex);
    },
    endTimeChange(e) {
      let endTimeArr = e.getValues();
      this.times = `${endTimeArr[0]}-${endTimeArr[1]}-${endTimeArr[2]}`;
      console.log(this.times);
    },
    qd() {
      let obj = { birthday: this.times };
      this.$http.users(obj).then(res => {
        console.log(res);
        let code = res.data.code;
        if (code == 200) {
          this.isshow = false;
          this.get();
        }
      });
    },
    city() {
      this.flag = !this.flag;
      this.sum = city;
    },
    ct(value) {
      this.province = value[0].code;
      this.citys = value[1].code;
      this.area = value[2].code;
      let obj = {
        province_id: this.province,
        city_id: this.citys,
        district_id: this.area
      };
      this.$http.users(obj).then(res => {
        console.log(res);
        let code = res.data.code;
        if (code == 200) {
          this.flag = !this.flag;
          this.get();
        }
      });
    },
    subject(id, _id) {
      this.$router.push("/subject?value=" + id + "&value=" + _id);
      // console.log(id,_id)
    },
    afterRead(file) {
      let content = file.file;
      let dd = new FormData();
      dd.append("file", content);
      this.$http.imgInfo(dd).then(res => {
        console.log(res);
       let url = res.data.data.path
        let obj = { avatar: url };
        this.set(obj)
      });
    },
    set(obj){
      this.$http.users(obj).then(res => {
        console.log(res);
        let code = res.data.code
        if(code == 200){
          this.show = !this.show
          this.get()
        }
      });
    }
  }
};
</script>
<style scoped lang="scss">
.big {
  width: 100%;
  height: 100%;
  background: #eee;
}
header {
  height: 1rem;
  background: #fff;
  display: flex;
  line-height: 1rem;
  justify-content: center;
  position: relative;
  margin-bottom: 0.3rem;
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
.p1 {
  display: flex;
  background: #fff;
  // border-bottom: 0.01rem solid #eee;
  padding: 0.2rem 0.3rem;
  align-items: center;

  .van-icon {
    font-size: 0.35rem;
    color: #969799;
  }
  span {
    font-size: 0.32rem;
    flex: 1;
  }
  img {
    width: 0.74rem;
    height: 0.74rem;
  }
}
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  p {
    text-align: center;
    width: 100%;
    font-size: 0.36rem;
    flex: 1;
    line-height: 1.1rem;
  }
}
</style>