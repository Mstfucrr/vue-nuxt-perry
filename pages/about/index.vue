<script setup lang="ts">
import ButtonGroup from "@/components/ButtonGroup.vue";
import MyButton from "@/components/MyButton.vue";

const numb = ref(0);
const handleClick = (addNum?: number) => {
  numb.value += addNum ?? 1;
};

definePageMeta({
  layout: "about",
});
</script>

<template>
  <div>
    <h1>About pagessss</h1>
    <hr />
    <img src="~/assets/imgs/image.png" alt="from assets" width="100" />
    <hr />
    <ButtonGroup>
      <MyButton @click="() => handleClick()">sasd</MyButton>
      <MyButton @click="() => handleClick(2)">sasd</MyButton>
      <MyButton @click="() => handleClick(3)">sasd</MyButton>
    </ButtonGroup>
    <span>{{ numb }}</span>
  </div>
</template>
