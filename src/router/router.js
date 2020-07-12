export default
  [

    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue")
    },
    {
      path: "/main",
      name: "main",
      component: () => import("../views/Main.vue"),
    },
    {
      path: "/history",
      name: "history",
      component: () => import("../views/History.vue")
    },


    {
      path: "/page/closure",
      name: "page",
      component: () => import("../views/page/closure.vue")
    }

  ]

