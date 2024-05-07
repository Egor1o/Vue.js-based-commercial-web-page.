<template>
  <div v-if="orders" class="sm:grid sm:grid-cols-2">
    <div v-for="order in orders" :key="order.id" class="m-2 flex justify-center items-center">
      <OrderCard :order="order" />
    </div>
  </div>
  <div v-else-if="orders === null">Loading...</div>
  <div v-else class="m-4">No orders.</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import OrderCard from '../components/OrderCard.vue';

const orders = ref(null);

onMounted(async () => {
  const response = await fetch('http://localhost:8080/api/orders');
  orders.value = await response.json();
});
</script>
