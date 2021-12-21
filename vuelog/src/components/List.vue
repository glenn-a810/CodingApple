<template>
  <div>
    <h5>{{ contents[0].title }}</h5>
    <p>{{ contents[0].date }}</p>
  </div>
  <div>
    <h5>{{ contents[1].title }}</h5>
    <p>{{ contents[1].date }}</p>
  </div>
  <div>
    <h5>{{ contents[2].title }}</h5>
    <p>{{ contents[2].date }}</p>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    contents: Array,
  },
};
</script>

<style></style>
