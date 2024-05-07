<template>
  <router-link :to="to" :class="'flex xs:h-48 items-center mx-2 mb-4 p-6 border rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700'" :data-testid="dataTestid">
    <strong class="mb-2 mx-auto text-2xl font-bold tracking-tight text-white">{{ name }}</strong>
  </router-link>
</template>

<script>
export default {
  props: {
    to: String,
    dataTestid: String,
    name: String
  }
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
