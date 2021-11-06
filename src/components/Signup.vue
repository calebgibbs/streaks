<template>
<form>
  <input type="name" required placeholder="Your name" v-model="name"> 
  <input type="email" required placeholder="Email" v-model="email"> 
  <input type="password" required placeholder="Password" v-model="password">  
  <button>Sign up</button>
</form>
</template>

<script>
  export default {
    
  }
</script>