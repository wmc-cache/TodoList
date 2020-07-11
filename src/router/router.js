export default
  [
    {
      path: "/",
      name: "main",
      component: () => import("../views/Main.vue"),
    },
    {
      path: "/history",
      name: "history",
      component: () => import("../views/History.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue")
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/Home.vue")
    },
    {
      path: "/page",
      name: "page",
      component: () => import("../views/Page.vue")
    }

  ]

