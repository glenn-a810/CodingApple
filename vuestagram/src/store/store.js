import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      test: "VUEX",
    };
  },
});

export default store;
