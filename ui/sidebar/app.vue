<template>
  <div>
    <p>{{ message }}</p>
  </div>
  <div>
    <a href="http://localhost:5999/video/all">All</a>
  </div>
  <div>
    <a href="https://github.com/MouJieQin/varchive" target="_blank">Github</a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "This is a sidebar view.",
    };
  }
};
</script>