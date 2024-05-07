<script setup>
import { provide, ref, onMounted, watch } from "vue";
import Products from "./pages/Products.vue";
import Home from "./pages/Home.vue";
import NavBar from "./components/NavBar.vue";



const cartProducts = ref([]);
const firstUpdate = ref(true);

onMounted(() => {
  if (localStorage.getItem('cart')) {
    cartProducts.value = JSON.parse(localStorage.getItem('cart'));
    //console.log(localStorage.getItem('cart'));
  } else {
    localStorage.setItem('cart', JSON.stringify(cartProducts.value));
  }
});

watch(cartProducts, (newVal, oldVal) => {
  if (!firstUpdate.value) {
    localStorage.setItem('cart', JSON.stringify(newVal));
  } else {
    firstUpdate.value = false;
  }
}, {deep: true});

function setCartProducts(newValue) {
  cartProducts.value = newValue;
}

function getTotalQuantity() {
  let totalQuantity = 0;
  cartProducts.value.forEach(product => totalQuantity += product.quantity);
  return totalQuantity;
}

function getTotalPrice() {
  let totalPrice = 0;
  cartProducts.value.forEach(cartProduct => {
    totalPrice += (cartProduct.price * cartProduct.quantity);
  });
  return totalPrice;
}

function getProductQuantity(productId) {
  const quantity = cartProducts.value.find(product => product.id === productId)?.quantity;

  if (quantity === undefined) {
    return 0;
  }

  return quantity;
}

function addToCart(newProduct) {
  const quantity = getProductQuantity(newProduct.id);

  if (quantity === 0) {
    setCartProducts([
      ...cartProducts.value,
      {...newProduct, quantity: 1}
    ]);
  } else {
    setCartProducts(cartProducts.value.map(
        product => product.id === newProduct.id
            ? {...product, quantity: product.quantity + 1}
            : product
    ));
  }
}

function deleteFromCart(id) {
  const newValue = cartProducts.value.filter(product => product.id !== id);
  setCartProducts(newValue);
}

function removeFromCart(productId) {
  const quantity = getProductQuantity(productId);

  if (quantity === 0) {
    return;
  } else if (quantity === 1) {
    deleteFromCart(productId);
  } else {
    const newProducts = cartProducts.value.map(
        product => product.id === productId
            ? {...product, quantity: product.quantity - 1}
            : product
    );
    setCartProducts(newProducts);
  }
}

function checkout() {
  setCartProducts([]);
}

provide("context", {
  cartProducts,
  getTotalQuantity,
  getTotalPrice,
  getProductQuantity,
  addToCart,
  removeFromCart,
  checkout
});
</script>

<template>
  <div>
    <NavBar/>
    <div class='mx-auto max-w-xl w-full my-2'>
      <div class='mx-2'>
        <router-view/>
      </div>
    </div>
  </div>
</template>
