<template>
  <div class="index">
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img
            src="http://120.53.31.103:84/uploads/image/2020-07-12/TePAomPYrs6dNXjPuLiV0V0WQWSMD7XG0h0wOF70.jpeg"
            alt
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="http://120.53.31.103:84/uploads/image/2020-07-12/WZqbP3uFW1Se7JKxkdmGMa57iCDNvNJ4G5mihZ3n.jpeg"
            alt
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="http://120.53.31.103:84/uploads/image/2020-07-12/oNiAZrbXiCK8iCJWgTPnZMGxBjSvJDuqlMhzrz9D.jpeg"
            alt
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="nav">
      <ul>
        <li>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA8CAYAAADSfGxZAAAFZUlEQVRoQ+1bW2xUVRRd68xMeZPaFESeBkuLhkekk6IfxDEEMQqUmWGMwcQPE5FEo9GYGONP/TIh8UH88BsNwTDObR0CGsUImGDAGVEQIn1JIBYqBSwtr5m5Z5tbaDLYoXPb28d8nPs1ybl7n7PXXWedk8leRN6zfv3pSr/f9wypN4uwlhAheJKQvVnNfblc2fkLFy72ptPBbH5cqf0OhcQ/ZcqJaWVl02dRsmtJrtPQywmQwG+AfJG1M98mk0s7+9dO50dDg6jjx5vrofE2qFYC4htYnPQC6gREpwl1BD5/KpF48DRAKQ0ghNFoexVsvVKAWlCCAJYDmDZwfbQBSYPqo2XLHoo3NFD3AbEp3FKvIZ8CmFesKBE4hfcQuASgTSi7/f7pTfH4AxeLxY7G+MaNV8qV6opSEBVIjQgqSU4FRBWbTwSdCmproqmqibG1Jyv05EBCgFCxwHuNk8hCuF+RO5Dhz7dU9koyWXMNoB5uzsJxomKxi5Ntu7tcCR63oV8g1NOATPAwz8GcrTczGm2Lira/BOD3kOxOaN82+UegjwE4qrRKZcVOJ5OLO7zk3rCh/X6lsisUVJ1QgnSoD84CpI/RHp8ciJcZibRaEB32mGxAuAhyJLodYEB1REQn/P7Md/H4koybuUKhH/0VFfNDgH4eIo8BmCki95EcgQ/2/xWovYyEW/4GZLabxXl/hx0UvHnmXHfjvU6eWEx8OtuyUYhtABZ6n9NNBl5gJNx8tbCyukkwrHe6QLXFsqoaC0WHw+1riNxOADOGlX14Qb0OI256FJuhT00esqxFTxQGonk/gdVDT+op4ta4AEHiWsKqnlpo6ZFwcw+AgmOeSh00mOMFBHXCWlTg0gZEIy22SPE7wMiCYoDoP/YNI24jYRhhGHG3xhhGGEYYRhQ8d83WMFvDbA2zNQa7lBuNMBphNMJohNEIF39dGLE0YmnE0oilEUsjli4QMGJpxNKIpRFLF1JhbpZGLI1YGrE0YmnE0gUC+WI55j1UIEuuUaTHaSY7BeBh9+h5f7MEgWhmJNKyGyIx7+W5zzAYEJFws9OtOxKNpO4XBCQZibRththOO9+YPSXHCGIrY+va5tsB+zCAOWOFRCkBIYIOZfMphkJ/Tawoz34G4kUARTvaRwKsUgHCcRoQ2JHT+vXbNoX69lVa5XaNFStKBQgAl0GELav6UB8QfQ3g5XNfA+XjkfjixXKUChCK8l7X5Y5tBw48mbtLnaPh5u0CbAEwsVgxXsZL4NS4CeJzy6p+pb+Ou4CIxQ5PyuUq3yL4BiCj1hQ+zoz4F4IPc1pvTyYXO+3Ofc+A89oBQzIzH9VKPgBk1Wic6eMEhGOqOQLiHZ9v0i/x+Lwb+ay+58XF8U3YduuzFHlVgKUQTAc5yY1Xqti2GQsg7pwI10H2CORPQH9y9mzNvnSaBR2Krm5wkcipBSKBOooESdQKuAKQ8uGyZRSBcL56twC/UyRFqKOiJGVZ1e1FP06xF/LHa2tTgTlzJlQEAhNna40QgSggdQACQ8kDoNdqrC5gQwSGaVPIkvhVNCz6yr6/caP3fGfnzUtD8ae6YsRgRcZirVW2Lc9BY5NAHLvkNBKDue4cw+QPVlP1mkJ5I+HT3wBcOzjbJCPCq1ToANhIqp2JxMJWLx5Uz0D0F+O4b2eUn1liq1wQIkEI60A8MsAdRLQqW1766uuanwoBEY22BSF6l4hU5Y87ZjkQfxBMQUuKwqNqwq2Tbs1yxRg7YkDkT+ScPJnMzMoyxQU29DpA6gHMFeCYz+d7v6vr7EHnElN4caLC4ZbVhLwL0HH1ngO4F0BSa7ZrPfnSnj2zrxcrbKjj/wFPducAYoibwgAAAABJRU5ErkJggg=="
            alt
          />
          <p>特色课</p>
        </li>
        <li>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA8CAYAAADRy2JxAAAEDElEQVRoQ+2aTWhUVxTH/+fNRyYmE78WirTQFgwiXSjFjWDRlR+k0CIOlJiaVk1VNGrGmBZaOy24EXSmlBqk2inUyaRZKM3MFFxoNt1VQXEhiogSSKwL48ckMTNz7yk3VQntTN7Me2HezJv3tveee+7vnnP+9773LgFAaGjIPZ4eeVsCX4KwCZKXgEhTbRX3EP4mxiXp1b46tfHjYTPzIwX+/PloO4i/AfCGmcHKZcsAa6ALYnKiIxzY9dioX+pOxJZL4Eq1gM8AfeRyy/dPbG67bRg+mIxFwWg3OoBldkTMLFaf+qDthtE5UDDRNwrwUqMDWGnHkKvMwQ/GBAiVKW46K2sePhFjK6NnxrcDb67mncibyT7LbJ20d9LeWPJR0KZq352KLmX2vguX5n+9NDmAmB7kXqTvh7ftHLMlfFeqv5lYXARjZZ6cEAD+AmG/LeGDidhBAJFCxaBejEAYtCV8VzL2NTG+m1UJCE9rFx6AA29so7DeqtAhp6i0dyJvw33eibye2jtp76S99cptZAaO2ud5pXUEzxG82YvJOd4aEZtKsHEEr0YFb0oKXhP+cPvN/2ZhLaj9XUHYGGlpvVcz8OoTFAETID7pn/AeDwUCmfLAT/8Wxp9EuE7M2XKLHhMxMacl+NaLSW/qdCCQzjeHuU97IgbzOZGRx0T92OOp4TpZbvhlzc0cWr9B/VWe9efqnMIzIEAUnwR39ra0jpUbulR/cwf/b8TPC4/siWxqGy11Ilb0nxt4VWPA2Vx26mjko0+fWAFixKdpeJXqBPSJXKazmsCnr9WNj/wiGa16C5f/bK+T6ocuRhdoLs8KaFSv56Cc7STIzRqvJaJOMC/S8/1/eAUO/klkMz35In7093N+ofl6AV4PaC49B2VtZ3U9D00gqgOritV7q0vGnoAxX3UrJtW/+CO+OivkNfX9T2/wSm+nI6l4J0vZw0ATgfpFRhyLbC2s6l2D51uIKFHpYMXMj7YNDHjfdE++xW6PJ+eWwz9s2f5sNkNbwRezQjP7dCV/20Ccu2yLtC8V/lAy9o6LoWp+Qam2lda/ZNHqSJyZ59caf4ZEoNqjXzK8it7h5K/rNNbOMrCcqlj1DcGrPfTwYP97mov3QvJmAEuq8f6uMfiXxbtv4MdGX8PiZaRhviayPstqmqlegrYQcIBR/CVqU/CWwRZwfCQR382QYQDzitEjW8F3XD3jaRpp3AtCiIGFesGxFbyCDQ1FfemJuh2QfFqvBGwH/yrawVTfLkiEAW4oVAK2hVcl4H/o30PM3xYqAdvCqwxoH4r6Fo97PyFGb74SsDX8qxLoTsY/E1J+D0LDjEOZrAn46V1gtPFzxvSV1Je7AN2pCfjXJZCu3wqSx8H8yEXo+Qf3I4hni2PDwwAAAABJRU5ErkJggg=="
            alt
          />
          <p>一对一辅导</p>
        </li>
        <li>
          <img
            src="data:image/png;base64,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"
            alt
          />
          <p>学习日历</p>
        </li>
      </ul>
    </div>
    <div class="big">
      <!-- 名师阵容 -->
      <div class="index-box">
        <p class="index-p1">
          <span class="index-sp1"></span>
          <span>名师阵容</span>
        </p>
      </div>
      <div v-for="(item,key) in list" :key="key" class="mszr" @click="detail(item.teacher_id)">
        <div class="tu">
          <img :src="item.teacher_avatar" alt />
        </div>
        <div class="introduction">
          <p class="p1">{{item.teacher_name}}</p>
          <p class="p2">{{item.introduction}}</p>
        </div>
      </div>
      <!-- 精品课程 -->
      <div class="index-box">
        <p class="index-p1">
          <span class="index-sp1"></span>
          <span>精品课程</span>
        </p>
      </div>
      <div v-for="(item,key) in list1" :key="key" class="jpkc">
        <p class="p3">{{item.title}}</p>
        <p class="p4">共1课时</p>
        <div class="box1">
          <img :src="item.teachers_list[0].teacher_avatar" alt />
          <p class="p5">{{item.teachers_list[0].teacher_name}}</p>
        </div>
        <div class="box">
          <p class="p6">{{item.sales_num}}人已报名</p>
          <p class="mf" v-if="item.price == 0">免费</p>
          <p v-else class="price">
            <van-icon name="balance-list" />1.00
          </p>
        </div>
      </div>
      <!-- 推荐课程 -->
      <div class="index-box">
        <p class="index-p1">
          <span class="index-sp1"></span>
          <span>推荐课程</span>
        </p>
      </div>
      <div v-for="(item,key) in list2" :key="key" class="jpkc">
        <p class="p3">{{item.title}}</p>
        <p class="p4">共1课时</p>
        <div class="box1">
          <img :src="item.teachers_list[0].teacher_avatar" alt />
          <p class="p5">{{item.teachers_list[0].teacher_name}}</p>
        </div>
        <div class="box">
          <p class="p6">{{item.sales_num}}人已报名</p>
          <p class="mf" v-if="item.price == 0">免费</p>
          <p v-else class="price">
            <van-icon name="balance-list" />1.00
          </p>
        </div>
      </div>
      <!-- 明星讲师 -->
      <div class="index-box">
        <p class="index-p1">
          <span class="index-sp1"></span>
          <span>明星讲师</span>
        </p>
      </div>
      <div v-for="(item,key) in list3" :key="key" class="mszr">
        <div class="tu">
          <img :src="item.teacher_avatar" alt />
        </div>
        <div class="introduction">
          <p class="p1">
            <span>{{item.teacher_name}}</span>
            <span class="sp1">{{item.level_name}}</span>
          </p>
          <p class="p2">{{item.introduction}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      list1: [],
      list2: [],
      list3: []
    };
  },
  methods: {
    get() {
      this.$http.home().then(res => {
        console.log(res);
        this.list = res.data.data[0].list;
        this.list1 = res.data.data[1].list;
        this.list2 = res.data.data[2].list;
        this.list3 = res.data.data[3].list
      })
    },
    detail(id){
      this.$router.push('/detail?id='+id)
    }
  },
  mounted() {
    this.get();
  }
};
</script>
<style scoped lang="scss">
.index {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
}
.banner {
  height: 4rem;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  height: 4rem;
  text-align: center;
  background-color: #39a9ed;
  img {
    width: 100%;
    height: 100%;
  }
}
.nav {
  padding: 0 0.3rem;
  transform: translateY(-0.5rem);
  ul {
    display: flex;
    justify-content: space-between;
    li {
      background: #fff;
      width: 2.06rem;
      height: 2.06rem;
      text-align: center;
      border-radius: 0.3rem;
      p {
        font-size: 0.24rem;
        color: #969696;
      }
      img {
        width: 0.42rem;
        height: 0.42rem;
      }
    }
  }
}
.big {
  padding: 0 0.24rem 1rem 0.24rem;
}
.index-box {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  .index-p1 {
    font-size: 0.32rem;
    display: flex;
    align-items: center;
    .index-sp1 {
      background: red;
      height: 0.35rem;
      display: inline-block;
      border: 0.02rem solid red;
      margin-right: 0.2rem;
    }
  }
}
.mszr {
  font-size: 0;
  margin-bottom: 0.2rem;
  display: flex;
  background: #fff;
  padding: 0.45rem 0.3rem;
  border-radius: 0.2rem;
  .tu {
    width: 0.8rem;
    height: 0.8rem;
    margin-right: 0.24rem;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .introduction {
    .p1 {
      font-size: 0.3rem;
      margin-bottom: 0.1rem;
    }
    .p2 {
      font-size: 0.24rem;
      color: #969696;
      display: inline-block;
      width: 5rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
.jpkc {
  font-size: 0;
  background: #fff;
  padding: 0.4rem 0.3rem;
  border-radius: 0.2rem;
  margin-bottom: 0.2rem;
  .p3 {
    font-size: 0.32rem;
  }
  .p4 {
    font-size: 0.24rem;
    color: #969696;
    margin: 0.07rem 0 0.4rem 0;
  }
  .box1{
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
.sp1{
  color: #ED7A2F;
  margin-left: 0.2rem;
  font-size: 0.24rem;
}
.mf{
  font-size: 0.3rem;
  color: #44A426;
}
.price{
  font-size: 0.3rem;
  color: red;
}
.box{
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 0.01rem solid #eee;
  padding-top: 0.24rem;
    margin-top: 0.3rem;
}
</style>