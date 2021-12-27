<template>
  <div>
    <Post :postData="post" v-for="post in postData" :key="post" />
  </div>
</template>

<script>
import Post from "@/components/Post";

export default {
  name: "Container",
  components: {
    Post,
  },
  props: {
    postData: Array,
  },
};
</script>

<style></style>
