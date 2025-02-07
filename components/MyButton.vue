<template>
  <button class="my-button">
    <slot></slot>
  </button>
</template>

<style>
.my-button {
  background-color: red;
  padding: 10px;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.my-button:hover {
  background-color: blue;
}
</style>
