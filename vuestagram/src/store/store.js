import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      likes: 30,
      clickCount: 0,
    };
  },
  mutations: {
    liked(state) {
      if (state.clickCount === 0) {
        state.likes += 1
        state.clickCount += 1
      } else {
        state.likes -= 1
        state.clickCount = 0
      }
    },
  },
});

export default store;
