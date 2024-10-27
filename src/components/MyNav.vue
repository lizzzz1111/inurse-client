<template>
  <div class="nav">
    <!-- :class="{select :name === 'index'}" 可以理解为：当前选中的，动态样式绑定 -->
    <!-- 如果这个:name===后面的值的话那么就绑定选中样式 -->
    <div
      class="nav-item"
      :class="{ select: name === 'index' }"
      @click="to('index')"
    >
      <div class="icon">
        <i class="iconfont icon-shouye"></i>
      </div>
      <div class="take">首页</div>
    </div>
    <div
      class="nav-item"
      :class="{ select: name === 'message' }"
      @click="to('message')"
    >
      <div class="icon">
        <i class="iconfont icon-xiaoxi"></i>
      </div>
      <div class="take">消息</div>
    </div>
    <div
      class="nav-item"
      :class="{ select: name === 'sos' }"
      @click="to('sos')"
    >
      <div class="icon">
        <i class="iconfont icon-safe"></i>
      </div>
      <div class="take">求救</div>
    </div>
    <div
      class="nav-item"
      :class="{ select: name === 'square' }"
      @click="to('square')"
    >
      <div class="icon">
        <i class="iconfont icon-shequ"></i>
      </div>
      <div class="take">社区</div>
    </div>
    <div
      class="nav-item"
      :class="{ select: name === 'mine' }"
      @click="to('mine')"
    >
      <div class="icon">
        <i class="iconfont icon-wode"></i>
      </div>
      <div class="take">我的</div>
    </div>
  </div>
</template>

<script>
export default {
  // 当页面中有某些数据依赖其他数据进行变动的时候，可以使用计算属性
  computed: {
    // 计算属性 computed 是基于data中数据进行处理的，data数据变化，它也跟着变化
    // 当data中数据没有发生改变时，我们调用computed中函数n次，只会执行一次
    name() {
      // 在声明路由的时候，每个路由都有自己的名称，就是name
      // vue中获取当前路由name
      return this.$route.name;
    },
  },
  methods: {
    to(name) {
      // 这个name就是你的路由名字，然后在html上面判断
      // 如果，name是Index，我就给这个加一个class，就是加select
      // 这个select对应的就是绿色的样式
      if (name === this.name) return false;
      this.$router.replace({
        name,
      });
    },
  },
};
</script>

<style scoped>
.nav {
  font-size: 0.6rem;
  position: fixed;
  /* margin: 10px; */
  bottom: 0;
  /* 高度可以根据个人页面显示情况进行适当调整 */
  height: 1.5rem;
  display: flex;
  width: 100%;
  background: white;
  border-top: 1px solid rgb(95, 93, 93);
}
.nav .nav-item {
  flex-grow: 1;
  color: rgb(155, 143, 143);
  display: flex;
  /* 水平居中 */
  justify-content: center;
  /* 垂直居中 */
  align-items: center;
  flex-direction: column;
}
/* 被选中之后的样式 */
.nav .nav-item.select {
  color: rgb(74, 176, 235);
}

.nav .nav-item .icon .iconfont {
  font-size: 0.68rem;
}
.nav .nav-item .take {
  font-size: 0.4rem;
}
</style>