<template>
  <Nav/>
  <div class="landing-bg">
    <div class="grid">
      <Streak/>
      <Streak/>
      <Streak/>
      <AddStreak/>
    </div>
  </div>
</template>

<script>
  import Nav from '../components/Nav.vue' 
  import Streak from '../components/StreakComponent.vue' 
  import AddStreak from '../components/AddStreak.vue'
  export default {
    components: {
      Nav, 
      Streak, 
      AddStreak
    }
  }
</script>

<style lang="scss">
.landing-bg { 
  background: #f0f2f5; 
  min-height: 80vh; 
} 

.grid { 
  width: 85%; 
  margin: 0 auto; 
  display: grid;  
  padding-top: 5rem;
  grid-template-columns: repeat(3, 1fr); 
  justify-items: center;
}
</style>