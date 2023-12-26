<template>
  <div class="container">
    <nav class="py-8 flex gap-4 items-center">
      <NuxtLink :to="{ name: 'index' }">
        <img
          src="~/assets/images/cat.png"
          alt="Home"
          class="max-w-9 dark:invert"
        />
      </NuxtLink>

      <ColorMode class="ml-auto flex items-center" />
    </nav>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
