<template>
  <div class="culum">
    <header>
      <div class="header-top">
        <p class="tese">特色课</p>
        <van-icon name="search" />
      </div>
      <div class="header-bottom">
        <Down></Down>
      </div>
    </header>
    <div class="content">

    </div>
  </div>
</template>
<script>
import Down from './Down'
export default {
  components:{Down},
  data(){
    return{
      course_type:0,
      limit:10,
      page:1,
      list:[]
    }
  },
  methods:{
    get(){
      var obj = {
        course_type:this.course_type,
        limit:this.limit,
        page:this.page
      }
      this.$http.course(obj).then( (res) => {
        console.log(res)
      })
    }
  },
  mounted(){
    this.get()
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
  height: 2rem;
}
.content {
  flex: 1;
  overflow: auto;
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
</style>