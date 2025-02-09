<template>
  <div>
    <h1>User {{ id }}</h1>
    <h2>Sort {{ sort }}</h2>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const id = route.params.id;
const sort = route.query.sort;
</script>
