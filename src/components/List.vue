<template>
  <div>
    <el-table :data="this.list" style="width: 100%">
      <el-table-column label="待办事项" style="width:50%">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="left">
            <p>createdAt:{{ fn(scope.row.createdAt) }}</p>
            <p>updatedAt:{{ fn(scope.row.updatedAt) }}</p>
            <p>目前内容:{{ scope.row.title }}</p>
            <div slot="reference" class="name-wrapper">
              <div v-if="!scope.row.editing">
                <input
                  @click="completed(scope.row._id,scope.row.completed)"
                  type="checkbox"
                  v-model="scope.row.completed"
                />
                <span :class="{textDecoration:scope.row.completed}">{{ scope.row.title }}</span>
              </div>
              <div v-else>
                <input :placeholder="scope.row.title" v-model="value" type="text" />
              </div>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            v-if="!scope.row.editing"
            size="mini"
            @click="handleEdit(scope.row.editing,scope.row._id,scope.$index)"
          >编辑</el-button>
          <el-button size="mini" type="success" v-else @click="submit(scope.row._id)">完成</el-button>
          <el-button size="mini" type="danger" @click="deleteItem(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>



<script>
//负责展示首页 从父组件获取数据
import Vue from "vue";
import formatTime from "../assets/formatTime";
import { Table, TableColumn, Popover, Message } from "element-ui";
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Popover);

export default {
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      value: "",
      fn: formatTime
    };
  },

  methods: {
    handleEdit(editing, id, index) {
      this.$emit("editItem", editing, id);
    },

    deleteItem(id) {
      this.$emit("deleteItem", id);
    },
    submit(id) {
      this.$emit("submit", id, this.value);
    },
    completed(id, completed) {
      this.$emit("completed", id, completed);
    }
  },
  mounted() {}
};
</script>


<style>
.textDecoration {
  text-decoration: line-through;
}

.el-table {
  margin: auto;
}
</style>