<template>
  <div class="page">
    <el-backtop target=".page"></el-backtop>
    <slot></slot>
  </div>
</template>



<script>
import Vue from "vue";
import { Backtop } from "element-ui";
Vue.use(Backtop);

export default {
  name: "BackTop"
};
</script>



<style scoped>
.page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
}
</style>