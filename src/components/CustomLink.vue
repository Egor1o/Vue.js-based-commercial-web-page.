<template>
  <router-link
      :to="to"
      :data-testid="dataTestId"
      v-bind="$attrs"
      class="block py-2 pr-4 hover:scale-110 text-gray-700"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    to: String,
    dataTestId: String
  }
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
