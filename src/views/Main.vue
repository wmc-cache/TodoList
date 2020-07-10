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
import Vue from "vue";
import { Message, MessageBox } from "element-ui";
import AddInput from "@/components/AddInput";
import List from "@/components/List";
import countTo from "../components/count-to";
import { getHistory, postHistory, deleteHistory } from "../api/history";
import { getList, postList, deleteList, patchList } from "../api/list";
export default {
  components: {
    AddInput,
    List,
    countTo
  },
  data() {
    return {
      list: [],
      key: 0
    };
  },
  mounted() {
    getList().then(res => (this.list = res.data));
  },
  beforeRouteLeave(to, from, next) {
    if (this.$store.state.value !== "") {
      MessageBox({
        title: "提示",
        message: "检测到未保存的内容，是否离开当前页面",
        type: "info",
        distinguishCancelAndClose: true,
        confirmButtonText: "离开",
        cancelButtonText: "放弃修改"
      })
        .then(() => {
          next();
        })
        .catch(() => {});
    } else {
      next();
    }
  },
  methods: {
    addItem(value) {
      postList({ id: `id-${Date.now()}`, title: value }).then(res => {
        Message({
          showClose: true,
          message: "待办任务添加成功",
          type: "success"
        });
        this.reload();
      });
    },

    deleteItem(id) {
      const item = this.list.filter(ele => ele._id === id)[0];
      const data = { ...item };

      postHistory(data);
      deleteList(id).then(res => {
        this.reload();
      });
    },

    editItem(editing, id) {
      this.list.forEach(ele => {
        if (ele._id === id) {
          patchList(id, { editing: true }).then(res => {
            this.reload();
          });
        }
      });
    },

    submit(id, title) {
      this.list.forEach(ele => {
        if (ele._id === id) {
          patchList(id, { title: title, editing: false }).then(res => {
            this.reload();
          });
        }
      });
    },

    completed(id, completed) {
      this.list.forEach(ele => {
        if (ele._id === id) {
          patchList(id, { completed: !completed });
        }
      });
    },
    reload() {
      //vue使用key(diff)标记组件身份，当key改变时就是释放原始组件，重新加载新的组件。
      getList().then(res => ((this.list = res.data), this.key++));
    }
  }
};
</script>

