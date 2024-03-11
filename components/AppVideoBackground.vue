<template>
    <div class="video-background">
      <video autoplay muted loop playsinline class="video">
        <source src="https://i.imgur.com/KmJDvys.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  </template>
  
  <style scoped>
  .video-background {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    overflow: hidden;
    z-index: -1; /* Ensure video stays in the background */
  }
  
  .video {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure video covers the entire screen */
  }
  </style>