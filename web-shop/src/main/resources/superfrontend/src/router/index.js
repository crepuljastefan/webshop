import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../views/ProductsGridView.vue"),
    },
    {
      path: "/products/:id",
      name: "product",
      component: () => import("../views/ProductView.vue"),
      props: true,
    },
  ],
});
router.beforeEach(async (to, from, next) => {
  const publicPages = [
    "/",
    "/menu",
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
