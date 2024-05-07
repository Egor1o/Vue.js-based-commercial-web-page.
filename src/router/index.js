import Home from "../pages/Home.vue"
import Products from "../pages/Products.vue"
import Cart from "../pages/Cart.vue"
import Product from "../pages/Product.vue"
import Orders from "../pages/Orders.vue"
import Order from "../pages/Order.vue"
import {createRouter, createWebHistory} from "vue-router";

const routes = [{
  path: "/",
  name: "Home",
  component: Home
},
  {path: "/products",
    name: "Products", component: Products
  },{path: "/cart", name: "Cart", component: Cart}
    ,{path: "/products/:id", name: "Product", component: Product},
    {path: "/orders", name: "Orders", component: Orders},
    {path: "/orders/:id", name: "Order", component: Order}]

const router = createRouter(
    {
      history: createWebHistory("/"),
      routes
    }
)

export default router