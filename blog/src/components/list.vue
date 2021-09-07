<template>
  <div>
    <!-- <div>
      <h5>{{content[0].title}}</h5>
      <p>{{content[0].date}}</p>
    </div>
    <div>
      <h5>{{content[1].title}}</h5>
      <p>{{content[1].date}}</p>
    </div>
    <div>
      <h5>{{content[2].title}}</h5>
      <p>{{content[2].date}}</p>
    </div> -->
    <div v-for="(content, contentId) in content" :key="contentId">
      <h5>{{ content.title }}</h5>
      <p>{{ content.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  data() {
    return {}
  },
  props: {
    content: Array,
  },
}
</script>

<style></style>
