<template>
  <div>
    <page>
      <TabPane label="闭包产生的原因">
        <h1 style="text-align:center">闭包是词法作用域和函数是JavaScript的第一公民相互作用产生的现象</h1>
        <h2>词法作用域</h2>
        <p>词法作用域，在词法分析阶段生成的作用域。词法分析阶段，就可以理解为写代码阶段，当你把函数写在某个位置上时，它的作用域就已经确定了。</p>
        <br />
        <h2>第一公民</h2>
        <p>函数是第一公民，所以函数可以被当作一个普通的变量传递，所以函数在运行时可能会看起来已经脱离了原来的词法作用域。</p>
        <br />
        <h2>闭包</h2>
        <p>由于函数的作用域早就在词法分析时就确定了，所以函数无论在哪里执行，都会记住被定义时的作用域。这种现像就叫闭包。</p>
        <br />
        <img style="display:block;width:900px;height:400px" src="../../assets/img/闭包产生的原因.png" alt />
      </TabPane>
      <TabPane label="闭包实现私有变量">
        <img style="display:block;width:900px;height:700px" src="../../assets/img/闭包实现私有变量.png" alt />
      </TabPane>
    </page>
  </div>
</template>

<script>
import page from "../../components/page";
export default {
  components: {
    page
  }
};
</script>
