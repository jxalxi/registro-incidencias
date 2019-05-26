import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import RegistroIncidencia from "./views/registro-incidencia/registro-incidencia.vue";
import HistorialIncidencia from "./views/historial-incidencia/historial-incidencia.vue";
import SeguimientoIncidencia from "./views/seguimiento-incidencia/seguimiento-incidencia.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/registro',
      name: 'registro',
      component: RegistroIncidencia,
    },
    {
      path: '/historial',
      name: 'historial',
      component: HistorialIncidencia,
    },
    {
      path: '/incidencia/:id',
      name: 'incidencia',
      component: SeguimientoIncidencia,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
