<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="Search" />
    <!--    <div class="post-header">-->
    <!--      <div class="profile"></div>-->
    <!--      <span class="profile-name">{{ follower[0].name }}</span>-->
    <!--    </div>-->

    <div
      v-for="followerList in follower"
      :key="followerList"
      class="post-header"
    >
      <div
        class="profile"
        :style="{ backgroundImage: `url(${followerList.image})` }"
      ></div>
      <span class="profile-name">{{ followerList.name }}</span>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  name: "MyPage",
  setup() {
    let follower = ref([]);

    onMounted(() => {
      axios.get("/follower.json").then((res) => {
        follower.value = res.data;
      });
    });

    return {
      follower,
    };
  },
};
</script>

<style></style>
