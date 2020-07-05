<template>
  <div class="history">
    <el-table :data="this.list" style="width: 40%">
      <el-table-column label="历史事项" width="380">
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
          <el-button size="mini" @click="regress(scope.row._id)">复原事项</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Vue from "vue";
import formatTime from "../assets/formatTime";
import { Table, TableColumn, Popover, Message, Button } from "element-ui";
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Popover);
Vue.use(Button);
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
      fn: formatTime
    };
  },
  methods: {
    regress(id) {
      this.$emit("regress", id);
    }
  }
};
</script>


<style>
ol,
ul {
  list-style: none;
}
.textDecoration {
  text-decoration: line-through;
}

.el-table {
  margin: auto;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>