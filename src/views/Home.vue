<template>
  <div class="home">
   
    <y-scroll :user="user" v-on:getScroll="getScroll">
      <div class="aa">dataList</div>
      <div class="aa">dataList</div>
      <div class="aa">dataList</div>
      <div class="aa">dataList</div>
      <div class="aa">dataList</div>
      <div class="aa">dataList</div>
      <div class="aa">dataList</div>
      <div class="aa">dataList</div>
      <div class="aa">dataList</div>
      <div class="aa">dataList</div>
      <div class="aa">dataList</div>
      <div class="aa">dataList</div>
      <div class="aa">dataList</div>
      <div class="aa">dataList</div>
      <div class="aa">dataList</div>
      <div class="aa">dataList</div>
      <div class="aa">dataList</div>
      <div class="aa">dataList</div>
      <div class="aa">{{this.$store.state.count}}</div>
    
    </y-scroll>
    <router-link to="/about">home</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import YScroll from "@/components/YScroll.vue";


export default {
  name: "Home",
  components: {
    YScroll
   
  },
   data () {
      return {
        user: {
          a:1
        }
      }
    },
  methods: {
   getScroll(data){
     let _this=this
    console.log(data)
    
    if(data==0){
      _this.user=1
    }
   }
  },mounted:function(){
    console.log(this.user)
    let status = 2;
		let datas = 2232.521212315;
		console.log(this.common.getNum(status, datas))
     
  }
};
</script>
<style scoped lang="less">
.home{
  height: 30vh;
}
.aa {
  height: 50px;
  background-color: aqua;
}
</style>
