<template>
  <div class="container">
    <nav class="py-8 flex gap-4 items-center">
      <NuxtLink :to="{ name: 'index' }" aria-label="Home">
        <Logo class="text-5xl" />
      </NuxtLink>

      <ColorMode class="ml-auto flex items-center" />
    </nav>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
