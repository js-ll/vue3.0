<template>
  <div class="tab-foot">
    <div class="tab-item" :class="{isState:1==state.null}">
      <div class="tab-icon">tu <div class="tab-r">12</div></div>
      <div class="tab-text">文</div>
    </div>
    <div class="tab-item">
      <div class="tab-icon">tu</div>
      <div class="tab-text">文</div>
    </div>
    <div class="tab-item">
      <div class="tab-icon">tu</div>
      <div class="tab-text">文</div>
    </div>
    <div class="tab-item">
      <div class="tab-icon">tu</div>
      <div class="tab-text">文</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tab-foot",
  props: {
      state:{}
  },
  data() {
    return {
       
    };
  },
  computed: {},
  created() {},
  methods: {}
};
</script>


<style scoped lang="less">
.tab-foot {
  width: 100%;
  background-color: darkgray;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 10px 0;
}
.tab-foot .tab-item{
    text-align: center;
}
.isState{
    color: green;
}
.tab-icon{
    position: relative;
}
.tab-r{
    // box-sizing: border-box;
    padding: 10px;
    text-align: center;
    line-height: 30px;
    border-radius: 45%;
    background-color: salmon;
    font-size: 12px;
    color: #fff;
    position: absolute;
    right: -50px;
    top: 0;
}
</style>