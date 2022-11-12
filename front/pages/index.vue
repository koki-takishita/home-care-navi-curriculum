<script lang="ts" setup>
/* 2通りのやり方あるよとこたえでいう
definePageMeta({
  layout: "customer",
});
*/
definePageMeta({
  layout: false,
});
</script>

<template>
  <div>
    <NuxtLayout name="customer">
      Page: Home Page
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
