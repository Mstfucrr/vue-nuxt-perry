<template>
  <div>
    <h1>About Slug</h1>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const slug = route.params.slug;

console.log("slug", slug);
</script>
