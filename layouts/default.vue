<template>
  <div
    class="layout"
    :class="{'layout_invisible': !isMounted}"
  >
    <slot />
  </div>
</template>
<script setup>

const isMounted = ref(false);

onMounted(() => {
  isMounted.value = true;
  const img = new Image();

  [
    '/example-nuxt-app/card.jpg',
    '/example-nuxt-app/wand1.png',
    '/example-nuxt-app/wand2.png',
    '/example-nuxt-app/wand3.png',
    '/example-nuxt-app/wand4.png',
    '/example-nuxt-app/wand5.png',
  ].map(async (src) => {


    new Promise((resolve,reject)=>{

      img.src = src;
      img.onload = () => {
        resolve(img);
      };
      img.onerror = (err) => {
        reject(err);
      };
    });
  });
});
</script>

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

.layout_invisible {
  opacity: 0;
}
</style>
