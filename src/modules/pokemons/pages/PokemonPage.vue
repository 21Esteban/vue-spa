<template>
  <section class="flex flex-col">
    <h1 class="text-3xl font-bold">
      Pokemon <small class="text-blue-500">{{ id }}</small>
    </h1>
    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
      alt="Pokemon"
      class="w-[200px] h-[200px] mt-5"
    />

    <router-link
      :to="`/pokemon/${Number(props.id) + 1}`"
      class="bg-blue-500 text-white p-2 rounded mt-5 text-center hover:bg-blue-300"
      >Siguiente pokemon</router-link
    >
    {{ id }}
  </section>
</template>

<script setup lang="ts">
// COMO RECIBIR UNA PROP QUE LLEGA DE LA URL?

interface Props {
  id: string;
}

const props = defineProps<Props>();
</script>

<style></style>
