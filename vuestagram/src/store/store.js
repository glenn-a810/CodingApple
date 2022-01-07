import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      likes: 0,
      clickCount: false,
    };
  },
  mutations: {
    liked(state) {
      if (state.clickCount === false) {
        state.likes += 1;
        state.clickCount = true;
      } else {
        state.likes -= 1;
        state.clickCount = false;
      }
    },
  },
});

export default store;
