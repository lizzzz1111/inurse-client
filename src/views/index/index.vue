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
  </div>
</template>

<script>
import MyNav from "@/components/MyNav";
import Search from "@/components/Search";
import MyBannar from "@/components/Bannar";
export default {
  data() {
    return {};
  },
  components: { MyNav, Search, MyBannar },
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
</style>
