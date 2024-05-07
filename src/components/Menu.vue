<template>
  <div v-if="isOpen" class="border-t-2">
    <div class="flex justify-between text-sm font-medium ml-4 mr-1">
      <CustomLink to="/" @click="setOpen">
        Home
      </CustomLink>
      <CustomLink to="/products" @click="setOpen">
        Products
      </CustomLink>
      <CustomLink to="/orders" @click="setOpen">
        Orders
      </CustomLink>
    </div>
  </div>
</template>

<script>
import CustomLink from './CustomLink.vue';

export default {
  props: {
    isOpen: Boolean,
    setOpen: Function
  },
  components: {
    CustomLink
  }
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
