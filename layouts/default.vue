<script setup lang="ts">
import { NuxtLink } from "#components";

const route = useRoute();
</script>

<template>
  <div style="border: 1px solid red">
    <h1>Default layout</h1>
    <nav class="flex flex-row gap-4 p-2">
      <NuxtLink to="/">
        <MyButton :class="route.path === '/' && 'bg-purple-500'">
          Home
        </MyButton>
      </NuxtLink>
      <NuxtLink to="/about">
        <MyButton :class="route.path === '/about' && 'bg-purple-500'">
          About
        </MyButton>
      </NuxtLink>
    </nav>
    <p>Some default layout content shared across all pages</p>
    <div style="border: 2px solid blue; margin: 10px; padding: 10px">
      <slot />
    </div>
  </div>
</template>
