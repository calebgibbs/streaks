<template>
  <Nav/>
  <div class="landing-bg">
    streaks
  </div>
</template>

<script>
  import Nav from '../components/Nav.vue'
  export default {
    components: {
      Nav
    }
  }
</script>

<style lang="scss">
.landing-bg { 
  background: #f0f2f5; 
  height: 80vh;
}
</style>