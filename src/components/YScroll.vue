<template>
  <div class="scrollWrapper" @scroll.passive="getScroll($event)">
    
    <slot></slot>
    <span v-if="user==1">已经加载完毕</span>
  </div>
</template>

<script>
export default {
  name: "y-scroll",
  props: {
    user: null,
  },
  data() {
    return {
     
    };
  },
  mounted() {
   
  },
  methods: {
    getScroll(event) {
     let _this=this
      // 滚动条距离底部的距离scrollBottom
      let scrollBottom =
        event.target.scrollHeight -
        event.target.scrollTop -
        event.target.clientHeight;
      //console.log(scrollBottom);
      _this.$emit('getScroll', scrollBottom)
      console.log(_this.user)
      // if (this.finished && scrollBottom < 40) {
      //  操作
      // }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.scrollWrapper {
  height: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
.scrollWrapper::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
  border-radius: 10px;
}

.scrollWrapper::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}

.scrollWrapper::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0.44, rgb(122, 153, 217)),
    color-stop(0.72, rgb(73, 125, 189)),
    color-stop(0.86, rgb(28, 58, 148))
  );
}
</style>
