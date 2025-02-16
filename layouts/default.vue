<template>
  <div class="layout">
    <slot />
  </div>
</template>

<style scoped>
.layout {
  background: no-repeat url(~/assets/images/background.jpg);
  background-size: cover;
  color: #3d2d94;
  position: relative;
  width: 100%;
  height: 100svh;
  overflow: hidden;
}
</style>
