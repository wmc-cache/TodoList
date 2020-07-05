<template>
  <div>
    <History :key="key" :list="list" @regress="regress" />
  </div>
</template>

<script>
//状态提升 负责历史记录管理数据
import axios from "axios";
import History from "../components/History";
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
    axios
      .get("http://101.37.119.148:3000/histories")
      .then(res => ((this.list = res.data.reverse()), console.log(this.list)));
  },
  methods: {
    regress(id) {
      const item = this.list.filter(ele => ele._id === id)[0];
      const data = { ...item };

      axios
        .post("http://101.37.119.148:3000/lists", data, {
          headers: { "Content-Type": "application/json" }
        })
        .then(res => {})
        .catch(err => console.log(err));

      axios
        .delete(`http://101.37.119.148:3000/histories/${id}`, {
          headers: { "Content-Type": "application/json" }
        })
        .then(res => {
          this.reload();
        })
        .catch(err => console.log(err));
    },
    reload() {
      //vue使用key(diff)标记组件身份，当key改变时就是释放原始组件，重新加载新的组件。
      axios
        .get("http://101.37.119.148:3000/histories")
        .then(res => ((this.list = res.data.reverse()), this.key++));
    }
  }
};
</script>
