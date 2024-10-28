<template>
  <div class="register">
    <div class="logo">
      <img
        src="https://labfile.oss.aliyuncs.com/courses/2741/inurse_logo.jpg"
        alt="my login image"
      />
    </div>
    <mt-field
      label="账号"
      placeholder="请输入手机号"
      v-model="form.account"
    ></mt-field>
    <mt-field
      label="密码"
      placeholder="请输入密码"
      type="password"
      v-model="form.password"
    ></mt-field>
    <mt-field
      label="确认密码"
      placeholder="请确认密码"
      type="password"
      v-model="repassword"
    ></mt-field>
    <mt-radio
      align="right"
      title="选择身份"
      v-model="form.role"
      :options="options"
    ></mt-radio>
    <div v-if="form.role === '2' || form.role === '3'">
      <mt-field
        label="名字"
        placeholder="请输入名字"
        v-model="form.realname"
      ></mt-field>
      <mt-field
        label="性别"
        placeholder="请输入性别"
        v-model="form.sex"
      ></mt-field>
      <mt-field
        label="年龄"
        placeholder="请输入年龄"
        v-model="form.age"
      ></mt-field>
      <mt-field
        label="毕业院校"
        placeholder="请输入毕业院校"
        v-model="form.college"
      ></mt-field>
      <mt-field
        label="科目"
        placeholder="请输入科目"
        v-model="form.subject"
      ></mt-field>
      <mt-field
        label="身份证"
        placeholder="请输入身份证"
        v-model="form.identity"
      ></mt-field>
      <div
        class="portrait"
        style="margin-left:0.3rem;font-size:0.45rem;margin-bottom:0.3rem"
      >
        <span class="details">
          <div style="font-size:16px;margin:10px">请上传职位证明图片</div>
          <el-upload
            class="avatar-uploader"
            action="/api/uploadUser"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </span>
      </div>
    </div>
    <div class="register-button" @click="register">
      <div class="button" size="small">注册</div>
    </div>
    <div class="text">
      <p>
        已有账号？
        <span><router-link to="login">立即登录</router-link></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: '1',
          label: '子女'
        },
        {
          value: '2',
          label: '护工'
        },
        {
          value: '3',
          label: '医生'
        }
      ],
      repassword: '',
      imageUrl: '',
      form: {
        account: '',
        password: '',
        identity: '',
        realname: '',
        sex: '',
        age: '',
        college: '',
        subject: '',
        job_img: '',
        role: '1',
        status: 0,
      }
    };
  },
  methods: {
    register() {
      // 注册逻辑
    },
    handleAvatarSuccess() {
      // 头像上传成功处理逻辑
    },
    beforeAvatarUpload() {
      // 上传前的处理逻辑
    }
  }
};
</script>

<style scoped>
.register {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: #fff;
  font-size: 0.5rem;
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
  margin-top: 30px;
}
.button {
  padding: 2%;
  vertical-align: center;
  border-radius: 4px;
  color: #fff;
  background: #96d596;
  text-align: center;
  width: 30%;
  font-size: 0.9rem;
}
.text {
  text-align: center;
  margin: 2%;
  font-size: 0.99rem;
}
.select {
  margin: 3%;
  font-size: 0.5rem;
  margin-left: 3%;
}
.select .option {
  text-align: right !important;
  margin-left: 22%;
  width: 50%;
}

/* 上传头像 */
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  border-radius: 50px;
  margin-right: 20px;
  width: 50px;
  height: 50px;
  text-align: center;
  margin-top: 10px;
}
.avatar {
  width: 98px;
  height: 98px;
  border-radius: 6px;
  margin-left: 10px;
}
</style>