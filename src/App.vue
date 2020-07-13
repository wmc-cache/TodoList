<template>
  <div id="app">
    <div class="layout">
      <Layout>
        <Header class="header" :style="{position: 'fixed', width: '100%'}">
          <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo">{{title}}</div>

            <div class="layout-nav">
              <MenuItem @click.native="handClick1" name="1">
                <Icon type="ios-navigate"></Icon>首页
              </MenuItem>
              <MenuItem @click.native="handClick2" name="2">
                <Icon type="ios-keypad"></Icon>TodoList
              </MenuItem>
              <MenuItem @click.native="handClick3" name="3">
                <Icon type="ios-analytics"></Icon>历史记录
              </MenuItem>
              <!-- <MenuItem @click.native="handClick4" name="4">
                <Icon type="ios-paper"></Icon>个人
              </MenuItem>-->
            </div>
          </Menu>
        </Header>
        <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
          <router-view />
        </Content>
        <Footer class="layout-footer-center">2020 &copy; 吴梦成</Footer>
      </Layout>
    </div>
  </div>
</template>





<script>
import Main from "./views/Main";
export default {
  data() {
    return {
      title: "wmc-cache"
    };
  },
  components: {
    Main
  },
  methods: {
    handClick1() {
      this.$router.push({ name: "home" });
    },
    handClick2() {
      this.$router.push({ name: "main" });
    },
    handClick3() {
      this.$router.push({ name: "history" });
    },
    handClick4() {}
  }
};
</script>


<style scoped>
.layout {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
}
.layout-logo {
  text-align: center;
  font-size: 20px;
  color: antiquewhite;
  float: left;
  position: relative;
  top: 0px;
  left: 20px;
}
.header {
  position: relative;
  z-index: 100;
}

.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
</style>