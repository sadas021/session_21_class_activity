<script setup>

function clickbtnfn() {
  alert('Button clicked!');
}

</script>
<template>
  <main>
    <button id="testbtn" @click="clickbtnfn()">Testing button</button>
  </main>
</template>

<style>
#testbtn {
  font-size: 16px;
  padding: 10px 20px;
    background-color: #42b983;
}
</style>
