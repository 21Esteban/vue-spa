import HomePage from '@/modules/landing/pages/HomePage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //landing
    {
      path: '/',
      name: 'landing',
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage,
        },
        {
          path: '/feature',
          name: 'features',
          component: () => import('@/modules/landing/pages/FeaturesPage.vue'),
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: () => import('@/modules/landing/pages/PrincingPage.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@/modules/landing/pages/ContactPage.vue'),
        },
        {
          path: '/pokemon/:id',
          name: 'pokemon',
          props: true,
          component: () => import('@/modules/pokemons/pages/PokemonPage.vue'),
        },
        //         Para habilitar el paso de props por parámetros, puedes configurar tu ruta en el archivo de configuración de Vue Router (router/index.js o similar) usando la opción props. Hay tres formas principales de usar props en Vue Router:

        // Booleano (true): Si se establece en true, todos los parámetros de la ruta se pasarán como props al componente.

        // Objeto: Puedes definir un objeto de props estático que siempre se pasará al componente.

        // Función: Puedes usar una función que devuelve un objeto de props basado en los parámetros de la ruta.
      ],
    },

    //auth
    {
      path: '/auth',
      redirect: '/login',
      name: 'auth',
      component: () => import('@/modules/auth/layout/AuthLayout.vue'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('@/modules/auth/pages/LoginPage.vue'),
        },
        {
          path: '/Register',
          name: 'Register',
          component: () => import('@/modules/auth/pages/RegisterPage.vue'),
        },
      ],
    },

    //not found

    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/modules/common/pages/NotFound404.vue'),
    },
  ],
});

export default router;
