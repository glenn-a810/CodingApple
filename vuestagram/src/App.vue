<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="step = 0">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step !== 2" @click="step++">Next</li>
      <li v-if="step === 2" @click="publish">Publish</li>
    </ul>
    <img src="./assets/logo.png" class="logo" alt="logo" />
  </div>

<!--  <p>{{ $store.state.more }}</p>-->
<!--  <button @click="$store.dispatch('getData')">more</button>-->

  <Container
    :step="step"
    :postData="post"
    :uploadImage="uploadImage"
    @write="writeData = $event"
  />

  <!--  <button v-if="step === 0" @click="more">더보기</button>-->

  <div class="footer">
    <ul class="footer-button-plus">
      <input
        @change="upload"
        accept="image/*"
        type="file"
        id="file"
        class="inputfile"
      />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from "@/components/Container";
import postData from "@/assets/instaData";
import axios from "axios";
import { mapMutations, mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {
      post: postData,
      moreCount: 0,
      step: 3,
      uploadImage: "",
      writeData: "",
      selectedFilter: "",
    };
  },
  mounted() {
    this.emitter.on("selectFilter", (filter) => {
      this.selectedFilter = filter;
    });
  },
  components: {
    Container,
  },
  computed: {
    ...mapState(["likes"]),
  },
  methods: {
    ...mapMutations(["liked", "setMore"]),
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.moreCount}.json`)
        .then((res) => {
          this.post.push(res.data);
          this.moreCount++;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    upload(e) {
      let uploadFile = e.target.files;
      console.log(uploadFile[0]);
      this.uploadImage = URL.createObjectURL(uploadFile[0]);
      this.step = 1;
      console.log(this.uploadImage);
    },
    publish() {
      let newPost = {
        name: "Glenn",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.uploadImage,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.writeData,
        filter: this.selectedFilter,
      };
      this.post.unshift(newPost);
      this.step = 0;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", sans-serif;
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
