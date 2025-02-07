<template>
  <div class="button-group">
    <slot></slot>
  </div>

</template>

<style lang="css">
.button-group {
  display: flex;
  gap: 0px;
}

.button-group > *:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.button-group > *:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.button-group > *:not(:first-child):not(:last-child) {
  border-radius: 0px;
}

</style>
