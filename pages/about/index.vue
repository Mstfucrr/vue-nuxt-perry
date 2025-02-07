<script setup lang="ts">
import ButtonGroup from "@/components/ButtonGroup.vue";
import MyButton from "@/components/MyButton.vue";

const handleClick = () => {
  console.log("clicked");
};


</script>

<template>
  <div>
    <h1>About pagessss</h1>
    <ButtonGroup>
      <MyButton @click="handleClick">sasd</MyButton>
      <MyButton @click="handleClick">sasd</MyButton>
      <MyButton @click="handleClick">sasd</MyButton>
    </ButtonGroup>
  </div>
</template>
