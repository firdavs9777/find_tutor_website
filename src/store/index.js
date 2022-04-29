import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index.js';
import requestModule from './modules/requests/index.js';
import authModule from './modules/authentication/index.js';
const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestModule,
    authentication: authModule,
  },
});
export default store;
