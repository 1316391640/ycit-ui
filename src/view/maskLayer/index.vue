<template>
  <div style="position: relative;top: 0;left: 0;right: 0;bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);">
    <div
      style="position: absolute;top: 50%;left: 50%;display: inline-block;width: 70%;height: 50%;font-size: 25px;font-weight: 600;color: brown;background-color: #000;box-shadow: 5px 5px 5px 5px #777;border-radius: 5px;transform: translate(-50%, -50%);padding: 20px;">
      {{ props.title }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: () => ''
  }
})
</script>

<style scoped></style>