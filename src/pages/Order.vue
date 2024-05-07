<template>
  <div v-if="order">
    <h1 class="text-center">Order on {{ getDatetimeString(order.createdAt) }}</h1>
    <div class="m-4 text-center xs:text-start">
      <p>Recipient name: {{ order.recipientInfo.firstName }} {{ order.recipientInfo.lastName }}</p>
      <p>Delivery address: {{ order.recipientInfo.address }}</p>
      <p>Total price: {{ order.totalPrice }}€</p>
    </div>
    <h2 class="m-4 text-center xs:text-start">Products</h2>
    <div class="xs:grid sm:block xs:grid-cols-2">
      <div v-for="productObject in order.products" :key="productObject.product.id" class="mx-2">
        <OrderProductCard :product="productObject.product" :quantity="productObject.quantity" />
      </div>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import {useRoute, useRouter} from 'vue-router';
import OrderProductCard from "../components/OrderProductCard.vue";
const route = useRoute();
//console.log("id", route.params.id)
const order = ref(null);

const fetchOrder = async () => {
  const response = await fetch(`http://localhost:8080/api/orders/${route.params.id}`);
  order.value = await response.json();
};

fetchOrder();


const getDatetimeString = (createdAt) => {
  const datetime = new Date(createdAt);
  const options = { hour: 'numeric', minute: 'numeric' };
  return `${datetime.toLocaleDateString('fi-FI')} ${datetime.toLocaleTimeString('en-GB', options)}`;
};
</script>
