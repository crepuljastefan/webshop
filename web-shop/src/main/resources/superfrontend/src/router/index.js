import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
  ],
});
router.beforeEach(async (to, from, next) => {
  const publicPages = [
    "/",
    "/products",
    "/products/catchAll(*)",
    "/login",
    "/register",
  ];
  const productDetailRegex = /^\/products\/\d+$/;
  const profileDetailRegex = /^\/profile\/\d+$/;
  const authRequired =
    !publicPages.includes(to.path) &&
    !profileDetailRegex.test(to.path) &&
    !productDetailRegex.test(to.path);

  next();
});

export default router;
