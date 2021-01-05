<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item title="分类" ref="item">
        <div class="box">
          <p class="p1">{{arr.name}}</p>
          <p class="p2">
            <span
              v-for="(item,key) in arr.child"
              :key="key"
              class="sp1"
              @click="nj(item.id)"
            >{{item.name}}</span>
          </p>
          <p class="p1">{{arr1.name}}</p>
          <p class="p2">
            <span
              v-for="(item,key) in arr1.child"
              :key="key"
              class="sp2"
              @click="xk(item.id)"
            >{{item.name}}</span>
          </p>
        </div>
        <div style="padding: 20px 16px; display:flex;">
          <van-button type="default" block class="btn1">重置</van-button>
          <van-button type="warning" block @click="onConfirm">确认</van-button>
        </div>
      </van-dropdown-item>
      <van-dropdown-item title="排序" ref="item1">
        <div class="box1">
          <p v-for="(item,key) in option1" :key="key" @click="px(item.value)">{{item.text}}</p>
        </div>
      </van-dropdown-item>
      <van-dropdown-item title="筛选" ref="item2">
        <div class="box4">
          <p v-for="(item,key) in option2" :key="key" class="qb" @click="sx(item.id)">{{item.text}}</p>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>
  </div>
</template>
<script>
export default {
  name: "Down",
  data() {
    return {
      list: [],
      list1: [],
      list2:[],
      iid: [],
      iids: [],
      arr: [],
      arr1: [],
      bys: [],
      type:[],
      option1: [
        { text: "综合排序", value: 0 },
        { text: "最新", value: 1 },
        { text: "最热", value: 2 },
        { text: "价格从低到高", value: 3 },
        { text: "价格从高到低", value: 4 }
      ],
      option2: [
        { text: "全部", id: 0 },
        { text: "大班课", id: 2 },
        { text: "小班课", id: 3 },
        { text: "公开课", id: 4 },
        { text: "点播课", id: 5 },
        { text: "面授课", id: 6 },
        { text: "音频课", id: 7 },
        { text: "系统课", id: 8 },
        { text: "图文课", id: 9 }
      ]
    };
  },
  methods: {
    get() {
      this.$http.courseClassify().then(res => {
        // console.log(res);
        this.arr = res.data.data.attrclassify[0];
        this.arr1 = res.data.data.attrclassify[1];
        // console.log(this.list);
      });
    },
    nj(id) {
      this.iid.push(id);
      this.iids.push(id);
    },
    xk(id) {
      this.iid.push(id);
      this.iids.push(id);
      // console.log(this.iids);
    },
    onConfirm() {
      this.$http.courseBasis(1, 10, 0, "", this.iid, 0).then(res => {
        // console.log(res)
        let code = res.data.code;
        if (code == 200) {
          this.iid = [];
          this.list = res.data.data.list;
          this.$emit("cc", this.list);
          this.$refs.item.toggle();
        }
      });
    },
    px(val) {
      this.bys = val;
      console.log(this.bys);
      // console.log(this.iids);
      this.$http.courseBasis(1, 10, 0, this.bys, this.iids, 0).then(res => {
        // console.log(res);
        let code = res.data.code
        if(code == 200){
          this.iids=[]
          this.list1 = res.data.data.list
          this.$emit("dd",this.list1)
          this.$refs.item1.toggle();
        }
      });
    },
    sx(id){
      console.log(id)
      this.type = id
      this.$http.courseBasis(1, 10, this.type, this.bys, this.iids, 0).then(res => {
        // console.log(res);
        let code = res.data.code
        if(code == 200){
          this.iids=[]
          this.list2 = res.data.data.list
          this.$emit("ee",this.list2)
          this.$refs.item2.toggle();
        }
      });
    }
  },
  mounted() {
    this.get();
  }
};
</script>
<style scoped lang="scss">
.box {
  padding: 0 0.3rem;
}
.p1 {
  font-size: 0.32rem;
  padding-bottom: 0.25rem;
  margin-top: 0.2rem;
}
.p2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 0.25rem;
  border-bottom: 0.01rem solid #eee;
}
.sp1,
.sp2 {
  font-size: 0.26rem;
  display: inline-block;
  padding: 0.16rem 0.47rem;
  background: #f1f1f1;
  margin-bottom: 0.2rem;
}
.sp1:hover {
  background: #ebeefe;
  color: red;
}
.sp2:hover {
  background: #ebeefe;
  color: red;
}
.btn1 {
  margin-right: 0.25rem;
}
.box1 {
  text-align: center;
  font-size: 0.27rem;
  p {
    padding: 0.3rem 0;
    border-bottom: 0.01rem solid #eee;
  }
}
.box4 {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0.4rem;
  .qb {
    font-size: 0.27rem;
    line-height: 0.66rem;
    width: 1.38rem;
    height: 0.66rem;
    text-align: center;
    background: #eee;
    margin-bottom: 0.2rem;
  }
  .qb:hover {
    background: #ebeefe;
    color: red;
  }
}
</style>