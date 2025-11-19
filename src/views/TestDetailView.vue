<script>  
  const provider = new GoogleAuthProvider()
</script>

<script setup>
import { useRoute } from 'vue-router'
import { useCollection, useCurrentUser, useFirebaseAuth } from 'vuefire'
import { collection } from 'firebase/firestore'
import {db} from '../firebase_conf'
import { query, where, documentId } from 'firebase/firestore'
import { computed } from 'vue'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

const route = useRoute()
const id_param = computed(() => route.params.id)
const user = useCurrentUser()
const auth = useFirebaseAuth()

async function login() {
  try{
    const result =  signInWithPopup(auth, provider)
  } // need to be there
  catch (e) {
    console.error('Login error:', e)
  }
  
}

async function logout() {
  try{
    const result =  signOut(auth)
  } // need to be there
  catch (e) {
    console.error('Login error:', e)
  }
  
}

const tests = useCollection(
  computed(() =>
    query(
      collection(db, 'flash cards'),
      where(documentId(), '==', id_param.value)
    )
  )
)
const all_tests = useCollection(collection(db, 'flash cards'))


console.log('Route param id:', all_tests)
</script>

<template>
  <main>

    <div>user: {{ user }}</div>
    <button v-if="!user" @click="login">Login with Google</button>
    <button v-if="user" @click="logout">Logout</button>
    <div v-if="tests.length === 0">
      <h1>No flash card found with ID: {{ id_param }}</h1>
    </div>
    <div v-else-if="tests.length > 0">
    <h1>Requested Flash Card:</h1>
    <ul>
      <li v-for="test in tests" :key="test.id">
        <strong>{{ test.front_text }}</strong>: {{ test.back_text }}
      </li>
    </ul>
    </div>

    <div v-else>
      <h1>Requested Flash Card:</h1>
    </div>

    <h1>Other Flash Cards:</h1>
    <ul>
      <li v-for="test in all_tests" :key="test.id">
        <router-link :to="`/test/${test.id}`">{{ test.front_text }} {{ test.back_text}}</router-link>
      </li>
    </ul>
  </main>
</template>