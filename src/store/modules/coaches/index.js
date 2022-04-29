import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 'c1',
          firstName: 'Firdavs',
          lastName: 'Mutalipov',
          rate: 10,
          areas: ['frontend', 'backend'],
          location: 'Seoul',
          description:
            "I'm Firdavs and I've worked as a freelance web developer for years. I can teach you from the basics of coding",
        },
        {
          id: 'c2',
          firstName: 'Jasur',
          lastName: 'Xolbadalov',
          rate: 12,
          areas: ['backend'],
          location: 'New York',
          description: 'I can teach you all the basics of backend development',
        },
        {
          id: 'c3',
          firstName: 'Sharof',
          lastName: 'Akabirov',
          rate: 15,
          areas: ['frontend'],
          location: 'Tokio',
          description:
            ' I can teach you all the basics of front-end development',
        },
        {
          id: 'c4',
          firstName: 'Biloljon',
          lastName: 'Soliev',
          rate: 18,
          areas: ['career'],
          location: 'Hong Kong',
          description:
            ' I can teach you all the important steps in career preparation. Feel free to contact me!',
        },
      ],
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};
