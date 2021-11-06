<template>
  <div class="outer">
    <div class="number">8</div> 
    <div class="title">Running</div> 
    <div class="buttons">
      <div class="changeButton">
        <button class="green">Yes</button>
      </div>
      <div class="changeButton">
        <button class="red">No</button>
      </div> 
      <div class="delteButton" v-if="deleteStreak">
        <button class="red">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
  export default {
    setup() { 
      const deleteStreak = ref(false) 
      return {deleteStreak}
    }
  }
</script>

<style lang="scss" scoped> 
.outer { 
  border: 3px solid #2d4157; 
  width: 80%; 
  border-radius: 15px; 
  padding: .5rem; 
  margin: 1rem;
} 

.number { 
  text-align: center; 
  padding: 1rem;   
  font-size: 2rem;
  width: 2.5rem;
  height: 2.5rem; 
  border-radius: 50%;
  border: 2px solid #000; 
  margin: 0 auto;
}

.title { 
  font-size: 1.5rem; 
  font-weight: bolder; 
  text-align: center; 
  margin: .3rem;
} 

.changeButton { 
  display: inline-block; 
  width: calc(100% / 2); 
  padding-top: 1rem;   
} 

button { 
  width: 95%; 
  margin: 0 auto; 
  display: block; 
  padding: .5rem; 
  border-radius: 10px; 
  font-size: 1.1rem;
} 

.delteButton {  
  margin-top: .5rem;
  button { 
    width: 97%;
  }
} 

.red { 
  border: 2px solid #d9534f; 
  background: rgba( #d9534f, .15)
} 

.green {  
  border: 2px solid #5cb85c; 
  background: rgba( #5cb85c, .15)
}

</style>