<template>
  <div>
    <UButton
      v-if="$colorMode.preference !== 'dark'"
      :padded="false"
      color="gray"
      variant="link"
      icon="i-heroicons-sun-20-solid"
      @click="changeColorMode('dark')"
    />
    <UButton
      v-else
      :padded="false"
      color="gray"
      variant="link"
      icon="i-heroicons-moon-20-solid"
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
