<template>
  <div>
    <!-- 头部返回按钮 -->
    <div class="header">
      <div class="text" @click="back">
        <i class="iconfont icon-back"></i>
        <span class="text1">
          <i class="iconfont icon-fanhui"></i>
          编辑个人信息
        </span>
      </div>
    </div>

    <!-- 上传头像 -->
    <div class="portrait">
      <span class="details">
        <el-upload
          class="avatar-uploader"
          action="/api/uploadUser"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        </el-upload>
      </span>
      <div class="right">头像</div>
    </div>

    <!-- 昵称 -->
    <div class="portrait" @click="changeNackname">
      <span class="details">{{ nackname }}</span>
      <span class="right">昵称</span>
    </div>

    <!-- 年龄 -->
    <div class="portrait" @click="changeAge">
      <span class="details">{{ age }}</span>
      <span class="right">年龄</span>
    </div>

    <!-- 邮箱 -->
    <div class="portrait" @click="changeEmail">
      <span class="details">{{ email }}</span>
      <span class="right">邮箱</span>
    </div>
  </div>
</template>

<script>
import { MessageBox, Toast } from "mint-ui";
export default {
  data() {
    return {
      nackname: this.$store.getters["user/nackname"]
        ? this.$store.getters["user/nackname"]
        : "昵称",
      address: this.$store.getters["user/address"]
        ? this.$store.getters["user/address"]
        : "地址",
      // password: '密码',
      age: this.$store.getters["user/age"]
        ? this.$store.getters["user/age"]
        : "年龄",
      email: this.$store.getters["user/email"]
        ? this.$store.getters["user/email"]
        : "邮箱",
      // imageUrl: require('@/assets/images/avatar.jpg')
      imageUrl: this.$store.getters["user/img"]
        ? this.$store.getters["user/img"]
        : "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
    };
  },

  methods: {
    back() {
      this.$router.go(-1); // 返回上一层
    },
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },

    changeNackname() {
      // 修改眤称
      MessageBox.prompt("请输入昵称").then(({ value, action }) => {
        this.$http({
          url: "/updateUser", // 请求地址
          method: "post", // 设置请求方式
          data: {
            id: this.$store.getters["user/id"], //用户id
            nackname: value, //眤称
          },
        }).then((e) => {
          // 处理请求返回的结果
          console.log(e.data);
          if (e.data.code === "1") {
            this.nackname = value;
            Toast({
              message: "更改成功",
              position: "middle",
              duration: 3000,
            });
          } else {
            Toast({
              message: "更改失败",
              position: "middle",
              duration: 3000,
            });
          }
        });
      });
    },

    changeAddress() {
      MessageBox.prompt("请输入地址").then(({ value, action }) => {
        this.$http({
          url: "/updateUser", // 请求地址
          method: "post", // 设置请求方式
          data: {
            id: this.$store.getters["user/id"],
            address: value,
          },
        }).then((e) => {
          // 处理请求返回的结果
          console.log(e.data);
          if (e.data.code === "1") {
            this.address = value;
            Toast({
              message: "更改成功",
              position: "middle",
              duration: 3000,
            });
          } else {
            Toast({
              message: "更改失败",
              position: "middle",
              duration: 3000,
            });
          }
        });
      });
    },

    changeAge() {
      // console.log(MessageBox)
      MessageBox.prompt("请输入年龄").then(({ value, action }) => {
        this.$http({
          url: "/updateUser", // 请求地址
          method: "post", // 设置请求方式
          data: {
            id: this.$store.getters["user/id"],
            age: value,
          },
        }).then((e) => {
          // 处理请求返回的结果
          console.log(e.data);
          if (e.data.code === "1") {
            this.age = value;
            Toast({
              message: "更改成功",
              position: "middle",
              duration: 3000,
            });
          } else {
            Toast({
              message: "更改失败",
              position: "middle",
              duration: 3000,
            });
          }
        });
      });
    },
    changeEmail() {
      // console.log(MessageBox)
      MessageBox.prompt("请输入邮箱").then(({ value, action }) => {
        this.$http({
          url: "/updateUser", // 请求地址
          method: "post", // 设置请求方式
          data: {
            id: this.$store.getters["user/id"],
            email: value,
          }, //
        }).then((e) => {
          // 处理请求返回的结果
          console.log(e.data);
          if (e.data.code === "1") {
            this.email = value;
            Toast({
              message: "更改成功",
              position: "middle",
              duration: 3000,
            });
          } else {
            Toast({
              message: "更改失败",
              position: "middle",
              duration: 3000,
            });
          }
        });
      });
    },
    handleAvatarSuccess(response, file, fileList) {
      const url = "/api/" + file.response.url;
      console.log(url);
      this.$store.commit("user/SET_IMG", url);
      console.log(this.$store.getters["user/img"]);
      this.imageUrl = this.$store.getters["user/img"];
      this.$http({
        url: "/updateUser", // 请求地址
        method: "post", // 设置请求方式
        data: {
          id: this.$store.getters["user/id"],
          img: url,
        },
      }).then((e) => {
        // 处理请求返回的结果
        console.log(e.data);
      });
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
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
.text {
  font-size: 1.2rem;
  /* text-align: center; */
  font-weight: lighter;
  align-items: center;
  display: flex;
  align-items: center;
  color: white;
}
.iconfont {
  font-size: 0.55rem;
}
.portrait {
  margin-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
}

.portrait .details {
  padding-left: 20px;
}
.portrait .right {
  margin-right: 20px;
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
.avatar {
  width: 78px;
  height: 78px;
  border-radius: 6px;
}
</style>
