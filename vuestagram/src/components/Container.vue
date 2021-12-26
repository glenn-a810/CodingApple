<template>
  <div>
    <Post :postData="postData" />
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
