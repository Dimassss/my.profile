import VueRouter, { Route } from 'vue-router'

declare module 'vue' {
  interface Vue {
    $router: VueRouter
  }
}