export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      rate: data.rate,
      areas: data.areas,
      location: data.loc,
    };
    const token = context.rootGetters.token;
    const response = await fetch(
      `https://vue-http-demo-34b90-default-rtdb.asia-southeast1.firebasedatabase.app/coaches/${userId}.json?auth=` +
        token,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );
    // const responseData = await response.json();
    if (!response.ok) {
      return true;
    }
    context.commit('registerCoach', {
      ...coachData,
      id: userId,
    });
  },
  async loadCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) {
      return;
    }
    const response = await fetch(
      `https://vue-http-demo-34b90-default-rtdb.asia-southeast1.firebasedatabase.app/coaches.json`
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch');
      throw error;
    }
    const coaches = [];
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        rate: responseData[key].rate,
        areas: responseData[key].areas,
        location: responseData[key].location,
      };
      coaches.push(coach);
    }
    context.commit('setCoaches', coaches);
    context.commit('setTimeStamp');
  },
};
