<template>
  <VideoBackground />
  <NuxtLayout>
    <AppHeader />
    <div> {{ route }} </div>
    <div>
      <NuxtPage />
    </div>
    <AppFooter />
  </NuxtLayout>
</template>

<script setup lang="ts">
import VideoBackground from '~/components/AppVideoBackground.vue';
const route = useRoute();
useHead({
  title: 'RL Majors',
  meta: [
    { name: 'description', content: 'Official RL Majors Community Website' },
    { name: 'og:description', content: 'Official RL Majors Community Website' },
    { name: 'og:image', content: 'https://i.imgur.com/yMG9eTu.png'},
    { name: 'og:title', content: 'RL Majors'},
    { name: 'og:url', content: 'https://www.rl-majors.com'},
    { name: 'lang', content: 'English'},
    { name: 'icon', content: 'https://i.imgur.com/yMG9eTu.png'},
    { name: 'twitter:title', content: 'RL Majors'},
    { name: 'twitter:description', content: 'Official RL Majors Community Website'},
    { name: 'twitter:image', content: 'https://i.imgur.com/yMG9eTu.png'},
    { name: 'twitter:card', content: 'summary'},
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
