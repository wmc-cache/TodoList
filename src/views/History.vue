<template>
  <div>
    <History :key="key" :list="list" @regress="regress" />
  </div>
</template>

<script>
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
      //vue使用key标记组件身份，当key改变时就是释放原始组件，重新加载新的组件。
      axios
        .get("http://101.37.119.148:3000/histories")
        .then(res => ((this.list = res.data.reverse()), this.key++));
    }
  },
  mounted() {
    axios
      .get("http://101.37.119.148:3000/histories")
      .then(res => ((this.list = res.data.reverse()), console.log(this.list)));
  }
};
</script>
