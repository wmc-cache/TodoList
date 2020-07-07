<template>
  <div class="app">
    <AddInput @addItem="addItem" />
    <List
      :key="key"
      :list="list"
      @deleteItem="deleteItem"
      @editItem="editItem"
      @submit="submit"
      @completed="completed"
    />
  </div>
</template>

<script>
//状态提升 负责管理首页数据
import axios from "axios";
import Vue from "vue";
import { Message } from "element-ui";
import AddInput from "@/components/AddInput";
import List from "@/components/List";

export default {
  components: {
    AddInput,
    List
  },
  data() {
    return {
      list: [],
      key: 0
    };
  },
  mounted() {
    axios
      .get("http://101.37.119.148:3000/lists")
      .then(res => (this.list = res.data));
  },
  beforeRouteLeave(to, from, next) {
    if (this.$store.state.value !== "") {
      Message({
        showClose: true,
        message: "当前输入框的值尚为提交",
        type: "error"
      });
    } else {
      next();
    }
  },
  methods: {
    addItem(value) {
      const data = { id: `id-${Date.now()}`, title: value };
      axios
        .post("http://101.37.119.148:3000/lists", data, {
          headers: { "Content-Type": "application/json" }
        })
        .then(res => {
          Message({
            showClose: true,
            message: "待办任务添加成功",
            type: "success"
          });
          //强制刷新
          this.reload();
        })
        .catch(err => console.log(err));
    },

    deleteItem(id) {
      const item = this.list.filter(ele => ele._id === id)[0];
      const data = { ...item };

      axios
        .post("http://101.37.119.148:3000/histories", data, {
          headers: { "Content-Type": "application/json" }
        })
        .then(res => {})
        .catch(err => console.log(err));

      axios
        .delete(`http://101.37.119.148:3000/lists/${id}`, {
          headers: { "Content-Type": "application/json" }
        })
        .then(res => {
          this.reload();
        })
        .catch(err => console.log(err));
    },

    editItem(editing, id) {
      this.list.forEach(ele => {
        if (ele._id === id) {
          axios
            .patch(
              `http://101.37.119.148:3000/lists/${id}`,
              { editing: true },
              {
                headers: { "Content-Type": "application/json" }
              }
            )
            .then(res => {
              this.reload();
            })
            .catch(err => console.log(err));
        }
      });
    },

    submit(id, title) {
      this.list.forEach(ele => {
        if (ele._id === id) {
          axios
            .patch(
              `http://101.37.119.148:3000/lists/${id}`,
              { title: title, editing: false },
              {
                headers: { "Content-Type": "application/json" }
              }
            )
            .then(res => {
              this.reload();
            })
            .catch(err => console.log(err));
        }
      });
    },

    completed(id, completed) {
      this.list.forEach(ele => {
        if (ele._id === id) {
          axios
            .patch(
              `http://101.37.119.148:3000/lists/${id}`,
              { completed: !completed },
              {
                headers: { "Content-Type": "application/json" }
              }
            )
            .then(res => {
              this.reload();
            })
            .catch(err => console.log(err));
        }
      });
    },
    reload() {
      //vue使用key(diff)标记组件身份，当key改变时就是释放原始组件，重新加载新的组件。
      axios
        .get("http://101.37.119.148:3000/lists")
        .then(res => ((this.list = res.data), this.key++));
    }
  }
};
</script>

