<template>
  <div id="container">
    <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
      <swiper-slide
        ><img
          class="image"
          alt="bannar006"
          src="https://labfile.oss.aliyuncs.com/courses/2741/bannar006.jpg"
      /></swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "carrousel",
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 2000,
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    // console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(0, 3000, true);
  },
};
</script>

<style scoped>
.swiper-container {
  width: 90%;
  height: 70%;
}
#container {
  margin: 3%;
  border-radius: 10px;
  width: 92%;
  height: 70%;
}
#photos {
  width: 120px;
  animation: swith 5s ease-out infinite;
}

#photos > img {
  float: left;
  width: 400px;
  height: 150px;
}
.image {
  width: 100%;
  height: 150px;
  border-radius: 20px;
}
.swiper {
  width: 100%;
  height: 150px;
}
@keyframes swith {
  0%,
  25% {
    margin-left: 0;
  }
  35%,
  60% {
    margin-left: -400px;
  }
  70%,
  100% {
    margin-left: -800px;
  }
}
</style>