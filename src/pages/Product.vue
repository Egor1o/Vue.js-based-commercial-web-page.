<template>
  <div v-if="product" class="mx-2">
    <div>
      <img :src="`https://picsum.photos/seed/${product.id}/600/300`" class="rounded-t-lg rounded-lg" alt="Product image" width="600" height="300">
      <div class="flex flex-col items-center p-5">
        <strong class="mb-2 card-text text-gray-700">{{ product.name }}</strong>
        <p class="mb-3 card-secondary-text text-gray-600">{{ product.price }}€</p>
        <AddToCartButton :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import AddToCartButton from "../components/AddToCartButton.vue";
const product = ref(null);
const route = useRoute();

onMounted(async () => {
  const response = await fetch(`http://localhost:8080/api/products/${route.params.id}`);
  product.value = await response.json();
});
</script>
