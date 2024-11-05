<template>
  <div>
    <div class="header">
      <div class="mine">我的</div>
    </div>
    <div class="body">
      <div class="person">
        <div class="icon">
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        </div>
        <div class="nackname">
          <div class="name">{{ nackname }}</div>
        </div>
      </div>
      <div class="edit-person-info" @click="edit">编辑个人信息</div>
    </div>

    <div>
      <pre class="dingdan">我的订单</pre>
      <div class="icon-mydingdan">
        <div class="hold">
          <i class="iconfont icon-daishouhuo"> </i>
          <div>待付款</div>
        </div>

        <div class="payment">
          <i class="iconfont icon-daifukuan1"> </i>
          <div>订单</div>
        </div>

        <div class="fahuo">
          <i class="iconfont icon-daifahuo1"> </i>
          <div>待收货</div>
        </div>

        <div class="evaluate">
          <i class="iconfont icon-daipingjia01"></i>
          <div>待评论</div>
        </div>
      </div>
      <div class="transit"></div>
    </div>

    <div>
      <pre class="dingdan">常用工具</pre>
      <div class="icon-mydingdan-">
        <div class="payment">
          <i class="iconfont icon-dizhi"></i>
          <div>关联父母</div>
        </div>

        <div class="fahuo">
          <i class="iconfont icon-jilu"></i>
          <div>健康管理</div>
        </div>

        <div class="hold">
          <i class="iconfont icon-qiandao"></i>
          <div>签到有礼</div>
        </div>

        <div class="evaluate">
          <i class="iconfont icon-yisheng"></i>
          <div>医生问诊</div>
        </div>
      </div>
      <div class="icon-mydingdan-">
        <div class="payment">
          <i class="iconfont icon-yijianfankui"></i>
          <div>意见反馈</div>
        </div>

        <div class="fahuo">
          <i class="iconfont icon-youhuiquan"></i>
          <div>优惠折扣</div>
        </div>

        <div class="hold">
          <i class="iconfont icon-weibiaoti2fuzhi01"></i>
          <div>绑定手环</div>
        </div>

        <div class="evaluate" @click="quit">
          <i class="iconfont icon-ziyuan1"></i>
          <div>更多设置</div>
        </div>
      </div>
      <div class="transit"></div>
    </div>

    <div class="transit"></div>

    <div style="height: 50px"></div>

    <my-nav></my-nav>
  </div>
</template>

<script>
import MyNav from "@/components/MyNav";
export default {
  data() {
    return {
      nackname: this.$store.getters["user/nackname"],
      account: this.$store.getters["user/account"],
      imageUrl: this.$store.getters["user/img"]
        ? this.$store.getters["user/img"]
        : "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      role: this.$store.getters["user/role"],
      id: this.$store.getters["user/id"],
    };
  },
  methods: {
    quit() {
      this.$router.push({
        name: "quit",
      });
    },
    edit() {
      this.$router.push({
        name: "editPersonMassage",
      });
    },
  },
  components: {
    MyNav,
  },
};
</script>
<style scoped>
.header {
  height: 1.9rem;
  width: 100%;
  background: #96d596;
  text-align: center;
}
.header .mine {
  font-size: 1.2rem;
  /* text-align: center; */
  font-weight: lighter;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
.body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.body .edit-person-info {
  margin-right: 10%;
  font-size: 1rem;
  color: #96d596;
}
.person {
  display: flex;
  margin: 2% 2% 0 2%;
  padding-bottom: 2%;
}
.avatar {
  width: 3.3rem;
  height: 3.3rem;
  border-radius: 50px;
  /* margin-right: 2%; */
  margin-left: 0.8rem;
}
.name {
  font-size: 0.88rem;
  text-align: center;
}
.nackname {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5%;
}

.dingdan {
  margin: 3%;
  font-size: 1rem;
  font-weight: bold;
}

.icon-mydingdan {
  text-align: center;
  margin-top: 2%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 3%;
}
.icon-mydingdan .payment .iconfont {
  font-size: 1.3rem;
  color: rgb(219, 140, 37);
  font-weight: bold;
}
.icon-mydingdan .fahuo .iconfont {
  font-size: 1.3rem;
  color: rgb(219, 140, 37);
}
.icon-mydingdan .hold .iconfont {
  font-size: 1.3rem;
  color: rgb(219, 140, 37);
}
.icon-mydingdan .evaluate .iconfont {
  font-size: 1.3rem;
  color: rgb(219, 140, 37);
  font-weight: bold;
}
.transit {
  width: 100%;
  height: 0.45rem;
  background: rgb(242, 242, 242);
}
.icon-mydingdan- {
  text-align: center;
  margin-top: 2%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 3%;
}
.icon-mydingdan- .iconfont {
  font-size: 1.4rem;
  color: rgb(171, 222, 171);
}
</style>