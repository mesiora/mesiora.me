<template>
  <div>
    <UButton
      v-if="$colorMode.value !== 'dark'"
      :padded="false"
      color="gray"
      variant="link"
      icon="i-heroicons-sun-20-solid"
      aria-label="Switch to dark mode"
      @click="changeColorMode('dark')"
    />
    <UButton
      v-else
      :padded="false"
      color="gray"
      variant="link"
      icon="i-heroicons-moon-20-solid"
      aria-label="Switch to light mode"
      @click="changeColorMode('light')"
    />
  </div>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();

function changeColorMode(mode: string) {
  colorMode.preference = mode;
}
</script>
