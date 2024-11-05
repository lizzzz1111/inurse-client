<template>
  <div>
    <div class="messageCenter">
      <div class="back">
        <i class="iconfont icon-fanhui" @click="okk"></i>
      </div>
      <div class="text">消息中心</div>
      <div class="person">
        <i class="iconfont icon-add-friends_icon"></i>
      </div>
    </div>

    <div class="search">
      <input class="input" type="text" placeholder="搜索联系人..." />
    </div>

    <div class="liaotian">
      <div class="inurse" @click="serverNotion">
        <div class="left-icon">
          <i
            class="iconfont icon-zu161"
            style="font-size: 2rem; color: rgb(18, 150, 219)"
          ></i>
        </div>
        <div class="right-text">
          <div class="up">
            <div class="name">服务通知</div>
            <div>
              <mt-badge
                style="margin-right: 3px"
                size="small"
                color="red"
                type="error"
                v-if="message > 0"
                >{{ message }}</mt-badge
              ><span class="time">{{ mm }}月{{ dd }}日 </span>
            </div>
          </div>
          <div class="down">
            <div class="communication">
              [智能小i：最新发布文章《8个方法预防老人痴呆症》...]
            </div>
          </div>
        </div>
      </div>
      <div class="inurse">
        <div class="left-icon">
          <i class="iconfont icon-kefu" style="color: rgb(18, 150, 219)"></i>
        </div>
        <div class="right-text">
          <div class="up">
            <div class="name">i护理客服</div>
            <div class="time">5月20日</div>
          </div>
          <div class="down">
            <div class="communication">
              [智能小i：最新发布文章《8个方法预防老人痴呆症》...]
            </div>
          </div>
        </div>
      </div>
      <div class="inurse">
        <div class="left-icon">
          <img
            class="avatar"
            src="https://labfile.oss.aliyuncs.com/courses/2741/77.jpg"
          />
        </div>
        <div class="right-text">
          <div class="up">
            <div class="name">医生</div>
            <div class="time">5月20日</div>
          </div>
          <div class="down">
            <div class="communication">
              您好，请问您最近身体状况如何？需要一些咨询帮助吗
            </div>
          </div>
        </div>
      </div>
      <div class="inurse">
        <div class="left-icon">
          <img
            class="avatar"
            src="https://labfile.oss.aliyuncs.com/courses/2741/222.jpg"
          />
        </div>
        <div class="right-text">
          <div class="up">
            <div class="name">江爷爷</div>
            <div class="time">5月20日</div>
          </div>
          <div class="down">
            <div class="communication">
              谢谢医生的指导，我会暗示吃药，多注意饮食和作息的
            </div>
          </div>
        </div>
      </div>
      <div class="inurse">
        <div class="left-icon">
          <img
            class="avatar"
            src="https://labfile.oss.aliyuncs.com/courses/2741/67.jpg"
          />
        </div>
        <div class="right-text">
          <div class="up">
            <div class="name">刘姥姥</div>
            <div class="time">5月20日</div>
          </div>
          <div class="down">
            <div class="communication">
              请问你们那个i护理怎么使用呀，我刚注册，不太会用呢
            </div>
          </div>
        </div>
      </div>

      <div class="inurse">
        <div class="left-icon">
          <img
            class="avatar"
            src="https://labfile.oss.aliyuncs.com/courses/2741/nurse11.jpg"
          />
        </div>
        <div class="right-text">
          <div class="up">
            <div class="name">护工</div>
            <div class="time">5月20日</div>
          </div>
          <div class="down">
            <div class="communication">
              我已经在路上了，我马上送药到您家，请你稍等片刻。
            </div>
          </div>
        </div>
      </div>
    </div>
    <my-nav></my-nav>
  </div>
</template>

<script>
import MyNav from "@/components/MyNav";

export default {
  data() {
    return {
      message: localStorage.getItem("message"),
      mm: localStorage.getItem("mm"),
      dd: localStorage.getItem("dd"),
    };
  },
  components: {
    MyNav,
  },
  methods: {
    okk() {
      this.$router.push({
        name: "index",
      });
    },
    serverNotion() {
      this.$router.push({
        name: "daiQueDing",
      });
    },
  },
};
</script>

<style scoped>
.avatar {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50px;
  background: blanchedalmond;
  margin-right: 3%;
}
::placeholder {
  color: #fff;
  font-size: 1em;
}
.messageCenter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.001rem solid gray;
}
.messageCenter .text {
  margin-bottom: 3%;
  text-align: center;
  margin-top: 0.3rem;
}
.messageCenter .back {
  font-size: 0.99rem;
  color: #797979;
}
.messageCenter .text {
  font-size: 0.99rem;
}
.messageCenter .person {
  font-size: 0.99rem;
  margin-right: 4%;
  color: #ddd4d4;
}
.iconfont {
  font-size: 1.2rem;
}
.search {
  background: #fff;
  margin: 3%;
  text-align: center;
}
.search .input {
  background: rgb(143, 210, 143);
  border-radius: 90px;
  height: 1.8rem;
  text-indent: 1em;
  width: 98%;
  color: #fff !important;
  text-align: left;
  border: 0.001rem solid gray;
  font-size: 0.88rem;
}
.liaotian {
  margin-left: 2%;
  text-align: center;
}
.inurse {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 0.2rem;
  border-bottom: 0.001rem solid rgb(233, 221, 221);
  width: 100%;
  margin-top: 0.3rem;
}
.inurse .left-icon .iconfont {
  font-size: 2.5rem;
}
.inurse .right-text .up {
  margin: 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.45rem;
}
.up .name {
  font-size: 0.88rem;
}
.up .time {
  font-size: 0.77rem;
  color: rgb(206, 206, 206);
}
.down .communication {
  color: rgb(206, 206, 206);
  text-align: justify;
  margin-right: 10px;
  margin-left: 0.5rem;
  margin-bottom: 0.8rem;
}
</style>
