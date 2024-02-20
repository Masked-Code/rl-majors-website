<template>
  <NuxtLayout>
    <AppHeader />
    <div>
      <NuxtPage />
    </div>
    <AppFooter />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'RL Majors',
  meta: [
    { name: 'description', content: 'Official RL Majors Community Website' }
  ],
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0.1;
  filter: blur(1rem);
}
</style>