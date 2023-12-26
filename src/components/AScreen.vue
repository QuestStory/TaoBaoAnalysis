<template>
  <div class="box">    
    <iframe @click="fullscreen" src="/html/screen.html" frameborder="0" width="100%" height="100%">
    </iframe>
    <button  @click="fullscreen" class="box-child" v-if="show">点击全屏</button>
    <button  @click="exitFullscreen" class="box-child" v-else>退出全屏</button>
  </div>
</template>
 
<script>
export default {
  data(){
    return{
      show:true,
    }
  },
  methods: {
    fullscreen() {
      this.$el.requestFullscreen();
      this.show=false;
    },
    exitFullscreen(){
      if (document.exitFullscreen) {
          document.exitFullscreen();
      } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
      }
      this.show=true;
    },
    if(document){

    }
  }
}
</script>

<style>
.box{
  position: relative;
  width: 100%;
  height: 100%;
}
.box-child{
  position: absolute;
  top: 10px;
  left: 10px;
}
iframe{
  clear: both;
}
</style>