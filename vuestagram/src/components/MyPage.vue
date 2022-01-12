<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input @input="search($event.target.value)" placeholder="Search" />

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
    let followerOrigin = ref([]);

    onMounted(() => {
      axios.get("/follower.json").then((res) => {
        follower.value = res.data;
        followerOrigin.value = [...res.data]
      });
    });

    function search(i) {
      let matchResult = followerOrigin.value.filter((a) => {
        return a.name.indexOf(i) !== -1
      });
      follower.value = [...matchResult]
    }

    return {
      follower,
      search,
    };
  },
};
</script>

<style></style>
