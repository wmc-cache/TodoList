<template>
  <div class="container">
    <el-input
      class="input"
      @input="input($event)"
      v-model="inputValue"
      clearable
      placeholder="请输入内容"
    ></el-input>
    <el-button @click="addItem" type="primary">添加</el-button>
  </div>
</template>


<script>
//负责输入 将数据传给父组件
import Vue from "vue";
import { Input, Button, Message } from "element-ui";
import state from "vuex";
Vue.use(Input);
Vue.use(Button);

export default {
  name: "AddInput",
  data() {
    return {
      inputValue: ""
    };
  },
  computed: {},
  methods: {
    addItem() {
      if (this.inputValue.trim()) {
        this.$emit("addItem", this.inputValue);
        this.inputValue = "";
      } else {
        Message({
          showClose: true,
          message: "任务内容不能为空",
          type: "error"
        });
      }
    },
    input(event) {
      this.$store.commit("setValue", this.inputValue);
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