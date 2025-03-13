import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Form from '@/views/Form.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/form',
    name: 'Form',
    component: Form,
  },
];

const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode
  routes,
});

export default router;