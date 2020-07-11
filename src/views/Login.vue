<template>
  <Form class="form" ref="formInline" :model="formInline" :rules="ruleInline">
    <FormItem prop="user">
      <Input type="text" v-model="formInline.user" placeholder="Username">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="formInline.password" placeholder="Password">
        <Icon type="ios-lock-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
    </FormItem>
  </Form>
</template>
<script>
import { postList } from "../api/login";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "请填写用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请填写密码",
            trigger: "blur"
          },
          {
            type: "string",
            min: 3,
            message: "密码的长度不小于3",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    ...mapActions(["login"]),
    handleSubmit() {
      this.$refs.formInline.validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
          this.login({
            name: this.formInline.user,
            password: this.formInline.password
          }).then(res => {
            this.$router.push({ name: "main" });
          });
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  }
};
</script>

<style  scoped>
.form {
  width: 20%;
  margin: auto;
}
</style>