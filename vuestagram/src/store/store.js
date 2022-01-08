import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      likes: 0,
      clickCount: false,
      more: {},
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
    setMore(state, payload) {
      state.more = payload
    }
  },
  actions: {
    getData(context) {
      axios
        .get(`https://codingapple1.github.io/vue/more0.json`)
        .then((res) => {
          context.commit('setMore', res.data)
        });
    },
  },
});

export default store;
