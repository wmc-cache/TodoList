<template>
  <div>
    <History :key="key" :list="list" @regress="regress" />
  </div>
</template>

<script>
//状态提升 负责历史记录管理数据
import axios from "axios";
import History from "../components/History";
import { getHistory, deleteHistory } from "../api/history";
import { getList, postList, deleteList, patchList } from "../api/list";
export default {
  data() {
    return {
      list: [],
      key: 0
    };
  },
  components: {
    History
  },
  mounted() {
    getHistory().then(res => (this.list = res.data.reverse()));
  },
  methods: {
    regress(id) {
      const item = this.list.filter(ele => ele._id === id)[0];
      const data = { ...item };
      postList(data);
      deleteHistory(id).then(res => {
        this.reload();
      });
    },
    reload() {
      //vue使用key(diff)标记组件身份，当key改变时就是释放原始组件，重新加载新的组件。
      getHistory().then(res => ((this.list = res.data.reverse()), this.key++));
    }
  }
};
</script>
