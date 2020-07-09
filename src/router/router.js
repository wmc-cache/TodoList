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

  ]

