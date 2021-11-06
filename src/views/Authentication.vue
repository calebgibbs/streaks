<template>
  <div class="landing landing-form">
    <h1 class="landing-h1">Streaks</h1> 
    <div v-if="showLogin"> 
      <h2>Login</h2>
      <Login/> 
      <p>Don't have an account? <span @click="showLogin = !showLogin">Sign up.</span></p>
    </div> 
    <div v-else> 
      <h2>Sign up</h2>
      <Signup/> 
      <p>Already have an account? <span @click="showLogin = !showLogin">Login.</span></p>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
  import Login from '../components/Login.vue' 
  import Signup from '../components/Signup.vue'
  export default {
    components: {
      Login, 
      Signup
    }, 
    setup() { 
      const showLogin = ref(true)

      return {showLogin}
    }
  }
</script>

<style lang="scss">
$bg: #fff;
.landing-h1 { 
  margin: 0; 
  text-align: center; 
  padding: 1.5rem; 
  background: $bg; 
  width: max-content; 
  margin: 0 auto; 
  transform: translateY(-50%);
  border-radius: 20px; 
} 

h2 { 
  text-align: center; 
  margin: -1rem, 0, 1rem; 
  color: rgba(#2c3e50, 0.8)
}

.landing { 
  background: $bg; 
  width: 45%; 
  margin: 0 auto; 
  margin-top: 10%; 
  border-radius: 20px; 

  form { 
    width: 50%; 
    margin: 0 auto;
  }

  input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #444;
    outline: none;
    color: #999;
    margin: 10px auto;
  } 

  button { 
    background: #2c3e50; 
    color: #fff;  
    padding: .5rem 2.3rem; 
    border-radius: 20px;  
    border: none; 
    opacity: .8;  
    transition: opacity ease-in-out .2s;  
    margin: 0 auto; 
    display: block; 

    &:hover {
      opacity: 1;
    }
  } 
}  

p { 
  text-align: center; 
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

span { 
  color: #000; 
  border-bottom: 1px solid #000; 
  cursor: pointer;
} 

</style>