<!--    vue页面：test.vue     -->
<!--
    组件：网站的测试页面
    功能：可以在这里测试一些神奇的东西
    更新日志：
-->
<i18n>
{
  "CHS": {
    "test":"test!"
  }
}
</i18n>


<template>
  <div></div>
</template>

<script>
export default {
  data() {
    this.$i18n.locale = localStorage.getItem("lang");
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  components: {}
};
</script>

<style scoped>
</style>