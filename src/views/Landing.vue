<template>
  <div class="landing landing-form">
    <h1>Streaks</h1> 
    <Login/>
  </div>
</template>

<script>
  import Login from '../components/Login.vue'
  export default {
    components: {
      Login
    }  
  }
</script>

<style lang="scss">
$bg: #fff;
h1 { 
  margin: 0; 
  text-align: center; 
  padding: 1.5rem; 
  background: $bg; 
  width: max-content; 
  margin: 0 auto; 
  transform: translateY(-50%);
  border-radius: 20px; 
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

</style>