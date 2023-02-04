<template>
  <div>
    <router-view />
    <Toolbar>
      <template #end>
        <LangToggle />
        <ThemeToggle />
      </template>
    </Toolbar>
    <DemoCmp />
  </div>
</template>

<script setup lang="ts">
</script>
