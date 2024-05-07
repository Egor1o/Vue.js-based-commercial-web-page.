<template>
  <div class="xs:grid xs:grid-cols-2">
    <div v-for="product in products" :key="product.id" class="m-2 flex justify-center items-center">
      <router-link :to="`/products/${product.id}`" class="bg-gray-800 border border-gray-200 rounded-lg shadow hover:bg-gray-700 w-full">
        <ProductCard :product="product" />
      </router-link>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  props: {
    products: Array
  },
  components: {
    ProductCard
  }
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
