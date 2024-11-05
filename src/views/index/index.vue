<template>
  <div class="app">
    <div class="total">
      <div class="container">
        <div>
          <div class="icon"><i class="iconfont icon-dingwei"></i></div>
          <div class="text"></div>
        </div>
        <div class="detail">
          <div class="info">
            <i class="iconfont icon-fabu" @click="publishArticle"></i>
            <i class="iconfont icon-add_circle"></i>
          </div>
        </div>
      </div>
    </div>
    <my-nav></my-nav>
    <search></search>
    <my-bannar></my-bannar>
    <my-menus></my-menus
    ><!-- 四个模块 -->
    <div class="sky">
      <div class="up">
        <div class="medic-visit" @click="medicVisit">
          <i class="iconfont icon-jia"></i>
          <div class="text">医护上门</div>
        </div>
        <div class="hospial-recommend">
          <i class="iconfont icon-yisheng"></i>
          <div class="text">在线问诊</div>
        </div>
      </div>
      <div class="down">
        <div class="online-inquery">
          <i class="iconfont icon-yiyuan"></i>
          <div class="text">医院推荐</div>
        </div>
        <div class="refer-nearby">
          <i class="iconfont icon-yaodianguanli"></i>
          <div class="text">附近药店</div>
        </div>
      </div>
    </div>
    <!-- 底部图片 -->
    <div class="family">
      <img
        class="image"
        alt="famliy"
        src="https://labfile.oss.aliyuncs.com/courses/2741/family.png"
      />
    </div>
  </div>
</template>

<script>
import MyNav from "@/components/MyNav";
import Search from "@/components/Search";
import MyBannar from "@/components/Bannar";
import MyMenus from "@/components/Menus";
export default {
  data() {
    return {};
  },
  components: { MyNav, Search, MyBannar, MyMenus },
};
</script>

<style scoped>
.app {
  height: 50%;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
}
.total {
  height: 90%;
  width: 100%;
}
.app .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5% 8% 0 5%;
}
.app .container .icon .iconfont {
  font-size: 1.4rem !important;
}
.app .location {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.app .location .icon .iconfont {
  color: rgb(219, 140, 37);
  font-size: 1.4rem !important;
}
.app .location .detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.app .detail .info .iconfont {
  padding: 4%;
  margin-right: 15%;
  color: rgb(214, 178, 125);
  font-size: 1.4rem !important;
}

/*四个模块 */
.sky {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(255, 255, 255);
}
.sky .up {
  margin: 5%;
}
.sky .down {
  margin: 5%;
}
.sky .iconfont {
  font-size: 1rem;
  margin: 35%;
  color: #96d596;
}
.up .medic-visit {
  margin-top: 5%;
  border: 1px solid rgb(218, 209, 209);
  border-radius: 10px;
  padding: 0.75rem;
}
.up .hospial-recommend {
  margin-top: 5%;
  border: 1px solid rgb(218, 209, 209);
  border-radius: 10px;
  padding: 0.75rem;
}
.down .online-inquery {
  margin-top: 5%;
  border: 1px solid rgb(218, 209, 209);
  border-radius: 10px;
  padding: 0.75rem;
}
.down .refer-nearby {
  margin-top: 5%;
  border: 1px solid rgb(218, 209, 209);
  border-radius: 10px;
  padding: 0.75rem;
}
.family {
  text-align: center;
}
.image {
  width: 85%;
  height: 40%;
  border-radius: 20px;
  margin-bottom: 1.55rem;
  margin-top: 0.15rem;
}
</style>
