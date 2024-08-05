<template>
  <button class="top-12 left-32 absolute" @click="closeToggle">x</button>
</template>
<script>
export default {
  methods: {
    closeToggle() {
      this.$emit("close");
    },
  },
};
</script>
