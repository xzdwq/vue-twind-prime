import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

export const defaultRoutes: RouteRecordRaw[] = [];

export const router = createRouter({
  history: createWebHistory('/'),
  routes: defaultRoutes,
});
