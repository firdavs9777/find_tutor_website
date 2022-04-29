export default {
  addRequest(state, payload) {
    state.requests.push(payload);
  },
  setRequests(state, payload) {
    state.requests = payload;
  },
  setTimeStamp(state) {
    state.lastFetch = new Date().getTime();
  },
};
