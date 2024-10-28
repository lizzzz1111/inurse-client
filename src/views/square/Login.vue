<template>
  <div class="login">
    <div class="logo">
      <img
        src="https://labfile.oss.aliyuncs.com/courses/2741/inurse_logo.jpg"
        alt="my login image"
      />
    </div>
    <mt-field
      label="账号"
      placeholder="请输入手机号"
      v-model="ruleForm.account"
    ></mt-field>
    <mt-field
      label="密码"
      placeholder="请输入密码"
      type="password"
      v-model="ruleForm.password"
    ></mt-field>
    <div class="register-button" @click="login">
      <div class="button" size="small">登录</div>
    </div>
    <div class="text">
      <p>
        还未注册？
        <span>
          <router-link to="register">前往注册</router-link>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        password: '',
        account: '',
      },
    };
  },
  methods: {
    register() {
    },
    login() {}
  },
}
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: #fff;
}
.logo {
  text-align: center;
}
.logo img {
  width: 100%;
}

.register-button {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}
.button {
  padding: 2%;
  vertical-align: center;
  border-radius: 4px;
  color: #fff;
  background: #96d596;
  text-align: center;
  /* height: 33px; */
  width: 30%;
  font-size: 0.9rem;
}
.text {
  text-align: center;
  margin: 2%;
  font-size: 0.99rem;
}
/* 其他登录方式 */
.other-methods {
  margin-top: 15%;
  align-items: center;
  text-align: center;
  font-size: 0.4rem;
}
.other-methods .safety {
  text-align: center;
  font-size: 1rem;
  width: 100%;
  height: 100%;
}
.other-methods .relation {
  text-align: center;
  font-size: 0.5rem;
  color: rgb(179, 174, 174);
  width: 100%;
  height: 100%;
}
.icon {
  text-align: center;
  margin-top: 8%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.icon .time .iconfont {
  font-size: 0.8rem;
  color: rgb(76, 191, 0);
}
.icon .video .iconfont {
  font-size: 0.9rem;
  margin-left: 2%;
  color: rgb(14, 12, 12);
}
.icon .once .iconfont {
  font-size: 1rem;
  color: rgb(2, 169, 241);
}
</style>
