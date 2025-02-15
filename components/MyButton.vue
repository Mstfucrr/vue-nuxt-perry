<template>
  <button class="my-button bg-red-300 hover:bg-blue-300 rounded-xl" :class="class">
    <slot></slot>
  </button>
</template>

<style>
.my-button {
  padding: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

</style>
