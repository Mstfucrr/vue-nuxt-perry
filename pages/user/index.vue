<script lang="ts" setup>
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}


export interface Todo {
  userId:    number;
  id:        number;
  title:     string;
  completed: boolean;
}

// sleep + 10 seconds
const { data: users, status } = await useFetch<User[]>(
  "https://jsonplaceholder.typicode.com/users", {
    key: "users",
  }
);

const tData = await useAsyncData<Todo>("todos", async () => {
  const res = await $fetch("https://jsonplaceholder.typicode.com/todos/1");
  return res as Todo;
});
</script>

<template>
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold underline">
      User page
    </h1>
  </div>

  <pre>{{ tData }}</pre>


  <h2 class="text-xl font-semibold">Status: {{ status }}</h2>
  <br />
  <div v-if="status === 'pending'" class="text-center text-gray-500">Loading...</div>
  <div v-else-if="status === 'error'" class="text-center text-red-500">Error</div>
  <div v-else-if="status === 'success'" class="container mx-auto px-4">
    <ul class="list-disc pl-5 space-y-2">
      <li v-for="user in users" :key="user.id" class="border p-4 rounded-lg shadow">
        <h3 class="text-2xl font-semibold">{{ user.name }}</h3>
        <p class="text-gray-700"><strong>Email:</strong> {{ user.email }}</p>
        <p class="text-gray-700"><strong>Phone:</strong> {{ user.phone }}</p>
        <p class="text-gray-700"><strong>Website:</strong> {{ user.website }}</p>
        <p class="text-gray-700"><strong>Company:</strong> {{ user.company.name }}</p>
        <p class="text-gray-700"><strong>Catch Phrase:</strong> {{ user.company.catchPhrase }}</p>
        <p class="text-gray-700"><strong>BS:</strong> {{ user.company.bs }}</p>
        <p class="text-gray-700"><strong>Address:</strong> <pre>{{ user.address }}</pre></p>
      </li>
    </ul>
  </div>
</template>
