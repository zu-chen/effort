import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AppEffort from "./pages/AppEffort.vue";

const routes: Array<RouteRecordRaw> = [
  // 找不到網頁
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: AppEffort,
  },
  {
    path: "/",
    component: AppEffort,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        left: 0,
        top: 0,
      };
    }
  },
});

export default router;
