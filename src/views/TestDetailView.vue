<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
</script>

<template>
  <main>
    <h1>Test Detail</h1>
    <p>ID: {{ id }}</p>
  </main>
</template>