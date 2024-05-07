<template>
  <div>
    <h1 class="text-center mb-4">Welcome to the Web Shop!</h1>
    <div class="xs:grid xs:grid-cols-2 home-page-items">
      <HomePageItem dataTestid="productsItem" name="Products" to="/products" />
      <HomePageItem dataTestid="ordersItem" name="Orders" to="/orders" />
    </div>
  </div>
</template>

<script>
import HomePageItem from '../components/HomePageItem.vue';

export default {
  components: {
    HomePageItem
  }
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
