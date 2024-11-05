<template>
  <div>
    <div class="square">
      <div class="back"></div>
      <div class="text">社区广场</div>
      <div class="person"></div>
    </div>

    <div class="intro">
      <pre class="one">  我们承诺|专业安全</pre>
      <pre class="two">  三甲主治医生 专家团队双重审核 严密监管措施</pre>
    </div>

    <div class="icon">
      <div class="piyao">
        <i class="iconfont icon-tongzhi"></i>
        <div>每日辟谣</div>
      </div>

      <div class="common">
        <i class="iconfont icon-aid"></i>
        <div>急救常识</div>
      </div>

      <div class="speak">
        <i class="iconfont icon-dajiangtang"></i>
        <div>医师讲堂</div>
      </div>
    </div>

    <!-- 推文 -->
    <div
      class="subscribe"
      @click="toDetails(item)"
      v-for="(item, index) in list"
      :key="index"
    >
      <div class="img">
        <img class="img" alt="announce_one" :src="item.image" />
      </div>
      <div class="title">{{ item.title }}</div>
      <div class="digest">
        点击查看详情
        <span class="text-a"></span>
      </div>
    </div>

    <div class="great"></div>

    <my-nav></my-nav>
  </div>
</template>

<script>
import MyNav from "@/components/MyNav";

export default {
  data() {
    return {
      list: "",
    };
  },
  components: {
    MyNav,
  },
  created() {
    this.getAnnounceListByAuditSuccessful();
  },
  methods: {
    getAnnounceListByAuditSuccessful() {
      this.$http.get("/getAnnounceListByAuditSuccessful").then((res) => {
        // console.log(res.data)
        if (res.data.code === "1") {
          this.list = res.data.data;
        }
      });
    },
    toDetails(item) {
      this.$router.push({
        name: "details",
        params: {
          announce_id: item.announce_id,
        },
      });
    },
  },
};
</script>

<style scoped>
.square {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.01rem solid gray;
}
.square .text {
  text-align: center;
  margin-top: 0.35rem;
  font-size: 1.1rem;
}
.square .back {
  font-size: 0.9rem;
  color: #797979;
}
.intro {
  height: 40%;
  background: rgb(245, 239, 239);
}
.intro .one {
  margin-top: 2%;
  font-size: 0.88rem;
  color: rgb(240, 153, 0);
  font-weight: bold;
}
.intro .two {
  font-size: 0.88rem;
  color: rgb(240, 153, 0);
  /* font-weight: bold; */
}

.icon {
  text-align: center;
  margin-top: 2%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.icon .piyao .iconfont {
  font-size: 1.2rem;
  color: rgb(116, 167, 236);
}
.icon .common .iconfont {
  font-size: 1.2rem;
  color: rgb(132, 211, 236);
}
.icon .speak .iconfont {
  font-size: 1.2rem;
  color: rgb(219, 123, 135);
}
.img {
  /* display: flex; */
  margin-top: 6px;
  height: 180px;
  width: 96%;
  margin-left: 4px;
  text-align: center;
  /* justify-content: center; */
  align-items: center;
  margin-bottom: 10px;
}
.title {
  font-size: 18px;
  margin: 10px;
  color: black;
}
.digest {
  color: rgb(173, 168, 168);
  text-align: justify;
  margin: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}
.great {
  height: 20%;
  width: 100%;
  margin-bottom: 20%;
}
</style>
