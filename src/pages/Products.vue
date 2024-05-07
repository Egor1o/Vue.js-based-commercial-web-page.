<template>
  <div>
    <ProductList :products="products" />
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue';

export default {
  components: {
    ProductList
  },
  data() {
    return {
      products: []
    };
  },
  async created() {
    await this.getProducts();
  },
  methods: {
    async getProducts() {
      try {
        const response = await fetch('http://localhost:8080/api/products/');
        this.products = await response.json();
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
