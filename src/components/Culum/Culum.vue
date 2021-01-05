<template>
  <div class="culum">
    <header>
      <div class="header-top">
        <p class="tese">特色课</p>
        <van-icon name="search" />
      </div>
      <div class="header-bottom">
        <Down @cc="chuan" @dd="chuan1" @ee="chuan2"></Down>
      </div>
    </header>
    <div class="content">
      <div v-for="(item,key) in list" :key="key" class="jpkc">
        <p class="p3">{{item.title}}</p>
        <p class="p4">共1课时</p>
        <div class="box1">
          <img :src="item.teachers_list[0].teacher_avatar" alt />
          <p class="p5">{{item.teachers_list[0].teacher_name}}</p>
        </div>
        <div class="box">
          <p class="p6">{{item.sales_num}}人已报名</p>
          <p class="mf" v-if="item.price == 0">免费</p>
          <p v-else class="price">1.00</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Down from "./Down";
export default {
  components: { Down },
  data() {
    return {
      course_type: 0,
      limit: 10,
      page: 1,
      list: []
    };
  },
  methods: {
    get() {
      var obj = {
        limit: this.limit,
        page: this.page
      };
      this.$http.course(obj).then(res => {
        // console.log(res);
        this.list = res.data.data.list;
      });
    },
    chuan(aa) {
      this.list = aa;
      // console.log(aa);
    },
    chuan1(bb) {
      this.list = bb;
      // console.log(aa)
    },
    chuan2(cc) {
      this.list = cc;
      // console.log(aa)
    }
  },
  mounted() {
    this.get();
  }
};
</script>
<style scoped lang="scss">
.culum {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  width: 100%;
  height: 2rem;
  position: fixed;
  top: 0;
  background: #fff;
}
.content {
  flex: 1;
  overflow: auto;
  background: #f0f2f5;
  padding: 2.2rem 0.2rem 1rem 0.2rem;
}
.header-top {
  display: flex;
  justify-content: center;
  height: 1rem;
  line-height: 1rem;
  position: relative;
  .tese {
    font-size: 0.36rem;
  }
  i {
    position: absolute;
    font-size: 0.36rem;
    right: 0.3rem;
    top: 0.35rem;
  }
}
.header-bottom {
  height: 1rem;
}
.jpkc {
  font-size: 0;
  background: #fff;
  padding: 0.4rem 0.3rem;
  border-radius: 0.2rem;
  margin-bottom: 0.3rem;
  .p3 {
    font-size: 0.32rem;
  }
  .p4 {
    font-size: 0.24rem;
    color: #969696;
    margin: 0.07rem 0 0.4rem 0;
  }
  .box1 {
    display: flex;
    img {
      width: 0.54rem;
      height: 0.54rem;
      border-radius: 50%;
      margin-right: 0.2rem;
    }
  }
  .p5 {
    font-size: 0.24rem;
    color: #969696;
  }
  .p6 {
    font-size: 0.28rem;
    color: #969696;
  }
}
.box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0.01rem solid #eee;
  padding-top: 0.24rem;
  margin-top: 0.3rem;
}
.mf {
  font-size: 0.3rem;
  color: #44a426;
}
.price {
  font-size: 0.3rem;
  color: red;
}
</style>