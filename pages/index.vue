<script setup lang="ts">
import "~/assets/css/main.css";

const route = useRoute()
</script>

<template>
  <div>
    <h3>Nuxt Routing set up successfully!</h3>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
  </div>
</template>
