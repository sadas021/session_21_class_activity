<script setup>
import { ref } from 'vue'
import { useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'
import {db} from '../firebase_conf'

const tests = useCollection(collection(db, 'flash cards'))
</script>

<template>
  <main>
    <h1>Flash Cards</h1>
    <ul>
      <li v-for="test in tests" :key="test.id">
        <strong>{{ test.front_text }}</strong>: {{ test.back_text }}
      </li>
    </ul>
  </main>
</template>