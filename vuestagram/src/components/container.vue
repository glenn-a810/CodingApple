<template>
  <div>
    <post :postData="postData[dataId]" v-for="(posts,dataId) in postData" :key="dataId" />
  </div>
</template>

<script>
import post from './post.vue';

export default {
  name: 'container',
  data() {
    return {
      
    }
  },
  components: {
    post,
  },
  props: {
    postData: Array,
  }
};
</script>

<style></style>
