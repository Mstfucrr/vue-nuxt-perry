<template>
  <div style="border: 1px solid red">
    <h1>Default layout</h1>
    <p>Some default layout content shared across all pages</p>
    <div style="border: 2px solid blue; margin: 10px; padding: 10px;">
      <slot />
    </div>
  </div>
</template>
