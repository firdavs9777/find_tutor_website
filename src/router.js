// import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachList from './pages/coaches/CoachesList.vue';
import CoachRegister from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestRecieved from './pages/requests/RequestRecieved.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/authentication/UserAuth.vue';
import store from './store/index.js';
// const CoachDetail = defineAsyncComponent(() =>
//   import('./pages/coaches/CoachDetail.vue')
// );

// const CoachList = defineAsyncComponent(() =>
//   import('./pages/coaches/CoachesList.vue')
// );
// const CoachRegister = defineAsyncComponent(() =>
//   import('./pages/coaches/CoachRegistration.vue')
// );

// const ContactCoach = defineAsyncComponent(() =>
//   import('./pages/requests/ContactCoach.vue')
// );
// const RequestRecieved = defineAsyncComponent(() =>
//   import('./pages/requests/RequestRecieved.vue')
// );
// const UserAuth = defineAsyncComponent(() =>
//   import('./pages/authentication/UserAuth.vue')
// );
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/coaches',
    },
    {
      path: '/coaches',
      component: CoachList,
    },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [{ path: 'contact', component: ContactCoach }],
    },
    {
      path: '/register',
      component: CoachRegister,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/requests',
      component: RequestRecieved,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/auth',
      component: UserAuth,
      meta: {
        requiresUnauth: true,
      },
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});
router.beforeEach(function (to, from, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});
export default router;
