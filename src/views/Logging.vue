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
</script>

<template>
  <div>
    <button v-if="!user" @click="login">Login</button>
    <button v-if="user" @click="logout">Logout</button>
  </div>
</template>