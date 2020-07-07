export default
  [
    {
      path: "/",
      name: "Main",
      component: () => import("../views/Main.vue"),
    },
    {
      path: "/history",
      name: "Home",
      component: () => import("../views/History.vue")
    },

  ]

