<template>
  <div class="container">
    <el-input class="input" v-model="value" clearable placeholder="请输入内容"></el-input>
    <el-button @click="addItem" type="primary">添加</el-button>
  </div>
</template>


<script>
//负责输入 将数据传给父组件
import Vue from "vue";
import { Input, Button, Message } from "element-ui";
Vue.use(Input);
Vue.use(Button);

export default {
  name: "AddInput",
  data() {
    return {
      value: ""
    };
  },
  methods: {
    addItem() {
      if (this.value.trim()) {
        this.$emit("addItem", this.value);
        this.value = "";
      } else {
        Message({
          showClose: true,
          message: "任务内容不能为空",
          type: "error"
        });
      }
    }
  }
};
</script>


<style  scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.input {
  width: 15rem;
}
</style>