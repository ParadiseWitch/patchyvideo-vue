import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import lists from "../views/Lists.vue";
import listdetail from "../views/ListDetail.vue";
import postvideo from "../views/PostVideo.vue";
import detail from "../views/Detail.vue";
import login from "../views/Login.vue";
import signup from "../views/SignUp.vue";
import edittag from "../views/Edittag.vue";
import store from "../store/index.js";
import User from "../views/User";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect() {
      return "/home";
    }
  },
  {
    path: "/home",

    component: Home
  },
  {
    path: "/lists",

    component: lists
  },
  {
    path: "/listdetail",

    component: listdetail
  },
  {
    path: "/postvideo",

    component: postvideo
  },
  {
    path: "/video",

    component: detail
  },

  {
    path: "/login",

    component: login
  },
  {
    path: "/signup",

    component: signup
  },
  {
    path: "/edittag",

    component: edittag
  },
  {
    path:'/users',
    component:User
  }
];

const router = new VueRouter({
  /*  mode: 'history',
  base: process.env.BASE_URL,*/
  routes
});

// -------------------------危险提示-------------------------
//   此函数将用户名保存在本地数据中且未加密，有泄露的风险！！！
// -------------------------危险提示-------------------------
router.beforeEach((to, from, next) => {
  // to将要访问的路径
  // from从哪个路径跳转而来
  //next('/xxx')表示放行,或强制跳转到/xxx

  // 从本地储存提取登录状态
  var loginflag = localStorage.getItem("isLogin");
  var username = localStorage.getItem("username");
  store.commit("getUserName", username);

  if (to.path == "/login" || to.path == "/home") {
    // console.log("无权限页面放行");
    return next();
  }
  if (to.path == "/postvideo" || to.path == "/edittag"||to.path=="/users") {
    if (store.state.username != "") {
      // console.log("已登录放行");
      return next();
    } else {
      // console.log("未登录不放行");
      return next("/login");
    }
  }
  next();
});
export default router;
