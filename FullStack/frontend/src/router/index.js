import Vue from "vue";
import Router from "vue-router";
import Layout from "@/components/pages/Layout";
import Home from "@/components/pages/Home";
import Women from "@/components/pages/Women";
import Men from "@/components/pages/Men";
import Product from "@/components/pages/Product";
import Promotions from "@/components/pages/Promotions";
import Blog from "@/components/pages/Blog";
import Post from "@/components/pages/Post";
import Cart from "@/components/pages/Cart";
import About from "@/components/pages/Quienes-Somos";
import Contact from "@/components/pages/Contact";
import Login from "@/components/sign-up/Login";
import Register from "@/components/sign-in/Register";
import OurPolicy from "@/components/pages/Politica-tratamiento-datos";
import Terms from "@/components/pages/Terminos-y-Condiciones";
import Shipping from "@/components/pages/Shipping&Return";
import Faq from "@/components/pages/FAQs";
import NotFound from "@/components/not-found/NotFound";
import Dashboard from "@/components/dashboard/Dashboard";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "/",
          name: "Home",
          component: Home
        },
        {
          path: "/Quienes-Somos",
          name: "Quienes-Somos",
          component: About
        },
        {
          path: "/women",
          name: "Women",
          component: Women
        },
        {
          path: "/men",
          name: "Men",
          component: Men
        },
        {
          path: "/product",
          name: "Product",
          component: Product
        },
        {
          path: "/promotions",
          name: "Promotions",
          component: Promotions
        },
        {
          path: "/blog",
          name: "Blog",
          component: Blog
        },
        {
          path: "/post",
          component: Post,
          name: "Post"
        },
        {
          path: "/cart",
          component: Cart,
          name: "Cart"
        },
        {
          path: "/contact-us",
          name: "Contact",
          component: Contact
        },
        {
          path: "/login",
          name: "Login",
          component: Login
        },

        {
          path: "/dashboard",
          name: "Dashboard",
          component: Dashboard
        },
        {
          path: "/register",
          name: "Register",
          component: Register
        },
        {
          path: "/Politica-tratamiento-datos",
          name: "OurPolicy",
          component: OurPolicy
        },
        {
          path: "/Terminos-y-Condiciones",
          name: "Terminos-y-Condiciones",
          component: Terms
        },
        {
          path: "/shipping-return",
          name: "Shipping&Return",
          component: Shipping
        },
        {
          path: "/faqs",
          name: "FAQs",
          component: Faq
        },
        {
          path: "/*",
          name: "NotFound",
          component: NotFound
        }
      ]
    }
  ],
  mode: "history"
});
