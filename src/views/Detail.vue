<template>
  <div class="detail">
    <header>
      <van-icon name="arrow-left" @click="$router.go(-1)" />
      <p class="p1">讲师详情</p>
    </header>
    <div class="content">
      <div class="box">
        <img :src="list.avatar" alt />
        <div class="xs">
          <p class="name">
            <span class="sp1">{{list.teacher_name}}</span>
            <span class="sp2">{{list.level_name}}</span>
          </p>
          <p class="age">
            <span v-if="list.sex == 0">男</span>
            <span v-else>女</span>
            <span>{{list.teach_age}}年教龄</span>
          </p>
        </div>
        <p class="gz">关注</p>
      </div>
      <div class="box1">
        <van-tabs>
          <van-tab title="讲师介绍">
            <div class="box2">
              <div class="js">
                <p  class="ll">教学年龄</p>
                <p>{{list2}}</p>
              </div>
              <div class="js">
                <p  class="ll">授课价格</p>
                <p>{{list3}}</p>
              </div>
              <div class="js">
                <p class="ll">老师简介</p>
                <!-- <p>{{list1}}</p> -->
              </div>
            </div>
          </van-tab>
          <van-tab title="主讲课程">内容 2</van-tab>
          <van-tab title="学院评价">内容 3</van-tab>
        </van-tabs>
      </div>

      <van-button type="warning" block class="btn">立即预约</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: 0,
      page: 1,
      limit: 2,
      list: [],
      list1: [],
      list2:[],
      list3:[]
    };
  },
  methods: {},
  mounted() {
    this.id = this.$route.query.id;
    this.$http.teacher(this.id).then(res => {
      console.log(res);
      this.list = res.data.data.teacher;
    });
    this.$http.teacherInfo(this.id).then(res => {
      console.log(res);
      this.list1 = res.data.data.intro;
      this.list2 = res.data.data.attr[0].attr_value[0].attr_value_name
      this.list3 = res.data.data.attr[1].attr_value[0].attr_value_name
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
  font-size: 0;
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
  padding: 0.3rem 0.3rem 0.65rem 0.3rem;
  width: 6.9rem;
  margin-left: 0.3rem;
  transform: translateY(-1.2rem);
  font-size: 0;
  display: flex;
  img {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    margin-right: 0.2rem;
  }
  .xs {
    flex: 1;
    .name {
      .sp1 {
        font-size: 0.3rem;
      }
      .sp2 {
        font-size: 0.26rem;
        color: orange;
        margin-left: 0.1rem;
      }
    }
  }
}
.btn {
  position: fixed;
  bottom: 0;
}
.age {
  font-size: 0.25rem;
  color: #ccc;
  margin-top: 0.1rem;
}
.gz {
  font-size: 0.25rem;
  text-align: center;
  line-height: 0.56rem;
  width: 1.3rem;
  height: 0.56rem;
  color: red;
  background: #ebeefe;
  border-radius: 0.5rem;
}
.box1 {
  font-size: 0;
  transform: translateY(-1rem);
}
.box2{
  background: #fff;
  padding: 0.3rem 0.4rem;;
}
.js {
  // width: 100%;
  font-size: 0.28rem;
  color: #8c8c8c;
  margin-bottom: 0.5rem;
  display: flex;
}
.ll{
  margin-right: 0.3rem;
}
</style>