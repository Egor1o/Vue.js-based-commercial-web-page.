<template>
  <div class="space-y-1.5 cursor-pointer" @click="toggle">
    <div :class="['w-8 h-1 bg-gray-700', { 'rotate-45 translate-y-[0.35em]': isOpen }]"></div>
    <div :class="['w-8 h-1 bg-gray-700', { hidden: isOpen }]"></div>
    <div :class="['w-8 h-1 bg-gray-700', { '-rotate-45 -translate-y-[0.35em]': isOpen }]"></div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
    toggle: Function
  }
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
