<template>
  <!-- component -->
  <div class="bg-gray-100 flex justify-center items-center h-screen">
    <!-- Left: Image -->
    <div class="w-1/2 h-screen hidden lg:block">
      <img
        src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat"
        alt="Placeholder Image"
        class="object-cover w-full h-full"
      />
    </div>
    <!-- Aqui va a ir el routerView que es el que va a cambiar de acuerdo a la ruta  -->
    <router-view />
    <!-- <LoginPageVue /> -->
  </div>
</template>

<script setup lang="ts">
// import LoginPageVue from '../pages/LoginPage.vue';
</script>

<style></style>
