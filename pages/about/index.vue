<script setup lang="ts">
import ButtonGroup from "@/components/ButtonGroup.vue";
import MyButton from "@/components/MyButton.vue";

const numb = ref(0);
const handleClick = (addNum?: number) => {
  numb.value += addNum ?? 1;
};

definePageMeta({
  middleware: [
    function (to, from) {
      console.log("about middlewaressssssssssssss", to, from);
    },
  ],
});

useHead({
  title: "About page",
  meta: [
    {
      name: "description",
      content: "About page description",
    },
  ],
  bodyAttrs: {
    class: "my-body",
  },
});
</script>

<template>
  <div>
    <h1>About pagessss</h1>
    <hr />
    <img
      decoding="async"
      loading="lazy"
      src="~/assets/imgs/image.png"
      alt="from assets"
      width="100"
      class="size-56 bg-red-50 rounded-3xl m-4"
    />
    <hr />
    <ButtonGroup>
      <ul class="flex gap-4 flex-col p-4">
        <li>
          <NuxtLink to="/about/test" class="text-red-500">test</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about/test2" class="text-red-500">test2</NuxtLink>
        </li>
      </ul>
      <MyButton @click="() => handleClick()">sasd</MyButton>
      <MyButton @click="() => handleClick(2)">sasd</MyButton>
      <MyButton @click="() => handleClick(3)">sasd</MyButton>
    </ButtonGroup>
    <span>{{ numb }}</span>
  </div>
</template>
