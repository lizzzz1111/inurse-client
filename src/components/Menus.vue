<template>
  <div class="menu">
    <div class="new-item">
      <i class="iconfont icon-shouye1" style="font-size: 1.3rem"></i>
      <div class="txt">血压</div>
    </div>

    <div class="new-item">
      <i
        class="iconfont icon-tubiaozhizuomobankuozhan-"
        style="font-size: 1.3rem"
      ></i>
      <div class="txt">血糖</div>
    </div>

    <div class="new-item">
      <i class="iconfont icon-tizhong1" style="font-size: 1.2rem"></i>
      <div class="txt">体重</div>
    </div>
  </div>
</template>

<style scoped>
.menu {
  margin-top: 7%;
  margin-bottom: 3%;
  display: flex;
}
.menu .new-item {
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.menu .new-item .iconfont {
  color: rgb(219, 140, 37);
  font-weight: bold;
}
.menu .new-item .txt {
  color: black;
  font-size: 1rem;
}
</style>