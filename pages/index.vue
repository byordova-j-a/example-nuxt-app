<template>
  <div class="container">
    <Book
      :initial-page="initialBookPage"
    />
  </div>
</template>

<script setup lang="ts">
import Book from '~/components/entities/Book/Book.vue';

definePageMeta({
  middleware: [
    'route-middleware',
  ],
});

const { query } = useRoute();

const initialBookPage = Number(query['book-page'] || 1);

</script>
<style scoped lang="scss">
.container {
  position: relative;
  top: 50%;
  left: 50%;
  height: 0;
  width: 0;
}
</style>
